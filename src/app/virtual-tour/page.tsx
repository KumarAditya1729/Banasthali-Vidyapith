"use client";

import React, { useState } from "react";
import VirtualTourMap from "@/components/virtual-tour";
import BuildingDrawer from "@/components/virtual-tour/BuildingDrawer";
import CampusAIGuide from "@/components/virtual-tour/CampusAIGuide";
import { CampusMarker } from "@/data/campus";
import { ChevronDown, Map, Play, Search } from "lucide-react";
import Image from "next/image";

export default function VirtualTourPage() {
  const [selectedMarker, setSelectedMarker] = useState<CampusMarker | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Smooth scroll to map
  const scrollToMap = () => {
    document.getElementById("map-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background relative selection:bg-gold/30 selection:text-gold flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Video / Image placeholder */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/scraped-images/hero-background.png" 
            alt="Banasthali Aerial Campus" 
            fill 
            sizes="100vw"
            className="object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite] blur-[2px]"
            priority
          />
          {/* Elegant Oxford Green gradient overlay matching Ivy League aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2e20]/80 via-[#0d1710]/70 to-[#1e0408]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gold text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold animate-ping"></span>
            Immersive 3D Experience
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Explore <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">
              Banasthali
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/80 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Walk across our 850-acre sanctuary from anywhere in the world. Discover academic blocks, historic hostels, and lush green avenues.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button 
              onClick={scrollToMap}
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-gold hover:bg-gold/90 text-[#1e0408] font-bold text-sm uppercase tracking-widest shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <Map className="w-5 h-5" />
              Start Virtual Tour
            </button>
            <a 
              href="https://www.youtube.com/results?search_query=banasthali+vidyapith+campus+tour"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm uppercase tracking-widest border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-3"
            >
              <Play className="w-5 h-5 text-gold fill-gold" />
              Watch Drone Tour
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToMap}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white flex flex-col items-center gap-2 transition-colors animate-bounce"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </section>

      {/* 2. INTERACTIVE MAP SECTION */}
      <section id="map-section" className="relative flex-1 h-[900px] w-full bg-muted flex flex-col pt-16 pb-6 px-4 sm:px-6 lg:px-8">
        
        {/* Sleek Filters Header */}
        <div className="max-w-[1600px] w-full mx-auto mb-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 bg-card px-5 py-3 rounded-2xl border border-border/50 shadow-sm w-full lg:w-auto">
            <Search className="w-5 h-5 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search buildings..." 
              className="bg-transparent border-none focus:outline-none text-sm w-full lg:w-64 text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 custom-scrollbar mask-edges">
            {["All", "academic", "hostel", "sports", "admin", "medical", "landmark"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat === "All" ? null : cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors border ${
                  (cat === "All" && !selectedCategory) || selectedCategory === cat
                    ? "bg-primary text-white border-primary shadow-md"
                    : "bg-card text-foreground border-border/60 hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* The Map */}
        <div className="flex-1 w-full max-w-[1600px] mx-auto rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] relative group min-h-[600px]">
          <VirtualTourMap 
            selectedCategory={selectedCategory}
            onMarkerClick={setSelectedMarker}
          />
        </div>
      </section>

      {/* 3. FLOATING WIDGETS */}
      <CampusAIGuide onLocationFound={setSelectedMarker} />
      <BuildingDrawer marker={selectedMarker} onClose={() => setSelectedMarker(null)} />
    </main>
  );
}
