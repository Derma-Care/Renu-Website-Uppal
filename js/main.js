// DR. RENU'S CHIROPRACTIC / OSTEOPATHY & PHYSIOTHERAPY CLINIC
// Master Client-side Logic & Interactions

document.addEventListener('DOMContentLoaded', () => {
  initLiveHoursStatus();
  initHeaderScroll();
  initMobileNavigation();
  initModals();
  initGalleryLightbox();
  initReviewsCarousel();
  initFaqAccordion();
  initBookingForms();
  initCatalogueSearch();
  initServiceCards();
  initAnatomyNavigator();
});

/* ==========================================================================
   1. Live Clinic Opening Hours Status
   ========================================================================== */
function initLiveHoursStatus() {
  const statusPills = document.querySelectorAll('[data-live-status]');
  const hoursTables = document.querySelectorAll('.hours-table');
  const schedLists = document.querySelectorAll('.hours-schedule-list');
  const dayGroupLines = document.querySelectorAll('[data-day-group]');

  if (!statusPills.length && !hoursTables.length && !schedLists.length && !dayGroupLines.length) return;

  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
  const currentHour = now.getHours() + now.getMinutes() / 60;

  // Google Business Profile Operating Hours
  // Monday - Saturday: 9:00 AM – 9:00 PM | Sunday: 9:00 AM – 1:00 PM
  let openHour = day === 0 ? 9 : 9;
  let closeHour = day === 0 ? 13 : 21;

  if (typeof CLINIC_DATA !== 'undefined' && CLINIC_DATA.hours && Array.isArray(CLINIC_DATA.hours.schedule)) {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const todaySchedule = CLINIC_DATA.hours.schedule.find(s => s.day.toLowerCase() === dayNames[day].toLowerCase());
    if (todaySchedule && typeof todaySchedule.openHour === 'number' && typeof todaySchedule.closeHour === 'number') {
      openHour = todaySchedule.openHour;
      closeHour = todaySchedule.closeHour;
    }
  }

  // Check for Holiday or Emergency Special Closure
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const dateNum = String(now.getDate()).padStart(2, '0');
  const todayDateKey = `${year}-${month}-${dateNum}`;

  let isHolidayClosed = false;
  let holidayReason = '';

  if (typeof CLINIC_DATA !== 'undefined' && CLINIC_DATA.hours) {
    if (CLINIC_DATA.hours.specialClosure && CLINIC_DATA.hours.specialClosure.isClosedToday) {
      isHolidayClosed = true;
      holidayReason = CLINIC_DATA.hours.specialClosure.reason || 'Closed Today';
    } else if (CLINIC_DATA.hours.holidays && CLINIC_DATA.hours.holidays[todayDateKey] && CLINIC_DATA.hours.holidays[todayDateKey].closed) {
      isHolidayClosed = true;
      const hObj = CLINIC_DATA.hours.holidays[todayDateKey];
      holidayReason = hObj.name ? `Closed for ${hObj.name}` : 'Holiday Closure';
    }
  }

  let isOpen = false;
  let closingInfo = '';

  if (isHolidayClosed) {
    isOpen = false;
    closingInfo = holidayReason;
  } else if (currentHour >= openHour && currentHour < closeHour) {
    isOpen = true;
    const formattedClose = closeHour > 12 ? `${closeHour - 12}:00 PM` : `${closeHour}:00 AM`;
    closingInfo = `Closes at ${formattedClose}`;
  } else {
    if (currentHour < openHour) {
      const formattedOpen = openHour > 12 ? `${openHour - 12}:00 PM` : `${openHour}:00 AM`;
      closingInfo = `Opens today at ${formattedOpen}`;
    } else {
      closingInfo = day === 6 ? 'Opens Sunday at 9:00 AM' : (day === 0 ? 'Opens Monday at 9:00 AM' : 'Opens tomorrow at 9:00 AM');
    }
  }

  // 1. Update Live Status Pills
  statusPills.forEach(pill => {
    pill.classList.remove('is-open', 'is-closed', 'is-holiday');
    // Clear inline styles so responsive theme classes take full effect
    pill.style.color = '';
    pill.style.background = '';
    pill.style.borderColor = '';

    if (isHolidayClosed) {
      pill.classList.add('is-closed', 'is-holiday');
      pill.innerHTML = `<span class="live-status-dot" style="background:#f59e0b;box-shadow:none;"></span> ${holidayReason}`;
    } else if (isOpen) {
      pill.classList.add('is-open');
      pill.innerHTML = `<span class="live-status-dot"></span> Open Now · ${closingInfo}`;
    } else {
      pill.classList.add('is-closed');
      pill.innerHTML = `<span class="live-status-dot"></span> Currently Closed · ${closingInfo}`;
    }
  });

  // 2. Highlight Today in Hours Tables (Modal Dialogs)
  const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const todayName = dayNames[day];

  // In modal dialog, insert holiday alert banner if closed today
  const dialogLiveRow = document.querySelector('.dialog-live-status-row');
  if (dialogLiveRow && isHolidayClosed && !document.querySelector('.holiday-notice-banner')) {
    const banner = document.createElement('div');
    banner.className = 'holiday-notice-banner';
    banner.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i><div><strong>Notice:</strong> The clinic is ${holidayReason}. Regular timings resume tomorrow. For urgent inquiries, please WhatsApp us at +91 91822 58839.</div>`;
    dialogLiveRow.parentNode.insertBefore(banner, dialogLiveRow.nextSibling);
  }

  const hoursRows = document.querySelectorAll('.hours-table .hours-row');
  hoursRows.forEach(row => {
    const dayCol = row.querySelector('.day-col');
    if (!dayCol) return;
    const dayText = dayCol.textContent.trim().toLowerCase();

    if (dayText.startsWith(todayName)) {
      row.classList.add('is-today');
      row.classList.toggle('is-open', isOpen);
      row.classList.toggle('is-closed', !isOpen);

      if (!row.querySelector('.today-badge')) {
        const badge = document.createElement('span');
        badge.className = `today-badge ${isHolidayClosed ? 'badge-holiday' : (isOpen ? 'badge-open' : 'badge-closed')}`;
        badge.innerHTML = isHolidayClosed
          ? `<i class="fa-solid fa-calendar-xmark"></i> Today · ${holidayReason}`
          : (isOpen
              ? `<i class="fa-solid fa-circle-check"></i> Today · Open Now`
              : `<i class="fa-solid fa-clock"></i> Today · Closed`);
        dayCol.appendChild(badge);
      }

      const timeCol = row.querySelector('.time-col');
      if (timeCol) {
        timeCol.classList.add('highlight-time');
        if (isHolidayClosed) {
          timeCol.style.color = '#d97706';
        }
      }
    }
  });

  // 3. Highlight Today in Schedule Lists (e.g., About Page)
  const schedRows = document.querySelectorAll('.hours-schedule-list .sched-row');
  schedRows.forEach(row => {
    const dayCol = row.querySelector('.day');
    if (!dayCol) return;
    const dayText = dayCol.textContent.trim().toLowerCase();

    if (dayText.startsWith(todayName)) {
      row.classList.add('is-today');
      row.classList.toggle('is-open', isOpen);
      row.classList.toggle('is-closed', !isOpen);

      if (!row.querySelector('.today-badge')) {
        const badge = document.createElement('span');
        badge.className = `today-badge ${isHolidayClosed ? 'badge-holiday' : (isOpen ? 'badge-open' : 'badge-closed')}`;
        badge.innerHTML = isHolidayClosed
          ? `<i class="fa-solid fa-calendar-xmark"></i> Today · ${holidayReason}`
          : (isOpen
              ? `<i class="fa-solid fa-circle-check"></i> Today · Open Now`
              : `<i class="fa-solid fa-clock"></i> Today · Closed`);
        dayCol.appendChild(badge);
      }

      const timeCol = row.querySelector('.time');
      if (timeCol) {
        timeCol.classList.add('highlight-time');
        if (isHolidayClosed) {
          timeCol.style.color = '#f59e0b';
        }
      }
    }
  });

  // 4. Highlight Today in Summary Lines (e.g., Contact Page)
  dayGroupLines.forEach(line => {
    const group = line.getAttribute('data-day-group');
    const isTodayGroup = (group === 'mon-sat' && day >= 1 && day <= 6) || (group === 'sun' && day === 0);
    if (isTodayGroup) {
      line.classList.add('is-today-line');
      line.classList.toggle('is-open', isOpen);
      line.classList.toggle('is-closed', !isOpen);

      if (!line.querySelector('.line-badge')) {
        const badge = document.createElement('span');
        badge.className = `line-badge ${isHolidayClosed ? 'badge-holiday' : (isOpen ? 'badge-open' : 'badge-closed')}`;
        badge.innerHTML = isHolidayClosed ? holidayReason : (isOpen ? 'Open Today' : 'Closed Today');
        line.appendChild(badge);
      }
    }
  });
}

/* ==========================================================================
   2. Header Scroll Effect
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ==========================================================================
   3. Mobile Navigation Drawer
   ========================================================================== */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.menu-toggle-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const closeBtn = document.querySelector('.mobile-nav-close');

  if (!toggleBtn || !drawer) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    toggleBtn.setAttribute('aria-expanded', 'true');
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) closeDrawer();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   4. Modals Controller (<dialog> native compliant)
   ========================================================================== */
function initModals() {
  // Hours modal trigger
  const hoursTriggers = document.querySelectorAll('[data-open-hours-modal]');
  const hoursDialog = document.getElementById('hours-dialog');

  hoursTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (hoursDialog && typeof hoursDialog.showModal === 'function') {
        hoursDialog.showModal();
      }
    });
  });

  // Appointment modal trigger
  const appointmentTriggers = document.querySelectorAll('[data-open-booking-modal]');
  const bookingDialog = document.getElementById('booking-dialog');

  appointmentTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const preferredService = btn.getAttribute('data-service') || '';
      if (bookingDialog) {
        const select = bookingDialog.querySelector('select[name="service"]');
        if (select && preferredService) {
          select.value = preferredService;
        }
        if (typeof bookingDialog.showModal === 'function') {
          bookingDialog.showModal();
        }
      }
    });
  });

  // Close buttons
  const dialogCloseButtons = document.querySelectorAll('[data-close-dialog]');
  dialogCloseButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const dialog = btn.closest('dialog');
      if (dialog) dialog.close();
    });
  });

  // Backdrop click close for dialogs (click directly on backdrop targets dialog element)
  const dialogs = document.querySelectorAll('dialog');
  dialogs.forEach(dialog => {
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) {
        dialog.close();
      }
    });
  });
}

/* ==========================================================================
   5. Interactive Photo Gallery & Lightbox
   ========================================================================== */
let currentLightboxIndex = 0;
const galleryList = (typeof CLINIC_DATA !== 'undefined' && CLINIC_DATA.gallery) ? CLINIC_DATA.gallery : [];

function initGalleryLightbox() {
  const lightbox = document.getElementById('gallery-lightbox');
  if (!lightbox) return;

  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxImg = lightbox.querySelector('#lightbox-img');
  const lightboxCaption = lightbox.querySelector('#lightbox-caption');
  const lightboxCounter = lightbox.querySelector('#lightbox-counter');
  const prevBtn = lightbox.querySelector('#lightbox-prev');
  const nextBtn = lightbox.querySelector('#lightbox-next');
  const zoomBtn = lightbox.querySelector('#lightbox-zoom');

  if (!galleryItems.length) return;

  const updateLightbox = (index) => {
    if (index < 0) index = galleryList.length - 1;
    if (index >= galleryList.length) index = 0;
    currentLightboxIndex = index;

    const item = galleryList[index];
    if (item && lightboxImg) {
      lightboxImg.src = item.url;
      lightboxImg.alt = item.caption;
      lightboxImg.classList.remove('zoomed');
      if (lightboxCaption) lightboxCaption.textContent = item.caption;
      if (lightboxCounter) lightboxCounter.textContent = `${index + 1} / ${galleryList.length}`;
    }
  };

  galleryItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
      updateLightbox(idx);
      if (typeof lightbox.showModal === 'function') {
        lightbox.showModal();
      }
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateLightbox(currentLightboxIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateLightbox(currentLightboxIndex + 1);
    });
  }

  if (zoomBtn && lightboxImg) {
    zoomBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      lightboxImg.classList.toggle('zoomed');
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (lightbox.open) {
      if (e.key === 'ArrowLeft') updateLightbox(currentLightboxIndex - 1);
      if (e.key === 'ArrowRight') updateLightbox(currentLightboxIndex + 1);
    }
  });
}

/* ==========================================================================
   6. Reviews Carousel
   ========================================================================== */
function initReviewsCarousel() {
  const sections = document.querySelectorAll('.reviews-section');
  sections.forEach(sec => {
    const track = sec.querySelector('.reviews-track');
    const prevBtn = sec.querySelector('#review-prev, .review-prev');
    const nextBtn = sec.querySelector('#review-next, .review-next');

    if (!track) return;
    const scrollStep = 440;

    if (prevBtn && !prevBtn.dataset.carouselBound) {
      prevBtn.dataset.carouselBound = 'true';
      prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -scrollStep, behavior: 'smooth' });
      });
    }

    if (nextBtn && !nextBtn.dataset.carouselBound) {
      nextBtn.dataset.carouselBound = 'true';
      nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: scrollStep, behavior: 'smooth' });
      });
    }
  });
}

/* ==========================================================================
   7. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close siblings
        faqItems.forEach(other => other.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });
}

/* ==========================================================================
   8. Booking & Contact Forms (Client Validation & WhatsApp Generation)
   ========================================================================== */
function initBookingForms() {
  const forms = document.querySelectorAll('[data-booking-form]');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = form.querySelector('[name="name"]');
      const phoneInput = form.querySelector('[name="phone"]');
      const doctorInput = form.querySelector('[name="doctor"]');
      const timeSlotInput = form.querySelector('[name="time_slot"]');
      const serviceInput = form.querySelector('[name="service"]');
      const dateInput = form.querySelector('[name="date"]');
      const notesInput = form.querySelector('[name="notes"]');

      const name = nameInput ? nameInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const doctor = doctorInput ? doctorInput.value.trim() : 'Any Available Specialist';
      const timeSlot = timeSlotInput ? timeSlotInput.value.trim() : 'Flexible / Any Slot';
      const service = serviceInput ? serviceInput.value.trim() : 'General Spine & Pain Consultation';
      const dateVal = dateInput ? dateInput.value.trim() : '';
      const date = dateVal || 'Earliest Available Date';
      const notes = notesInput ? notesInput.value.trim() : '';

      if (!name) {
        showToast('Please enter the patient full name', 'error');
        if (nameInput) nameInput.focus();
        return;
      }

      const cleanPhone = phone.replace(/\D/g, '');
      if (!phone || cleanPhone.length < 10) {
        showToast('Please enter a valid 10-digit mobile or WhatsApp number', 'error');
        if (phoneInput) phoneInput.focus();
        return;
      }

      // Format WhatsApp Booking Message
      const messageLines = [
        `*🏥 New Consultation Appointment Request*`,
        `*Dr. Renu's Chiropractic, Osteopathy & Physiotherapy Clinic*`,
        `📍 Boduppal, Hyderabad | 📞 +91 91822 58839`,
        `──────────────────────────`,
        `👤 *Patient Name:* ${name}`,
        `📱 *Mobile / WhatsApp:* ${phone}`,
        `👨‍⚕️ *Preferred Specialist:* ${doctor}`,
        `🩺 *Treatment / Condition:* ${service}`,
        `📅 *Preferred Date:* ${date}`,
        `⏰ *Preferred Time Slot:* ${timeSlot}`,
        `📝 *Symptoms / Notes:* ${notes || 'None provided'}`,
        `──────────────────────────`,
        `_Sent via Clinic Website Booking Form_`
      ];

      const fullMessage = messageLines.join('\n');
      const clinicWhatsAppNumber = '919182258839'; // Country code 91 + 10-digit mobile 9182258839
      const waUrl = `https://wa.me/${clinicWhatsAppNumber}?text=${encodeURIComponent(fullMessage)}`;

      // Open WhatsApp in a new tab / app
      const opened = window.open(waUrl, '_blank');
      if (!opened || opened.closed || typeof opened.closed === 'undefined') {
        window.location.href = waUrl;
      }

      // Close modal if form is inside <dialog>
      const modal = form.closest('dialog');
      if (modal && typeof modal.close === 'function') {
        modal.close();
      }

      showToast('Appointment details prepared! Opening WhatsApp...', 'success');
      form.reset();
    });
  });
}

