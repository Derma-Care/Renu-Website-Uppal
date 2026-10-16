// DR. RENU'S CHIROPRACTIC / OSTEOPATHY & PHYSIOTHERAPY CLINIC
// Data Store containing clinic information, services, products, reviews, gallery images, and posts.

const CLINIC_DATA = {
  name: "DR. RENU'S CHIROPRACTIC / OSTEOPATHY & PHYSIOTHERAPY CLINIC",
  shortName: "Dr. Renu's Chiropractic & Physiotherapy",
  tagline: "Best Chiropractor & Physiotherapy Clinic in Boduppal, Hyderabad",
  phone: "9182258839",
  phoneFormatted: "+91 91822 58839",
  whatsapp: "919182258839",
  whatsappBaseUrl: "https://wa.me/919182258839",
  rating: "4.8",
  reviewCount: "128+",
  hours: {
    weekdays: "Monday - Saturday: 9:00 AM – 9:00 PM",
    sunday: "Sunday: 9:00 AM – 1:00 PM",
    schedule: [
      { day: "Monday", time: "9:00 AM – 9:00 PM", openHour: 9, closeHour: 21 },
      { day: "Tuesday", time: "9:00 AM – 9:00 PM", openHour: 9, closeHour: 21 },
      {
        day: "Wednesday",
        time: "9:00 AM – 9:00 PM",
        openHour: 9,
        closeHour: 21,
      },
      {
        day: "Thursday",
        time: "9:00 AM – 9:00 PM",
        openHour: 9,
        closeHour: 21,
      },
      { day: "Friday", time: "9:00 AM – 9:00 PM", openHour: 9, closeHour: 21 },
      {
        day: "Saturday",
        time: "9:00 AM – 9:00 PM",
        openHour: 9,
        closeHour: 21,
      },
      { day: "Sunday", time: "9:00 AM – 1:00 PM", openHour: 9, closeHour: 13 },
    ],
    // Special Closures & Emergency Toggle:
    // Change isClosedToday to true to instantly mark the clinic closed on the website
    specialClosure: {
      isClosedToday: false,
      reason: "Clinic is closed today",
      reopensOn: "Tomorrow at 9:00 AM",
      emergencyContactWhatsApp: true,
    },
    // Planned Annual Clinic Holidays (Format: YYYY-MM-DD):
    // The website automatically switches to Closed on these dates
    holidays: {
      "2026-01-26": { name: "Republic Day", closed: true },
      "2026-03-03": { name: "Holi", closed: true },
      "2026-08-15": { name: "Independence Day", closed: true },
      "2026-10-02": { name: "Gandhi Jayanti", closed: true },
      "2026-10-20": { name: "Diwali", closed: true },
      "2026-12-25": { name: "Christmas", closed: true },
    },
  },
  location: {
    city: "Hyderabad, Telangana, 500092",
    area: "Boduppal, Hyderabad",
    fullAddress:
      "LAXMAREDDY RESIDENCY, Laxma reddy residency, Sai baba temple, 55-5/7/G1, road, beside Life Spring Hospitals, opposite to Studioseven family saloon, Buddha Nagar Colony, Mallikarjuna Nagar, Boduppal, Hyderabad, Telangana 500092",
    placeId: "ChIJUfy4iwSfyzsRno64kXfW5R0",
    cid: "2154363805800894110",
    mapUrl: "https://maps.google.com/?cid=2154363805800894110",
    placeUrl: "https://maps.google.com/?cid=2154363805800894110",
    reviewsUrl:
      "https://www.google.com/maps/place//data=!4m4!3m3!1s0x3bcb9f048bb8fc51:0x1de5d67791b88e9e!9m1!1b1",
    photosUrl:
      "https://www.google.com/maps/place//data=!4m3!3m2!1s0x3bcb9f048bb8fc51:0x1de5d67791b88e9e!10e5",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=DR.RENU%27S+CHIROPRACTIC+%2F+OSTEOPATHY+%26+PHYSIOTHERAPY+CLINIC%2C+55-5%2F7%2FG1+LAXMAREDDY+RESIDENCY+Sai+baba+temple+road+Laxma+reddy+residency%2C+beside+Life+Spring+Hospitals%2C+opposite+Opposite+to+Studioseven+family+saloon%2C+Hyderabad%2C+Telangana%2C+500092&destination_place_id=ChIJUfy4iwSfyzsRno64kXfW5R0",
    embedUrl:
      "https://maps.google.com/maps?q=DR.RENU%27S%20CHIROPRACTIC%20%2F%20OSTEOPATHY%20%26%20PHYSIOTHERAPY%20CLINIC%2C%2055-5%2F7%2FG1%20LAXMAREDDY%20RESIDENCY%20Sai%20baba%20temple%20road%20Laxma%20reddy%20residency%2C%20beside%20Life%20Spring%20Hospitals%2C%20opposite%20Opposite%20to%20Studioseven%20family%20saloon%2C%20Hyderabad%2C%20Telangana%2C%20500092&output=embed",
  },
  social: {
    instagram: "https://www.instagram.com/dr_bharath_adla",
    youtube: "https://youtube.com/@dr.renusphysiotherapychiro2089",
  },
  logo: "images/clinic-logo.png",
  leadDoctors: [
    {
      name: "Dr. Bharath Adla",
      role: "Sr. Physiotherapist, Master's in Chiropractic & Spine Specialist",
      credentials:
        "Sr. Physiotherapist, Master's in Chiropractic, Spine Specialist",
      experience: "15+ Years Experience",
      specialties: [
        "Spine Alignment & Adjustments",
        "Sciatica & Disc Bulge Management",
        "Cervical Spondylosis Care",
        "Fascial Distortion Model (FDM)",
        "Non-Surgical Pain Relief",
      ],
      bio: "Dr. Bharath Adla is a Senior Physiotherapist with a Master's in Chiropractic and is a renowned Spine Specialist. Known for thorough patient evaluation, gentle spinal adjustments, and helping patients achieve permanent recovery without invasive surgery.",
    },
    {
      name: "Dr. Roja Eepuri",
      role: "BPT, MPT (Ortho) & Pain Specialist",
      credentials: "BPT, MPT (Ortho), Pain Specialist",
      experience: "10+ Years Experience",
      specialties: [
        "Orthopedic Pain Management",
        "Musculoskeletal Rehabilitation",
        "Joint Mobilization & Strengthening",
        "Chronic Back & Neck Pain Relief",
        "Post-Surgical Orthopedic Care",
      ],
      bio: "Dr. Roja Eepuri is an expert Orthopedic Physiotherapist and Pain Specialist holding BPT and MPT (Ortho). She specializes in advanced orthopedic pain management, joint restoration, targeted therapeutic exercise, and non-surgical pain alleviation.",
    },
  ],
  googleApiKey: "AIzaSyAxYt-gTC4g6hj0W9THHBDs4HoAixXujc8",
  googlePlaceId: "ChIJUfy4iwSfyzsRno64kXfW5R0",
  services: [
    {
      id: "service-1",
      title: "Neurological Rehabilitation",
      category: "neuro",
      icon: "fa-brain",
      badge: "Neuro Rehab",
      description:
        "Neurological rehabilitation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad offers expert neuro physiotherapy for stroke, paralysis, and brain injuries. Our rehabilitation center delivers personalized recovery programs.",
    },
    {
      id: "service-2",
      title: "Neurological Physiotherapy",
      category: "neuro",
      icon: "fa-brain",
      badge: "Neuro Rehab",
      description:
        "Neurological physiotherapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad specializes in neuro physiotherapy for neurological disorders. Our rehabilitation center provides comprehensive physiotherapy for paralysis recovery.",
    },
    {
      id: "service-3",
      title: "Geriatric Physiotherapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Geriatric physiotherapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad delivers specialized care for elderly patients. Our physiotherapy clinic near me focuses on mobility, balance, and pain management for seniors.",
    },
    {
      id: "service-4",
      title: "Arthritis Treatment",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Arthritis treatment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad combines physiotherapy and pain management techniques. Our chiropractor near me provides relief from joint stiffness and inflammation.",
    },
    {
      id: "service-5",
      title: "Therapeutic Exercise",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Therapeutic Exercise at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad strengthens muscles and improves mobility. Our physiotherapy clinic near me designs customized exercise programs for optimal recovery.",
    },
    {
      id: "service-6",
      title: "Chiropractic Treatment",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Chiropractic Treatment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad offers expert spinal care. Our chiropractor near me provides effective pain management and spine alignment for lasting relief.",
    },
    {
      id: "service-7",
      title: "Spine Alignment Therapy",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Spine Alignment Therapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad corrects spinal misalignment. Our chiropractor near me restores proper posture and relieves pain through precise adjustments.",
    },
    {
      id: "service-8",
      title: "Back Pain Treatment",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Back Pain Treatment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad delivers effective pain management solutions. Our chiropractor near me combines physiotherapy techniques for lasting back pain relief.",
    },
    {
      id: "service-9",
      title: "Neck Pain Treatment",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Neck Pain Treatment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad provides targeted pain management. Our chiropractor near me uses advanced physiotherapy methods to eliminate neck discomfort.",
    },
    {
      id: "service-10",
      title: "Cervical Spondylosis Treatment",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Cervical Spondylosis Treatment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad addresses neck degeneration. Our chiropractor near me delivers specialized pain management and physiotherapy for cervical relief.",
    },
    {
      id: "service-11",
      title: "Sciatica Treatment",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Sciatica Treatment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad targets nerve pain effectively. Our chiropractor near me provides comprehensive pain management through physiotherapy and spinal adjustments.",
    },
    {
      id: "service-12",
      title: "Chronic Back Pain Management",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Chronic Back Pain Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad offers long-term pain management solutions. Our rehabilitation center combines physiotherapy and chiropractic care for lasting relief.",
    },
    {
      id: "service-13",
      title: "Chronic Neck Pain Management",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Chronic Neck Pain Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad provides sustained pain relief. Our physiotherapy clinic near me uses proven pain management techniques for chronic neck conditions.",
    },
    {
      id: "service-14",
      title: "Spinal Adjustment Therapy",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Spinal Adjustment Therapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad realigns your spine naturally. Our chiropractor near me delivers precise adjustments for improved mobility and pain management.",
    },
    {
      id: "service-15",
      title: "Posture Correction Therapy",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Posture Correction Therapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad improves alignment and balance. Our physiotherapy clinic near me corrects postural imbalances to prevent pain and enhance function.",
    },
    {
      id: "service-16",
      title: "Joint Pain Treatment",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Joint Pain Treatment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad relieves stiffness and inflammation. Our chiropractor near me provides effective pain management through physiotherapy and manual techniques.",
    },
    {
      id: "service-17",
      title: "Spine Pain Therapy",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Spine Pain Therapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad targets spinal discomfort comprehensively. Our chiropractor near me delivers advanced pain management and physiotherapy for spine health.",
    },
    {
      id: "service-18",
      title: "Lower Back Pain Relief",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Lower Back Pain Relief at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad eliminates lumbar discomfort. Our chiropractor near me provides targeted pain management through physiotherapy and spinal care.",
    },
    {
      id: "service-19",
      title: "Upper Back Pain Relief",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Upper Back Pain Relief at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad addresses thoracic pain effectively. Our physiotherapy clinic near me delivers specialized pain management for upper back tension.",
    },
    {
      id: "service-20",
      title: "Lumbar Spine Treatment",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Lumbar Spine Treatment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad restores lower back function. Our chiropractor near me combines physiotherapy and pain management for lumbar spine health.",
    },
    {
      id: "service-21",
      title: "Thoracic Spine Treatment",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Thoracic Spine Treatment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad targets mid-back issues. Our chiropractor near me provides expert pain management and physiotherapy for thoracic spine relief.",
    },
    {
      id: "service-22",
      title: "Cervical Spine Treatment",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Cervical Spine Treatment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad addresses neck spine disorders. Our chiropractor near me delivers specialized pain management and physiotherapy for cervical health.",
    },
    {
      id: "service-23",
      title: "Spinal Manipulation Therapy",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Spinal Manipulation Therapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad restores spinal function. Our chiropractor near me performs precise manipulations for effective pain management and mobility.",
    },
    {
      id: "service-24",
      title: "Non-Surgical Pain Management",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Non-Surgical Pain Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad offers conservative pain relief. Our physiotherapy clinic near me provides drug-free pain management through chiropractic care.",
    },
    {
      id: "service-25",
      title: "Chronic Pain Relief",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Chronic Pain Relief at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad delivers lasting comfort. Our rehabilitation center specializes in pain management using physiotherapy and chiropractic techniques.",
    },
    {
      id: "service-26",
      title: "Manual Spinal Therapy",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Manual Spinal Therapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad uses hands-on techniques. Our chiropractor near me provides effective pain management through skilled manual spinal manipulation.",
    },
    {
      id: "service-27",
      title: "Spinal Mobilisation Therapy",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Spinal Mobilisation Therapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad gently restores spinal movement. Our physiotherapy clinic near me uses mobilization for safe pain management and flexibility.",
    },
    {
      id: "service-28",
      title: "Disc Pain Management",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Disc Pain Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad treats herniated and bulging discs. Our chiropractor near me provides specialized pain management through physiotherapy and spinal care.",
    },
    {
      id: "service-29",
      title: "Facet Joint Pain Treatment",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Facet Joint Pain Treatment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad targets spinal joint pain. Our chiropractor near me delivers effective pain management and physiotherapy for facet joint relief.",
    },
    {
      id: "service-30",
      title: "Postural Assessment & Correction",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Postural Assessment & Correction at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad analyzes and improves alignment. Our physiotherapy clinic near me provides comprehensive postural pain management solutions.",
    },
    {
      id: "service-31",
      title: "Work-Related Back Pain Treatment",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Work-Related Back Pain Treatment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad addresses occupational pain. Our chiropractor near me offers targeted pain management and physiotherapy for workplace injuries.",
    },
    {
      id: "service-32",
      title: "Sitting Posture Correction",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Sitting Posture Correction at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad improves desk ergonomics. Our physiotherapy clinic near me corrects sitting posture to prevent pain and enhance comfort.",
    },
    {
      id: "service-33",
      title: "Standing Posture Correction",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Standing Posture Correction at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad optimizes body alignment. Our chiropractor near me provides physiotherapy-based posture correction for better standing mechanics.",
    },
    {
      id: "service-34",
      title: "Osteopathy Therapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Osteopathy Therapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad treats musculoskeletal conditions holistically. Our chiropractor near me combines osteopathic techniques with pain management for complete healing.",
    },
    {
      id: "service-35",
      title: "Osteopathic Manual Therapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Osteopathic Manual Therapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad uses hands-on healing. Our physiotherapy clinic near me delivers manual osteopathic techniques for effective pain management.",
    },
    {
      id: "service-36",
      title: "Back Pain Management",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Back Pain Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad provides comprehensive pain relief. Our chiropractor near me uses physiotherapy and chiropractic care for lasting back pain solutions.",
    },
    {
      id: "service-37",
      title: "Neck Pain Management",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Neck Pain Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad eliminates cervical discomfort. Our physiotherapy clinic near me specializes in pain management for acute and chronic neck conditions.",
    },
    {
      id: "service-38",
      title: "Joint Mobilisation Therapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Joint Mobilisation Therapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad restores joint function. Our chiropractor near me provides gentle mobilization techniques for effective pain management and mobility.",
    },
    {
      id: "service-39",
      title: "Spinal Osteopathy",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Spinal Osteopathy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad addresses spine-related issues. Our chiropractor near me combines osteopathic principles with pain management for spinal health.",
    },
    {
      id: "service-40",
      title: "Musculoskeletal Pain Treatment",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Musculoskeletal Pain Treatment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad treats muscle and joint pain. Our physiotherapy clinic near me provides comprehensive pain management for musculoskeletal conditions.",
    },
    {
      id: "service-41",
      title: "Chronic Pain Treatment",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Chronic Pain Treatment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad manages long-term pain conditions. Our rehabilitation center offers specialized pain management through physiotherapy and chiropractic care.",
    },
    {
      id: "service-42",
      title: "Postural Correction",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Postural Correction at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad realigns your body naturally. Our chiropractor near me uses physiotherapy techniques to correct posture and prevent pain development.",
    },
    {
      id: "service-43",
      title: "Soft Tissue Manipulation",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Soft Tissue Manipulation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad releases muscle tension. Our physiotherapy clinic near me provides manual soft tissue techniques for effective pain management.",
    },
    {
      id: "service-44",
      title: "Joint Pain Relief",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Joint Pain Relief at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad reduces inflammation and stiffness. Our chiropractor near me delivers targeted pain management through physiotherapy and joint mobilization.",
    },
    {
      id: "service-45",
      title: "Spine Health Therapy",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Spine Health Therapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad maintains optimal spinal function. Our chiropractor near me provides preventive pain management and physiotherapy for spine wellness.",
    },
    {
      id: "service-46",
      title: "Manual Osteopathic Treatment",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Manual Osteopathic Treatment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad uses skilled hands-on therapy. Our physiotherapy clinic near me delivers osteopathic techniques for comprehensive pain management.",
    },
    {
      id: "service-47",
      title: "Osteopathic Adjustment",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Osteopathic Adjustment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad corrects structural imbalances. Our chiropractor near me performs precise adjustments for effective pain management and healing.",
    },
    {
      id: "service-48",
      title: "Pain Relief Therapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Pain Relief Therapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad eliminates discomfort naturally. Our physiotherapy clinic near me combines multiple pain management techniques for rapid relief.",
    },
    {
      id: "service-49",
      title: "Chronic Pain Management",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Chronic Pain Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad controls persistent pain conditions. Our rehabilitation center provides long-term pain management through physiotherapy and chiropractic care.",
    },
    {
      id: "service-50",
      title: "Back Pain Relief",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Back Pain Relief at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad delivers fast-acting solutions. Our chiropractor near me uses proven pain management and physiotherapy methods for back pain elimination.",
    },
    {
      id: "service-51",
      title: "Neck Pain Relief",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Neck Pain Relief at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad eliminates cervical discomfort quickly. Our physiotherapy clinic near me provides effective pain management for acute and chronic neck pain.",
    },
    {
      id: "service-52",
      title: "Sciatica Pain Management",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Sciatica Pain Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad treats radiating leg pain. Our chiropractor near me delivers specialized pain management through physiotherapy and spinal adjustments.",
    },
    {
      id: "service-53",
      title: "Joint Pain Management",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Joint Pain Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad reduces inflammation and stiffness. Our physiotherapy clinic near me provides comprehensive pain management for all joint conditions.",
    },
    {
      id: "service-54",
      title: "Spine Pain Management",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Spine Pain Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad addresses all spinal pain. Our chiropractor near me combines physiotherapy and chiropractic techniques for complete spine pain relief.",
    },
    {
      id: "service-55",
      title: "Non-Surgical Pain Relief",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Non-Surgical Pain Relief at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad offers conservative treatment options. Our physiotherapy clinic near me provides effective pain management without surgery or medications.",
    },
    {
      id: "service-56",
      title: "Cervical Spondylosis Pain Management",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Cervical Spondylosis Pain Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad controls neck degeneration pain. Our chiropractor near me delivers specialized pain management and physiotherapy for cervical relief.",
    },
    {
      id: "service-57",
      title: "Frozen Shoulder Pain Treatment",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Frozen Shoulder Pain Treatment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad restores shoulder mobility. Our physiotherapy clinic near me provides targeted pain management and range-of-motion therapy.",
    },
    {
      id: "service-58",
      title: "Arthritis Pain Management",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Arthritis Pain Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad reduces joint inflammation. Our chiropractor near me combines physiotherapy and pain management for arthritis symptom control.",
    },
    {
      id: "service-59",
      title: "Post-Surgical Pain Management",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Post-Surgical Pain Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad controls recovery discomfort. Our rehabilitation center provides specialized pain management and physiotherapy after surgical procedures.",
    },
    {
      id: "service-60",
      title: "Sports Injury Pain Relief",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Sports Injury Pain Relief at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad treats athletic injuries. Our sports physiotherapy near me delivers rapid pain management for athletes and active individuals.",
    },
    {
      id: "service-61",
      title: "Manual Therapy for Pain",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Manual Therapy for Pain at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad uses hands-on techniques. Our chiropractor near me provides skilled manual therapy for effective pain management and healing.",
    },
    {
      id: "service-62",
      title: "Exercise Therapy for Pain",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Exercise Therapy for Pain at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad strengthens and heals. Our physiotherapy clinic near me designs therapeutic exercises for active pain management and recovery.",
    },
    {
      id: "service-63",
      title: "Cupping Therapy for Pain",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Cupping Therapy for Pain at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad relieves muscle tension. Our cupping therapy treatments provide alternative pain management for various musculoskeletal conditions.",
    },
    {
      id: "service-64",
      title: "Dry Needling for Pain Relief",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Dry Needling for Pain Relief at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad releases trigger points. Our dry needling technique delivers precise pain management for muscle knots and tension.",
    },
    {
      id: "service-65",
      title: "Kinesio Taping for Pain",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Kinesio Taping for Pain at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad supports injured tissues. Our physiotherapy clinic near me uses therapeutic taping for pain management and functional support.",
    },
    {
      id: "service-66",
      title: "FDM Therapy for Pain",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "FDM Therapy for Pain at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad treats fascial distortions. Our chiropractor near me provides Fascial Distortion Model therapy for rapid pain management.",
    },
    {
      id: "service-67",
      title: "Chronic Neck Pain Relief",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Chronic Neck Pain Relief at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad eliminates persistent cervical pain. Our physiotherapy clinic near me delivers long-term pain management for chronic neck conditions.",
    },
    {
      id: "service-68",
      title: "Chronic Back Pain Relief",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Chronic Back Pain Relief at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad resolves long-standing back pain. Our chiropractor near me provides sustained pain management through physiotherapy and chiropractic care.",
    },
    {
      id: "service-69",
      title: "Lower Back Pain Management",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Lower Back Pain Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad treats lumbar pain comprehensively. Our physiotherapy clinic near me specializes in pain management for lower back conditions.",
    },
    {
      id: "service-70",
      title: "Upper Back Pain Management",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Upper Back Pain Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad addresses thoracic discomfort. Our chiropractor near me provides targeted pain management and physiotherapy for upper back relief.",
    },
    {
      id: "service-71",
      title: "Shoulder Pain Management",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Shoulder Pain Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad restores shoulder function. Our physiotherapy clinic near me delivers comprehensive pain management for rotator cuff and shoulder injuries.",
    },
    {
      id: "service-72",
      title: "Hip Pain Management",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Hip Pain Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad treats hip joint conditions. Our chiropractor near me provides effective pain management through physiotherapy and manual therapy.",
    },
    {
      id: "service-73",
      title: "Knee Pain Management",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Knee Pain Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad addresses knee joint issues. Our physiotherapy clinic near me delivers specialized pain management for arthritis, ligament, and meniscus injuries.",
    },
    {
      id: "service-74",
      title: "Ankle Pain Management",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Ankle Pain Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad treats sprains and instability. Our chiropractor near me provides targeted pain management and physiotherapy for ankle recovery.",
    },
    {
      id: "service-75",
      title: "Foot Pain Management",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Foot Pain Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad relieves plantar and arch pain. Our physiotherapy clinic near me offers comprehensive pain management for foot conditions.",
    },
    {
      id: "service-81",
      title: "Sciatica Pain Treatment",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Sciatica Pain Treatment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad targets nerve compression pain. Our chiropractor near me delivers specialized pain management and physiotherapy for sciatic relief.",
    },
    {
      id: "service-83",
      title: "Spine Pain Treatment",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Spine Pain Treatment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad addresses all spinal conditions. Our chiropractor near me delivers comprehensive pain management through physiotherapy and spinal adjustments.",
    },
    {
      id: "service-84",
      title: "Cervical Spondylosis Management",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Cervical Spondylosis Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad controls neck arthritis progression. Our physiotherapy clinic near me provides ongoing pain management for cervical degeneration.",
    },
    {
      id: "service-85",
      title: "Frozen Shoulder Management",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Frozen Shoulder Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad restores shoulder range of motion. Our chiropractor near me delivers specialized pain management and physiotherapy for adhesive capsulitis.",
    },
    {
      id: "service-86",
      title: "Arthritis Pain Treatment",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Arthritis Pain Treatment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad reduces joint inflammation and stiffness. Our physiotherapy clinic near me provides comprehensive pain management for arthritic conditions.",
    },
    {
      id: "service-87",
      title: "Post-Surgical Pain Treatment",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Post-Surgical Pain Treatment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad manages recovery discomfort. Our rehabilitation center delivers specialized pain management and physiotherapy after surgery.",
    },
    {
      id: "service-88",
      title: "Sports Injury Pain Management",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Sports Injury Pain Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad treats athletic trauma. Our sports physiotherapy near me provides rapid pain management and recovery for sports injuries.",
    },
    {
      id: "service-89",
      title: "Manual Pain Relief Therapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Manual Pain Relief Therapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad uses hands-on healing techniques. Our chiropractor near me delivers skilled manual therapy for effective pain management.",
    },
    {
      id: "service-90",
      title: "Exercise-Based Pain Management",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Exercise-Based Pain Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad uses therapeutic movement. Our physiotherapy clinic near me designs active rehabilitation programs for lasting pain relief.",
    },
    {
      id: "service-91",
      title: "Musculoskeletal Pain Management",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Musculoskeletal Pain Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad treats muscle and joint pain. Our chiropractor near me provides comprehensive pain management through physiotherapy techniques.",
    },
    {
      id: "service-92",
      title: "Post-Surgery Rehabilitation",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Post-Surgery Rehabilitation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad accelerates recovery after surgery. Our rehabilitation center provides specialized physiotherapy for optimal post-operative healing.",
    },
    {
      id: "service-93",
      title: "Sports Injury Rehabilitation",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Sports Injury Rehabilitation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad returns athletes to peak performance. Our sports physiotherapy near me delivers targeted rehabilitation for complete recovery.",
    },
    {
      id: "service-94",
      title: "Neuro Physiotherapy",
      category: "neuro",
      icon: "fa-brain",
      badge: "Neuro Rehab",
      description:
        "Neuro Physiotherapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad treats neurological conditions expertly. Our neuro physiotherapy programs provide specialized rehabilitation for stroke, paralysis, and brain injuries.",
    },
    {
      id: "service-95",
      title: "Accident Rehabilitation",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Accident Rehabilitation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad restores function after trauma. Our rehabilitation center delivers comprehensive physiotherapy and pain management for accident recovery.",
    },
    {
      id: "service-96",
      title: "Trauma Rehabilitation",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Trauma Rehabilitation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad heals injury-related conditions. Our rehabilitation center provides expert physiotherapy and pain management for traumatic injuries.",
    },
    {
      id: "service-97",
      title: "Post-Surgical Recovery",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Post-Surgical Recovery at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad optimizes healing after operations. Our rehabilitation center delivers specialized physiotherapy programs for faster post-surgical recovery.",
    },
    {
      id: "service-98",
      title: "Ankle Surgery Rehabilitation",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Ankle Surgery Rehabilitation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad restores ankle function post-surgery. Our rehabilitation center provides targeted physiotherapy for complete ankle recovery.",
    },
    {
      id: "service-99",
      title: "Hip Replacement Rehabilitation",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Hip Replacement Rehabilitation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad restores mobility after hip surgery. Our rehabilitation center delivers specialized physiotherapy for successful hip replacement recovery.",
    },
    {
      id: "service-100",
      title: "Knee Surgery Rehabilitation",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Knee Surgery Rehabilitation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad rebuilds strength after knee operations. Our rehabilitation center provides expert physiotherapy for optimal knee surgery recovery.",
    },
    {
      id: "service-101",
      title: "Shoulder Surgery Rehabilitation",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Shoulder Surgery Rehabilitation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Expert post-surgery recovery with pain management and physiotherapy techniques to restore strength, mobility, and function quickly.",
    },
    {
      id: "service-102",
      title: "Exercise Rehabilitation",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Exercise Rehabilitation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Customized therapeutic programs combining physiotherapy and sports physiotherapy techniques for effective pain management and recovery.",
    },
    {
      id: "service-103",
      title: "Movement Therapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Movement Therapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Specialized rehabilitation center services improving mobility through targeted physiotherapy and pain management techniques for optimal recovery.",
    },
    {
      id: "service-104",
      title: "Strength Training Rehabilitation",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Strength Training Rehabilitation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Advanced physiotherapy clinic programs rebuilding muscle strength with sports physiotherapy and pain management for lasting results.",
    },
    {
      id: "service-105",
      title: "Mobility Restoration Therapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Mobility Restoration Therapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Comprehensive rehabilitation center treatments enhancing movement through physiotherapy and pain management for complete recovery.",
    },
    {
      id: "service-106",
      title: "Functional Recovery Therapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Functional Recovery Therapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Expert physiotherapy clinic services restoring daily function with neuro physiotherapy and pain management techniques for independence.",
    },
    {
      id: "service-107",
      title: "Balance Training",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Balance Training at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Specialized rehabilitation center programs improving stability through neuro physiotherapy and physiotherapy techniques for fall prevention and confidence.",
    },
    {
      id: "service-108",
      title: "Coordination Training",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Coordination Training at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Advanced neuro physiotherapy programs enhancing motor skills through rehabilitation center techniques for improved daily function and performance.",
    },
    {
      id: "service-109",
      title: "Gait Training",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Gait Training at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Expert neuro physiotherapy and rehabilitation center services correcting walking patterns for improved mobility, balance, and independence.",
    },
    {
      id: "service-110",
      title: "Bell's Palsy Rehabilitation",
      category: "neuro",
      icon: "fa-brain",
      badge: "Neuro Rehab",
      description:
        "Bell's Palsy Rehabilitation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Specialized neuro physiotherapy treatments restoring facial function through rehabilitation center techniques and pain management for full recovery.",
    },
    {
      id: "service-111",
      title: "Paralysis Rehabilitation",
      category: "neuro",
      icon: "fa-brain",
      badge: "Neuro Rehab",
      description:
        "Paralysis Rehabilitation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Comprehensive physiotherapy for paralysis using neuro physiotherapy and rehabilitation center programs to restore movement and independence.",
    },
    {
      id: "service-112",
      title: "Nerve Injury Rehabilitation",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Nerve Injury Rehabilitation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Expert neuro physiotherapy and pain management techniques at our rehabilitation center promoting nerve healing and functional recovery.",
    },
    {
      id: "service-113",
      title: "Elderly Rehabilitation",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Elderly Rehabilitation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Compassionate rehabilitation center services with physiotherapy and pain management tailored for seniors to maintain mobility and independence.",
    },
    {
      id: "service-114",
      title: "Senior Rehabilitation Support",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Senior Rehabilitation Support at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Dedicated physiotherapy clinic programs offering pain management and rehabilitation center care to enhance senior quality of life.",
    },
    {
      id: "service-115",
      title: "Home-Based Rehabilitation",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Home-Based Rehabilitation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Convenient physiotherapy and pain management services delivered to your home by our rehabilitation center experts for comfort and recovery.",
    },
    {
      id: "service-116",
      title: "Long-Term Recovery Programme",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Long-Term Recovery Programme at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Comprehensive rehabilitation center plans with physiotherapy and pain management ensuring sustained recovery and improved quality of life.",
    },
    {
      id: "service-117",
      title: "Core Strengthening Programme",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Core Strengthening Programme at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Targeted sports physiotherapy and rehabilitation center exercises building core stability for pain management and injury prevention.",
    },
    {
      id: "service-118",
      title: "Physiotherapy Treatment",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Physiotherapy Treatment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Comprehensive physiotherapy clinic services offering pain management, cupping therapy, and dry needling for effective healing and recovery.",
    },
    {
      id: "service-119",
      title: "Manual Therapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Manual Therapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Expert hands-on physiotherapy and chiropractor techniques providing pain management and mobility restoration at our trusted rehabilitation center.",
    },
    {
      id: "service-120",
      title: "Exercise Therapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Exercise Therapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Personalized physiotherapy programs combining sports physiotherapy and pain management to rebuild strength, flexibility, and function effectively.",
    },
    {
      id: "service-121",
      title: "Kinesio Taping",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Kinesio Taping at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Advanced sports physiotherapy technique supporting muscles and joints for pain management and enhanced performance at our physiotherapy clinic.",
    },
    {
      id: "service-122",
      title: "Cupping Therapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Cupping Therapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Traditional cupping therapy combined with physiotherapy for effective pain management, muscle relaxation, and improved circulation at our clinic.",
    },
    {
      id: "service-123",
      title: "Dry Needling Therapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Dry Needling Therapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Precision dry needling technique integrated with physiotherapy for superior pain management and muscle tension relief at our clinic.",
    },
    {
      id: "service-124",
      title: "FDM Therapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "FDM Therapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Specialized Fascial Distortion Model treatment combining physiotherapy and pain management techniques for rapid recovery at our rehabilitation center.",
    },
    {
      id: "service-128",
      title: "Frozen Shoulder Treatment",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Frozen Shoulder Treatment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Expert physiotherapy and pain management with cupping therapy and dry needling restoring shoulder mobility and eliminating stiffness.",
    },
    {
      id: "service-135",
      title: "Elderly Physiotherapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Elderly Physiotherapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Gentle physiotherapy clinic services with pain management tailored for seniors maintaining mobility, strength, and independence at our center.",
    },
    {
      id: "service-136",
      title: "Home Physiotherapy Service",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Home Physiotherapy Service at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Professional physiotherapy and pain management delivered to your doorstep by our rehabilitation center experts for convenient recovery.",
    },
    {
      id: "service-140",
      title: "Chronic Pain Physiotherapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Chronic Pain Physiotherapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Comprehensive pain management with physiotherapy, dry needling, and cupping therapy providing long-term relief at our rehabilitation center.",
    },
    {
      id: "service-141",
      title: "Musculoskeletal Physiotherapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Musculoskeletal Physiotherapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Expert physiotherapy clinic treating muscle and joint conditions with pain management and chiropractor techniques for optimal recovery.",
    },
    {
      id: "service-142",
      title: "Movement Rehabilitation",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Movement Rehabilitation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Specialized rehabilitation center programs restoring natural movement through physiotherapy and pain management for improved daily function and mobility.",
    },
    {
      id: "service-143",
      title: "Strength & Mobility Training",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Strength & Mobility Training at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Comprehensive sports physiotherapy and rehabilitation center programs building strength and flexibility with pain management for peak performance.",
    },
    {
      id: "service-151",
      title: "Back Pain Physiotherapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Back Pain Physiotherapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Specialized pain management using physiotherapy, chiropractor care, cupping therapy, and dry needling eliminating back pain effectively.",
    },
    {
      id: "service-152",
      title: "Neck Pain Physiotherapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Neck Pain Physiotherapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Targeted pain management with physiotherapy, chiropractor adjustments, and cupping therapy restoring neck comfort and mobility.",
    },
    {
      id: "service-153",
      title: "Sciatica Physiotherapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Sciatica Physiotherapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Expert pain management through physiotherapy, chiropractor techniques, and dry needling alleviating sciatica pain and nerve irritation.",
    },
    {
      id: "service-154",
      title: "Frozen Shoulder Physiotherapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Frozen Shoulder Physiotherapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Effective pain management with physiotherapy, cupping therapy, and dry needling breaking up adhesions and restoring shoulder range.",
    },
    {
      id: "service-155",
      title: "Joint Pain Physiotherapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Joint Pain Physiotherapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Comprehensive pain management using physiotherapy, chiropractor care, and cupping therapy reducing inflammation and improving joint function.",
    },
    {
      id: "service-156",
      title: "Spine Pain Physiotherapy",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Spine Pain Physiotherapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Advanced pain management combining physiotherapy, chiropractor adjustments, and dry needling restoring spinal health and alignment.",
    },
    {
      id: "service-157",
      title: "Sports Injury Physiotherapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Sports Injury Physiotherapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Expert sports physiotherapy with pain management and rehabilitation center care returning athletes to competition faster and stronger.",
    },
    {
      id: "service-158",
      title: "Post-Surgical Physiotherapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Post-Surgical Physiotherapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Specialized rehabilitation center programs with physiotherapy and pain management optimizing post-operative recovery and function.",
    },
    {
      id: "service-159",
      title: "Posture Correction",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Posture Correction at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Expert chiropractor and physiotherapy services realigning your body for pain management and preventing chronic musculoskeletal problems.",
    },
    {
      id: "service-161",
      title: "Elderly Physiotherapy Support",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Elderly Physiotherapy Support at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Compassionate physiotherapy clinic care with pain management designed for seniors preserving mobility and enhancing quality of life.",
    },
    {
      id: "service-162",
      title: "Home Physiotherapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Home Physiotherapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Convenient physiotherapy and pain management services brought to your home by our rehabilitation center professionals for comfortable healing.",
    },
    {
      id: "service-163",
      title: "Cervical Spondylosis Physiotherapy",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Cervical Spondylosis Physiotherapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Targeted pain management using physiotherapy, chiropractor techniques, and cupping therapy easing cervical spine degeneration symptoms.",
    },
    {
      id: "service-164",
      title: "Bell's Palsy Physiotherapy",
      category: "neuro",
      icon: "fa-brain",
      badge: "Neuro Rehab",
      description:
        "Bell's Palsy Physiotherapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Expert neuro physiotherapy and rehabilitation center treatments using physiotherapy for paralysis to restore facial nerve function effectively.",
    },
    {
      id: "service-165",
      title: "Paralysis Physiotherapy",
      category: "neuro",
      icon: "fa-brain",
      badge: "Neuro Rehab",
      description:
        "Paralysis Physiotherapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Comprehensive physiotherapy for paralysis with neuro physiotherapy and rehabilitation center expertise rebuilding strength and independence.",
    },
    {
      id: "service-166",
      title: "Arthritis Physiotherapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Arthritis Physiotherapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Gentle pain management through physiotherapy and rehabilitation center techniques reducing arthritis inflammation and improving joint mobility.",
    },
    {
      id: "service-169",
      title: "Therapeutic Exercise Programme",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Therapeutic Exercise Programme at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Structured physiotherapy and sports physiotherapy programs with pain management rebuilding strength, flexibility, and endurance.",
    },
    {
      id: "service-170",
      title: "Movement Rehabilitation Programme",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Movement Rehabilitation Programme at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Comprehensive rehabilitation center services with physiotherapy and pain management restoring natural movement patterns and function.",
    },
    {
      id: "service-171",
      title: "Strength Training Programme",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Strength Training Programme at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Intensive sports physiotherapy and rehabilitation center programs building muscular strength with pain management for optimal performance.",
    },
    {
      id: "service-174",
      title: "Neuro Rehabilitation",
      category: "neuro",
      icon: "fa-brain",
      badge: "Neuro Rehab",
      description:
        "Neuro Rehabilitation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Specialized neuro physiotherapy and rehabilitation center programs treating neurological conditions with physiotherapy for paralysis and functional gains.",
    },
    {
      id: "service-177",
      title: "Post-Surgical Recovery Programme",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Post-Surgical Recovery Programme at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Structured rehabilitation center plans with physiotherapy and pain management maximizing surgical outcomes and speeding recovery.",
    },
    {
      id: "service-178",
      title: "Ankle Surgery Recovery",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Ankle Surgery Recovery at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Specialized post-surgery physiotherapy with pain management and rehabilitation center expertise restoring ankle strength and mobility.",
    },
    {
      id: "service-179",
      title: "Hip Replacement Recovery",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Hip Replacement Recovery at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Expert rehabilitation center programs with physiotherapy and pain management optimizing hip replacement outcomes and functional independence.",
    },
    {
      id: "service-180",
      title: "Knee Surgery Recovery",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Knee Surgery Recovery at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Comprehensive post-surgery physiotherapy with pain management and rehabilitation center care rebuilding knee strength and range of motion.",
    },
    {
      id: "service-181",
      title: "Shoulder Surgery Recovery",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Shoulder Surgery Recovery at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Specialized physiotherapy and pain management at our rehabilitation center restoring shoulder function and mobility after surgical procedures.",
    },
    {
      id: "service-182",
      title: "Exercise Rehabilitation Programme",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Exercise Rehabilitation Programme at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Customized physiotherapy and sports physiotherapy programs with pain management building strength, endurance, and functional capacity.",
    },
    {
      id: "service-183",
      title: "Movement Therapy Programme",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Movement Therapy Programme at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Specialized rehabilitation center services with physiotherapy and pain management improving movement quality and reducing dysfunction.",
    },
    {
      id: "service-184",
      title: "Strength & Conditioning Programme",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Strength & Conditioning Programme at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Advanced sports physiotherapy and rehabilitation center training with pain management maximizing athletic performance and resilience.",
    },
    {
      id: "service-185",
      title: "Mobility Restoration Programme",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Mobility Restoration Programme at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Comprehensive rehabilitation center treatments with physiotherapy and pain management recovering full range of motion and flexibility.",
    },
    {
      id: "service-186",
      title: "Functional Recovery Programme",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Functional Recovery Programme at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Expert physiotherapy clinic programs with neuro physiotherapy and pain management restoring daily living abilities and independence.",
    },
    {
      id: "service-187",
      title: "Balance & Coordination Training",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Balance & Coordination Training at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Specialized neuro physiotherapy and rehabilitation center exercises improving stability and motor control for fall prevention.",
    },
    {
      id: "service-188",
      title: "Gait Rehabilitation",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Gait Rehabilitation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Expert neuro physiotherapy and rehabilitation center programs correcting walking patterns with physiotherapy for improved mobility and safety.",
    },
    {
      id: "service-189",
      title: "Bell's Palsy Recovery",
      category: "neuro",
      icon: "fa-brain",
      badge: "Neuro Rehab",
      description:
        "Bell's Palsy Recovery at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Specialized neuro physiotherapy treatments at our rehabilitation center using physiotherapy for paralysis to restore facial nerve function.",
    },
    {
      id: "service-190",
      title: "Paralysis Recovery Programme",
      category: "neuro",
      icon: "fa-brain",
      badge: "Neuro Rehab",
      description:
        "Paralysis Recovery Programme at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Comprehensive physiotherapy for paralysis with neuro physiotherapy and rehabilitation center care rebuilding movement and strength.",
    },
    {
      id: "service-191",
      title: "Nerve Injury Recovery",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Nerve Injury Recovery at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Expert neuro physiotherapy and pain management at our rehabilitation center promoting nerve regeneration and functional restoration.",
    },
    {
      id: "service-192",
      title: "Elderly Rehabilitation Programme",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Elderly Rehabilitation Programme at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Gentle rehabilitation center services with physiotherapy and pain management tailored for seniors maintaining vitality and independence.",
    },
    {
      id: "service-193",
      title: "Senior Recovery Support",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Senior Recovery Support at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Compassionate physiotherapy clinic care with pain management and rehabilitation center expertise helping seniors recover strength and mobility.",
    },
    {
      id: "service-194",
      title: "Home-Based Rehabilitation Programme",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Home-Based Rehabilitation Programme at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Convenient physiotherapy and pain management delivered at home by our rehabilitation center professionals for comfortable recovery.",
    },
    {
      id: "service-195",
      title: "Long-Term Recovery Support",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Long-Term Recovery Support at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Ongoing rehabilitation center care with physiotherapy and pain management ensuring sustained improvement and quality of life.",
    },
    {
      id: "service-196",
      title: "Core Strengthening Rehabilitation",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Core Strengthening Rehabilitation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Targeted sports physiotherapy and rehabilitation center exercises building core stability with pain management for injury prevention.",
    },
    {
      id: "service-199",
      title: "Soft Tissue Therapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Soft Tissue Therapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Specialized physiotherapy techniques with cupping therapy and pain management releasing muscle tension and promoting tissue healing.",
    },
    {
      id: "service-200",
      title: "Sports Massage Therapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Sports Massage Therapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Professional sports physiotherapy massage with pain management enhancing performance, recovery, and preventing injuries at our clinic.",
    },
    {
      id: "service-201",
      title: "Muscle Pain Relief",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Muscle Pain Relief at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Expert physiotherapy and pain management techniques deliver fast relief. Our rehabilitation center uses advanced therapies to restore mobility.",
    },
    {
      id: "service-202",
      title: "Injury Prevention Therapy",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Injury Prevention Therapy at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Specialized physiotherapy clinic near me offering targeted programs. Our chiropractor and sports physiotherapy experts strengthen your body.",
    },
    {
      id: "service-203",
      title: "Post-Exercise Recovery",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Post-Exercise Recovery at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Advanced physiotherapy and pain management accelerate healing. Our rehabilitation center optimizes recovery with cupping therapy.",
    },
    {
      id: "service-204",
      title: "Athletic Performance Support",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Athletic Performance Support at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Sports physiotherapy near me enhances strength and endurance. Our chiropractor near me and dry needling services boost performance.",
    },
    {
      id: "service-205",
      title: "Cupping Therapy for Athletes",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Cupping Therapy for Athletes at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Specialized cupping therapy improves circulation and recovery. Our physiotherapy clinic near me enhances athletic performance.",
    },
    {
      id: "service-206",
      title: "Dry Needling for Sports Injuries",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Dry Needling for Sports Injuries at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Expert dry needling targets pain and muscle tension. Our sports physiotherapy near me accelerates injury recovery.",
    },
    {
      id: "service-207",
      title: "Kinesio Taping for Sports",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Kinesio Taping for Sports at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Advanced physiotherapy techniques support joints and muscles. Our rehabilitation center enhances athletic performance and recovery.",
    },
    {
      id: "service-208",
      title: "FDM Therapy for Athletes",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "FDM Therapy for Athletes at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Specialized physiotherapy clinic near me treats fascial distortions. Our chiropractor near me restores optimal movement patterns.",
    },
    {
      id: "service-210",
      title: "Sports Injury Treatment",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Sports Injury Treatment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Expert physiotherapy and chiropractor near me deliver effective care. Our rehabilitation center uses cupping therapy and dry needling.",
    },
    {
      id: "service-211",
      title: "Athletic Injury Management",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Athletic Injury Management at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Specialized sports physiotherapy near me prevents complications. Our pain management and physiotherapy clinic near me optimize healing.",
    },
    {
      id: "service-212",
      title: "Exercise Therapy for Athletes",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Exercise Therapy for Athletes at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Customized physiotherapy programs build strength and endurance. Our rehabilitation center delivers results-driven athletic training.",
    },
    {
      id: "service-213",
      title: "Manual Therapy for Sports Injuries",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Manual Therapy for Sports Injuries at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Expert physiotherapy and chiropractor techniques restore mobility. Our pain management approach accelerates sports recovery.",
    },
    {
      id: "service-214",
      title: "Post-Injury Rehabilitation",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Post-Injury Rehabilitation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Comprehensive rehabilitation center programs restore full function. Our physiotherapy clinic near me uses evidence-based recovery methods.",
    },
    {
      id: "service-215",
      title: "Injury Prevention Programme",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Injury Prevention Programme at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Proactive sports physiotherapy near me reduces injury risk. Our chiropractor near me strengthens vulnerable areas effectively.",
    },
    {
      id: "service-216",
      title: "Strength Training for Athletes",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Strength Training for Athletes at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Specialized physiotherapy programs maximize power and performance. Our rehabilitation center builds resilient, injury-resistant athletes.",
    },
    {
      id: "service-217",
      title: "Movement Rehabilitation for Athletes",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Movement Rehabilitation for Athletes at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Expert sports physiotherapy near me corrects movement patterns. Our physiotherapy clinic near me restores optimal function.",
    },
    {
      id: "service-218",
      title: "Functional Training for Sports",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Functional Training for Sports at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Advanced physiotherapy enhances sport-specific movements. Our rehabilitation center and chiropractor near me improve athletic performance.",
    },
    {
      id: "service-219",
      title: "Cupping Therapy for Sports Injuries",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Cupping Therapy for Sports Injuries at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Therapeutic cupping therapy reduces inflammation and pain. Our sports physiotherapy near me accelerates recovery naturally.",
    },
    {
      id: "service-220",
      title: "Dry Needling for Athletic Injuries",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Dry Needling for Athletic Injuries at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Precision dry needling releases muscle tension and trigger points. Our pain management and physiotherapy restore peak performance.",
    },
    {
      id: "service-221",
      title: "Kinesio Taping for Sports Performance",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Kinesio Taping for Sports Performance at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Professional physiotherapy clinic near me enhances stability. Our sports physiotherapy near me optimizes athletic output.",
    },
    {
      id: "service-222",
      title: "FDM Therapy for Sports Injuries",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "FDM Therapy for Sports Injuries at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Specialized physiotherapy targets fascial dysfunction. Our rehabilitation center and chiropractor near me restore movement quality.",
    },
    {
      id: "service-223",
      title: "Back Pain Treatment for Athletes",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Back Pain Treatment for Athletes at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Expert chiropractor near me and pain management eliminate discomfort. Our sports physiotherapy near me restores performance.",
    },
    {
      id: "service-224",
      title: "Neck Pain Treatment for Athletes",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Neck Pain Treatment for Athletes at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Specialized chiropractor near me and physiotherapy relieve tension. Our pain management techniques restore athletic function.",
    },
    {
      id: "service-225",
      title: "Joint Pain Treatment for Athletes",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Joint Pain Treatment for Athletes at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Advanced pain management and physiotherapy clinic near me reduce inflammation. Our rehabilitation center restores joint mobility.",
    },
    {
      id: "service-226",
      title: "Muscle Strain Rehabilitation",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Muscle Strain Rehabilitation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Expert physiotherapy and rehabilitation center services heal strains. Our sports physiotherapy near me prevents re-injury effectively.",
    },
    {
      id: "service-227",
      title: "Ligament Injury Rehabilitation",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Ligament Injury Rehabilitation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Comprehensive rehabilitation center programs restore ligament strength. Our physiotherapy clinic near me accelerates healing safely.",
    },
    {
      id: "service-228",
      title: "Tendon Injury Rehabilitation",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Tendon Injury Rehabilitation at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Boduppal, Hyderabad. Specialized physiotherapy and pain management repair tendon damage. Our rehabilitation center uses dry needling and cupping therapy.",
    },
    {
      id: "service-229",
      title: "Chiropractor in Boduppal",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Chiropractor in Boduppal at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Hyderabad. Expert chiropractor near me and physiotherapy deliver comprehensive spinal care. Our pain management and rehabilitation center restore optimal health.",
    },
    {
      id: "service-230",
      title: "Chiropractic care in Boduppal, Hyderabad",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Chiropractic care in Boduppal, Hyderabad at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC. Specialized chiropractor near me and physiotherapy clinic near me provide holistic treatment. Our pain management and rehabilitation center enhance wellness.",
    },
    {
      id: "service-231",
      title: "Spine adjustment in Boduppal",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Spine adjustment in Boduppal at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Hyderabad. Expert chiropractor near me and physiotherapy correct spinal misalignments. Our pain management and rehabilitation center restore proper alignment.",
    },
    {
      id: "service-232",
      title: "Physiotherapy in Boduppal",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Physiotherapy in Boduppal at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Hyderabad. Comprehensive physiotherapy clinic near me and rehabilitation center treat diverse conditions. Our chiropractor near me and pain management deliver exceptional care.",
    },
    {
      id: "service-233",
      title: "Physiotherapy clinic in Boduppal, Hyderabad",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Physiotherapy clinic in Boduppal, Hyderabad at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC. Expert physiotherapy clinic near me and rehabilitation center offer advanced treatments. Our chiropractor near me and pain management restore function.",
    },
    {
      id: "service-234",
      title: "Physical therapy in Boduppal",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Physical therapy in Boduppal at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Hyderabad. Specialized physiotherapy and rehabilitation center restore mobility and strength. Our chiropractor near me and pain management optimize recovery.",
    },
    {
      id: "service-235",
      title: "Physiotherapist in Boduppal, Hyderabad",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Physiotherapist in Boduppal, Hyderabad at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC. Expert physiotherapy clinic near me and chiropractor near me provide personalized care. Our rehabilitation center and pain management deliver results.",
    },
    {
      id: "service-236",
      title: "Licensed physiotherapist in Boduppal",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Licensed physiotherapist in Boduppal at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Hyderabad. Certified physiotherapy clinic near me and rehabilitation center ensure quality care. Our chiropractor near me and pain management meet highest standards.",
    },
    {
      id: "service-237",
      title: "Physical rehabilitation in Boduppal",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Physical rehabilitation in Boduppal at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Hyderabad. Comprehensive rehabilitation center and physiotherapy clinic near me restore function. Our chiropractor near me and pain management accelerate recovery.",
    },
    {
      id: "service-238",
      title: "Rehabilitation services in Boduppal, Hyderabad",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Rehabilitation services in Boduppal, Hyderabad at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC. Expert rehabilitation center and physiotherapy clinic near me treat diverse conditions. Our chiropractor near me and pain management deliver comprehensive care.",
    },
    {
      id: "service-239",
      title: "Pain relief clinic in Boduppal",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Pain relief clinic in Boduppal at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Hyderabad. Specialized pain management and physiotherapy clinic near me eliminate discomfort. Our chiropractor near me and rehabilitation center restore quality of life.",
    },
    {
      id: "service-240",
      title: "Pain control treatment in Boduppal, Hyderabad",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Pain control treatment in Boduppal, Hyderabad at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC. Expert pain management and physiotherapy reduce chronic discomfort. Our chiropractor near me and rehabilitation center provide lasting relief.",
    },
    {
      id: "service-241",
      title: "Pain management in Boduppal",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Pain management in Boduppal at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Hyderabad. Comprehensive pain management and physiotherapy clinic near me address all pain types. Our chiropractor near me and rehabilitation center restore comfort.",
    },
    {
      id: "service-242",
      title: "Pain management specialist in Boduppal, Hyderabad",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Pain management specialist in Boduppal, Hyderabad at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC. Expert pain management and physiotherapy clinic near me provide targeted relief. Our chiropractor near me and rehabilitation center deliver solutions.",
    },
    {
      id: "service-243",
      title: "Rehabilitation center in Boduppal, Hyderabad",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Rehabilitation center in Boduppal, Hyderabad at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC. Comprehensive rehabilitation center and physiotherapy clinic near me restore function. Our chiropractor near me and pain management ensure complete recovery.",
    },
    {
      id: "service-244",
      title: "Injury rehabilitation in Boduppal",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Injury rehabilitation in Boduppal at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Hyderabad. Expert rehabilitation center and physiotherapy clinic near me heal injuries. Our chiropractor near me and pain management accelerate recovery safely.",
    },
    {
      id: "service-245",
      title: "Sports medicine in Boduppal",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Sports medicine in Boduppal at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Hyderabad. Specialized sports physiotherapy near me and rehabilitation center treat athletic injuries. Our chiropractor near me and pain management optimize performance.",
    },
    {
      id: "service-246",
      title: "Sports injury treatment in Boduppal, Hyderabad",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Sports injury treatment in Boduppal, Hyderabad at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC. Expert sports physiotherapy near me and rehabilitation center heal athletic injuries. Our chiropractor near me and pain management restore performance.",
    },
    {
      id: "service-247",
      title: "Sports massage therapy in Boduppal",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Sports massage therapy in Boduppal at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Hyderabad. Specialized sports physiotherapy near me and cupping therapy enhance recovery. Our physiotherapy clinic near me and pain management boost performance.",
    },
    {
      id: "service-248",
      title: "Athletic massage in Boduppal, Hyderabad",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Athletic massage in Boduppal, Hyderabad at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC. Expert sports physiotherapy near me and physiotherapy clinic near me reduce muscle tension. Our rehabilitation center and pain management accelerate recovery.",
    },
    {
      id: "service-249",
      title: "Osteopathy in Boduppal",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Osteopathy in Boduppal at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC, Hyderabad. Holistic chiropractor near me and physiotherapy treat musculoskeletal conditions. Our pain management and rehabilitation center restore whole-body health.",
    },
    {
      id: "service-250",
      title: "Osteopathic treatment in Boduppal, Hyderabad",
      category: "pain",
      icon: "fa-shield-virus",
      badge: "Pain Management",
      description:
        "Osteopathic treatment in Boduppal, Hyderabad at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC. Specialized chiropractor near me and physiotherapy clinic near me provide manual therapy. Our pain management and rehabilitation center enhance wellness.",
    },
    {
      id: "service-251",
      title: "Chiropractic treatment in Boduppal, Hyderabad",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Chiropractic treatment in Boduppal, Hyderabad at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC. Expert chiropractor near me and physiotherapy clinic near me correct spinal issues. Our pain management and rehabilitation center restore optimal function.",
    },
    {
      id: "service-252",
      title: "Back pain chiropractor in Boduppal, Hyderabad",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Back pain chiropractor in Boduppal, Hyderabad at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC. Specialized chiropractor near me and pain management eliminate back discomfort. Our physiotherapy clinic near me and rehabilitation center restore mobility.",
    },
    {
      id: "service-253",
      title: "Best physiotherapy clinic in Boduppal, Hyderabad",
      category: "physiotherapy",
      icon: "fa-hand-holding-medical",
      badge: "Physiotherapy",
      description:
        "Best physiotherapy clinic in Boduppal, Hyderabad at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC. Premier physiotherapy clinic near me and rehabilitation center deliver exceptional care. Our chiropractor near me and pain management ensure superior results.",
    },
    {
      id: "service-254",
      title: "Neck pain chiropractor in Boduppal, Hyderabad",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Neck pain chiropractor in Boduppal, Hyderabad at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC. Expert chiropractor near me and pain management relieve cervical discomfort. Our physiotherapy clinic near me and rehabilitation center restore neck function.",
    },
    {
      id: "service-255",
      title: "Spine chiropractor in Boduppal, Hyderabad",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Spine chiropractor in Boduppal, Hyderabad at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC. Specialized chiropractor near me and physiotherapy optimize spinal health. Our pain management and rehabilitation center correct alignment issues.",
    },
    {
      id: "service-256",
      title: "Cervical spondylosis treatment in Boduppal, Hyderabad",
      category: "chiropractic",
      icon: "fa-bone",
      badge: "Chiropractic & Spine",
      description:
        "Cervical spondylosis treatment at DR.RENU'S PHYSIOTHERAPY CHIROPRACTIC in Boduppal, Hyderabad. Expert chiropractor care with dry needling and cupping therapy relieves neck pain, restores mobility, and improves quality of life.",
    },
  ],
  products: [
    {
      id: "product-1",
      title: "FDM (Fascial Distortion Model)",
      category: "Therapeutic Product / Tools",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOhAqt8zo0Vqzvb5JJc4FAyW4Q7MFIp9gOSJbvQSSBffzS&usqp=CAY&s=4",
      shortDesc:
        "Advanced anatomical assessment and soft tissue therapy system for instant fascial restriction release.",
      description:
        "The Fascial Distortion Model (FDM) is an anatomically grounded clinical system used to diagnose and resolve distortions within the fascia. At Dr. Renu's clinic, FDM techniques and tools are utilized by trained specialists to treat acute sports injuries, frozen shoulder, chronic myofascial pain, and stubborn scar adhesions.",
      features: [
        "Clinically proven soft tissue release",
        "Targeted fascia and trigger band treatment",
        "Rapid recovery of joint range of motion",
        "Used for sports injuries, sprains, and frozen shoulder",
      ],
    },
  ],
  gallery: [
    {
      id: "photo-1",
      url: "https://lh3.googleusercontent.com/zq9k6bG2qn1H5zAtnrWST9XUNLDcctmXxcu_Qa-4lhAe8ds-b3gc6pbkG-Bs_fp-pmxM0vF5ExiE6vCsvg=s0",
      caption:
        "Spine chiropractic adjustment and alignment therapy session at Dr. Renu's clinic",
    },
    {
      id: "photo-2",
      url: "https://lh3.googleusercontent.com/kI3or8aY0LpfG9jEB-XOJgwe3UCRrR7Dz8IK7sonDydGqeU4fpXBpbmpaqzxHf4K_0tIpVKXBEBBfDE4pA=s0",
      caption:
        "Advanced physiotherapy rehabilitation equipment and treatment beds",
    },
    {
      id: "photo-3",
      url: "https://lh3.googleusercontent.com/Ul7RXx7yRR1byzpmBOOQRKJ8aAbNz_vERsPx9rFAlDrbmxYtXxW2RJl1nGjqnCXzJZttx4F7bQeEUmxmJA=s0",
      caption: "Specialized manual therapy and neuro physiotherapy session",
    },
    {
      id: "photo-4",
      url: "https://lh3.googleusercontent.com/1nPdw_iF6Zd3BSHoQXktJD_mo4OCl52JzaDX2fDF7JK-EAVZA9bXyul62P6vd44KDRG_gjgvmY5OkooSHw=s0",
      caption: "Doctor consultation, spinal analysis, and diagnosis",
    },
    {
      id: "photo-5",
      url: "https://lh3.googleusercontent.com/FUgCKoIwR55qsHLrCobsREhQJriqgtn-BCnWeDL4bv_rtGpviVK07m6d_yRC_U0ekI-ZLMW7u46LpHnfFg=s0",
      caption: "Targeted posture correction and lumbar decompression therapy",
    },
    {
      id: "photo-6",
      url: "https://lh3.googleusercontent.com/SBlHvK4RGKYJOEh8quMsBBgTDT5sGWAE83VHi0yyV1AK8Wbyb8zWnkTIRvpmHN89fm-RGeP_MXMuKJHyBw=s0",
      caption: "Clean, hygienic, and modern treatment rooms in Boduppal",
    },
    {
      id: "photo-7",
      url: "https://lh3.googleusercontent.com/Q0k6gIHzglEt5DlkzooLmR6pzchLUZHweqAmx6y9gN-csCOaC8JY4P3qarncOVa043GgAlswPWehGmUr4A=s0",
      caption:
        "Dry needling and myofascial cupping therapy for chronic back pain",
    },
    {
      id: "photo-8",
      url: "https://lh3.googleusercontent.com/qtLysRexWCGH8XhE4cEBdDc6MFTZ5kNXsxfs3VsXEkKwbclRCG4QJJ3ootaKvoRuAPQR71CGAJ4T2Zm7kA=s0",
      caption: "Cervical spine mobilization and neck pain relief treatment",
    },
    {
      id: "photo-9",
      url: "https://lh3.googleusercontent.com/ootBeO_1mf_ki_qBaI3k7ABFiffT2knYxaWJU3s66ocNRGsQU6HfmTsM2E3cfNlDwdQyne3257zoBvqRMQ=s0",
      caption: "Pediatric and geriatric mobility recovery training",
    },
    {
      id: "photo-10",
      url: "https://lh3.googleusercontent.com/PL80vn1a2OEw-9bBJWjzKZT-9mhFOa9NKuWE2K2Q3chvCAAiRswJqUGNIH0WPV9TmxZQrb6yQsB1quXh4Q=s0",
      caption: "Patient rehabilitation and personalized therapeutic exercise",
    },
  ],
  reviews: [
    {
      author: "Kiran Kumar",
      rating: 5,
      date: "October 14, 2026",
      relativeTime: "Recent Review",
      avatar:
        "https://lh3.googleusercontent.com/a-/ALV-UjU36QPc-TEiY8V_7ua1jl0IoF384plDoFZWmk8LVdkTjHAw3us=s120-c-rp-mo-ba12-br100",
      text: "Dr. Bharath Adla is exceptional in treating spinal and neck issues. His diagnosis is prompt and the chiropractic adjustments gave me immense relief from the first session itself. Highly recommended for anyone suffering from spine and joint pains!",
    },
    {
      author: "SATHEESH BOMMAGANI",
      rating: 5,
      date: "October 6, 2026",
      relativeTime: "1 week ago",
      avatar:
        "https://lh3.googleusercontent.com/a/ACg8ocIlIKxJVn4nKi96wcihl623oEosaqZbrWA0T_0yMuDJ9YVJuZE=s120-c-rp-mo-br100",
      text: "Carring so much by doctor bharath sir. Explained clearly and with less price cleared my pack pain problem.",
    },
    {
      author: "Priyanka Mannem",
      rating: 5,
      date: "October 1, 2026",
      relativeTime: "2 weeks ago",
      avatar:
        "https://lh3.googleusercontent.com/a/ACg8ocJFCoydYtZj9yDd50BSNrDgP5szk9ElMCTWJDuP5ttG79as0A=s120-c-rp-mo-br100",
      text: "Very good treatment, honest suggestions. Highly satisfied with the doctor's approach and clinical expertise.",
    },
    {
      author: "Tika Pranami",
      rating: 5,
      date: "September 28, 2026",
      relativeTime: "3 weeks ago",
      avatar:
        "https://lh3.googleusercontent.com/a-/ALV-UjX0QANewwLK5jiahMcZ8gmOHdFs3nEdCC7YoeActAyspY-SU4Ce=s120-c-rp-mo-ba12-br100",
      text: "Exceptional customer service and very good treatment that I received in this Hospital. The Doctor is very professional and well knowledgeable as well all the staff are good. Want to give a Thanks To Dr. Rekha, Sai and Hemanth for their hard work. They really treat me and my pain in a amazing way. Would like to suggest people to come and take suggestions as well treatment for your Back pain. Special Physiotherapy.",
    },
    {
      author: "katta nikhila",
      rating: 5,
      date: "September 26, 2026",
      relativeTime: "3 weeks ago",
      avatar:
        "https://lh3.googleusercontent.com/a/ACg8ocJqJlC_Uunifd3KP0S38FwKd1FZZbm9PFhtIXqmVvV65Nc_yw=s120-c-rp-mo-br100",
      text: "Their Approach to everyone is soo warm, sir and his team take good care of everyone... especially rekha mam has done therapy to my kid one and half year with soo much of patience and she is soo friendly to my daughter... my daughter is doing so much better now... thank you Bharat sir and rekha mam.",
    },
    {
      author: "bharath reddy ganapuram",
      rating: 5,
      date: "September 20, 2026",
      relativeTime: "4 weeks ago",
      avatar:
        "https://lh3.googleusercontent.com/a-/ALV-UjVdpjS4grKZmHlIo4VDZFjm0YsaNCqpEwcdMkA54zikH_9x6OMQNg=s120-c-rp-mo-br100",
      text: "Naku 2 Years Nunchi Back Pain Problem Face Chesthuna. Friend suggestion tho Dr. Renu's Bharath Adla Sir tho treatment thiskunanu. 2 Sessions lo treatment chesharu, ippudu pain ledu clear ayyindi. Bharath Adla Sir chala patience tho chusaru and konni exercises follow avali ani chepparu. Thank you sir!",
    },
    {
      author: "Keshava K",
      rating: 5,
      date: "September 19, 2026",
      relativeTime: "1 month ago",
      avatar:
        "https://lh3.googleusercontent.com/a-/ALV-UjWaoHDAd-ghVDoKwaZfaOv93baOk3WC5idZ2O_j7IT5gPxxJAOb=s120-c-rp-mo-br100",
      text: "I am from Bangalore, suggested by relative of mine from Hyderabad. From past years I was suffering from Sciatica and posture problem and unable to walk comfort way. Today I am doing good after Dr. Bharat Adla sir advise and treatment (Without medicine). Thanks to you sir and your team!",
    },
    {
      author: "janifar b",
      rating: 5,
      date: "September 15, 2026",
      relativeTime: "1 month ago",
      avatar:
        "https://lh3.googleusercontent.com/a-/ALV-UjWHn3fYOx6H18keUTyao9ENZSy9lHJYeIEpWajhVIew_J5e4inG=s120-c-rp-mo-br100",
      text: "Great clinic with modern equipment and compassionate care. The treatment helped me overcome severe cervical issues that were affecting my sleep.",
    },
    {
      author: "vineeth jetti",
      rating: 5,
      date: "September 8, 2026",
      relativeTime: "1 month ago",
      avatar:
        "https://lh3.googleusercontent.com/a/ACg8ocL_-7kz1ViaoEfk251ZBU1TBSWqpDlrO7sftdKXGtZ0oI_JJQ=s120-c-rp-mo-br100",
      text: "I had a very good experience with the physiotherapy treatment after my ACL surgery. The proper guidance, personalized exercises, and consistent support helped me recover faster and regain my strength and mobility. I'm really happy with my progress and would highly recommend this physiotherapy team to anyone recovering from ACL surgery or looking for quality care. Thank you for the excellent care throughout my recovery journey!",
    },
    {
      author: "Bodige Manoja",
      rating: 5,
      date: "August 26, 2026",
      relativeTime: "2 months ago",
      avatar:
        "https://lh3.googleusercontent.com/a/ACg8ocKRpndfxPfHJp0lGm9DD0jZmmGxI4YW8gchU-khz_pjBZjXKgxt=s120-c-rp-mo-br100",
      text: "It was helpful for my recovery of backpain and the needle, cup therapy has given me quick relief. Thank you for giving me a very good treatment Bharat sir.",
    },
  ],
  posts: [
    {
      id: "post-1",
      slug: "post-surgery-ankle-rehabilitation-to-regain-strength-and-mobility",
      title:
        "Post-Surgery Ankle Rehabilitation to Regain Strength and Mobility",
      date: "October 14, 2026",
      readTime: "4 min read",
      category: "Rehabilitation",
      imageUrl:
        "https://lh3.googleusercontent.com/p/AF1QipMEjTUTyBjG_-pUDHwvNX8Wpgswp1HLWj1DBXOX",
      excerpt:
        "Recovering from ankle surgery doesn't have to slow your life down. At DR. RENU'S PHYSIOTHERAPY CHIROPRACTIC in Boduppal, Hyderabad, we offer personalised ankle rehabilitation plans designed to restore strength, balance, and confidence in every step.",
      content: `
        <p>Recovering from ankle surgery doesn't have to slow your life down. At DR. RENU'S PHYSIOTHERAPY CHIROPRACTIC in Boduppal, Hyderabad, we offer personalised ankle rehabilitation plans designed to restore strength, balance, and confidence in every step. If you're searching for physiotherapy near me or safe chiropractic treatment near me, our team focuses on gentle, evidence-based care.</p>
        
        <h3>Our Structured Ankle Rehabilitation Plan Includes:</h3>
        <ul>
          <li><strong>One-on-one assessment</strong> to understand your surgery, pain level, and daily activity needs</li>
          <li><strong>Tailored exercise programs</strong> to improve joint mobility, muscle strength, and walking pattern</li>
          <li><strong>Advanced manual therapy techniques</strong> from an experienced spine and ankle specialist often called among the best chiropractors in Hyderabad</li>
          <li><strong>Supportive pain management</strong> to reduce swelling, stiffness, and discomfort during recovery</li>
          <li><strong>Balance and gait training</strong> to help you walk, climb stairs, and return to regular activities safely</li>
          <li><strong>Guidance on home exercises and posture</strong> so you heal faster and avoid future injuries</li>
        </ul>
        <p>If you're looking for the best physiotherapy clinic near me after ankle surgery, visit DR. RENU'S PHYSIOTHERAPY CHIROPRACTIC in Boduppal, Hyderabad. Call now to book your post-surgery ankle rehab session and start walking with confidence again.</p>
      `,
    },
    {
      id: "post-2",
      slug: "celebrate-navratri-with-a-focus-on-movement-and-spine-health",
      title: "Celebrate Navratri With a Focus on Movement and Spine Health",
      date: "October 12, 2026",
      readTime: "3 min read",
      category: "Spine Wellness",
      imageUrl:
        "https://lh3.googleusercontent.com/p/AF1QipOM6Newev01bH8FxdOWzVGcumZp0rTLIm7JC6xM",
      excerpt:
        "Navratri Spine Care Special: Keep your spine flexible, pain-free, and energized during festival celebrations with expert tips and posture alignments.",
      content: `
        <p>During festive seasons like Navratri, long hours of standing, dancing, and preparing can put excessive strain on your lumbar and cervical spine. At DR. RENU'S CHIROPRACTIC CLINIC in Boduppal, we encourage our community to prioritize spinal mobility and ergonomic movement.</p>
        
        <h3>Festival Spine Care Tips:</h3>
        <ul>
          <li><strong>Warm-up before dance or long standing:</strong> Dynamic hamstring and calf stretches reduce stress on your lower back.</li>
          <li><strong>Wear supportive footwear:</strong> Avoid completely flat soles or prolonged high heels during festival celebrations.</li>
          <li><strong>Hydrate regularly:</strong> Intervertebral discs rely on adequate hydration to maintain their shock-absorbing properties.</li>
          <li><strong>Complimentary posture check:</strong> Drop by our Boduppal clinic for a preventive posture and spine alignment check.</li>
        </ul>
      `,
    },
    {
      id: "post-3",
      slug: "chiropractic-care-for-thoracic-outlet-syndrome-and-nerve-compression",
      title:
        "Chiropractic Care for Thoracic Outlet Syndrome & Nerve Compression",
      date: "October 12, 2026",
      readTime: "5 min read",
      category: "Chiropractic Care",
      imageUrl:
        "https://lh3.googleusercontent.com/p/AF1QipNoYgxVnDF8pcpG8smlch3E_u3PM9-VsaYSkT8S",
      excerpt:
        "Struggling with neck, shoulder, or arm pain, tingling, or weakness? These may be signs of thoracic outlet syndrome or nerve compression. We combine advanced chiropractic care and targeted physiotherapy to relieve pressure on nerves.",
      content: `
        <p>Struggling with neck, shoulder, or arm pain, tingling, or weakness? These may be signs of thoracic outlet syndrome or nerve compression. At DR. RENU'S PHYSIOTHERAPY CHIROPRACTIC in Boduppal, Hyderabad, we combine advanced chiropractic care and targeted physiotherapy to relieve pressure on nerves, restore mobility, and improve posture.</p>
        
        <h3>How We Treat Thoracic Outlet Syndrome & Nerve Compression:</h3>
        <ul>
          <li><strong>Detailed posture and spine assessment</strong> to identify the exact cause of nerve compression</li>
          <li><strong>Gentle chiropractic adjustments</strong> for the neck and upper back by an experienced spine chiropractor focused on long-term relief</li>
          <li><strong>Specialised exercises and manual therapy</strong> for thoracic outlet syndrome and cervical issues, including cervical spondylosis</li>
          <li><strong>Individualised pain management plans</strong> for neck, shoulder, and upper back pain, designed for working professionals and homemakers</li>
          <li><strong>Ergonomic and lifestyle guidance</strong> to prevent recurrence and support healthy posture in daily activities</li>
          <li><strong>Clean, well-equipped clinic</strong> in Boduppal with a caring team known by many patients as one of the best physiotherapy options in the area</li>
        </ul>
        <p>For safe, professional care for nerve compression and thoracic outlet issues, visit DR. RENU'S PHYSIOTHERAPY CHIROPRACTIC in Boduppal, Hyderabad, or call now to book your consultation.</p>
      `,
    },
    {
      id: "post-4",
      slug: "exercise-therapy-programs-for-a-stronger-lumbar-spine",
      title: "Exercise Therapy Programs for a Stronger Lumbar Spine",
      date: "October 11, 2026",
      readTime: "4 min read",
      category: "Physiotherapy",
      imageUrl:
        "https://lh3.googleusercontent.com/p/AF1QipNZbue594w4pMel_VrF3nCW_7XPAOLPK5yhq7Da",
      excerpt:
        "Struggling with lower back pain that keeps coming back? We design focused exercise therapy programs to strengthen your lumbar spine, improve posture and support long-term relief.",
      content: `
        <p>Struggling with lower back pain that keeps coming back? At DR. RENU'S PHYSIOTHERAPY CHIROPRACTIC in Boduppal, Hyderabad, we design focused exercise therapy programs to strengthen your lumbar spine, improve posture and support long-term relief.</p>
        
        <h3>Highlights of Our Lumbar Strengthening Program:</h3>
        <ul>
          <li><strong>Personalised lumbar strengthening plans</strong> based on your pain level, lifestyle and posture</li>
          <li><strong>Combination of chiropractic treatment and targeted exercises</strong> for disc issues, stiffness and chronic back pain</li>
          <li><strong>Gentle spine mobilisation</strong> from an experienced spine chiropractor in Hyderabad, ideal for office workers and homemakers</li>
          <li><strong>Supportive programs</strong> for cervical spondylosis treatment and neck pain, reducing dependence on painkillers</li>
          <li><strong>Advanced pain management options</strong> for sciatica, muscle spasms and sports-related spine injuries</li>
          <li><strong>One-on-one guidance</strong> to perform exercises correctly at home, helping you prevent future flare-ups</li>
        </ul>
        <p>If you're looking for the best physiotherapy clinic or back pain chiropractor in Boduppal, visit DR. RENU'S PHYSIOTHERAPY CHIROPRACTIC today.</p>
      `,
    },
    {
      id: "post-5",
      slug: "posture-correction-strategies-for-desk-workers-in-boduppal-hyderabad",
      title:
        "Posture Correction Strategies for Desk Workers in Boduppal, Hyderabad",
      date: "October 10, 2026",
      readTime: "4 min read",
      category: "Ergonomics",
      imageUrl:
        "https://lh3.googleusercontent.com/p/AF1QipO6WZfU4M7C7jQkT5w2EYK5pMkpsK4ibh37-ZJZ",
      excerpt:
        "Spending long hours at your desk can silently damage your spine, trigger neck and shoulder pain, and reduce productivity. Here are clinical strategies to keep your spine healthy.",
      content: `
        <p>Spending long hours at your desk can silently damage your spine, trigger neck and shoulder pain, and reduce your productivity. At DR. RENU'S PHYSIOTHERAPY CHIROPRACTIC in Boduppal, Hyderabad, we focus on posture correction, spine alignment and customised exercise plans so your workday feels lighter, safer and pain-free.</p>
        
        <h3>Key Desk Ergonomic Protocols:</h3>
        <ul>
          <li><strong>Detailed posture assessment</strong> for office and work-from-home setups</li>
          <li><strong>Ergonomic guidance</strong> on chair height, screen level and keyboard placement</li>
          <li><strong>Targeted chiropractic and physiotherapy care</strong> for neck, shoulder and back pain</li>
          <li><strong>Specialised programs</strong> for cervical spondylosis and long-term spine health</li>
          <li><strong>Gentle exercises</strong> you can do at your desk to prevent stiffness and fatigue</li>
          <li><strong>Ongoing pain management support</strong> tailored to desk workers and IT professionals</li>
        </ul>
      `,
    },
    {
      id: "post-6",
      slug: "home-based-neuro-physiotherapy-for-restoring-independence",
      title: "Home-Based Neuro Physiotherapy for Restoring Independence",
      date: "October 8, 2026",
      readTime: "4 min read",
      category: "Neuro Rehab",
      imageUrl:
        "https://lh3.googleusercontent.com/p/AF1QipMZrNZWf-dqCfkCngHBxjHzsLgYaJ0FZghn0aTy",
      excerpt:
        "Regain confidence, mobility and independence with personalised home-based neuro physiotherapy from DR. RENU'S PHYSIOTHERAPY CHIROPRACTIC in Boduppal, Hyderabad.",
      content: `
        <p>Regain confidence, mobility and independence with personalised home-based neuro physiotherapy from DR. RENU'S PHYSIOTHERAPY CHIROPRACTIC in Boduppal, Hyderabad. If you often search for physiotherapy near me or a trusted chiropractor near me, our expert, home-visit care brings advanced rehab and gentle spine-focused support right to your doorstep.</p>
        
        <h3>Home Neuro Physiotherapy Inclusions:</h3>
        <ul>
          <li><strong>Specialised neuro rehab at home</strong> for stroke, Parkinson's, balance issues and nerve-related weakness</li>
          <li><strong>Targeted spine care</strong> by an experienced spine chiropractor for back and neck problems affecting daily activities</li>
          <li><strong>Gentle, evidence-based chiropractic treatment</strong> near you to support posture, mobility and pain relief</li>
          <li><strong>Individualised exercise plans</strong> to improve walking, hand function, balance and overall independence</li>
          <li><strong>Safe, hygienic home visits</strong> across Boduppal and nearby areas, ideal for seniors and patients with limited mobility</li>
          <li><strong>Holistic pain management</strong> focused on cervical spondylosis, neck pain, back pain and long-term joint protection</li>
        </ul>
      `,
    },
    {
      id: "post-7",
      slug: "manual-therapy-techniques-to-ease-muscle-tension-and-stiffness",
      title: "Myofascial Release for Spine Pain - Manual Therapy",
      date: "October 7, 2026",
      readTime: "4 min read",
      category: "Manual Therapy",
      imageUrl:
        "https://lh3.googleusercontent.com/p/AF1QipPGUrK_BTwuBkWXei6u-U3hVOJCN_YuUigd3igG",
      excerpt:
        "Tight, sore muscles slowing you down? We use advanced manual therapy and gentle chiropractic care to release deep muscle tension, improve flexibility, and support long-term joint health.",
      content: `
        <p>Tight, sore muscles slowing you down? At DR. RENU'S PHYSIOTHERAPY CHIROPRACTIC in Boduppal, Hyderabad, we use advanced manual therapy and gentle chiropractic care to release deep muscle tension, improve flexibility, and support long-term joint health.</p>
        
        <h3>Techniques We Employ:</h3>
        <ul>
          <li><strong>Targeted soft-tissue release</strong> to ease stiffness from long sitting, driving, or work-from-home postures</li>
          <li><strong>Joint mobilization techniques</strong> guided by an experienced spine chiropractor for smoother, pain-free movement</li>
          <li><strong>Clinical trigger-point therapy</strong> to reduce knots, spasms, and recurring neck and shoulder tightness</li>
          <li><strong>Safe care options</strong> for back and neck issues, including support for cervical spondylosis and chronic back pain</li>
          <li><strong>Dry needling and cupping integration</strong> for rapid muscle decompression</li>
        </ul>
      `,
    },
    {
      id: "post-8",
      slug: "non-surgical-pain-relief-for-degenerative-spine-problems",
      title: "Non-Surgical Pain Relief for Degenerative Spine Problems",
      date: "October 5, 2026",
      readTime: "5 min read",
      category: "Spine Care",
      imageUrl:
        "https://lh3.googleusercontent.com/p/AF1QipNKb4ZLAlUyk2gAa00H5KjHTdR9-rHzuSERIhVn",
      excerpt:
        "Living with neck or back pain from degenerative spine conditions can affect every part of your day. We focus on non-surgical, evidence-based care to reduce pain and help you avoid unnecessary procedures.",
      content: `
        <p>Living with neck or back pain from degenerative spine conditions can affect every part of your day. At DR. RENU'S PHYSIOTHERAPY CHIROPRACTIC in Boduppal, Hyderabad, we focus on non-surgical, evidence-based care to reduce pain, improve movement, and help you avoid unnecessary procedures.</p>
        
        <h3>Our Non-Surgical Protocol:</h3>
        <ul>
          <li><strong>Comprehensive spine assessment</strong> by experienced chiropractor and physiotherapist in one place</li>
          <li><strong>Gentle chiropractic adjustments</strong> for neck, mid-back, and lower back to relieve pressure on joints and nerves</li>
          <li><strong>Targeted physiotherapy</strong> for disc degeneration, cervical spondylosis, and chronic back pain with customised exercise plans</li>
          <li><strong>Drug-free pain management</strong> using manual therapy, mobilisation, electrotherapy, and posture correction</li>
          <li><strong>Special focus on office workers and homemakers</strong> with long-term neck and back strain</li>
        </ul>
      `,
    },
    {
      id: "post-9",
      slug: "integrated-chiropractic-and-physiotherapy-for-cervical-spondylosis-relief",
      title:
        "Integrated Chiropractic & Physiotherapy for Cervical Spondylosis Relief",
      date: "October 4, 2026",
      readTime: "5 min read",
      category: "Chiropractic Care",
      imageUrl:
        "https://lh3.googleusercontent.com/p/AF1QipNPfCpjLIv38XgneYb8tpBbp1UMxqLt2xK-x9Gq",
      excerpt:
        "Neck pain, stiffness, tingling in the arms or frequent headaches can all be signs of cervical spondylosis. We combine advanced chiropractic care with evidence-based physiotherapy for safe recovery.",
      content: `
        <p>Neck pain, stiffness, tingling in the arms or frequent headaches can all be signs of cervical spondylosis. At DR. RENU'S PHYSIOTHERAPY CHIROPRACTIC in Boduppal, Hyderabad, we combine advanced chiropractic care with evidence-based physiotherapy for safe, drug-free recovery.</p>
        
        <h3>Integrated Protocol Highlights:</h3>
        <ul>
          <li><strong>Detailed spine and posture assessment</strong> to design a personalised cervical spondylosis treatment plan</li>
          <li><strong>Gentle chiropractic adjustments</strong> by an experienced spine chiropractor for improved joint alignment and mobility</li>
          <li><strong>Targeted physiotherapy exercises</strong> and manual therapy to strengthen neck and shoulder muscles</li>
          <li><strong>Non-surgical neck pain management</strong> with ergonomic advice for work-from-home and desk professionals</li>
          <li><strong>Clean, well-equipped clinic</strong> with one-on-one attention</li>
        </ul>
      `,
    },
    {
      id: "post-10",
      slug: "physiotherapy-rehabilitation-after-hip-replacement-surgery",
      title: "Physiotherapy Rehabilitation After Hip Replacement Surgery",
      date: "October 3, 2026",
      readTime: "4 min read",
      category: "Rehabilitation",
      imageUrl:
        "https://lh3.googleusercontent.com/p/AF1QipNBFyUa2F4S0W641-bntSEMepgAJe0pWhB7Pvie",
      excerpt:
        "Recovering from hip replacement surgery is easier and safer with the right physiotherapy support. We offer personalised rehab plans that restore strength, balance, and confidence.",
      content: `
        <p>Recovering from hip replacement surgery is easier and safer with the right physiotherapy support. At DR. RENU'S PHYSIOTHERAPY CHIROPRACTIC in Boduppal, Hyderabad, we offer personalised rehab plans that restore strength, balance, and confidence in your daily movements.</p>
        
        <h3>Post-Hip-Replacement Protocol:</h3>
        <ul>
          <li><strong>Step-by-step post-surgery rehab protocols</strong> designed to match your surgeon's advice and your healing pace</li>
          <li><strong>Targeted exercises</strong> to improve walking pattern, hip mobility, and muscle strength so you can return to routine activities faster</li>
          <li><strong>Gentle joint and soft-tissue techniques</strong> from one of the best physiotherapy clinic teams in Hyderabad</li>
          <li><strong>Home-exercise guidance and posture correction</strong> to protect your new hip and prevent future joint or back issues</li>
        </ul>
      `,
    },
    {
      id: "post-11",
      slug: "chiropractic-adjustments-for-chronic-sciatica-and-radiating-leg-pain",
      title:
        "Chiropractic Adjustments for Chronic Sciatica & Radiating Leg Pain",
      date: "October 1, 2026",
      readTime: "5 min read",
      category: "Chiropractic Care",
      imageUrl:
        "https://lh3.googleusercontent.com/p/AF1QipPdzhSk1dYHytGcMXMtzcRCJ0pNudKCqCRSDy4C",
      excerpt:
        "Struggling with chronic sciatica, shooting leg pain, or numbness that just won't go away? We combine advanced chiropractic care and scientific physiotherapy to treat the root cause of your pain.",
      content: `
        <p>Struggling with chronic sciatica, shooting leg pain, or numbness that just won't go away? At DR. RENU'S PHYSIOTHERAPY CHIROPRACTIC in Boduppal, Hyderabad, we combine advanced chiropractic care and scientific physiotherapy to treat the root cause of your pain, not just the symptoms.</p>
        
        <h3>Key Sciatica Relief Interventions:</h3>
        <ul>
          <li><strong>Targeted spinal adjustments</strong> to reduce pressure on sciatic nerves and ease radiating leg pain</li>
          <li><strong>Individualised exercise and stretching plans</strong> designed by experienced therapists for long-term relief</li>
          <li><strong>Integrated neck and back care</strong> for patients who also need cervical spondylosis treatment</li>
          <li><strong>Gentle, evidence-based techniques</strong> from a spine chiropractor focused on posture, alignment, and safe recovery</li>
        </ul>
      `,
    },
    {
      id: "post-12",
      slug: "chiropractic-adjustments-for-relieving-chronic-lower-back-pain",
      title: "Chiropractic Adjustments for Relieving Chronic Lower Back Pain",
      date: "September 30, 2026",
      readTime: "5 min read",
      category: "Chiropractic Care",
      imageUrl:
        "https://lh3.googleusercontent.com/p/AF1QipMCTOwhW831Omg1zJu05bEU3tcBGoSVUBL4J5SE",
      excerpt:
        "Struggling with stubborn lower back pain that keeps coming back? At DR. RENU'S PHYSIOTHERAPY CHIROPRACTIC in Boduppal, Hyderabad, we combine expert chiropractic care with advanced physiotherapy to relieve chronic pain and improve spine health.",
      content: `
        <p>Struggling with stubborn lower back pain that keeps coming back? At DR. RENU'S PHYSIOTHERAPY CHIROPRACTIC in Boduppal, Hyderabad, we combine expert chiropractic care with advanced physiotherapy to relieve chronic pain and improve spine health.</p>
        
        <h3>Why Our Lower Back Care Works:</h3>
        <ul>
          <li><strong>Gentle, precise spinal adjustments</strong> to reduce pressure on nerves and ease chronic lower back pain</li>
          <li><strong>Integrated chiropractic and physiotherapy plans</strong> designed by experienced doctors for long-term relief</li>
          <li><strong>Special focus on spine alignment</strong>, making us a trusted choice for people looking for a spine chiropractor near me in Boduppal</li>
          <li><strong>Guidance on posture, ergonomics, and home exercises</strong> to prevent flare-ups and avoid future injuries</li>
          <li><strong>Clean, well-equipped clinic</strong> with a caring team</li>
        </ul>
      `,
    },
  ],
  faqs: [
    {
      question: "What should I include in my enquiry?",
      answer:
        "Let us know what symptoms you are experiencing (e.g. back pain, sciatica, neck stiffness, sports injury, or post-surgery rehab), how long you have had the issue, and any preferred dates or times for your visit. This helps Dr. Bharath Adla and our team prepare the most suitable evaluation plan for you.",
    },
    {
      question: "Can I ask about a specific treatment or product like FDM?",
      answer:
        "Yes, absolutely! You can browse our Products & Services section and click 'Enquire' on any service or product to send a pre-filled WhatsApp message directly to our clinic team for instant availability and pricing details.",
    },
    {
      question: "Where is the clinic located in Hyderabad?",
      answer:
        "We are located at LAXMAREDDY RESIDENCY, Laxma reddy residency, Sai baba temple, 55-5/7/G1, road, beside Life Spring Hospitals, opposite to Studioseven family saloon, Buddha Nagar Colony, Mallikarjuna Nagar, Boduppal, Hyderabad, Telangana 500092. Free parking is available nearby.",
    },
    {
      question:
        "What are your clinic opening hours and do you accept walk-ins?",
      answer:
        "Our clinic is open Monday through Saturday from 9:00 AM to 9:00 PM, and on Sundays from 9:00 AM to 1:00 PM. While walk-ins are welcomed, we strongly recommend booking a prior appointment via call or WhatsApp at +91 91822 58839 to avoid waiting times.",
    },
    {
      question: "Is chiropractic treatment safe and does it hurt?",
      answer:
        "Chiropractic adjustments by a certified practitioner like Dr. Bharath Adla are gentle, highly targeted, and exceptionally safe. Most patients experience immediate relief from tension and stiffness. A thorough physical and neurological evaluation is performed before any adjustment is made.",
    },
    {
      question: "Do you offer home-based neuro physiotherapy visits?",
      answer:
        "Yes! For seniors, stroke survivors, and patients with limited mobility who cannot travel to the clinic, we provide personalized home-visit neuro physiotherapy across Boduppal and nearby areas in Hyderabad.",
    },
  ],
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = CLINIC_DATA;
}
