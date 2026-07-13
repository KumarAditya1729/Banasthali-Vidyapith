"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle2, AlertCircle, FileText, IndianRupee, Sparkles } from "lucide-react";

// Real data scraped from the legacy Banasthali website
const ADMISSION_DEADLINE = "May 31st, 2026";
const LATE_DEADLINE = "July 15th, 2026";
const APPLICATION_FEE = "1,000";
const SECURITY_DEPOSIT = "20,000";

const programmes = [
  { id: "btech", name: "B.Tech", tracks: ["CS-AI", "CSE", "EC", "EE", "IT", "BT"] },
  { id: "management", name: "Management", tracks: ["MBA", "BBA", "BBA Hons."] },
  { id: "sciences", name: "Sciences", tracks: ["B.Sc. Aviation", "B.Sc. Nursing", "B.Pharm"] },
  { id: "arts", name: "Arts & Design", tracks: ["B.Design", "B.A. JMC", "Visual Arts"] }
];

export default function AdmissionsJourney() {
  const [step, setStep] = useState(1);
  const [selectedProg, setSelectedProg] = useState<string | null>(null);

  const steps = [
    { id: 1, title: "Choose Programme" },
    { id: 2, title: "Check Eligibility" },
    { id: 3, title: "Fee Estimator" },
    { id: 4, title: "AI Assistant" }
  ];

  return (
    <div className="min-h-screen bg-[#fdfbf7] pt-36 md:pt-44 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-hero font-garamond text-foreground mb-4">Admissions <span className="italic text-terracotta">Journey</span></h1>
          <p className="text-subheading text-foreground/70 font-light px-4">Admission is open to all women irrespective of race, religion, caste, color or domicile.</p>
        </div>

        {/* Journey Progress */}
        <div className="flex items-center justify-between mb-10 md:mb-16 relative before:absolute before:inset-0 before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:bg-border before:z-0 px-2 md:px-0">
          {steps.map((s) => (
            <div key={s.id} className="relative z-10 flex flex-col items-center bg-[#fdfbf7] px-2 md:px-4">
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border transition-colors duration-500 ${step >= s.id ? 'bg-primary border-primary text-primary-foreground' : 'bg-white border-border text-foreground/50'}`}>
                {step > s.id ? <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" /> : <span className="text-body font-serif">{s.id}</span>}
              </div>
              <span className={`text-small-label mt-2 md:mt-3 font-medium text-center max-w-[60px] md:max-w-none leading-tight ${step >= s.id ? 'text-primary' : 'text-foreground/50'}`}>{s.title}</span>
            </div>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-12 shadow-sm border border-border/50 min-h-[400px] md:min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {/* Step 1: Choose Programme */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-section-heading font-garamond mb-6 md:mb-8 text-center">Select Your Path</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {programmes.map(prog => (
                    <button 
                      key={prog.id}
                      onClick={() => { setSelectedProg(prog.id); setStep(2); }}
                      className={`text-left p-5 md:p-6 rounded-2xl border transition-all duration-300 hover:border-terracotta hover:shadow-md ${selectedProg === prog.id ? 'border-terracotta bg-terracotta/5' : 'border-border'}`}
                    >
                      <h3 className="text-card-title font-serif mb-2 md:mb-3 text-foreground">{prog.name}</h3>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {prog.tracks.map(t => (
                          <span key={t} className="text-small-label px-2 py-1 bg-secondary rounded-full text-foreground/70">{t}</span>
                        ))}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Eligibility & Rules */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-section-heading font-garamond mb-8">Eligibility & Guidelines</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                    <AlertCircle className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-body font-medium text-foreground mb-1">Aptitude Test Required</h4>
                      <p className="text-caption text-foreground/70 font-light leading-relaxed">
                        Admission to B.Tech, MBA, and B.Pharm programmes are based on an aptitude test scheduled at Banasthali Vidyapith centers. 
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-6 bg-terracotta/5 rounded-2xl border border-terracotta/20">
                    <CheckCircle2 className="w-6 h-6 text-terracotta shrink-0 mt-1" />
                    <div>
                      <h4 className="text-body font-medium text-foreground mb-1">Compulsory Residential Policy</h4>
                      <p className="text-caption text-foreground/70 font-light leading-relaxed">
                        A student admitted to Banasthali Vidyapith has to compulsorily join a hostel unless she belongs to a neighboring village community. Education here is a 24-hour holistic process.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex justify-between">
                  <button onClick={() => setStep(1)} className="text-button text-foreground/50 hover:text-foreground">Back</button>
                  <button onClick={() => setStep(3)} className="bg-primary text-primary-foreground px-8 py-3 rounded-full flex items-center hover:bg-primary/90 transition-colors">
                    Continue <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Fee Estimator */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-section-heading font-garamond mb-1 md:mb-2">Fee Estimator</h2>
                <p className="text-body text-foreground/60 mb-6 md:mb-8 font-light">Official estimates based on 2025-26 schedules.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex justify-between items-center p-3 md:p-4 border-b border-border">
                      <span className="text-body text-foreground/80">Application Fee</span>
                      <span className="text-body font-serif">₹{APPLICATION_FEE}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 md:p-4 border-b border-border">
                      <span className="text-body text-foreground/80">Hostel Admission (One-time)</span>
                      <span className="text-body font-serif">₹5,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 md:p-4 border-b border-border">
                      <span className="text-body text-foreground/80">Security Deposit (Refundable)</span>
                      <span className="text-body font-serif">₹{SECURITY_DEPOSIT}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 md:p-4 border-b border-border">
                      <span className="text-body text-foreground/80">Campus Fee / Amenities</span>
                      <span className="text-body font-serif">₹4,000</span>
                    </div>
                  </div>

                  <div className="bg-secondary rounded-2xl p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
                    <IndianRupee className="absolute -right-6 -bottom-6 w-32 h-32 md:-right-10 md:-bottom-10 md:w-48 md:h-48 text-foreground/5" />
                    <h4 className="uppercase tracking-widest text-small-label font-semibold mb-2 text-primary">Important Dates</h4>
                    <ul className="space-y-3 md:space-y-4 mt-2 md:mt-4 relative z-10">
                      <li className="flex flex-col">
                        <span className="text-small-label text-foreground/50">Standard Deadline</span>
                        <span className="text-body font-serif">{ADMISSION_DEADLINE}</span>
                      </li>
                      <li className="flex flex-col">
                        <span className="text-small-label text-terracotta">Late Fee Deadline (+₹900)</span>
                        <span className="text-body font-serif">{LATE_DEADLINE}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 md:mt-10 flex justify-between items-center">
                  <button onClick={() => setStep(2)} className="text-button text-foreground/50 hover:text-foreground">Back</button>
                  <button onClick={() => setStep(4)} className="bg-primary text-primary-foreground px-6 py-2.5 md:px-8 md:py-3 rounded-full flex items-center text-button hover:bg-primary/90 transition-colors">
                    AI Assistant <ChevronRight className="w-4 h-4 ml-1 md:ml-2" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: AI Admission Guide Mockup */}
            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-ping" />
                </div>
                <h2 className="text-section-heading font-garamond mb-4">Meet Vidyapith AI</h2>
                <p className="text-body text-foreground/70 font-light max-w-md mx-auto mb-8">
                  Have questions about scholarships, flight training fees for B.Sc. Aviation, or hostel life? Our AI counselor knows the entire rulebook.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3 rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                    Start Chat
                  </button>
                  <button className="w-full sm:w-auto border border-border px-8 py-3 rounded-full flex items-center justify-center hover:bg-secondary transition-colors text-foreground">
                    <FileText className="w-4 h-4 mr-2" />
                    Apply Directly
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
