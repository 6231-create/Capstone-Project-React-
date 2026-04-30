export const STATS = [
  { num: 4800, plus: "+", label: "Trips Completed" },
  { num: 12,   plus: "+", label: "Years Experience" },
  { num: 96,   plus: "%", label: "Happy Travellers" },
  { num: 180,  plus: "+", label: "Destinations" },
];

export const ITIN_DAYS = [
  {
    label: "Day 1",
    location: "Arrival – Seminyak",
    stops: [
      { time: "14:00", name: "Airport Arrival & Transfer",     note: "Private driver meets you at Ngurah Rai Airport",       icon: "fa-plane-arrival" },
      { time: "16:00", name: "Hotel Check-In",                 note: "Boutique pool villa in Seminyak",                      icon: "fa-hotel" },
      { time: "19:00", name: "Welcome Dinner at Merah Putih",  note: "Indonesian cuisine with ocean views",                  icon: "fa-utensils" },
    ],
  },
  {
    label: "Day 2",
    location: "Ubud – Rice Terraces",
    stops: [
      { time: "08:00", name: "Tegallalang Rice Terraces",      note: "UNESCO heritage sunrise walk",                         icon: "fa-mountain" },
      { time: "11:00", name: "Sacred Monkey Forest",           note: "Ancient temples surrounded by jungle",                 icon: "fa-tree" },
      { time: "14:00", name: "Ubud Art Market",                note: "Local crafts, batik, and souvenirs",                   icon: "fa-shopping-bag" },
      { time: "19:00", name: "Kecak Fire Dance Performance",   note: "Traditional Balinese dance at sunset temple",          icon: "fa-fire" },
    ],
  },
  {
    label: "Day 3",
    location: "Temples & Waterfalls",
    stops: [
      { time: "07:00", name: "Tirta Empul Holy Spring Temple", note: "Sacred purification bathing ritual",                   icon: "fa-water" },
      { time: "11:00", name: "Lempuyang Temple (Gates of Heaven)", note: "Iconic twin-gates with Agung backdrop",            icon: "fa-torii-gate" },
      { time: "15:00", name: "Sekumpul Waterfall Trek",        note: "Bali's most stunning hidden waterfall",                icon: "fa-tint" },
    ],
  },
  {
    label: "Day 4",
    location: "Mount Batur Sunrise",
    stops: [
      { time: "03:00", name: "Mount Batur Sunrise Trek",       note: "Pre-dawn hike to active volcano summit",               icon: "fa-hiking" },
      { time: "08:00", name: "Summit Breakfast",               note: "Eggs cooked by volcanic steam",                        icon: "fa-egg" },
      { time: "12:00", name: "Hot Springs Recovery",           note: "Volcanic hot spring soak in Kintamani",                icon: "fa-hot-tub" },
    ],
  },
  {
    label: "Day 5",
    location: "Nusa Penida Island",
    stops: [
      { time: "07:00", name: "Fast Boat to Nusa Penida",       note: "45-minute speedboat crossing",                         icon: "fa-ship" },
      { time: "09:00", name: "Kelingking Beach (T-Rex Cliff)", note: "Most photographed spot in Bali",                       icon: "fa-camera" },
      { time: "12:00", name: "Crystal Bay Snorkelling",        note: "Manta ray encounter (seasonal)",                       icon: "fa-fish" },
    ],
  },
];

export const BUDGET_CATS = [
  { name: "Accommodation", icon: "fa-hotel",       pct: 30, color: "#C9A84C" },
  { name: "Flights",       icon: "fa-plane",       pct: 30, color: "#8B6914" },
  { name: "Food & Dining", icon: "fa-utensils",    pct: 18, color: "#A0783A" },
  { name: "Activities",    icon: "fa-ticket-alt",  pct: 12, color: "#B8923E" },
  { name: "Transport",     icon: "fa-car",         pct: 7,  color: "#6A4F1A" },
  { name: "Miscellaneous", icon: "fa-shopping-bag",pct: 3,  color: "#9A7530" },
];

export const GALLERY_IMGS = [
  {
    thumb: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=200&q=80",
    full:  "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=900&q=80",
  },
  {
    thumb: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=200&q=80",
    full:  "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=900&q=80",
  },
  {
    thumb: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=200&q=80",
    full:  "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&q=80",
  },
  {
    thumb: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80",
    full:  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  },
];

export const AGENTS = [
  { name: "Sarah Johnson", role: "Asia Specialist",   img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&q=80", email: "sarah@journeydesk.com" },
  { name: "Marco Rossi",   role: "Europe & Med",      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80", email: "marco@journeydesk.com" },
  { name: "Emily Clarke",  role: "Adventure Travel",  img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&q=80", email: "emily@journeydesk.com" },
  { name: "David Park",    role: "Luxury & Bespoke",  img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&q=80", email: "david@journeydesk.com" },
];

export const TRIP_FAQS = [
  ["What is included in the package?",         "All accommodation, daily breakfast, guided tours, airport transfers, and welcome dinner. Flights are optional and can be added during checkout."],
  ["Is this trip suitable for solo travellers?","Absolutely! We have a vibrant solo community and many of our guests travel alone. You'll be matched with a small, like-minded group of 8–12 travellers."],
  ["What is the best time to visit Bali?",     "The dry season (April–October) is ideal. Our departures are scheduled accordingly. The shoulder months of April and October offer great value with fewer crowds."],
  ["Can I customise this itinerary?",          "Yes! Use our itinerary builder below to personalise your trip, or contact our travel experts for a fully bespoke package."],
];

export const CONTACT_FAQS = [
  ["How do I book a trip?",                      "Browse our destinations, choose your preferred package, and click 'Book This Trip'. Fill in your details and a travel expert will confirm within 24 hours with a personalised quote."],
  ["Can I pay in instalments?",                  "Yes! A 25% deposit secures your booking, with the balance due 60 days before departure."],
  ["What is your cancellation policy?",          "Cancellations more than 60 days before departure receive a full refund. 30–60 days: 50% refund. Under 30 days: no refund unless travel insurance applies."],
  ["Do you offer group discounts?",              "Groups of 6 or more receive a 10% discount. Groups of 12+ receive 15%."],
  ["Do you include travel insurance?",           "Travel insurance is not included by default but we strongly recommend it. We partner with leading providers."],
  ["Can I customise my itinerary?",              "Absolutely. Use our built-in itinerary builder or speak with a travel expert for a fully bespoke package."],
  ["What support is available during my trip?", "All our trips come with 24/7 emergency support and a dedicated WhatsApp line for your trip coordinator."],
  ["Are flights included in the price?",        "Trip prices shown are land-only. Flights can be added at checkout."],
];
