import { Activity, Lightbulb, Heart, Star, BookOpen, LucideIcon } from "lucide-react";

export interface Pillar {
  id: string;
  name: string;
  icon: LucideIcon;
  img: string;
  desc: string;
}

export interface Place {
  name: string;
  img: string;
  span: string;
}

export const homeData = {
  legacy: {
    tagline: "Our Heritage",
    headline: "A vision that sparked a",
    highlight: "revolution",
    description: "What began on October 6, 1935 with just five students in mud huts has blossomed into one of the world's largest fully residential women's universities. Founded by Pandit Hiralal Shastri and Smt. Ratan Shastri in memory of their daughter Shantabai, Banasthali Vidyapith is a sanctuary where over 15,000 women forge their destinies—grounded in Indian ethos, simplicity, and reaching for global scientific horizons.",
    quote: "\"She who is rooted in her culture, flies the highest.\"",
    quoteAuthor: "— Pandit Hiralal & Ratan Shastri",
    image: "/scraped-images/167_arch-6.jpg"
  },
  panchmukhi: {
    tagline: "Our Educational Philosophy",
    headline: "Panchmukhi Shiksha",
    description: "The five dimensions of holistic development (Five-Fold Education). We do not just build careers; we forge complete, self-reliant, and morally grounded women leaders capable of transforming the world.",
    pillars: [
      { id: "physical", name: "Physical (Sharirik)", icon: Activity, img: "/scraped-images/145_Yoga1.png", desc: "Featuring our own licensed Gliding and Flying Club (BVGFC) with a 3,600-ft airstrip and Cessna training fleet, alongside equestrian sports, martial arts, swimming, and physical endurance." },
      { id: "practical", name: "Practical (Vyavaharik)", icon: Lightbulb, img: "/scraped-images/199_automation_1.jpg", desc: "Vocational mastery, engineering workshops, domestic crafts, and advanced laboratory research fostering true self-reliance and everyday competence." },
      { id: "aesthetic", name: "Aesthetic (Kala)", icon: Heart, img: "/scraped-images/213_sur_mandir_thumb.jpg", desc: "Classical Kathak & Bharatanatyam dance, vocal and instrumental music, painting, and visual arts cultivating profound emotional intelligence and cultural heritage." },
      { id: "moral", name: "Moral (Naitik)", icon: Star, img: "/scraped-images/141__DSC0211_Selected-for-website.JPG", desc: "Value-based education, Gandhian simplicity (Khadi ethos), ethics, and community service shaping character and social responsibility." },
      { id: "intellectual", name: "Intellectual (Boudhik)", icon: BookOpen, img: "/scraped-images/192_researchbooks.jpg", desc: "Rigorous academic excellence across Humanities, Sciences, Law, Management, and Engineering from school level up to doctoral (Ph.D.) research." }
    ] as Pillar[]
  },
  campus: {
    tagline: "A Living Community",
    headlinePart1: "An 850-Acre Sanctuary.",
    headlinePart2: "A Fully Residential Home.",
    description: "Experience an unparalleled residential life across 850 acres of greenery in Tonk District, Rajasthan—featuring 31 student hostels, cutting-edge laboratories, and self-contained community facilities.",
    places: [
      { name: "Central Library & Apaji Institute", img: "/scraped-images/192_researchbooks.jpg", span: "lg:col-span-2 lg:row-span-2" },
      { name: "Gliding & Flying Club (BVGFC)", img: "/scraped-images/150_flying.jpg", span: "lg:col-span-1 lg:row-span-1" },
      { name: "Equestrian Centre & Sports Complex", img: "/scraped-images/147_sports.jpg", span: "lg:col-span-1 lg:row-span-1" },
      { name: "31 Residential Hostels", img: "/scraped-images/215_hostel1_thumb.jpg", span: "lg:col-span-2 lg:row-span-1" },
    ] as Place[]
  }
};
