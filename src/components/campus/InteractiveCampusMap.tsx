"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  MapPin, 
  Compass, 
  Home, 
  BookOpen, 
  Trophy, 
  Radio, 
  Sparkles, 
  ZoomIn, 
  X, 
  CheckCircle2, 
  Plane, 
  Palette, 
  ArrowRight
} from "lucide-react";

export interface CampusZone {
  id: string;
  title: string;
  category: 'aviation' | 'hostels' | 'academic' | 'sports' | 'arts' | 'community';
  image: string;
  description: string;
  detailedInfo: string;
  stats: string;
  highlights: string[];
  zoneCode: string;
}

export const CAMPUS_ZONES: CampusZone[] = [
  {
    id: "bvgfc",
    title: "Gliding & Flying Club (BVGFC)",
    category: "aviation",
    image: "/scraped-images/150_flying.jpg",
    description: "Banasthali is the only women's university in India with its own licensed airfield, airstrip, and flight training school. Students train on Cessna 172 aircraft to earn Student Pilot and Commercial Pilot Licenses.",
    detailedInfo: "Established with a vision to make Indian women masters of the sky, the Banasthali Vidyapith Gliding & Flying Club features a dedicated runway, hangars, flight simulators, and DGCA-approved flight instructors. It was here that Flt. Lt. Avani Chaturvedi trained before becoming India's first female fighter pilot.",
    stats: "Licensed Airfield & Cessna Fleet",
    highlights: ["Cessna 152 & 172 Aircraft", "DGCA Approved Instructors", "Student & Commercial Pilot Licenses", "Flight Simulators"],
    zoneCode: "ZONE A-1 (AIRFIELD)"
  },
  {
    id: "vigyan-mandir",
    title: "Vigyan Mandir (Science Complex)",
    category: "academic",
    image: "/scraped-images/212_vigyan-mandir_thumb.jpg",
    description: "The central hub for natural and physical sciences, featuring advanced laboratories for physics, chemistry, electronics, and instrumentation.",
    detailedInfo: "Vigyan Mandir is a bustling architectural landmark housing state-of-the-art research instrumentation, nuclear physics labs, spectroscopy units, and organic chemistry research bays. It fosters scientific temper and autonomous experimentation.",
    stats: "Advanced Research Laboratories",
    highlights: ["Spectroscopy & HPLC Labs", "Nuclear & Atomic Physics", "Electronics & IoT Bays", "24/7 Research Access"],
    zoneCode: "ZONE B-1 (SCIENCE HUB)"
  },
  {
    id: "jeev-mandir",
    title: "Jeev Mandir (Biotechnology & Life Sciences)",
    category: "academic",
    image: "/scraped-images/264_Dept-JeevMandir.jpg",
    description: "Dedicated to biological sciences, bioinformatics, genetics, and pharmaceutical research with modern tissue culture facilities.",
    detailedInfo: "Equipped with laminar air flow units, gradient PCR machines, rotor-gene real-time PCR, cooling microfuges, and an ethical animal house, Jeev Mandir leads nationally in citrus database research and flora conservation.",
    stats: "Biotech & Pharma Hub",
    highlights: ["Plant Tissue Culture Lab", "Bioinformatics Supercomputing", "Ethical Animal House", "National SSR Citrus Database"],
    zoneCode: "ZONE B-2 (LIFE SCIENCES)"
  },
  {
    id: "apaji-institute",
    title: "Apaji Institute of Mathematics & Applied Computing (AIM & ACT)",
    category: "academic",
    image: "/scraped-images/199_automation_1.jpg",
    description: "A premier center of excellence for AI, computer science, mathematics, and IT research with world-class computing clusters.",
    detailedInfo: "Designed with striking red-stone architecture, AIM&ACT houses high-performance computing clusters, AI/ML research labs, and software incubation centers. Supported by Artech and Dalmia trusts, it produces top women technologists.",
    stats: "Center of Excellence in Computing",
    highlights: ["AI & Machine Learning Labs", "High-Performance Computing Cluster", "Software Incubation Cell", "IBM & CMS Collaboration"],
    zoneCode: "ZONE B-3 (TECH HUB)"
  },
  {
    id: "central-library",
    title: "Central Library & Digital Repository",
    category: "academic",
    image: "/scraped-images/192_researchbooks.jpg",
    description: "Housing over 2,000,000 books, rare manuscripts, research journals, and digital IEEE/Springer repositories in peaceful reading halls.",
    detailedInfo: "A serene, sunlit sanctuary for scholars, the Central Library provides RFID-enabled automated circulation, access to global academic journals, rare Vedic manuscripts, and private reading carrels for doctoral researchers.",
    stats: "2 Lakh+ Volumes & Digital Archives",
    highlights: ["2,000,000+ Print Volumes", "IEEE & Springer Digital Access", "Rare Vedic Manuscripts", "Quiet Research Reading Halls"],
    zoneCode: "ZONE C-1 (LIBRARY)"
  },
  {
    id: "vatsalya-mandir",
    title: "Vatsalya Mandir & Residential Hostels",
    category: "hostels",
    image: "/scraped-images/215_hostel1_thumb.jpg",
    description: "Part of the 31 modern residential hostels providing a safe, nourishing, and vibrant community home for over 15,000 women.",
    detailedInfo: "Banasthali is a 100% residential university. Our 31 hostels (including Vatsalya Mandir, Shanti Mandir, and Shakti Mandir) offer 24/7 security, solar water heaters, hygienic dining messes serving nutritious vegetarian meals, and high-speed Wi-Fi.",
    stats: "31 Student Hostels (15,000+ Residents)",
    highlights: ["100% Residential Security", "Nutritious Vegetarian Messes", "Solar Water Heaters & Wi-Fi", "Resident Female Wardens"],
    zoneCode: "ZONE D-1 (RESIDENTIAL)"
  },
  {
    id: "shri-shantabai-shiksha-kutir",
    title: "Shri Shantabai Shiksha Kutir (Historic Birthplace)",
    category: "hostels",
    image: "/scraped-images/216_staff_qur4_thimb.jpg",
    description: "The historic cradle of Banasthali where the university began in 1935 with just five students in mud huts.",
    detailedInfo: "Preserved with utmost reverence, this historic precinct commemorates where Pandit Hiralal Shastri and Smt. Ratan Shastri began teaching five girls in mud huts in memory of their daughter Shantabai. It stands as a sacred monument of simplicity and resolve.",
    stats: "Historic Birthplace (Est. 1935)",
    highlights: ["Original 1935 Mud Hut Architecture", "Founders' Memorial Shrine", "Heritage Meditation Lawn", "Living Museum of Simplicity"],
    zoneCode: "ZONE D-2 (HERITAGE)"
  },
  {
    id: "sports-complex",
    title: "Olympic Pool & Multi-Sports Complex",
    category: "sports",
    image: "/scraped-images/148_swimmingph.jpg",
    description: "Featuring an Olympic-size swimming pool, basketball and tennis courts, hockey fields, gymnasium, and indoor badminton stadia.",
    detailedInfo: "Physical education is compulsory under Panchmukhi Shiksha. This sprawling sports complex boasts an Olympic-standard swimming pool, synthetic tennis courts, floodlit basketball arenas, Kho-Kho fields, and a modern gymnastics hall.",
    stats: "Olympic Pool & Stadium Complex",
    highlights: ["Olympic-Size Swimming Pool", "Synthetic Basketball & Tennis Courts", "Indoor Badminton & Gymnastics", "National Coaching Staff"],
    zoneCode: "ZONE E-1 (SPORTS COMPLEX)"
  },
  {
    id: "equestrian",
    title: "Equestrian & Rifle Shooting Grounds",
    category: "sports",
    image: "/scraped-images/147_sports.jpg",
    description: "Compulsory physical endurance training featuring horse riding, rifle shooting ranges, NCC parade grounds, and obstacle courses.",
    detailedInfo: "To instill courage, physical poise, and leadership, Banasthali maintains a premier equestrian stable with trained horses and professional riding instructors, alongside a 10-meter air rifle shooting range and NCC parade grounds.",
    stats: "Equestrian Stables & Shooting Range",
    highlights: ["Thoroughbred Horse Stables", "10-Meter Air Rifle Shooting Range", "NCC Parade Grounds", "Obstacle & Endurance Course"],
    zoneCode: "ZONE E-2 (EQUESTRIAN)"
  },
  {
    id: "kala-mandir",
    title: "Kala Mandir (Fine Arts & Humanities)",
    category: "arts",
    image: "/scraped-images/213_sur_mandir_thumb.jpg",
    description: "A sanctuary for visual arts, classical music, dance, textile design, and literature, keeping Indian heritage alive.",
    detailedInfo: "Kala Mandir and Sur Mandir echo daily with the melodious strains of sitar, veena, Kathak ghungroos, and classical vocal ragas. It features expansive studios for oil painting, clay modeling, fresco, and sculpture.",
    stats: "Heritage Arts & Music Centre",
    highlights: ["Classical Kathak & Bharatanatyam", "Sitar, Veena & Vocal Studios", "Oil Painting & Sculpture Studios", "Annual Heritage Festivals"],
    zoneCode: "ZONE F-1 (ARTS & MUSIC)"
  },
  {
    id: "sanganeri-arts",
    title: "Sanganeri Printing & Batik Workshops",
    category: "arts",
    image: "/scraped-images/247_01.jpg",
    description: "Practical education studios where students learn authentic Rajasthani block printing, tie-and-dye (bandhej), pottery, and paper-mache.",
    detailedInfo: "Under the Practical Education (Kriyatmak Shiksha) pillar, students get hands-on experience in traditional handicrafts. The Sanganeri block printing and dyeing workshops empower students with entrepreneurial artisan skills.",
    stats: "Traditional Craft & Textile Studios",
    highlights: ["Authentic Block Printing & Dyeing", "Tie-and-Dye (Bandhej) Studios", "Paper-Mache & Pottery Workshops", "Artisan Entrepreneurship"],
    zoneCode: "ZONE F-2 (CRAFTS)"
  },
  {
    id: "radio-banasthali",
    title: "Radio Banasthali 90.4 MHz FM",
    category: "community",
    image: "/scraped-images/137_career-couns-1.jpg",
    description: "Banasthali's own community FM radio station broadcasting across a 30 km rural radius. Programs on health, agriculture, and folk culture are produced entirely by students.",
    detailedInfo: "As a pioneer in campus media, Radio Banasthali 90.4 FM serves as a vital community bridge. Student RJs and producers broadcast educational shows, women's health awareness, agricultural tips for farmers, and local folk music across surrounding villages.",
    stats: "90.4 MHz Community FM Station",
    highlights: ["Student RJs & Broadcast Producers", "30 Km Rural Broadcast Radius", "Women's Health & Farm Awareness", "Living Media Lab"],
    zoneCode: "ZONE G-1 (CAMPUS MEDIA)"
  },
  {
    id: "campus-market",
    title: "Community Market & Self-Contained City",
    category: "community",
    image: "/scraped-images/220_market1_thumb.jpg",
    description: "A self-contained mini-city featuring student canteens, cooperative stores, banks, post office, hospital, and community centers.",
    detailedInfo: "Banasthali is a self-sufficient ecosystem. The campus market features student cooperative grocery stores, SBI and UCO bank branches with ATMs, a post office, a 24/7 multispecialty hospital with resident female doctors, and lively student cafeterias.",
    stats: "850-Acre Self-Sufficient Ecosystem",
    highlights: ["24/7 Hospital & Resident Doctors", "SBI & UCO Bank Branches & ATMs", "Student Cooperative Stores", "Lively Campus Cafeterias"],
    zoneCode: "ZONE G-2 (COMMUNITY)"
  }
];

