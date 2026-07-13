"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Clock, 
  Award, 
   
   
   
  ChevronRight, 
  Quote, 
  Landmark, 
  
  
  CheckCircle2
} from "lucide-react";

export interface TimelineMilestone {
  year: string;
  era: 'foundation' | 'university' | 'global';
  title: string;
  subtitle: string;
  description: string;
  detailedStory: string;
  image?: string;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  keyFigures: string[];
  impact: string;
}

export const HERITAGE_MILESTONES: TimelineMilestone[] = [
  {
    year: "1927",
    era: "foundation",
    title: "The Sacrifice for Rural Reconstruction",
    subtitle: "Pandit Hiralal Shastri steps down from Jaipur State administration",
    description: "Pandit Hiralal Shastri resigned his prestigious post of Secretary in the Home and Foreign Department of Jaipur State to dedicate his life to rural reconstruction and national service in the remote village of Banasthali.",
    detailedStory: "Deeply influenced by Mahatma Gandhi and the Indian independence movement, Pandit Hiralal Shastri chose a life of voluntary poverty and grassroots service. He moved to the remote, drought-prone village of Banasthali (then known as Vanasthali) with his wife Smt. Ratan Shastri to uplift rural peasantry, promote Khadi, and initiate social reform.",
    image: "/scraped-images/162_arch-1.jpg",
    quote: {
      text: "True freedom will not come from the corridors of power, but from the awakening and reconstruction of our thousands of villages.",
      author: "Pandit Hiralal Shastri",
      role: "Founder, Banasthali Vidyapith"
    },
    keyFigures: ["Pandit Hiralal Shastri", "Smt. Ratan Shastri"],
    impact: "Established the moral and philosophical foundation of grassroots nationalism and self-reliance at Banasthali."
  },
  {
    year: "1935",
    era: "foundation",
    title: "Birth of Shri Shantabai Shiksha Kutir",
    subtitle: "From five girls in mud huts: The Phoenix of Banasthali arises",
    description: "Following the sudden and tragic loss of their promising 12-year-old daughter Shantabai, Pandit Hiralal Shastri and Smt. Ratan Shastri founded an educational sanctuary for girls in humble mud huts on October 6, 1935.",
    detailedStory: "Shantabai had cherished dreams of working for women's liberation and national education when she grew up. When destiny cut her life short at age 12, her grieving parents resolved to turn their personal tragedy into a universal blessing for Indian daughters. With just five girls residing in mud huts, 'Shri Shantabai Shiksha Kutir' was born—owing its existence neither to a rich philanthropist's purse nor to state patronage, but arising like the fabled phoenix from the ashes of grief.",
    image: "/scraped-images/163_arch-2.jpg",
    quote: {
      text: "Banasthali is enshrined in my heart. The work being done here for the awakening of Indian womanhood is sacred and indispensable for our nation's freedom.",
      author: "Mahatma Gandhi",
      role: "Father of the Nation (Visited & Blessed Banasthali)"
    },
    keyFigures: ["Pandit Hiralal Shastri", "Smt. Ratan Shastri", "Shantabai (In Memoriam)"],
    impact: "Created India's first fully residential educational experiment dedicated exclusively to girl child empowerment."
  },
  {
    year: "1943",
    era: "foundation",
    title: "Adoption of the Name 'Banasthali Vidyapith'",
    subtitle: "Transition to higher education and formal degree programs",
    description: "As the initial batch of students matured, undergraduate degree courses were formally introduced, and the institution was renamed 'Banasthali Vidyapith' to reflect its status as a premier seat of learning.",
    detailedStory: "During the Quit India movement and the peak of the freedom struggle, Banasthali Vidyapith stood firm as a beacon of nationalistic education. The curriculum was uniquely tailored without British colonial influence, emphasizing synthesis of spiritual heritage, physical endurance, and intellectual rigor through the pioneering 'Panchmukhi Shiksha' (Five-Fold Education) system.",
    image: "/scraped-images/143__DSC0217_Selected-for-website.JPG",
    quote: {
      text: "If I had been a girl, I would have come to Banasthali Vidyapith for my education. This institution represents the true soul of independent India.",
      author: "Pandit Jawaharlal Nehru",
      role: "First Prime Minister of India"
    },
    keyFigures: ["Pandit Hiralal Shastri", "Smt. Ratan Shastri", "Prof. Sushila Vyas"],
    impact: "Established a comprehensive, indigenous women's higher education system from school to undergraduate level."
  },
  {
    year: "1957",
    era: "university",
    title: "National Recognition & Presidential Commendation",
    subtitle: "Expansion of science, humanities, and fine arts faculties",
    description: "Dr. Rajendra Prasad, the first President of India, and Sardar Vallabhbhai Patel commended Banasthali Vidyapith for its extraordinary contribution to women's leadership and national integration.",
    detailedStory: "By the late 1950s, Banasthali had expanded across hundreds of acres, establishing specialized laboratories for classical music, painting, Sanskrit, and natural sciences. The institution became renowned across India for refusing to charge capitation fees and admitting girls from every state without discrimination of caste, creed, or economic status.",
    image: "/scraped-images/164_arch-3.jpg",
    quote: {
      text: "Banasthali Vidyapith is a national treasure. It is moulding women who will lead India not just with intellect, but with character and moral courage.",
      author: "Dr. Rajendra Prasad",
      role: "First President of India"
    },
    keyFigures: ["Dr. Rajendra Prasad", "Smt. Ratan Shastri", "Prof. Sushila Vyas"],
    impact: "Attracted students from across all Indian states and tribal regions, cementing its national character."
  },
  {
    year: "1983",
    era: "university",
    title: "Conferment of Deemed University Status",
    subtitle: "UGC recognition and institutional autonomy",
    description: "In recognition of its phenomenal service to women's education and its unique academic model, the Government of India and UGC conferred Deemed University status upon Banasthali Vidyapith.",
    detailedStory: "With university autonomy, Banasthali launched advanced postgraduate and doctoral (Ph.D.) programs across diverse disciplines. Prof. Sushila Vyas, one of the original five girls who entered the mud huts in 1935, was appointed as the first Director / Vice-Chancellor of the newly autonomous university—a poetic fulfillment of the founders' dream.",
    image: "/scraped-images/165_arch-4.jpg",
    keyFigures: ["Prof. Sushila Vyas", "Prof. Diwakar Shastri", "UGC Commission"],
    impact: "Allowed independent curriculum design and rapid expansion into cutting-edge professional and technological fields."
  },
  {
    year: "1996",
    era: "global",
    title: "Pioneering Women in Technology & Management",
    subtitle: "Establishment of AIM&ACT and WISDOM institutes",
    description: "Banasthali launched world-class professional schools: Apaji Institute of Mathematics & Applied Computer Technology (AIM&ACT) and WISDOM (Faculty of Management Studies).",
    detailedStory: "Long before women in STEM became a global corporate priority, Banasthali established premier engineering, computer application, and management institutes. Backed by corporate visionaries like Shri M.H. Dalmia and Artech Ltd., these institutes began producing top-tier female software engineers, mathematicians, and MBAs who went on to lead global corporations.",
    image: "/scraped-images/202_automation_4.jpg",
    keyFigures: ["Prof. Diwakar Shastri", "Prof. Aditya Shastri", "Shri M.H. Dalmia"],
    impact: "Transformed Banasthali into India's leading producer of female technocrats and corporate leaders."
  },
  {
    year: "2008",
    era: "global",
    title: "Aviation & Gliding Club Milestones",
    subtitle: "Licensed airfield producing India's first female fighter pilots",
    description: "Banasthali Vidyapith Gliding & Flying Club (BVGFC) expanded operations with a dedicated runway and aircraft fleet, training women in aviation and aerospace.",
    detailedStory: "Banasthali remains the only women's university in India with its own licensed airfield and flight training school. It was on this very runway that Flt. Lt. Avani Chaturvedi—who would make history as India's first female combat fighter pilot—earned her wings and mastered the skies during her B.Tech studies.",
    image: "/scraped-images/150_flying.jpg",
    quote: {
      text: "The discipline and fearless spirit I developed at the Banasthali airfield gave me the wings to fly combat jets for our nation.",
      author: "Flt. Lt. Avani Chaturvedi",
      role: "First Indian Female Fighter Pilot & Banasthali Alumna"
    },
    keyFigures: ["Flt. Lt. Avani Chaturvedi", "Capt. Flight Instructors", "Prof. Aditya Shastri"],
    impact: "Broke gender barriers in Indian military and civil aviation."
  },
  {
    year: "2020 - Present",
    era: "global",
    title: "NAAC A++ Accreditation & Global Pinnacle",
    subtitle: "World's largest residential women's university with 3.63/4.00 CGPA",
    description: "Banasthali Vidyapith achieved the highest possible 'A++' Accreditation Grade from NAAC, standing tall as a global benchmark with over 15,000 residential scholars across 29 hostels.",
    detailedStory: "Today, spanning an immaculate 850-acre solar-powered and WiFi-enabled campus, Banasthali integrates quantum computing, artificial intelligence, and nanotechnology with Vedic studies, horse riding, and classical arts. Under the leadership of Prof. Siddharth Shastri and Prof. Ina Shastri, the 90-year-old phoenix continues to soar higher than ever.",
    image: "/scraped-images/233_NAAC-Certificate.jpg",
    keyFigures: ["Prof. Siddharth Shastri", "Prof. Ina Shastri", "15,000+ Residential Scholars"],
    impact: "Recognized globally as a premier institution where tradition and cutting-edge modernity coexist in perfect harmony."
  }
];

