"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Lightbulb, Heart, Star, BookOpen, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

interface PillarDetail {
  id: string;
  name: string;
  sanskrit: string;
  icon: React.ReactNode;
  image: string;
  tagline: string;
  description: string;
  activities: string[];
  quote: string;
  link: string;
  color: string;
  badgeColor: string;
}

const pillarsData: PillarDetail[] = [
  {
    id: "physical",
    name: "Physical Education",
    sanskrit: "Sharirik Shiksha (शारीरिक शिक्षा)",
    icon: <Activity className="w-6 h-6" />,
    image: "/scraped-images/238_BEST_3.jpg",
    tagline: "Endurance, Agility & Aerial Mastery",
    description: "Banasthali believes a strong intellect requires a resilient body. We are the only women's university in India operating our own licensed airfield and flight training school, alongside compulsory physical endurance training.",
    activities: [
      "BVGFC Gliding & Flying Club (Cessna 172 Fleet & 3,600-ft Airstrip)",
      "Equestrian Centre with Horse Riding & Obstacle Courses",
      "Olympic-size Swimming Pool & Aquatic Sports",
      "NCC Parade Grounds, Rifle Shooting & Martial Arts (Talwar/Self-Defense)",
      "Multi-Sports Complex: Basketball, Tennis, Badminton & Hockey"
    ],
    quote: "\"Physical endurance is the foundation upon which courage and self-reliance are constructed.\"",
    link: "/campus-life",
    color: "from-blue-600 to-indigo-900",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30"
  },
  {
    id: "practical",
    name: "Practical Education",
    sanskrit: "Vyavaharik Shiksha (व्यावहारिक शिक्षा)",
    icon: <Lightbulb className="w-6 h-6" />,
    image: "/scraped-images/239_BEST_4.jpg",
    tagline: "Vocational Mastery & Everyday Self-Reliance",
    description: "True independence comes from practical everyday competence. From traditional Rajasthani block printing to modern Industry 4.0 automation laboratories, students learn to solve real-world problems with their own hands.",
    activities: [
      "Sanganeri Block Printing, Tie-and-Dye (Bandhej) & Batik Studios",
      "BOSCH & Siemens Industry 4.0 Automation Laboratories",
      "Domestic Crafts, Pottery, Paper-Mache & Textile Design",
      "Apaji Institute High-Performance Computing & AI Research Clusters",
      "Campus Cooperative Management, Banking & Community Service"
    ],
    quote: "\"Education that does not equip a woman to stand independently on her own feet is incomplete.\"",
    link: "/research",
    color: "from-amber-600 to-orange-900",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30"
  },
  {
    id: "aesthetic",
    name: "Aesthetic Education",
    sanskrit: "Kala Shiksha (कला शिक्षा)",
    icon: <Heart className="w-6 h-6" />,
    image: "/scraped-images/240_BEST_5.jpg",
    tagline: "Cultural Heritage & Emotional Intelligence",
    description: "Art touches the soul and cultivates profound emotional maturity. At Kala Mandir and Sur Mandir, students immerse themselves in classical Indian dance, music, and visual arts, preserving our rich civilizational heritage.",
    activities: [
      "Classical Kathak & Bharatanatyam Dance Academies",
      "Vocal & Instrumental Music (Sitar, Veena, Tabla, Harmonium)",
      "Fine Arts Studios: Oil Painting, Fresco, Sculpture & Calligraphy",
      "Annual Cultural Festivals, Theatrical Productions & Folk Exhibitions",
      "Radio Banasthali 90.4 MHz Community FM Broadcasting"
    ],
    quote: "\"She who is rooted in her cultural aesthetics flies highest in the modern skies.\"",
    link: "/campus-life",
    color: "from-rose-600 to-pink-900",
    badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30"
  },
  {
    id: "moral",
    name: "Moral Education",
    sanskrit: "Naitik Shiksha (नैतिक शिक्षा)",
    icon: <Star className="w-6 h-6" />,
    image: "/scraped-images/241_BEST_6.jpg",
    tagline: "Gandhian Simplicity & Ethics",
    description: "Rooted in the ideals of Pandit Hiralal Shastri and Mahatma Gandhi, moral education shapes character, humility, and social responsibility. The Khadi ethos reminds students of dignity of labor and service to the nation.",
    activities: [
      "Gandhian Studies & Daily All-Faith Prayer Assemblies",
      "Khadi Wearing Ethos promoting Simplicity & Equality",
      "Adult Education Center & Rural Village Outreach Programs",
      "Women Empowerment & Legal Literacy Camps in Tonk District",
      "Environmental Conservation & Solar-Powered Campus Initiatives"
    ],
    quote: "\"Character building is the highest aim of our education; without character, knowledge is a danger.\"",
    link: "/about",
    color: "from-emerald-600 to-teal-900",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
  },
  {
    id: "intellectual",
    name: "Intellectual Education",
    sanskrit: "Boudhik Shiksha (बौद्धिक शिक्षा)",
    icon: <BookOpen className="w-6 h-6" />,
    image: "/scraped-images/280_Department_Library.JPG",
    tagline: "Rigorous Academic Excellence",
    description: "Spanning from nursery school to doctoral Ph.D. research across 29 academic departments, intellectual education at Banasthali combines rigorous scientific temper with interdisciplinary inquiry and global research standards.",
    activities: [
      "2 Lakh+ Volume Central Library & IEEE/Springer Digital Repositories",
      "29 Academic Departments across Engineering, Law, Pharmacy & Mgmt",
      "Vigyan Mandir & Jeev Mandir Advanced Biotech & Physics Labs",
      "DST-CURIE & Atal Incubation Centre (AIC) for Women Entrepreneurs",
      "Global University Exchange Programs & Research Collaborations"
    ],
    quote: "\"We do not just teach textbooks; we ignite an unquenchable thirst for scientific truth and wisdom.\"",
    link: "/academics",
    color: "from-purple-600 to-indigo-900",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30"
  }
];

