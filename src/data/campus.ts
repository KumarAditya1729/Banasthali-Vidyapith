export type BuildingCategory = "academic" | "hostel" | "admin" | "sports" | "medical" | "facility" | "landmark";

export interface CampusMarker {
  id: string;
  name: string;
  position: [number, number];
  category: BuildingCategory;
  description: string;
  facilities: string[];
  image: string;
  gallery?: string[];
  hours?: string;
}

export const campusCenter: [number, number] = [26.4022, 75.8752];

export const campusMarkers: CampusMarker[] = [
  {
    id: "main-gate",
    name: "Panchmukhi Main Gate",
    position: [26.4095, 75.8705],
    category: "landmark",
    description: "The grand entrance to the 850-acre Banasthali sanctuary, symbolising the five-fold education philosophy.",
    facilities: ["Security Post", "Helpdesk", "Visitor Lounge"],
    image: "/scraped-images/7_banasthali_panchmuki.gif",
    hours: "Open 24/7"
  },
  {
    id: "library",
    name: "Central Library",
    position: [26.4035, 75.8742],
    category: "academic",
    description: "A monumental repository of knowledge featuring over 300,000 volumes, rare manuscripts, and modern digital archives.",
    facilities: ["Reading Halls", "Digital Section", "Research Cubicles", "Wi-Fi"],
    image: "/scraped-images/0_headerimg.jpg",
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: "admin-block",
    name: "Administrative Building",
    position: [26.4042, 75.8758],
    category: "admin",
    description: "The administrative heart of the university handling admissions, academics, and official university affairs.",
    facilities: ["Admissions Office", "Vice Chancellor's Secretariat", "Registrar Office"],
    image: "/scraped-images/166_arch-5.jpg",
    hours: "10:00 AM - 5:00 PM (Closed Sundays)"
  },
  {
    id: "apaji-institute",
    name: "Apaji Institute of Mathematics & Applied Computer Technology",
    position: [26.4025, 75.8765],
    category: "academic",
    description: "A premier institute housing the departments of Computer Science, Mathematics, and Statistics, equipped with cutting-edge labs.",
    facilities: ["Computer Labs", "AI Research Centre", "Server Room", "Smart Classrooms"],
    image: "/scraped-images/166_arch-5.jpg",
    hours: "9:00 AM - 6:00 PM"
  },
  {
    id: "aviation",
    name: "Banasthali Aviation School (BVGFC)",
    position: [26.3985, 75.8820],
    category: "academic",
    description: "The pride of Banasthali featuring its own licensed airfield, offering Student Pilot License (SPL) and commercial flight training.",
    facilities: ["Runway", "Hangar", "Cessna Aircrafts", "Simulators"],
    image: "/scraped-images/0_headerimg.jpg",
    hours: "6:00 AM - 6:00 PM"
  },
  {
    id: "hostel-shantabai",
    name: "Shantabai Shiksha Kutir",
    position: [26.4005, 75.8725],
    category: "hostel",
    description: "One of the earliest and most historic residential buildings on campus, blending traditional architecture with modern amenities.",
    facilities: ["Dining Hall", "Recreation Room", "Lawns", "Solar Heating"],
    image: "/scraped-images/166_arch-5.jpg",
  },
  {
    id: "sports-complex",
    name: "Laxmibai Maidan",
    position: [26.4055, 75.8785],
    category: "sports",
    description: "A massive sports sanctuary featuring parade grounds, athletics tracks, equestrian facilities, and martial arts arenas.",
    facilities: ["Athletics Track", "Equestrian Ground", "Basketball Courts", "Parade Ground"],
    image: "/scraped-images/0_headerimg.jpg",
    hours: "5:00 AM - 8:00 PM"
  },
  {
    id: "hospital",
    name: "Arogya Mandir (Hospital)",
    position: [26.4012, 75.8710],
    category: "medical",
    description: "A fully equipped 60-bed hospital offering 24/7 medical care to students and staff.",
    facilities: ["Emergency Ward", "Pathology Lab", "Ambulance", "Pharmacy"],
    image: "/scraped-images/166_arch-5.jpg",
    hours: "Open 24/7"
  },
  {
    id: "shopping-complex",
    name: "Suryodaya Market",
    position: [26.4075, 75.8745],
    category: "facility",
    description: "The central hub for student daily needs, featuring stationery shops, cafeterias, banks, and utility stores.",
    facilities: ["Cafeteria", "Stationery", "SBI Branch", "Post Office"],
    image: "/scraped-images/0_headerimg.jpg",
    hours: "10:00 AM - 8:00 PM"
  }
];
