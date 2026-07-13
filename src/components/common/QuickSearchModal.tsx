"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, X, Sparkles, HelpCircle, ArrowRight, Plane, Home, GraduationCap, IndianRupee, MapPin, Award, BookOpen, Clock } from "lucide-react";

interface SearchResult {
  id: string;
  question: string;
  answer: string;
  category: "Admissions & Courses" | "Campus Life & Hostels" | "Fees & Scholarships" | "Reach & Logistics" | "Aviation & Research";
  link: string;
  linkText: string;
  icon: React.ReactNode;
  keywords: string[];
}

const knowledgeBase: SearchResult[] = [
  {
    id: "virtual_tour",
    question: "How can I take a virtual tour of the Banasthali campus?",
    answer: "Explore our 850-acre fully residential campus through our interactive Virtual Campus Explorer. Discover academic buildings, hostels, the aviation club, and more in 3D.",
    category: "Campus Life & Hostels",
    link: "/virtual-tour",
    linkText: "Launch Virtual Tour",
    icon: <MapPin className="w-5 h-5 text-rose-400" />,
    keywords: ["tour", "virtual", "map", "explore", "campus", "buildings", "3d", "interactive"]
  },
  {
    id: "bvgfc",
    question: "How can students join the Gliding & Flying Club (BVGFC)?",
    answer: "Banasthali is the only women's university in India with its own licensed airfield, airstrip, and Cessna 172 fleet. Any enrolled student can enroll in the BVGFC for Student Pilot License (SPL) and Commercial Pilot License (CPL) training alongside their academic degree.",
    category: "Aviation & Research",
    link: "/campus-life",
    linkText: "Explore Aviation Club",
    icon: <Plane className="w-5 h-5 text-sky-400" />,
    keywords: ["aviation", "pilot", "gliding", "flying", "bvgfc", "airstrip", "cessna", "airfield", "flight"]
  },
  {
    id: "hostels",
    question: "What are the hostel rules and residential facilities?",
    answer: "Banasthali is a 100% fully residential university with 31 modern hostels housing over 15,000 women. Pure vegetarian dining, 24/7 security, solar water heaters, Wi-Fi, and resident wardens are provided. Students must reside on campus as part of the community living ethos.",
    category: "Campus Life & Hostels",
    link: "/campus-life",
    linkText: "View 31 Hostels",
    icon: <Home className="w-5 h-5 text-emerald-400" />,
    keywords: ["hostel", "residential", "room", "food", "mess", "warden", "security", "living", "dorm"]
  },
  {
    id: "fees",
    question: "What is the fee structure and are scholarships available?",
    answer: "Academic fees vary by program (e.g., B.Tech ~₹1,40,000/year; BA/B.Sc ~₹54,000/year) plus uniform hostel & mess charges (~₹42,000/year). Over 30 specific scholarship schemes (Merit-cum-Need, Shantabai Memorial, National Scholarships) provide up to 100% tuition waivers.",
    category: "Fees & Scholarships",
    link: "/scholarships",
    linkText: "Check Scholarship Calculator",
    icon: <IndianRupee className="w-5 h-5 text-amber-400" />,
    keywords: ["fee", "cost", "scholarship", "financial aid", "concession", "merit", "money", "tuition", "hostel fee"]
  },
  {
    id: "reach",
    question: "How do I reach Banasthali Vidyapith campus?",
    answer: "The campus is located in Tonk district, 72 km south of Jaipur. Nearest airport: Jaipur International Airport (JAI) - 1.5 hours by taxi/bus. Nearest railway station: Banasthali Niwai (BNLW) - just 15 minutes away with dedicated university shuttle buses meeting major trains.",
    category: "Reach & Logistics",
    link: "/faq-and-reach",
    linkText: "View Travel Map & Directions",
    icon: <MapPin className="w-5 h-5 text-rose-400" />,
    keywords: ["reach", "location", "jaipur", "train", "flight", "airport", "niwai", "bus", "taxi", "map", "distance"]
  },
  {
    id: "naac",
    question: "What is Banasthali's ranking and NAAC accreditation?",
    answer: "Banasthali Vidyapith is accredited with the highest NAAC A++ Grade (CGPA 3.83/4.00), ranked among the top universities in India by NIRF, and recognized globally by QS Asia rankings as a premier center for women's leadership and STEM education.",
    category: "Admissions & Courses",
    link: "/accreditation",
    linkText: "View Official Certificates",
    icon: <Award className="w-5 h-5 text-yellow-400" />,
    keywords: ["naac", "ranking", "nirf", "accreditation", "grade", "a++", "qs", "ugc", "reputation", "certificate"]
  },
  {
    id: "btech",
    question: "What B.Tech engineering streams are offered?",
    answer: "We offer B.Tech in Computer Science, Information Technology, Electronics & Communication, Electrical & Electronics, Biotechnology, Chemical Engineering, and Mechatronics (supported by BOSCH & Siemens Industry 4.0 automation labs).",
    category: "Admissions & Courses",
    link: "/academics",
    linkText: "Explore Engineering Courses",
    icon: <GraduationCap className="w-5 h-5 text-purple-400" />,
    keywords: ["btech", "engineering", "computer science", "cse", "it", "biotech", "mechatronics", "automation", "b.tech"]
  },
  {
    id: "school",
    question: "Is school education (Nursery to Class XII) available?",
    answer: "Yes! Banasthali originated as a school in 1935. We offer fully residential school education from Class VI to XII (and day school from Nursery to V) under CBSE curriculum with integrated Panchmukhi holistic development.",
    category: "Admissions & Courses",
    link: "/academics",
    linkText: "School Education Details",
    icon: <BookOpen className="w-5 h-5 text-indigo-400" />,
    keywords: ["school", "nursery", "class", "cbse", "girls school", "board", "primary", "secondary", "10th", "12th"]
  },
  {
    id: "admission_process",
    question: "What is the admission procedure and eligibility?",
    answer: "Admissions to B.Tech, MBA, B.Pharm, and LL.B are conducted via Banasthali Aptitude Test (BAT) combined with academic merit (minimum 60% in 10+2/Graduation). Other BA, B.Sc, B.Com, and MA courses are admitted on merit in qualifying examinations.",
    category: "Admissions & Courses",
    link: "/admissions",
    linkText: "Apply Online Now",
    icon: <Clock className="w-5 h-5 text-teal-400" />,
    keywords: ["admission", "apply", "aptitude test", "bat", "form", "eligibility", "percentage", "last date", "entrance"]
  }
];

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickSearchModal({ isOpen, onClose }: QuickSearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const categories = ["All", "Admissions & Courses", "Campus Life & Hostels", "Fees & Scholarships", "Reach & Logistics", "Aviation & Research"];

  const filteredResults = knowledgeBase.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const searchLower = query.toLowerCase().trim();
    if (!searchLower) return matchesCategory;
    const matchesText = item.question.toLowerCase().includes(searchLower) ||
                        item.answer.toLowerCase().includes(searchLower) ||
                        item.keywords.some(k => k.includes(searchLower));
    return matchesCategory && matchesText;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md transition-opacity">
      {/* Background Click to Close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-3xl bg-stone-900 border border-stone-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Search Bar */}
        <div className="p-4 sm:p-6 border-b border-stone-800 bg-stone-950/50 flex items-center gap-3">
          <Search className="w-6 h-6 text-red-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask anything... e.g., 'hostel fees', 'aviation club', 'how to reach', 'B.Tech eligibility'..."
            className="w-full bg-transparent text-white placeholder-stone-500 text-body focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-stone-400 hover:text-white p-1"
              title="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-2 px-3 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white text-button font-bold uppercase tracking-wider transition-colors shrink-0"
          >
            ESC
          </button>
        </div>

        {/* Category Filter Chips */}
        <div className="px-4 sm:px-6 py-3 bg-stone-950/30 border-b border-stone-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-small-label font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-red-700 text-white shadow-lg shadow-red-900/40 font-bold"
                  : "bg-stone-800/80 hover:bg-stone-800 text-stone-400 hover:text-stone-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Quick Suggestion Chips (When query is empty) */}
        {!query && (
          <div className="px-4 sm:px-6 py-3 bg-red-950/20 border-b border-red-900/30 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-small-label font-bold uppercase tracking-wider text-red-400 flex items-center gap-1 shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Popular Questions:</span>
            </span>
            {[
              "✈️ How to join Gliding Club?",
              "🏠 What are hostel fees?",
              "🚗 How to reach from Jaipur?",
              "💰 Scholarships available?",
              "💻 B.Tech Computer Science?"
            ].map((chip, idx) => (
              <button
                key={idx}
                onClick={() => setQuery(chip.replace(/^[^\s]+ /, "").replace("?", ""))}
                className="text-small-label bg-stone-800 hover:bg-stone-700 text-stone-200 px-2.5 py-1 rounded-lg shrink-0 transition-colors border border-stone-700"
              >
                {chip}
              </button>
            ))}
          </div>
        )}

        {/* Results List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {filteredResults.length === 0 ? (
            <div className="text-center py-12 text-stone-500">
              <HelpCircle className="w-12 h-12 mx-auto mb-3 opacity-40 text-red-500" />
              <p className="text-body font-medium text-stone-300">No matching answers found for &quot;{query}&quot;</p>
              <p className="text-small-label text-stone-500 mt-1">Try searching for broader keywords like &quot;fees&quot;, &quot;hostel&quot;, &quot;courses&quot;, or &quot;location&quot;.</p>
              <Link
                href="/faq-and-reach"
                onClick={onClose}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-700 hover:bg-red-600 text-white text-button font-bold transition-colors"
              >
                <span>Browse Full FAQ & Reach Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ) : (
            filteredResults.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800/80 hover:border-stone-700 transition-all group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-small-label font-bold uppercase tracking-wider text-red-400 bg-red-950/50 px-2 py-0.5 rounded border border-red-900/40">
                        {item.category}
                      </span>
                    </div>
                    <h4 className="text-card-title text-white group-hover:text-red-300 transition-colors">
                      {item.question}
                    </h4>
                    <p className="text-caption text-stone-300 mt-2 leading-relaxed">
                      {item.answer}
                    </p>
                    <div className="mt-4 pt-3 border-t border-stone-800/60 flex items-center justify-end">
                      <Link
                        href={item.link}
                        onClick={onClose}
                        className="inline-flex items-center gap-1.5 text-button font-bold text-amber-400 hover:text-amber-300 transition-colors group/btn"
                      >
                        <span>{item.linkText}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-950 border-t border-stone-800 text-center flex flex-wrap items-center justify-between gap-2 text-footer text-stone-500">
          <span>Powered by Banasthali Vidyapith Scraped Knowledge Base</span>
          <div className="flex items-center gap-4">
            <Link href="/faq-and-reach" onClick={onClose} className="hover:text-stone-300 underline">
              All FAQs
            </Link>
            <Link href="/admissions" onClick={onClose} className="hover:text-stone-300 underline">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