/* ==========================================================================
   9. Products & Services Search & Tab Filtering
   ========================================================================== */
function initCatalogueSearch() {
  const searchInput = document.getElementById('offering-search');
  const serviceCards = document.querySelectorAll('.catalogue-service-item');
  const productCards = document.querySelectorAll('.catalogue-product-item');
  const tabButtons = document.querySelectorAll('[data-catalogue-tab]');
  const countBadge = document.getElementById('results-count');

  if (!serviceCards.length && !productCards.length) return;

  let currentCategory = 'all';
  let currentSearchQuery = '';

  const filterItems = () => {
    let visibleCount = 0;
    const query = currentSearchQuery.toLowerCase().trim();

    serviceCards.forEach(card => {
      const title = (card.getAttribute('data-title') || '').toLowerCase();
      const desc = (card.getAttribute('data-desc') || '').toLowerCase();
      const category = card.getAttribute('data-category') || 'all';

      const matchesTab = (currentCategory === 'all' || currentCategory === category);
      const matchesQuery = !query || title.includes(query) || desc.includes(query);

      if (matchesTab && matchesQuery && currentCategory !== 'product') {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    productCards.forEach(card => {
      const title = (card.getAttribute('data-title') || '').toLowerCase();
      const matchesTab = (currentCategory === 'all' || currentCategory === 'product');
      const matchesQuery = !query || title.includes(query);

      if (matchesTab && matchesQuery) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (countBadge) {
      countBadge.textContent = `${visibleCount} item${visibleCount === 1 ? '' : 's'} available`;
    }
  };

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      filterItems();
    });
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-catalogue-tab') || 'all';
      filterItems();
    });
  });

  // Check URL parameters (e.g. ?tab=products)
  const urlParams = new URLSearchParams(window.location.search);
  const tabParam = urlParams.get('tab');
  if (tabParam === 'products') {
    const productTabBtn = document.querySelector('[data-catalogue-tab="product"]');
    if (productTabBtn) {
      productTabBtn.click();
    }
  }
}