export default function InteractiveCampusMap() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeZone, setActiveZone] = useState<CampusZone | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredZones = CAMPUS_ZONES.filter(z => {
    const matchesCat = selectedCategory === "all" || z.category === selectedCategory;
    const matchesSearch = 
      z.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      z.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      z.zoneCode.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full bg-[#141212] py-16 px-4 md:px-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden my-12">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-small-label font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Campus Explorer • 850+ Acres</span>
          </div>
          <h2 className="text-section-heading font-garamond text-white tracking-wide">
            Discover the Banasthali Ecosystem
          </h2>
          <p className="text-white/60 text-body mt-3 leading-relaxed">
            From our licensed airfield and 31 residential hostels to Olympic sports complexes and science mandirs—explore the world&apos;s largest residential university for women.
          </p>
        </div>

        {/* Quick Stats Ticker Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 bg-white/5 p-4 rounded-2xl border border-white/10">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5">
            <div className="p-2.5 rounded-xl bg-gold/10 text-gold">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-card-title font-garamond font-bold text-white">850+ Acres</div>
              <div className="text-small-label text-white/50">Solar Powered Campus</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <div className="text-card-title font-garamond font-bold text-white">31 Hostels</div>
              <div className="text-small-label text-white/50">15,000+ Women Residents</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Plane className="w-5 h-5" />
            </div>
            <div>
              <div className="text-card-title font-garamond font-bold text-white">Licensed Airfield</div>
              <div className="text-small-label text-white/50">Cessna Flying Club</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <div className="text-card-title font-garamond font-bold text-white">90.4 MHz FM</div>
              <div className="text-small-label text-white/50">Student Community Radio</div>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 bg-white/5 p-4 rounded-2xl border border-white/10">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {[
              { id: 'all', label: 'All Zones (13)', icon: Compass },
              { id: 'aviation', label: 'Aviation & Airfield', icon: Plane },
              { id: 'academic', label: 'Science & Tech Mandirs', icon: BookOpen },
              { id: 'hostels', label: 'Residential Hostels', icon: Home },
              { id: 'sports', label: 'Olympic Sports & Riding', icon: Trophy },
              { id: 'arts', label: 'Kala & Craft Studios', icon: Palette },
              { id: 'community', label: 'Community & Radio FM', icon: Radio }
            ].map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-button font-medium transition-all flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? "bg-gold text-black font-semibold shadow-lg scale-105"
                      : "bg-black/30 text-white/70 hover:bg-white/10 hover:text-white border border-white/5"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search zones, labs, hostels..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-body text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>

        {/* Zone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredZones.map((zone) => (
              <motion.div
                key={zone.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveZone(zone)}
                className="bg-[#1c1919] border border-white/10 rounded-2xl overflow-hidden hover:border-gold/50 transition-all shadow-md group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative h-48 w-full overflow-hidden bg-black">
                    <Image
                      src={zone.image}
                      alt={zone.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                     sizes="100vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c1919] via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-lg text-small-label font-bold text-gold tracking-wider uppercase">
                      {zone.zoneCode}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full text-white group-hover:bg-gold group-hover:text-black transition-colors">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <span className="text-small-label font-semibold text-green-400 bg-green-500/10 px-2.5 py-0.5 rounded-md inline-block mb-2">
                      {zone.stats}
                    </span>
                    <h4 className="text-card-title font-garamond text-white font-semibold group-hover:text-gold transition-colors mb-2">
                      {zone.title}
                    </h4>
                    <p className="text-caption text-white/70 line-clamp-3 leading-relaxed font-light">
                      {zone.description}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-5 pb-5 pt-3 border-t border-white/10 flex items-center justify-between text-caption">
                  <span className="text-small-label text-white/40 italic">Click to explore zone</span>
                  <span className="text-button text-gold font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal / Lightbox for Detailed Zone View */}
        <AnimatePresence>
          {activeZone && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-[#1c1919] border border-gold/40 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative custom-scrollbar"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveZone(null)}
                  className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-white/20 text-white transition-colors border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Image */}
                <div className="relative h-64 sm:h-80 w-full bg-black">
                  <Image
                    src={activeZone.image}
                    alt={activeZone.title}
                    fill
                    className="object-cover"
                   sizes="100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1919] via-black/40 to-transparent flex items-end p-6">
                    <div>
                      <span className="px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold text-small-label font-bold uppercase tracking-wider mb-2 inline-block">
                        {activeZone.zoneCode}
                      </span>
                      <h3 className="text-section-heading font-garamond text-white font-bold">
                        {activeZone.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/10">
                    <span className="text-small-label text-white/60">Key Highlight Metric:</span>
                    <span className="text-body font-bold text-green-400 bg-green-500/10 px-3 py-1 rounded-xl border border-green-500/20">
                      {activeZone.stats}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-small-label font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-gold" />
                      About this Campus Precinct
                    </h4>
                    <p className="text-body text-white/80 leading-relaxed font-light">
                      {activeZone.detailedInfo}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-small-label font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      Precinct Facilities & Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeZone.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 bg-black/40 p-3 rounded-xl border border-white/5 text-caption text-white/90 font-medium">
                          <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-caption text-white/50 italic">
                      Part of Banasthali Vidyapith&apos;s 100% Residential Campus Ecosystem
                    </span>
                    <button
                      onClick={() => setActiveZone(null)}
                      className="px-6 py-2.5 rounded-xl bg-gold text-black font-semibold text-button hover:bg-gold/90 transition-all w-full sm:w-auto text-center shadow-lg"
                    >
                      Close Explorer
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
