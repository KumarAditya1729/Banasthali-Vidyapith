"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bell, Sparkles, Award, Plane, Calendar, ChevronRight, X } from "lucide-react";

interface NoticeItem {
  id: number;
  text: string;
  badge: string;
  icon: React.ReactNode;
  link: string;
  color: string;
}

const notices: NoticeItem[] = [
  {
    id: 1,
    text: "Admissions Open 2025-26: Online Application Forms & Aptitude Test registration now live for UG, PG & B.Tech programs!",
    badge: "URGENT",
    icon: <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />,
    link: "/admissions",
    color: "bg-red-600 text-white"
  },
  {
    id: 2,
    text: "NAAC A++ Accreditation: Banasthali Vidyapith re-accredited with highest institutional grade & 3.83/4.00 CGPA!",
    badge: "ACHIEVEMENT",
    icon: <Award className="w-4 h-4 text-yellow-300" />,
    link: "/accreditation",
    color: "bg-amber-600 text-white"
  },
  {
    id: 3,
    text: "BVGFC Aviation Club: Flight training & Student Pilot License (SPL) registration open for enrolled women students.",
    badge: "AVIATION",
    icon: <Plane className="w-4 h-4 text-sky-300 animate-bounce" />,
    link: "/campus-life",
    color: "bg-blue-600 text-white"
  },
  {
    id: 4,
    text: "School Education (Nursery to Class XII): Residential admission merit lists & counseling schedule published.",
    badge: "SCHOOLS",
    icon: <Calendar className="w-4 h-4 text-emerald-300" />,
    link: "/academics",
    color: "bg-emerald-600 text-white"
  }
];

export default function NoticeTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || isDismissed) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notices.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, isDismissed]);

  if (isDismissed) return null;

  const currentNotice = notices[currentIndex];

  return (
    <div 
      className="bg-gradient-to-r from-red-950 via-maroon-900 to-red-900 text-white border-b border-red-800/60 shadow-lg relative z-40 transition-all duration-300"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
        {/* Left Ticker Label */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
          <div className="flex items-center gap-1.5 bg-red-900/80 border border-red-700/60 px-2.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-red-200">
            <Bell className="w-3.5 h-3.5 text-amber-400 animate-wiggle" />
            <span>Live Notice</span>
          </div>
        </div>

        {/* Center Rotating Notice Content */}
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center justify-center sm:justify-start gap-2.5 transition-all duration-500 transform">
            <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wide shrink-0 ${currentNotice.color}`}>
              {currentNotice.badge}
            </span>
            <div className="shrink-0 hidden sm:block">
              {currentNotice.icon}
            </div>
            <Link 
              href={currentNotice.link}
              className="text-xs sm:text-sm font-medium text-red-100 hover:text-white truncate sm:whitespace-normal transition-colors flex items-center gap-1 group"
            >
              <span className="line-clamp-1 sm:line-clamp-none">{currentNotice.text}</span>
              <ChevronRight className="w-4 h-4 shrink-0 text-amber-400 group-hover:translate-x-1 transition-transform inline" />
            </Link>
          </div>
        </div>

        {/* Right Navigation Dots & Close Button */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden md:flex items-center gap-1">
            {notices.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-5 bg-amber-400" : "w-1.5 bg-red-800 hover:bg-red-700"
                }`}
                aria-label={`Go to notice ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1 text-red-300 hover:text-white hover:bg-red-800/50 rounded-lg transition-colors"
            title="Dismiss notice"
            aria-label="Dismiss notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