/* ==========================================================================
   10. Service Cards Detail Modal
   ========================================================================== */
function initServiceCards() {
  const serviceDetailModal = document.getElementById('service-detail-modal');
  if (!serviceDetailModal) return;

  const quickDetailBtns = document.querySelectorAll('[data-service-detail-id]');
  const modalTitle = serviceDetailModal.querySelector('#service-modal-title');
  const modalBadge = serviceDetailModal.querySelector('#service-modal-badge');
  const modalDesc = serviceDetailModal.querySelector('#service-modal-desc');
  const modalBenefits = serviceDetailModal.querySelector('#service-modal-benefits');
  const modalIdeal = serviceDetailModal.querySelector('#service-modal-ideal');
  const modalEnquireBtn = serviceDetailModal.querySelector('#service-modal-enquire');

  const services = (typeof CLINIC_DATA !== 'undefined' && CLINIC_DATA.services) ? CLINIC_DATA.services : [];

  quickDetailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-service-detail-id');
      const service = services.find(s => s.id === id);
      if (!service) return;

      if (modalTitle) modalTitle.textContent = service.title;
      if (modalBadge) modalBadge.textContent = service.badge;
      if (modalDesc) modalDesc.textContent = service.description;
      if (modalIdeal) modalIdeal.textContent = service.idealFor;

      if (modalBenefits) {
        modalBenefits.innerHTML = service.benefits
          .map(b => `<li><i class="fa-solid fa-circle-check" style="color:var(--color-emerald);margin-right:8px;"></i>${b}</li>`)
          .join('');
      }

      if (modalEnquireBtn) {
        modalEnquireBtn.href = `https://wa.me/919182258839?text=Hi!+I+want+to+know+more+about+${encodeURIComponent(service.title)}+at+Dr.+Renu's+Clinic`;
      }

      if (typeof serviceDetailModal.showModal === 'function') {
        serviceDetailModal.showModal();
      }
    });
  });
}

