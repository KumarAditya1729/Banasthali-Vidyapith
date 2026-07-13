"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, MapPin, Navigation, Info, Image as ImageIcon, Compass } from "lucide-react";
import Image from "next/image";
import { CampusMarker } from "@/data/campus";

interface BuildingDrawerProps {
  marker: CampusMarker | null;
  onClose: () => void;
}

export default function BuildingDrawer({ marker, onClose }: BuildingDrawerProps) {
  // Lock body scroll when open on mobile
  useEffect(() => {
    if (marker && window.innerWidth < 1024) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [marker]);

  return (
    <AnimatePresence>
      {marker && (
        <>
          {/* Backdrop (mobile only) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[2000] lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full lg:w-[450px] bg-background shadow-[0_0_40px_rgba(0,0,0,0.3)] z-[2001] flex flex-col border-l border-border/50 overflow-hidden"
          >
            {/* Header / Hero Image */}
            <div className="relative h-64 lg:h-72 w-full shrink-0 bg-muted">
              <Image 
                src={marker.image} 
                alt={marker.name} 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-gold/20 backdrop-blur-md border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                  {marker.category}
                </span>
                <h2 className="text-3xl font-serif font-bold text-foreground leading-tight drop-shadow-md">
                  {marker.name}
                </h2>
              </div>
            </div>

            {/* Content Scroll Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar pb-24">
              
              {/* Description */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gold">
                  <Info className="w-5 h-5" />
                  <h3 className="font-semibold uppercase tracking-wider text-sm">About</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {marker.description}
                </p>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                {marker.hours && (
                  <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
                    <Clock className="w-5 h-5 text-gold mb-2" />
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Hours</div>
                    <div className="font-medium text-sm text-foreground">{marker.hours}</div>
                  </div>
                )}
                <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
                  <MapPin className="w-5 h-5 text-gold mb-2" />
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Coordinates</div>
                  <div className="font-medium text-sm text-foreground">
                    {marker.position[0].toFixed(4)}, {marker.position[1].toFixed(4)}
                  </div>
                </div>
              </div>

              {/* Facilities */}
              {marker.facilities.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gold">
                    <Navigation className="w-5 h-5" />
                    <h3 className="font-semibold uppercase tracking-wider text-sm">Facilities</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {marker.facilities.map((facility) => (
                      <span key={facility} className="px-3 py-1.5 bg-primary/5 dark:bg-primary/20 text-primary dark:text-gold border border-primary/10 dark:border-gold/20 rounded-lg text-sm font-medium">
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Street View / 360 Placeholder */}
              <div className="space-y-3 pt-4 border-t border-border/50">
                <div className="flex items-center gap-2 text-gold">
                  <ImageIcon className="w-5 h-5" />
                  <h3 className="font-semibold uppercase tracking-wider text-sm">360° View</h3>
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden bg-black flex items-center justify-center border border-border group">
                  <Image src={marker.image} alt="Blur" fill className="object-cover opacity-30 blur-sm scale-110 group-hover:scale-100 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="relative z-10 text-center px-4">
                    <div className="w-12 h-12 rounded-full border border-gold text-gold flex items-center justify-center mx-auto mb-3 backdrop-blur-md bg-black/20">
                      <Compass className="w-6 h-6 animate-pulse" />
                    </div>
                    <p className="text-white font-medium text-sm">360° Campus View</p>
                    <p className="text-white/60 text-xs mt-1">Official integration coming soon.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-background/80 backdrop-blur-xl border-t border-border/50">
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${marker.position[0]},${marker.position[1]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg transition-transform active:scale-95 uppercase tracking-wide text-sm"
              >
                <Navigation className="w-4 h-4" />
                Navigate Here
              </a>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
