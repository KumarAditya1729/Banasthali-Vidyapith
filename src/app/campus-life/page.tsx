"use client";

// import {} from "framer-";
import { MapPin, Home, Compass, ShieldCheck, Utensils } from "lucide-react";
import Link from "next/link";
import InteractiveCampusMap from "@/components/campus/InteractiveCampusMap";

export default function CampusLifePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 bg-gradient-to-b from-primary/10 via-background to-background overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,50,0,0.15),rgba(255,255,255,0))]" />
        
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-small-label font-medium tracking-wide mb-6">
            <MapPin className="w-4 h-4" />
            <span>Tonk District, Rajasthan • 100% Residential</span>
          </div>
          <h1 className="text-hero font-serif font-bold tracking-tight mb-6">
            An 850-Acre <span className="text-primary italic">Sanctuary</span>
          </h1>
          <p className="text-subheading text-foreground/80 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Experience an unparalleled community life where simple living meets cutting-edge innovation. A fully residential home for over 15,000 women students.
          </p>

          {/* Quick Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border/40 text-left">
            <div className="p-4 rounded-2xl bg-card/60 border border-border/40 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <div className="text-card-title font-serif font-bold">31 Hostels</div>
                <div className="text-caption text-muted-foreground">Safe & Modern</div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-card/60 border border-border/40 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <div className="text-card-title font-serif font-bold">Airfield</div>
                <div className="text-caption text-muted-foreground">Cessna 172 Fleet</div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-card/60 border border-border/40 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-card-title font-serif font-bold">0 Pollution</div>
                <div className="text-caption text-muted-foreground">Lush Green Campus</div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-card/60 border border-border/40 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                <Utensils className="w-5 h-5" />
              </div>
              <div>
                <div className="text-card-title font-serif font-bold">Pure Dining</div>
                <div className="text-caption text-muted-foreground">Nutritious Meals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Feature Banner: Gliding & Flying Club */}
      <section className="py-12 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(circle_at_center,white_0,transparent_100%)] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-small-label font-semibold uppercase tracking-wider mb-3">
              Aviation Spotlight • BVGFC
            </div>
            <h2 className="text-section-heading font-serif font-bold mb-3">
              Touch the Skies: Banasthali Gliding & Flying Club
            </h2>
            <p className="text-body text-primary-foreground/90 font-light leading-relaxed">
              We are proud to be the only university in India providing regular flight training to women students on Cessna aircraft. Our alumnae include fighter pilots in the Indian Air Force and commercial captains across global airlines!
            </p>
          </div>
          <Link
            href="/admissions"
            className="px-8 py-3.5 rounded-full bg-background text-foreground font-semibold text-button hover:scale-105 transition-all shadow-xl shrink-0"
          >
            Join the Flying Club
          </Link>
        </div>
      </section>

      {/* Interactive Campus Map & Zone Explorer */}
      <section className="py-12 container mx-auto px-6 md:px-12 flex-1">
        <InteractiveCampusMap />
      </section>
    </div>
  );
}