export default function PanchmukhiExplorer() {
  const [activeTab, setActiveTab] = useState<string>("physical");
  const currentPillar = pillarsData.find((p) => p.id === activeTab) || pillarsData[0];

  return (
    <section className="bg-gradient-to-b from-[#140205] via-[#24060a] to-[#1e0408] text-white py-28 px-6 md:px-12 relative overflow-hidden border-t border-gold/30">
      {/* Golden Mesh Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 px-4 py-1.5 rounded-full text-gold text-xs font-bold tracking-wider uppercase mb-4 shadow-xl">
            <Sparkles className="w-3.5 h-3.5 text-gold animate-spin" style={{ animationDuration: "8s" }} />
            <span>Interactive Educational Philosophy</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white mb-6">
            Panchmukhi Shiksha <br />
            <span className="gold-gradient-text italic font-normal">(Five-Fold Holistic Education)</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
            We do not just teach degrees; we forge complete, self-reliant, and morally grounded women leaders capable of transforming society. Explore our five dimensions of development:
          </p>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
          {pillarsData.map((pillar) => {
            const isActive = activeTab === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`flex flex-col items-center text-center p-5 rounded-3xl transition-all duration-300 border ${
                  isActive
                    ? "bg-gradient-to-br from-primary via-red-900 to-amber-900 border-gold shadow-2xl shadow-primary/30 scale-105 z-10"
                    : "bg-white/5 hover:bg-white/10 border-white/10 text-white/70 hover:text-white hover:border-white/30"
                }`}
              >
                <div className={`p-3 rounded-2xl mb-3 transition-colors ${
                  isActive ? "bg-white/20 text-white shadow-inner" : "bg-black/40 text-gold"
                }`}>
                  {pillar.icon}
                </div>
                <span className="font-bold font-serif text-base sm:text-lg leading-snug">{pillar.name}</span>
                <span className={`text-[11px] mt-1 font-mono tracking-wide ${isActive ? "text-gold" : "text-white/50"}`}>
                  {pillar.sanskrit.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Spotlight Display Box */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentPillar.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 backdrop-blur-2xl border border-white/15 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            {/* Left: High-Res Image with Quote Overlay */}
            <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full overflow-hidden group">
              <Image
                src={currentPillar.image}
                alt={currentPillar.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111010] via-[#111010]/40 to-transparent" />
              
              {/* Quote Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 border ${currentPillar.badgeColor}`}>
                  {currentPillar.sanskrit}
                </span>
                <blockquote className="text-base sm:text-lg font-serif italic text-white/90 border-l-2 border-gold pl-4 my-2 leading-relaxed">
                  {currentPillar.quote}
                </blockquote>
              </div>
            </div>

            {/* Right: Detailed Content & Activities List */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-gold/15 border border-gold/30 text-gold">
                    {currentPillar.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
                      {currentPillar.name}
                    </h3>
                    <p className="text-gold text-sm font-semibold tracking-wide uppercase mt-0.5">
                      {currentPillar.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 border-b border-white/10 pb-8 font-light">
                  {currentPillar.description}
                </p>

                <h4 className="text-xs font-bold uppercase tracking-wider text-gold mb-5 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Key Campus Facilities & Activities</span>
                </h4>

                <ul className="space-y-3.5">
                  {currentPillar.activities.map((act, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-white/90 font-light">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action CTA Button */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-white/50 font-mono">
                  ✨ Compulsory curriculum for all residential scholars.
                </div>
                <Link
                  href={currentPillar.link}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-primary to-amber-700 hover:from-primary/90 hover:to-amber-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-primary/20 hover:scale-105 group"
                >
                  <span>Explore in {currentPillar.link === "/campus-life" ? "Campus Life" : currentPillar.link.replace("/", "").toUpperCase()}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
