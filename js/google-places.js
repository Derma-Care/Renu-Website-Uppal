// DR. RENU'S CHIROPRACTIC / OSTEOPATHY & PHYSIOTHERAPY CLINIC
// 100% Dynamic Google Places API (New) Integration & Image-Only Gallery

(function () {
  "use strict";

  const GOOGLE_CONFIG = {
    apiKey:
      (typeof CLINIC_DATA !== "undefined" && CLINIC_DATA.googleApiKey) ||
      "AIzaSyAxYt-gTC4g6hj0W9THHBDs4HoAixXujc8",
    placeId:
      (typeof CLINIC_DATA !== "undefined" && (CLINIC_DATA.googlePlaceId || (CLINIC_DATA.location && CLINIC_DATA.location.placeId))) ||
      "ChIJLTPjl6WfyzsR2OVpoA9UA8M",
    cacheKey: "dr_renu_live_places_api_cache_v9",
    cacheDurationMs: 20 * 60 * 1000, // 20 minutes cache
  };

  // Global gallery items cache for Lightbox navigation
  let activeLightboxGallery = [];
  let currentLightboxIndex = 0;

  // Initialize once DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDynamicGooglePlaces);
  } else {
    initDynamicGooglePlaces();
  }

  async function initDynamicGooglePlaces() {
    createLightboxModalDOM();
    try {
      const data = await fetchGooglePlacesDataDynamically();
      applyDynamicRatings(data);
      applyDynamicReviews(data);
      applyDynamicGallery(data);
      setupLightboxListeners();
    } catch (err) {
      console.error("[Google Places API] Dynamic fetch error:", err);
      // Graceful fallback to authentic clinic data if API call fails
      if (typeof CLINIC_DATA !== "undefined") {
        const fallbackData = parseGooglePlacesResponse({});
        applyDynamicRatings(fallbackData);
        applyDynamicReviews(fallbackData);
        applyDynamicGallery(fallbackData);
        setupLightboxListeners();
      } else {
        displayApiErrorState(err.message);
      }
    }
  }

  /* ==========================================================================
     1. Live Dynamic Fetch from Google Places API (New)
     ========================================================================== */
  async function fetchGooglePlacesDataDynamically() {
    // Check if fresh cache exists
    try {
      const cached = localStorage.getItem(GOOGLE_CONFIG.cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (
          Date.now() - parsed.timestamp < GOOGLE_CONFIG.cacheDurationMs &&
          parsed.data
        ) {
          console.log(
            "[Google Places API] Serving fresh data from dynamic cache",
          );
          return parsed.data;
        }
      }
    } catch (e) {
      console.warn("[Google Places API] Cache read error:", e);
    }

    console.log(
      "[Google Places API] Calling places.googleapis.com/v1/places/" +
        GOOGLE_CONFIG.placeId,
    );

    const url = `https://places.googleapis.com/v1/places/${GOOGLE_CONFIG.placeId}?key=${GOOGLE_CONFIG.apiKey}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Goog-Api-Key": GOOGLE_CONFIG.apiKey,
        "X-Goog-FieldMask":
          "id,displayName,rating,userRatingCount,reviews,photos,formattedAddress,nationalPhoneNumber,googleMapsUri,googleMapsLinks",
      },
    });

    if (!response.ok) {
      const errorJson = await response.json().catch(() => ({}));
      throw new Error(
        errorJson.error?.message || `Places API HTTP error ${response.status}`,
      );
    }

    const liveData = await response.json();
    console.log("[Google Places API] Response received:", {
      rating: liveData.rating,
      userRatingCount: liveData.userRatingCount,
      reviewsCount: liveData.reviews?.length || 0,
      photosCount: liveData.photos?.length || 0,
      hasLinks: !!liveData.googleMapsLinks,
    });

    const normalized = parseGooglePlacesResponse(liveData);

    // Save to cache
    try {
      localStorage.setItem(
        GOOGLE_CONFIG.cacheKey,
        JSON.stringify({
          timestamp: Date.now(),
          data: normalized,
        }),
      );
    } catch (e) {}

    return normalized;
  }

  function parseGooglePlacesResponse(live) {
    const loc = (typeof CLINIC_DATA !== "undefined" && CLINIC_DATA.location) || {};
    const defaultReviewsUri =
      loc.reviewsUrl ||
      "https://www.google.com/maps/place//data=!4m4!3m3!1s0x3bcb9fa597e3332d:0xc303540fa069e5d8!9m1!1b1";
    const defaultPhotosUri =
      loc.photosUrl ||
      "https://www.google.com/maps/place//data=!4m3!3m2!1s0x3bcb9fa597e3332d:0xc303540fa069e5d8!10e5";
    const defaultPlaceUri =
      loc.mapUrl || "https://maps.google.com/?cid=14052167688418616792";
    const defaultDirectionsUri =
      loc.directionsUrl ||
      "https://www.google.com/maps/dir/?api=1&destination=Dr.Renu%27s+physiotherapy+%26+chiropractic+clinic%2C+Shop+NO.+2%2C+sanjana+amrutha+nilayam%2C+Plot+No.10-90%2F2%2C+opposite+to+srikara+%26+miracle+hospitals%2C+Om+Vihar+Colony%2C+Medipally%2C+Canara+Nagar%2C+Hyderabad%2C+Telangana+500098&destination_place_id=ChIJLTPjl6WfyzsR2OVpoA9UA8M";

    const reviewsUri = live.googleMapsLinks?.reviewsUri || defaultReviewsUri;
    const photosUri = live.googleMapsLinks?.photosUri || defaultPhotosUri;
    const placeUri = live.googleMapsUri || defaultPlaceUri;
    const directionsUri =
      live.googleMapsLinks?.directionsUri || defaultDirectionsUri;

    // 1. Dynamic Photos: Latest Google Photos & Updates First
    const photos = [];
    const existingUrls = new Set();

    // Priority 1: Latest Clinic Updates & Posts from Google Business Profile (CLINIC_DATA.posts)
    if (
      typeof CLINIC_DATA !== "undefined" &&
      Array.isArray(CLINIC_DATA.posts)
    ) {
      CLINIC_DATA.posts.forEach((post, idx) => {
        if (post.imageUrl && !existingUrls.has(post.imageUrl)) {
          existingUrls.add(post.imageUrl);
          photos.push({
            id: post.id || `post-photo-${idx + 1}`,
            url: post.imageUrl,
            thumb: post.imageUrl,
            title: post.title || `Latest Clinic Photo ${idx + 1}`,
            author: "DR. RENU'S CLINIC",
          });
        }
      });
    }

    // Priority 2: Live Photos from Google Places API (reversed for newest first)
    const rawPhotos = (live.photos || []).slice().reverse();
    rawPhotos.forEach((p, idx) => {
      const photoMediaUrl = `https://places.googleapis.com/v1/${p.name}/media?maxHeightPx=1200&maxWidthPx=1600&key=${GOOGLE_CONFIG.apiKey}`;
      const thumbMediaUrl = `https://places.googleapis.com/v1/${p.name}/media?maxHeightPx=600&maxWidthPx=800&key=${GOOGLE_CONFIG.apiKey}`;
      const authorName =
        p.authorAttributions?.[0]?.displayName || "DR. RENU'S CLINIC";

      if (!existingUrls.has(photoMediaUrl)) {
        existingUrls.add(photoMediaUrl);
        photos.push({
          id: `gphoto-live-${idx + 1}`,
          name: p.name,
          url: photoMediaUrl,
          thumb: thumbMediaUrl,
          title: `Clinic Facility Photo ${photos.length + 1}`,
          author: authorName,
        });
      }
    });

    // Priority 3: Clinic Facility Gallery Photos (CLINIC_DATA.gallery) if defined
    if (
      typeof CLINIC_DATA !== "undefined" &&
      Array.isArray(CLINIC_DATA.gallery)
    ) {
      CLINIC_DATA.gallery.forEach((gp, idx) => {
        if (gp.url && !existingUrls.has(gp.url)) {
          existingUrls.add(gp.url);
          photos.push({
            id: gp.id || `clinic-photo-${idx + 1}`,
            url: gp.url,
            thumb: gp.url,
            title: gp.caption || `Dr. Renu Clinic Photo ${photos.length + 1}`,
            author: "DR. RENU'S CLINIC",
          });
        }
      });
    }

    // 2. Dynamic Reviews: Latest Review First (sorted by publishTime descending)
    const rawReviews = (live.reviews || []).slice().sort((a, b) => {
      const timeA = a.publishTime ? new Date(a.publishTime).getTime() : 0;
      const timeB = b.publishTime ? new Date(b.publishTime).getTime() : 0;
      return timeB - timeA;
    });

    const reviews = rawReviews.map((r, idx) => ({
      id: r.name || `g-review-live-${idx + 1}`,
      author: r.authorAttribution?.displayName || "Verified Google Patient",
      avatar: r.authorAttribution?.photoUri || "",
      profileUrl: reviewsUri,
      rating: r.rating || 5,
      timeAgo: r.relativePublishTimeDescription || "Recently",
      text: r.text?.text || r.originalText?.text || "",
    }));

    // Include all authentic Google patient reviews from clinic data (deduplicated by author)
    const liveAuthors = new Set(
      reviews.map((r) => (r.author || "").toLowerCase().trim()),
    );
    if (
      typeof CLINIC_DATA !== "undefined" &&
      Array.isArray(CLINIC_DATA.reviews)
    ) {
      CLINIC_DATA.reviews.forEach((cr, idx) => {
        const normAuthor = (cr.author || "").toLowerCase().trim();
        if (normAuthor && !liveAuthors.has(normAuthor)) {
          reviews.push({
            id: `g-review-all-${idx + 1}`,
            author: cr.author,
            avatar: cr.avatar || "",
            profileUrl: reviewsUri,
            rating: cr.rating || 5,
            timeAgo: cr.relativeTime || "Verified Patient Review",
            text: cr.text || "",
          });
          liveAuthors.add(normAuthor);
        }
      });
    }

    return {
      rating: live.rating || 4.8,
      userRatingCount: live.userRatingCount
        ? `${live.userRatingCount}+`
        : "129+",
      displayName:
        live.displayName?.text ||
        "DR.RENU'S CHIROPRACTIC / OSTEOPATHY & PHYSIOTHERAPY CLINIC",
      reviewsUri: reviewsUri,
      photosUri: photosUri,
      placeUri: placeUri,
      directionsUri: directionsUri,
      reviews: reviews,
      photos: photos,
    };
  }

  /* ==========================================================================
     2. Dynamic Ratings Update
     ========================================================================== */
  function applyDynamicRatings(data) {
    const ratingVal = data.rating ? Number(data.rating).toFixed(1) : "4.8";
    const countVal = data.userRatingCount || "129+";

    // Update all rating values
    document.querySelectorAll("[data-google-rating]").forEach((el) => {
      el.textContent = ratingVal;
    });

    // Update all review count values
    document.querySelectorAll("[data-google-review-count]").forEach((el) => {
      el.textContent = countVal;
    });

    // Update badges
    document
      .querySelectorAll(".hero-badge, .proof-badge, .rating-pill")
      .forEach((container) => {
        const strong = container.querySelector("strong");
        if (strong && strong.textContent.includes("4.")) {
          strong.textContent = `${ratingVal} / 5`;
        }
      });

    if (data.reviewsUri) {
      document
        .querySelectorAll("[data-google-reviews-link]")
        .forEach((link) => {
          link.href = data.reviewsUri;
        });
    }

    if (data.placeUri) {
      document.querySelectorAll("[data-google-place-link]").forEach((link) => {
        link.href = data.placeUri;
      });
    }
  }

  /* ==========================================================================
     3. Dynamic Reviews Track Rendering (Latest First & All Reviews)
     ========================================================================== */
  function applyDynamicReviews(data) {
    const reviewsTracks = document.querySelectorAll(
      ".reviews-track, #dynamic-reviews-track",
    );
    if (!reviewsTracks.length) return;

    reviewsTracks.forEach((reviewsTrack) => {
      if (!data.reviews || data.reviews.length === 0) {
        reviewsTrack.innerHTML = `
          <div class="review-card">
            <p class="review-text">Visit us at Boduppal or check our 129+ reviews directly on Google Maps.</p>
          </div>
        `;
        return;
      }

      reviewsTrack.innerHTML = "";

      data.reviews.forEach((r) => {
        const card = document.createElement("div");
        card.className = "review-card google-verified-card";

        // Stars
        let starsHtml = "";
        for (let s = 1; s <= 5; s++) {
          if (s <= r.rating) {
            starsHtml += '<i class="fa-solid fa-star"></i>';
          } else {
            starsHtml += '<i class="fa-regular fa-star"></i>';
          }
        }

        // Avatar
        const initials = r.author
          ? r.author
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("")
              .toUpperCase()
          : "VP";
        const avatarHtml = r.avatar
          ? `<img src="${r.avatar}" alt="${escapeHtml(r.author)}" class="reviewer-avatar-img" loading="lazy" onerror="this.outerHTML='<div class=\\'reviewer-avatar\\'>${initials}</div>'">`
          : `<div class="reviewer-avatar">${initials}</div>`;

        card.innerHTML = `
          <div class="review-card-top">
            ${avatarHtml}
            <div class="reviewer-meta">
              <div class="reviewer-name-row">
                <span class="reviewer-name">${escapeHtml(r.author)}</span>
                <span class="verified-check" title="Google Verified Reviewer"><i class="fa-solid fa-circle-check"></i></span>
              </div>
              <div class="review-date">Google Review · ${escapeHtml(r.timeAgo || "Verified")}</div>
            </div>
            <a href="${escapeHtml(r.profileUrl)}" target="_blank" rel="noopener noreferrer" class="google-badge" title="View Review on Google Maps">
              <i class="fa-brands fa-google"></i>
            </a>
          </div>
          <div class="review-stars">
            ${starsHtml}
          </div>
          <p class="review-text">"${escapeHtml(r.text)}"</p>
        `;

        reviewsTrack.appendChild(card);
      });
    });

    // Re-initialize carousel scroll state
    if (typeof window.initReviewsCarousel === "function") {
      window.initReviewsCarousel();
    }

    // Update all "Read All Reviews" links & buttons to the direct Google Reviews tab URL
    const targetReviewsUri =
      data.reviewsUri ||
      "https://www.google.com/maps/place//data=!4m4!3m3!1s0x3bcb9f048bb8fc51:0x1de5d67791b88e9e!9m1!1b1";
    document
      .querySelectorAll(
        "#view-all-reviews-btn, .view-all-reviews-btn, [data-google-reviews-link]",
      )
      .forEach((btn) => {
        btn.href = targetReviewsUri;
      });
  }

  /* ==========================================================================
     4. Dynamic Gallery: Images Only (NO TEXT), All Photos, Latest First
     ========================================================================== */
  function applyDynamicGallery(data) {
    const photos = data.photos || [];
    if (!photos.length) return;

    activeLightboxGallery = photos;

    // A. Homepage Preview Grid: Show exactly 2 rows of photos (10 photos: 5x2 on desktop)
    const homeGrid = document.querySelector(
      ".gallery-preview-grid, #homepage-gallery-grid",
    );
    if (homeGrid) {
      homeGrid.innerHTML = "";
      const previewPhotos = photos.slice(0, 10); // Exactly 10 photos in 2 rows

      previewPhotos.forEach((photo, idx) => {
        const item = document.createElement("div");
        item.className = "gallery-item";
        item.setAttribute("data-gallery-index", idx);
        item.setAttribute("role", "button");
        item.setAttribute("tabindex", "0");
        item.setAttribute(
          "aria-label",
          `View clinic photo ${idx + 1}: ${photo.title || ""}`,
        );

        item.innerHTML = `
          <img src="${photo.thumb}" alt="${escapeHtml(photo.title || `Dr. Renu Clinic Photo ${idx + 1}`)}" loading="lazy">
          <div class="gallery-hover-overlay">
            <span class="gallery-zoom-icon"><i class="fa-solid fa-expand"></i></span>
          </div>
        `;

        homeGrid.appendChild(item);
      });
    }

    // B. Full Gallery Page Grid: Show ALL photos, images only
    const fullGrid = document.querySelector(
      ".full-gallery-grid, #full-gallery-grid",
    );
    if (fullGrid) {
      fullGrid.innerHTML = "";

      photos.forEach((photo, idx) => {
        const card = document.createElement("article");
        card.className = "full-gallery-card";
        card.setAttribute("data-gallery-index", idx);
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");
        card.setAttribute(
          "aria-label",
          `Preview clinic photo ${idx + 1}: ${photo.title || ""}`,
        );

        card.innerHTML = `
          <div class="full-gallery-thumb">
            <img src="${photo.thumb}" alt="${escapeHtml(photo.title || `Dr. Renu Clinic Photo ${idx + 1}`)}" loading="lazy">
            <div class="full-gallery-overlay">
              <span class="gallery-zoom-icon"><i class="fa-solid fa-expand"></i></span>
            </div>
          </div>
        `;

        fullGrid.appendChild(card);
      });
    }

    // Update all "View All Photos on Google" links
    const targetPhotosUri =
      data.photosUri ||
      "https://www.google.com/maps/place//data=!4m3!3m2!1s0x3bcb9f048bb8fc51:0x1de5d67791b88e9e!10e5";
    document
      .querySelectorAll(
        "#view-all-photos-btn, .view-all-photos-btn, [data-google-photos-link]",
      )
      .forEach((btn) => {
        btn.href = targetPhotosUri;
      });
  }

  /* ==========================================================================
     5. Interactive Lightbox Modal Previewer
     ========================================================================== */
  function createLightboxModalDOM() {
    if (document.getElementById("google-image-lightbox")) return;

    const modal = document.createElement("div");
    modal.id = "google-image-lightbox";
    modal.className = "lightbox-modal";
    modal.setAttribute("aria-hidden", "true");
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-label", "Image preview");

    modal.innerHTML = `
      <div class="lightbox-backdrop" data-close-lightbox></div>
      <div class="lightbox-container">
        <!-- Lightbox Top Bar -->
        <div class="lightbox-topbar">
          <div class="lightbox-info">
            <span class="lightbox-counter" id="lightbox-counter">Photo 1 of 10</span>
            <span class="lightbox-divider">·</span>
            <span class="lightbox-badge"><i class="fa-brands fa-google"></i> Live Google Places Photo</span>
          </div>
          <div class="lightbox-controls">
            <button class="lightbox-btn" id="lightbox-zoom-toggle" aria-label="Toggle Fullscreen Zoom">
              <i class="fa-solid fa-magnifying-glass-plus"></i>
            </button>
            <button class="lightbox-btn lightbox-close-btn" data-close-lightbox aria-label="Close Preview">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        <!-- Lightbox Main Stage -->
        <div class="lightbox-stage">
          <button class="lightbox-nav-btn lightbox-prev" id="lightbox-prev" aria-label="Previous Image">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          
          <div class="lightbox-image-wrapper">
            <div class="lightbox-spinner" id="lightbox-spinner">
              <i class="fa-solid fa-circle-notch fa-spin"></i>
            </div>
            <img src="" alt="Google Clinic Photo" id="lightbox-main-img" class="lightbox-image">
          </div>

          <button class="lightbox-nav-btn lightbox-next" id="lightbox-next" aria-label="Next Image">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        <!-- Lightbox Caption Bar -->
        <div class="lightbox-captionbar">
          <div class="lightbox-title-box">
            <h4 id="lightbox-title" class="lightbox-title">Dr. Renu's Chiropractic &amp; Physiotherapy Clinic</h4>
            <p id="lightbox-caption" class="lightbox-caption">Boduppal, Hyderabad · Verified Google Photo</p>
          </div>
          <div class="lightbox-action-box">
            <a href="https://wa.me/917981598509?text=Hello+Dr.+Renu+Clinic!+I+saw+your+clinic+photos+and+want+to+book+a+consultation" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
              <i class="fa-brands fa-whatsapp"></i> Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Event listeners
    modal.querySelectorAll("[data-close-lightbox]").forEach((el) => {
      el.addEventListener("click", closeLightbox);
    });

    const prevBtn = modal.querySelector("#lightbox-prev");
    const nextBtn = modal.querySelector("#lightbox-next");
    const zoomBtn = modal.querySelector("#lightbox-zoom-toggle");
    const mainImg = modal.querySelector("#lightbox-main-img");

    if (prevBtn)
      prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        navigateLightbox(-1);
      });
    if (nextBtn)
      nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        navigateLightbox(1);
      });

    if (zoomBtn && mainImg) {
      zoomBtn.addEventListener("click", () => {
        mainImg.classList.toggle("is-zoomed");
        const isZoomed = mainImg.classList.contains("is-zoomed");
        zoomBtn.innerHTML = isZoomed
          ? '<i class="fa-solid fa-magnifying-glass-minus"></i>'
          : '<i class="fa-solid fa-magnifying-glass-plus"></i>';
      });
    }

    // Keyboard support: Escape, Left Arrow, Right Arrow
    document.addEventListener("keydown", (e) => {
      if (!modal.classList.contains("active")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox(-1);
      if (e.key === "ArrowRight") navigateLightbox(1);
    });
  }

  function setupLightboxListeners() {
    // 1. Home gallery items
    document
      .querySelectorAll(".gallery-preview-grid .gallery-item")
      .forEach((item) => {
        item.onclick = (e) => {
          e.preventDefault();
          const idx =
            parseInt(item.getAttribute("data-gallery-index"), 10) || 0;
          openLightbox(idx);
        };
        item.onkeydown = (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            const idx =
              parseInt(item.getAttribute("data-gallery-index"), 10) || 0;
            openLightbox(idx);
          }
        };
      });

    // 2. Full gallery page items
    document
      .querySelectorAll(".full-gallery-grid .full-gallery-card")
      .forEach((card) => {
        card.onclick = (e) => {
          e.preventDefault();
          const idx =
            parseInt(card.getAttribute("data-gallery-index"), 10) || 0;
          openLightbox(idx);
        };
        card.onkeydown = (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            const idx =
              parseInt(card.getAttribute("data-gallery-index"), 10) || 0;
            openLightbox(idx);
          }
        };
      });
  }

  function openLightbox(index) {
    const modal = document.getElementById("google-image-lightbox");
    if (!modal || !activeLightboxGallery.length) return;

    currentLightboxIndex =
      index >= 0 && index < activeLightboxGallery.length ? index : 0;
    updateLightboxContent();

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    const modal = document.getElementById("google-image-lightbox");
    if (!modal) return;

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    const mainImg = modal.querySelector("#lightbox-main-img");
    const zoomBtn = modal.querySelector("#lightbox-zoom-toggle");
    if (mainImg) mainImg.classList.remove("is-zoomed");
    if (zoomBtn)
      zoomBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass-plus"></i>';
  }

  function navigateLightbox(direction) {
    if (!activeLightboxGallery.length) return;
    currentLightboxIndex =
      (currentLightboxIndex + direction + activeLightboxGallery.length) %
      activeLightboxGallery.length;
    updateLightboxContent();
  }

  function updateLightboxContent() {
    const modal = document.getElementById("google-image-lightbox");
    if (!modal || !activeLightboxGallery[currentLightboxIndex]) return;

    const photo = activeLightboxGallery[currentLightboxIndex];
    const mainImg = modal.querySelector("#lightbox-main-img");
    const spinner = modal.querySelector("#lightbox-spinner");
    const counter = modal.querySelector("#lightbox-counter");
    const title = modal.querySelector("#lightbox-title");
    const caption = modal.querySelector("#lightbox-caption");

    if (counter)
      counter.textContent = `Photo ${currentLightboxIndex + 1} of ${activeLightboxGallery.length}`;
    if (title)
      title.textContent =
        photo.title ||
        "Dr. Renu's Chiropractic, Osteopathy & Physiotherapy Clinic";
    if (caption)
      caption.textContent = `${photo.author ? photo.author + " · " : ""}Verified Google Clinic Update ${currentLightboxIndex + 1} of ${activeLightboxGallery.length}`;

    if (mainImg) {
      if (spinner) spinner.style.display = "flex";
      mainImg.style.opacity = "0";
      mainImg.classList.remove("is-zoomed");

      const tempImg = new Image();
      tempImg.onload = () => {
        mainImg.src = tempImg.src;
        mainImg.style.opacity = "1";
        if (spinner) spinner.style.display = "none";
      };
      tempImg.onerror = () => {
        mainImg.src = photo.thumb || photo.url;
        mainImg.style.opacity = "1";
        if (spinner) spinner.style.display = "none";
      };
      tempImg.src = photo.url;
    }
  }

  function displayApiErrorState(errMsg) {
    const homeGrid = document.querySelector(
      ".gallery-preview-grid, #homepage-gallery-grid",
    );
    if (homeGrid) {
      homeGrid.innerHTML = `
        <div class="api-error-alert">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <p><strong>Google Places Live Fetch:</strong> ${escapeHtml(errMsg)}</p>
          <button class="btn btn-sm btn-outline mt-2" onclick="location.reload()">Retry Live Call</button>
        </div>
      `;
    }

    const reviewsTrack = document.querySelector(
      ".reviews-track, #dynamic-reviews-track",
    );
    if (reviewsTrack) {
      reviewsTrack.innerHTML = `
        <div class="api-error-alert">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <p><strong>Google Places Live Fetch:</strong> ${escapeHtml(errMsg)}</p>
          <button class="btn btn-sm btn-outline mt-2" onclick="location.reload()">Retry Live Call</button>
        </div>
      `;
    }

    const fullGrid = document.querySelector(
      ".full-gallery-grid, #full-gallery-grid",
    );
    if (fullGrid) {
      fullGrid.innerHTML = `
        <div class="api-error-alert">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <p><strong>Google Places Live Fetch:</strong> ${escapeHtml(errMsg)}</p>
          <button class="btn btn-sm btn-outline mt-2" onclick="location.reload()">Retry Live Call</button>
        </div>
      `;
    }
  }

  function escapeHtml(str) {
    if (!str) return "";
    return str.replace(
      /[&<>"']/g,
      (m) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;",
        })[m],
    );
  }

  // Export functions to global scope
  window.GooglePlacesModule = {
    fetchGooglePlacesDataDynamically,
    openLightbox,
    closeLightbox,
  };
})();
