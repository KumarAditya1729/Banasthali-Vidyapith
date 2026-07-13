"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import CourseWizard from "@/components/academics/CourseWizard";

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Hero Banner */}
      <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 bg-gradient-to-b from-primary/10 via-background to-background overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,50,0,0.15),rgba(255,255,255,0))]" />
        
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium tracking-wide mb-6">
              <Sparkles className="w-4 h-4" />
              <span>NAAC A++ Grade • CGPA 3.63/4.00</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">
              Academic Excellence & <span className="text-primary italic">Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 font-light max-w-2xl mx-auto leading-relaxed mb-10">
              Banasthali Vidyapith offers an integrated system of education extending from the primary to the doctoral level—blending scientific temperament with Indian cultural values.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6 border-t border-border/40">
              <div className="p-4 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/40">
                <div className="text-2xl md:text-3xl font-serif font-bold text-primary">8+</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Faculties & Institutes</div>
              </div>
              <div className="p-4 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/40">
                <div className="text-2xl md:text-3xl font-serif font-bold text-primary">100+</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Academic Programs</div>
              </div>
              <div className="p-4 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/40">
                <div className="text-2xl md:text-3xl font-serif font-bold text-primary">100%</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Residential Campus</div>
              </div>
              <div className="p-4 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/40">
                <div className="text-2xl md:text-3xl font-serif font-bold text-primary">1935</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Year Established</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Course Wizard Section */}
      <section className="container mx-auto px-6 md:px-12 flex-1 my-6">
        <CourseWizard />
      </section>
    </div>
  );
}
