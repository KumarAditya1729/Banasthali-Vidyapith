"use client";

import React from 'react';
import Image from 'next/image';
import { 
  Award, 
  BookOpen, 
  IndianRupee, 
  HeartHandshake, 
  Info, 
  Search, 
  Sparkles, 
  Users 
} from 'lucide-react';
import ScholarshipMatcher from '@/components/scholarships/ScholarshipMatcher';

export default function ScholarshipsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-36 md:pt-44 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#800000] via-[#5a0c16] to-amber-900 text-white shadow-2xl p-8 sm:p-14 border border-gold/40">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-15 pointer-events-none overflow-hidden">
            <Image 
              src="/scraped-images/142__DSC0212_Selected-for-website.JPG" 
              alt="Banasthali Scholarships" 
              fill 
              priority
              className="object-cover scale-105"
             sizes="100vw" />
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-300/30 text-amber-300 text-small-label font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Financial Aid & Scholarships Portal</span>
            </div>
            <h1 className="text-hero font-extrabold tracking-tight mb-6 leading-tight font-serif">
              Empowering Women Through <span className="text-amber-300 underline decoration-amber-400/50 underline-offset-8">Accessible Excellence</span>
            </h1>
            <p className="text-subheading text-amber-100/90 mb-8 leading-relaxed font-light">
              At Banasthali Vidyapith, financial constraints are never allowed to stand in the way of a brilliant woman&apos;s education. Explore over <strong className="text-white font-semibold">30+ Institutional, Government, and Endowed Scholarships</strong> designed to support merit, need, and national service.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#matcher-portal" 
                className="px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-button font-bold shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Search className="w-5 h-5" />
                AI Matcher & Directory
              </a>
              <a 
                href="#matcher-portal" 
                className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-button font-semibold border border-white/20 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <IndianRupee className="w-5 h-5 text-amber-300" />
                Fee Estimator
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Key Highlights Banner */}
      <div className="max-w-7xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-card dark:bg-[#1e0408] p-6 rounded-2xl shadow-sm border border-border/60 flex items-start gap-4">
          <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary/30 text-primary dark:text-gold">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-card-title font-bold text-foreground">100% Waiver</h3>
            <p className="text-caption text-muted-foreground mt-1">For daughters of Kargil Martyrs & top institutional merit holders.</p>
          </div>
        </div>

        <div className="bg-card dark:bg-[#1e0408] p-6 rounded-2xl shadow-sm border border-border/60 flex items-start gap-4">
          <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-card-title font-bold text-foreground">30+ Endowments</h3>
            <p className="text-caption text-muted-foreground mt-1">Backed by Mahindra Trust, Bajaj Foundation, Kanoria & Dalmia.</p>
          </div>
        </div>

        <div className="bg-card dark:bg-[#1e0408] p-6 rounded-2xl shadow-sm border border-border/60 flex items-start gap-4">
          <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-card-title font-bold text-foreground">Tribal & NE Aid</h3>
            <p className="text-caption text-muted-foreground mt-1">Special comprehensive schemes for North-East & rural tribal girls.</p>
          </div>
        </div>

        <div className="bg-card dark:bg-[#1e0408] p-6 rounded-2xl shadow-sm border border-border/60 flex items-start gap-4">
          <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-card-title font-bold text-foreground">TA / RA Stipends</h3>
            <p className="text-caption text-muted-foreground mt-1">Paid teaching and research assistantships for M.Tech & Ph.D. scholars.</p>
          </div>
        </div>
      </div>

      {/* Interactive Scholarship Matcher & Directory Portal */}
      <div id="matcher-portal" className="max-w-7xl mx-auto mb-20 scroll-mt-8">
        <ScholarshipMatcher />
      </div>

      {/* How to Apply Guidelines */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="bg-card dark:bg-[#1e0408] p-8 sm:p-10 rounded-3xl shadow-sm border border-border/60">
          <h2 className="text-section-heading font-bold font-serif text-foreground mb-6 flex items-center gap-3">
            <Info className="w-7 h-7 text-primary dark:text-gold" />
            How to Avail Financial Assistance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-body">
            <div className="p-5 rounded-2xl bg-muted/30 dark:bg-[#2a060c]/50 border border-border/40">
              <span className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-3 text-small-label">1</span>
              <h4 className="text-card-title font-bold text-foreground mb-1">Submit Admission Form</h4>
              <p className="text-body text-muted-foreground">
                Apply online or via DD for your desired undergraduate or postgraduate program before the stipulated deadline (May 31st).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-muted/30 dark:bg-[#2a060c]/50 border border-border/40">
              <span className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-3 text-small-label">2</span>
              <h4 className="text-card-title font-bold text-foreground mb-1">Attach Income & Merit Proof</h4>
              <p className="text-body text-muted-foreground">
                Submit the prescribed financial assistance proforma along with verified proof of father&apos;s / guardian&apos;s annual income and previous marksheets.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-muted/30 dark:bg-[#2a060c]/50 border border-border/40">
              <span className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-3 text-small-label">3</span>
              <h4 className="text-card-title font-bold text-foreground mb-1">Committee Review & Disbursement</h4>
              <p className="text-body text-muted-foreground">
                The Vidyapith Scholarship Committee reviews applications during semester enrollment and directly credits fee rebates or stipends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
