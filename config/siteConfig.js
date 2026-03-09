const siteConfig = {
  // ============================================================
  // BUSINESS INFO — Update these values for each client
  // ============================================================
  businessName: "Landman Electric Co",
  tagline: "Master Electrician Serving Huntsville Since 1985",
  phone: "(256) 534-0146",
  phoneHref: "tel:+12565340146",
  smsHref: "sms:+12565340146",
  email: "info@landman-electric-co.com",
  address: "3404 Meridian St N, Huntsville, AL 35811",
  licenseNumber: "Fully Licensed",
  yearEstablished: 1985,
  hoursOfOperation: "Mon-Fri: 7am - 6pm | Sat: 8am - 2pm",
  emergencyAvailable: true,

  // ============================================================
  // TRUST BAR
  // ============================================================
  trustBar: {
    credential: "Master Electrician",
  },

  // ============================================================
  // SERVICES
  // ============================================================
  services: [
    {
      title: "Residential Electrical",
      description:
        "Complete home wiring, rewiring, and electrical upgrades to keep your Huntsville family safe and comfortable.",
      icon: "House",
    },
    {
      title: "Commercial Electrical",
      description:
        "Reliable electrical installations and maintenance for Huntsville offices, retail spaces, and commercial properties.",
      icon: "Building2",
    },
    {
      title: "Emergency 24/7 Service",
      description:
        "Power outages, sparking outlets, tripped breakers — we respond fast, day or night, across the Huntsville area.",
      icon: "Siren",
    },
    {
      title: "Switchboard & Panel Upgrades",
      description:
        "Replace outdated electrical panels with modern, code-compliant breaker boxes to protect your Huntsville home.",
      icon: "PlugZap",
    },
    {
      title: "Lighting Installation",
      description:
        "LED upgrades, recessed lighting, outdoor lighting, and smart lighting systems for Huntsville homes and businesses.",
      icon: "Lightbulb",
    },
    {
      title: "EV Charger Installation",
      description:
        "Certified home and commercial electric vehicle charger installation throughout Huntsville and North Alabama.",
      icon: "BatteryCharging",
    },
  ],

  // ============================================================
  // ABOUT
  // ============================================================
  about: {
    headline: "Trusted. Local. Licensed.",
    text: "With over 40 years of hands-on experience, Barry Landman and the Landman Electric Co team have been the go-to electricians for Huntsville families and businesses since 1985. Built on honesty, integrity, and quality craftsmanship, every job is completed by a licensed, insured master electrician who treats your property like his own.",
    image: "/images/team.jpg",
  },

  // ============================================================
  // GOOGLE REVIEWS
  // ============================================================
  reviews: {
    rating: 5,
    totalReviews: 4,
    googleMapsUrl:
      "https://search.google.com/local/writereview?placeid=ChIJIRAHJygVYogRQUquNqYMQyU",
    items: [
      {
        author: "Leigh Beshears",
        rating: 5,
        date: "3 years ago",
        text: "I have known Barry and Myra Landman for over ten years. If there is a more honest, integrity filled, loving, generous, caring couple, I have yet to meet them. I would recommend their services without reservation.",
        avatar: null,
      },
      {
        author: "Chad Taylor",
        rating: 5,
        date: "6 years ago",
        text: "Barry the owner came out to my mother in laws home and looked at the circuit panel. I was wondering if it was over loaded. He was thorough and honest, come to find out everything was fine. I would recommend him for your electric needs. He has been doing this for 40 plus years.",
        avatar: null,
      },
      {
        author: "Jesse Doyle",
        rating: 5,
        date: "4 years ago",
        text: "Excellent electrical work, Barry and his team are true professionals. Highly recommend for any residential electrical needs in Huntsville.",
        avatar: null,
      },
    ],
  },

  // ============================================================
  // SERVICE AREA
  // ============================================================
  serviceArea: {
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103718.47822474728!2d-86.65454645!3d34.7303688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88626b67e8cd1223%3A0x5765a6a54f4e1a01!2sHuntsville%2C%20AL!5e0!3m2!1sen!2sus!4v1234567890",
    suburbs: [
      "Huntsville",
      "Madison",
      "Harvest",
      "Meridianville",
      "Hazel Green",
      "New Market",
      "Owens Cross Roads",
      "Hampton Cove",
      "Research Park",
      "Jones Valley",
      "Five Points",
      "Twickenham",
      "Monte Sano",
      "Big Cove",
      "Southeast Huntsville",
      "Northwest Huntsville",
    ],
  },

  // ============================================================
  // CONTACT FORM
  // ============================================================
  contactForm: {
    serviceOptions: [
      "Residential Electrical",
      "Commercial Electrical",
      "Emergency Call-Out",
      "Switchboard & Panel Upgrades",
      "Lighting Installation",
      "EV Charger Installation",
      "Other",
    ],
  },
};

export default siteConfig;