/* ==========================================================================
   11. Toast Notifications
   ========================================================================== */
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  const icon = type === 'success' ? 'fa-circle-check' : (type === 'error' ? 'fa-triangle-exclamation' : 'fa-bell');
  const color = type === 'error' ? '#ef4444' : '#10b981';
  
  toast.style.borderLeftColor = color;
  toast.innerHTML = `
    <i class="fa-solid ${icon} toast-icon" style="color:${color}"></i>
    <div>
      <div class="toast-title">${type === 'error' ? 'Notice' : 'Success'}</div>
      <div class="toast-desc">${message}</div>
    </div>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* ==========================================================================
   12. Interactive Spine & Skeleton Anatomy Navigator
   ========================================================================== */
function initAnatomyNavigator() {
  const container = document.getElementById('interactive-anatomy-explorer');
  if (!container) return;

  const ANATOMY_DATA = {
    cervical: {
      partBadge: 'Cervical Spine (C1 – C7)',
      specialist: 'Lead Doctor: Dr. Bharath Adla',
      title: 'Cervical Spondylosis & Neck Pain Treatment',
      desc: 'Targeted decompression of compressed cervical nerve roots and gentle realignment of vertebrae C1–C7, relieving chronic neck stiffness, radiating arm numbness, and tech-neck posture strain.',
      symptoms: [
        'Neck stiffness & restricted rotation',
        'Occipital headaches & dizziness',
        'Radiating shoulder, arm & finger numbness',
        'Chronic tech-neck postural strain'
      ],
      treatments: [
        'Gentle cervical chiropractic decompression',
        'Osteopathic suboccipital myofascial release',
        'Targeted deep tissue trigger point therapy',
        'Posture restoration & ergonomic retraining'
      ],
      service: 'Cervical Spondylosis Treatment',
      whatsappMsg: "Hello Dr. Renu's Clinic, I want to consult for Cervical Spondylosis and Neck Pain Treatment."
    },
    spine: {
      partBadge: 'Thoracic & Full Spine Column',
      specialist: 'Lead Doctor: Dr. Bharath Adla',
      title: 'Spine Alignment & Chiropractic Adjustment',
      desc: 'High-precision chiropractic spinal manipulation and gentle osteopathic mobilization to correct vertebral subluxations, restore central nervous flow, and eliminate postural imbalances.',
      symptoms: [
        'Thoracic spine stiffness & hunching',
        'Mid-back muscle spasms & burning ache',
        'Rib cage movement restriction & shallow breathing',
        'Scoliotic curvature & uneven shoulder levels'
      ],
      treatments: [
        'Precision Diversified spine adjustments',
        'Drop-table spinal decompression',
        'Thoracolumbar joint mobilization',
        'Core stabilizing neuromuscular rehabilitation'
      ],
      service: 'Spine Alignment Therapy',
      whatsappMsg: "Hello Dr. Renu's Clinic, I want to consult for Spine Alignment & Chiropractic Adjustment."
    },
    lumbar: {
      partBadge: 'Lumbar Spine (L1 – L5) & Sciatic Nerve Axis',
      specialist: 'Lead Doctor: Dr. Bharath Adla',
      title: 'Sciatica & Lumbar Disc Herniation Relief',
      desc: 'Specialized clinical decompression for L4-L5-S1 disc protrusions, bulging discs, and pinched sciatic nerve pathways, halting radiating sharp pain down the buttocks and legs.',
      symptoms: [
        'Sharp shooting pain down buttock, thigh & calf',
        'Lower back morning rigidity & pain when bending',
        'Pins, needles & numbness in foot/toes',
        'Inability to sit or stand for extended durations'
      ],
      treatments: [
        'Non-surgical lumbar flexion-distraction',
        'Sciatic nerve flossing & neural mobilization',
        'Deep piriformis muscle spasm release',
        'Lumbar stabilization & disc pressure reduction exercises'
      ],
      service: 'Sciatica Treatment',
      whatsappMsg: "Hello Dr. Renu's Clinic, I want to consult for Sciatica and Lower Back Pain Treatment."
    },
    shoulder: {
      partBadge: 'Glenohumeral Joint, Rotator Cuff & Clavicle',
      specialist: 'Senior Physiotherapist',
      title: 'Frozen Shoulder & Rotator Cuff Rehabilitation',
      desc: 'Advanced osteopathic joint capsule mobilization and targeted electrotherapy to break adhesive capsulitis adhesions, restoring 360-degree pain-free shoulder elevation and reach.',
      symptoms: [
        'Severe shoulder stiffness when reaching overhead/behind back',
        'Sharp pain when sleeping on affected shoulder',
        'Rotator cuff impingement & clicking noises',
        'Progressive loss of arm range-of-motion'
      ],
      treatments: [
        'Maitland & Mulligan joint mobilization',
        'Dry needling for subscapularis & supraspinatus',
        'Therapeutic ultrasound & matrix frequency therapy',
        'Scapulothoracic rhythm retraining'
      ],
      service: 'Frozen Shoulder and Rotator Cuff Rehabilitation',
      whatsappMsg: "Hello Dr. Renu's Clinic, I want to consult for Frozen Shoulder and Rotator Cuff Rehabilitation."
    },
    pelvis: {
      partBadge: 'Pelvic Girdle, Sacroiliac (SI) Joint & Sacrum',
      specialist: 'Lead Doctor: Dr. Bharath Adla',
      title: 'SI Joint Dysfunction & Chronic Pelvic Pain',
      desc: 'Correction of pelvic torsion, sacroiliac joint subluxations, and ligament strain, providing lasting relief for patients suffering from persistent unilateral lower back and hip discomfort.',
      symptoms: [
        'Unilateral ache localized right over the SI dimple',
        'Pain aggravated by transition from sit-to-stand',
        'Pelvic tilting, leg length discrepancy sensation',
        'Groin & upper buttock referral discomfort'
      ],
      treatments: [
        'Pelvic blocking & sacroiliac realignment',
        'Fascial Distortion Model (FDM) band unwinding',
        'Piriformis & gluteal muscle reset',
        'Pelvic floor & deep stabilizing core recruitment'
      ],
      service: 'SI Joint & Pelvis Alignment',
      whatsappMsg: "Hello Dr. Renu's Clinic, I want to consult for SI Joint Dysfunction and Pelvis Care."
    },
    knee: {
      partBadge: 'Patella, Femur-Tibia Joint & Meniscus',
      specialist: 'Senior Physiotherapist',
      title: 'Knee Osteoarthritis & Ligament Recovery',
      desc: 'Non-surgical, non-invasive knee regeneration protocol combining joint mobilization, chondral offloading, and quad/hamstring rebalancing to relieve osteoarthritic grating and pain.',
      symptoms: [
        'Crepitus (grating/crunching sound) on stair climbing',
        'Morning knee joint stiffness lasting over 30 mins',
        'Swelling, warmth & instability when walking',
        'Difficulty squatting, kneeling, or sitting crossed-legged'
      ],
      treatments: [
        'Joint distraction & synovial fluid replenishment exercises',
        'Class IV Laser / targeted IASTM soft tissue therapy',
        'Patellofemoral taping & tracking correction',
        'Isokinetic quad & VMO strengthening protocol'
      ],
      service: 'Knee Osteoarthritis Care',
      whatsappMsg: "Hello Dr. Renu's Clinic, I want to consult for Knee Pain and Osteoarthritis Rehabilitation."
    },
    neuro: {
      partBadge: 'Cranium & Central Neuro-Motor Spine',
      specialist: 'Neuro-Rehab Specialist',
      title: 'Neurological Rehabilitation & Stroke Care',
      desc: 'Intensive neuro-facilitation, proprioceptive neuromuscular training (PNF), and gait restoration for patients recovering from stroke, hemiplegia, Parkinson’s, and nerve injuries.',
      symptoms: [
        'Post-stroke limb weakness, hemiplegia & spasticity',
        'Loss of balance, coordination & steady walking gait',
        'Facial droop (Bell’s Palsy) & motor control loss',
        'Peripheral neuropathy, numbness & muscular atrophy'
      ],
      treatments: [
        'Bobath / NDT (Neuro-Developmental Technique)',
        'Proprioceptive Neuromuscular Facilitation (PNF)',
        'Functional electrical stimulation (FES)',
        'Virtual-assisted balance & gait retraining'
      ],
      service: 'Neurological Rehabilitation',
      whatsappMsg: "Hello Dr. Renu's Clinic, I want to consult for Neurological Rehabilitation."
    }
  };

  const tabs = container.querySelectorAll('.anatomy-tab-btn');
  const skeletonParts = container.querySelectorAll('.anatomy-part');
  const hotspotPins = container.querySelectorAll('.hotspot-pin');
  const serviceCards = document.querySelectorAll('.service-card[data-service-anatomy]');

  const badgeEl = container.querySelector('#anatomy-part-badge');
  const specialistEl = container.querySelector('#anatomy-specialist-badge');
  const titleEl = container.querySelector('#anatomy-detail-title');
  const descEl = container.querySelector('#anatomy-detail-desc');
  const symptomsEl = container.querySelector('#anatomy-symptoms-list');
  const treatmentsEl = container.querySelector('#anatomy-treatments-list');
  const bookBtn = container.querySelector('#anatomy-book-btn');
  const whatsappBtn = container.querySelector('#anatomy-whatsapp-btn');
  const detailCard = container.querySelector('#anatomy-detail-card');

  function activatePart(key, opts = {}) {
    if (!ANATOMY_DATA[key]) return;
    const data = ANATOMY_DATA[key];

    // 1. Update Tabs
    tabs.forEach(tab => {
      const target = tab.getAttribute('data-anatomy-target');
      if (target === key) {
        tab.classList.add('is-active');
      } else {
        tab.classList.remove('is-active');
      }
    });

    // 2. Update Skeleton SVG Parts
    skeletonParts.forEach(part => {
      const partKey = part.getAttribute('data-part');
      if (partKey === key) {
        part.classList.add('is-highlighted');
      } else {
        part.classList.remove('is-highlighted');
      }
    });

    // 3. Update Hotspot Pins
    hotspotPins.forEach(pin => {
      const pinKey = pin.getAttribute('data-part');
      if (pinKey === key) {
        pin.classList.add('is-active');
      } else {
        pin.classList.remove('is-active');
      }
    });

    // 4. Update Service Cards
    serviceCards.forEach(card => {
      const cardKey = card.getAttribute('data-service-anatomy');
      if (cardKey === key) {
        card.classList.add('is-active-service');
      } else {
        card.classList.remove('is-active-service');
      }
    });

    // 5. Update Dynamic Detail Card with Smooth Fade Animation
    if (detailCard) {
      detailCard.style.animation = 'none';
      void detailCard.offsetHeight; // trigger reflow
      detailCard.style.animation = 'detailFadeIn 0.35s ease forwards';
    }

    if (badgeEl) badgeEl.innerHTML = `<i class="fa-solid fa-bone"></i> ${data.partBadge}`;
    if (specialistEl) specialistEl.innerHTML = `<i class="fa-solid fa-user-doctor"></i> ${data.specialist}`;
    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;

    if (symptomsEl) {
      symptomsEl.innerHTML = data.symptoms
        .map(s => `<li><i class="fa-solid fa-check"></i> ${s}</li>`)
        .join('');
    }

    if (treatmentsEl) {
      treatmentsEl.innerHTML = data.treatments
        .map(t => `<li><i class="fa-solid fa-check"></i> ${t}</li>`)
        .join('');
    }

    if (bookBtn) {
      bookBtn.setAttribute('data-service', data.service);
      const actionName = data.title.split('&')[0].trim();
      bookBtn.innerHTML = `<i class="fa-regular fa-calendar-check"></i> Book Consultation for ${actionName}`;
    }

    if (whatsappBtn) {
      whatsappBtn.href = `https://wa.me/919182258839?text=${encodeURIComponent(data.whatsappMsg)}`;
    }

    // 6. Optional Smooth Scroll if clicked from a service card
    if (opts.scroll) {
      const headerOffset = 90;
      const elementPosition = container.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  // Bind Tabs
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const target = tab.getAttribute('data-anatomy-target');
      if (target) activatePart(target);
    });
  });

  // Bind Skeleton SVG Parts
  skeletonParts.forEach(part => {
    part.addEventListener('click', () => {
      const key = part.getAttribute('data-part');
      if (key) activatePart(key);
    });
    part.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const key = part.getAttribute('data-part');
        if (key) activatePart(key);
      }
    });
  });

  // Bind Hotspot Pins
  hotspotPins.forEach(pin => {
    pin.addEventListener('click', () => {
      const key = pin.getAttribute('data-part');
      if (key) activatePart(key);
    });
    pin.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const key = pin.getAttribute('data-part');
        if (key) activatePart(key);
      }
    });
  });

  // Bind Service Cards
  serviceCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Allow direct WhatsApp button or other link clicks inside actions to work normally
      if (e.target.closest('a') && !e.target.closest('.service-card-anatomy-tag') && !e.target.closest('.service-card-thumb-wrap')) {
        return;
      }
      const key = card.getAttribute('data-service-anatomy');
      if (key) {
        activatePart(key, { scroll: true });
      }
    });
  });

  // Set default active highlight
  activatePart('cervical');
}