export default function HeritageTimeline() {
  const [selectedEra, setSelectedEra] = useState<'all' | 'foundation' | 'university' | 'global'>('all');
  const [activeMilestone, setActiveMilestone] = useState<TimelineMilestone | null>(HERITAGE_MILESTONES[1]); // Default to 1935

  const filteredMilestones = HERITAGE_MILESTONES.filter(m => 
    selectedEra === 'all' || m.era === selectedEra
  );

  return (
    <div className="w-full bg-[#141212] py-16 px-4 md:px-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden my-12">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none -mt-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -mb-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-small-label font-semibold uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>90 Years of Unbroken Heritage (1935 - 2025)</span>
          </div>
          <h2 className="text-section-heading font-garamond text-white tracking-wide">
            The Historical Saga of Banasthali
          </h2>
          <p className="text-white/60 text-body mt-3 leading-relaxed">
            From five grieving parents and daughters in humble mud huts to the world&apos;s largest residential university for women. Explore the epochs that shaped an educational revolution.
          </p>

          {/* Era Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 bg-white/5 p-1.5 rounded-2xl border border-white/10 inline-flex">
            {[
              { id: 'all', label: 'All Eras (1927 - Present)' },
              { id: 'foundation', label: 'The Seed & Foundation (1927-1943)' },
              { id: 'university', label: 'University Autonomy (1957-1983)' },
              { id: 'global', label: 'Global Pinnacle (1996-Present)' }
            ].map((era) => (
              <button
                key={era.id}
                onClick={() => {
                  setSelectedEra(era.id as 'all' | 'foundation' | 'university' | 'global');
                  const firstMatch = HERITAGE_MILESTONES.find(m => era.id === 'all' || m.era === era.id);
                  if (firstMatch) setActiveMilestone(firstMatch);
                }}
                className={`px-4 py-2 rounded-xl text-button font-medium transition-all ${
                  selectedEra === era.id
                    ? "bg-gold text-black font-semibold shadow-lg scale-105"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {era.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Interactive Workspace: Left Timeline List + Right Detailed Archival Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Chronological Timeline List */}
          <div className="lg:col-span-5 space-y-4 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
            {filteredMilestones.map((m, idx) => {
              const isSelected = activeMilestone?.year === m.year;
              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  onClick={() => setActiveMilestone(m)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all relative overflow-hidden group ${
                    isSelected
                      ? "bg-gradient-to-r from-gold/20 via-[#2a2418] to-[#1c1919] border-gold shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                      : "bg-[#1c1919] border-white/10 hover:border-white/30 hover:bg-white/5"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold" />
                  )}

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-card-title font-garamond font-bold ${isSelected ? "text-gold" : "text-white group-hover:text-gold"}`}>
                      {m.year}
                    </span>
                    <span className="text-small-label font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-white/70">
                      {m.era}
                    </span>
                  </div>

                  <h4 className="text-body font-semibold text-white mb-1 line-clamp-1">
                    {m.title}
                  </h4>
                  <p className="text-caption text-white/60 line-clamp-2 font-light">
                    {m.subtitle}
                  </p>

                  <div className="mt-3 flex items-center gap-1 text-small-label text-gold font-medium">
                    <span>Explore historical archives</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "translate-x-1" : ""}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Detailed Archival Feature Showcase */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {activeMilestone && (
                <motion.div
                  key={activeMilestone.year}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="bg-[#1c1919] border border-white/15 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden"
                >
                  {/* Era Badge & Title */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-section-heading font-garamond font-bold text-gold">
                          {activeMilestone.year}
                        </span>
                        <span className="text-small-label text-white/50 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 uppercase font-semibold tracking-wider">
                          {activeMilestone.era} Era
                        </span>
                      </div>
                      <h3 className="text-card-title font-garamond text-white font-semibold">
                        {activeMilestone.title}
                      </h3>
                      <p className="text-caption text-white/60 italic mt-0.5">
                        {activeMilestone.subtitle}
                      </p>
                    </div>

                    <Landmark className="w-10 h-10 text-gold/30 hidden sm:block" />
                  </div>

                  {/* Archival Image Display */}
                  {activeMilestone.image && (
                    <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden mb-6 border border-white/10 group shadow-lg bg-black">
                      <Image
                        src={activeMilestone.image}
                        alt={activeMilestone.title}
                        fill
                        className="object-contain sm:object-cover group-hover:scale-105 transition-transform duration-700"
                       sizes="100vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 sm:p-6">
                        <span className="text-caption text-white/80 font-light bg-black/60 px-3 py-1.5 rounded-xl backdrop-blur-md border border-white/10">
                          Archival Photograph • Banasthali Vidyapith Heritage Records
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Detailed Narrative */}
                  <div className="space-y-4 text-body text-white/80 leading-relaxed font-light mb-6">
                    <p className="text-body text-white font-normal">
                      {activeMilestone.description}
                    </p>
                    <p className="text-white/70 bg-black/40 p-4 rounded-2xl border border-white/5 leading-relaxed">
                      {activeMilestone.detailedStory}
                    </p>
                  </div>

                  {/* Historical Quote Showcase */}
                  {activeMilestone.quote && (
                    <div className="bg-gradient-to-r from-gold/15 via-gold/5 to-transparent p-5 rounded-2xl border-l-4 border-gold my-6 relative">
                      <Quote className="w-8 h-8 text-gold/30 absolute right-4 top-4 pointer-events-none" />
                      <p className="text-body italic text-white/90 font-serif mb-3 pr-8">
                        &quot;{activeMilestone.quote.text}&quot;
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gold" />
                        <span className="text-small-label font-bold text-gold uppercase tracking-wider">
                          {activeMilestone.quote.author}
                        </span>
                        <span className="text-caption text-white/50">
                          — {activeMilestone.quote.role}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Key Figures & Institutional Impact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10 text-caption">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                      <span className="text-small-label font-bold uppercase tracking-wider text-white/50 block mb-2 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-gold" />
                        Key Historical Figures Involved
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeMilestone.keyFigures.map((person, idx) => (
                          <span key={idx} className="bg-black/50 px-2.5 py-1 rounded-lg text-white/80 border border-white/10 font-medium">
                            {person}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-green-500/10 p-4 rounded-2xl border border-green-500/20">
                      <span className="text-small-label font-bold uppercase tracking-wider text-green-400 block mb-2 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                        Long-Term Institutional Impact
                      </span>
                      <p className="text-white/80 font-light leading-relaxed">
                        {activeMilestone.impact}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
