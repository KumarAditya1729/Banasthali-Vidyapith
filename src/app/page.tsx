"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Award, 
  BookOpen, 
  Home as HomeIcon, 
  Plane, 
  IndianRupee, 
  Users, 
  ShieldCheck, 
  CheckCircle2,
  Calendar,
  
} from "lucide-react";
import { homeData } from "@/data/home";
import PanchmukhiExplorer from "@/components/home/PanchmukhiExplorer";

// --- Hero Section ---
// --- Hero Section ---
function PremiumHero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-32 md:pt-36 bg-gradient-to-br from-[#2a060c] via-[#1e0408] to-[#140205] text-white">
      {/* Background Image with Cinematic Zoom and Luxury Gradients */}
      <motion.div 
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.55 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/scraped-images/hero-background.png"
          alt="Banasthali Vidyapith Heritage Campus"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e0408] via-[#1e0408]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e0408] via-transparent to-[#2a060c]/60" />
      </motion.div>

      {/* Decorative Golden Mesh Glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-gold/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/30 rounded-full blur-[120px] pointer-events-none" />

      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 my-auto py-6 sm:py-8">
        <div className="max-w-4xl space-y-5 md:space-y-6">
          {/* Top Heritage Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold/40 shadow-xl text-gold text-small-label font-semibold tracking-wide"
          >
            <Sparkles className="w-4 h-4 text-gold animate-pulse" />
            <span>ESTABLISHED OCTOBER 6, 1935 • 90 YEARS OF EXCELLENCE</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-hero font-serif font-bold leading-[1.1] tracking-tight text-white drop-shadow-md"
          >
            Empowering Women. <br />
            Shaping the <span className="gold-gradient-text italic font-normal">Destiny of India.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-subheading text-white/80 font-light max-w-2xl leading-relaxed drop-shadow-sm"
          >
            The world&apos;s largest residential university for women—where over 15,000 scholars thrive across aviation, quantum computing, engineering, management, and classical arts in an 850-acre sanctuary.
          </motion.p>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link
              href="/academics"
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black font-bold text-button tracking-wide uppercase hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              <span>Explore 45+ Programs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>

            <Link
              href="/virtual-tour"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-button tracking-wide transition-all duration-300 hover:scale-105"
            >
              <Compass className="w-4 h-4 text-gold" />
              <span>Virtual Campus Tour</span>
            </Link>

            <Link
              href="/scholarships"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-button tracking-wide transition-all duration-300 hover:scale-105"
            >
              <IndianRupee className="w-4 h-4 text-gold" />
              <span>Scholarship Calculator</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Live Stats Ticker (In Normal Document Flow) */}
      <div className="relative z-20 bg-[#1e0408]/80 backdrop-blur-xl border-t border-white/10 py-6 w-full mt-auto">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center md:text-left">
            <div className="flex items-center gap-3.5 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold shrink-0 transition-transform hover:scale-110 duration-300">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif font-bold text-white tracking-wide text-[14px] md:text-[16px] leading-snug">NAAC A++ Grade</div>
                <div className="text-[9px] md:text-[10px] tracking-wider uppercase font-medium text-white/50">Highest CGPA 3.83/4.00</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold shrink-0 transition-transform hover:scale-110 duration-300">
                <HomeIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif font-bold text-white tracking-wide text-[14px] md:text-[16px] leading-snug">31 Hostels</div>
                <div className="text-[9px] md:text-[10px] tracking-wider uppercase font-medium text-white/50">100% Residential Campus</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold shrink-0 transition-transform hover:scale-110 duration-300">
                <Plane className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif font-bold text-white tracking-wide text-[14px] md:text-[16px] leading-snug">Licensed Airfield</div>
                <div className="text-[9px] md:text-[10px] tracking-wider uppercase font-medium text-white/50">Cessna 172 Flying Club</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold shrink-0 transition-transform hover:scale-110 duration-300">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif font-bold text-white tracking-wide text-[14px] md:text-[16px] leading-snug">15,000+ Scholars</div>
                <div className="text-[9px] md:text-[10px] tracking-wider uppercase font-medium text-white/50">From Nursery to Ph.D.</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 justify-center md:justify-start col-span-2 md:col-span-1">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold shrink-0 transition-transform hover:scale-110 duration-300">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif font-bold text-white tracking-wide text-[14px] md:text-[16px] leading-snug">850+ Acres</div>
                <div className="text-[9px] md:text-[10px] tracking-wider uppercase font-medium text-white/50">Zero Pollution Sanctuary</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Interactive Features Showcase ---
function InteractiveToolsShowcase() {
  return (
    <section className="py-20 bg-muted/40 border-y border-border/60 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-small-label font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Interactive Digital Campus</span>
          </div>
          <h2 className="text-section-heading font-serif font-bold tracking-tight">
            Experience Banasthali <span className="gold-gradient-text italic font-normal">Intelligently</span>
          </h2>
          <p className="text-muted-foreground text-body mt-3 leading-relaxed">
            We have built smart, AI-assisted tools to help students and parents navigate programs, calculate scholarships, and explore our 850-acre ecosystem seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Course Wizard",
              subtitle: "Interactive Program Finder",
              desc: "Filter over 45+ UG, PG, and Ph.D. degrees by discipline, duration, and entrance requirements instantly.",
              icon: BookOpen,
              href: "/academics",
              color: "from-blue-600/10 via-blue-500/5 to-transparent border-blue-500/20 text-blue-600",
              badge: "45+ Degrees"
            },
            {
              title: "AI Scholarship Matcher",
              subtitle: "Financial Aid & Fee Estimator",
              desc: "Take our personalized quiz to discover merit and need-based tuition waivers up to 100% and calculate exact mess fees.",
              icon: IndianRupee,
              href: "/scholarships",
              color: "from-amber-600/10 via-amber-500/5 to-transparent border-amber-500/20 text-amber-600",
              badge: "Up to 100% Waiver"
            },
            {
              title: "Interactive Campus Map",
              subtitle: "850-Acre Zone Explorer",
              desc: "Take a virtual tour across our licensed airfield, 31 residential hostels, Olympic pool, and science mandirs.",
              icon: Compass,
              href: "/campus-life",
              color: "from-emerald-600/10 via-emerald-500/5 to-transparent border-emerald-500/20 text-emerald-600",
              badge: "13 Precincts"
            },
            {
              title: "Heritage Timeline",
              subtitle: "1935 to Present Archives",
              desc: "Explore historic milestones, archival photographs of Mahatma Gandhi & Pt. Nehru, and our Phoenix genesis story.",
              icon: Calendar,
              href: "/about",
              color: "from-purple-600/10 via-purple-500/5 to-transparent border-purple-500/20 text-purple-600",
              badge: "90 Years Legacy"
            }
          ].map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link
                  href={tool.href}
                  className={`group block h-full p-7 rounded-3xl bg-card border ${tool.color} shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                        <Icon className="w-6 h-6 text-primary dark:text-gold" />
                      </div>
                      <span className="text-small-label font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary dark:bg-gold/10 dark:text-gold">
                        {tool.badge}
                      </span>
                    </div>

                    <div className="text-small-label font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      {tool.subtitle}
                    </div>
                    <h3 className="text-card-title font-serif font-bold text-foreground group-hover:text-primary dark:group-hover:text-gold transition-colors mb-3">
                      {tool.title}
                    </h3>
                    <p className="text-caption text-muted-foreground leading-relaxed font-light mb-6">
                      {tool.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between text-button font-bold text-primary dark:text-gold">
                    <span>Launch Explorer</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --- Storytelling Sections ---
function LegacyStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 md:py-40 bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-small-label font-bold uppercase tracking-wider">
              <span>{homeData.legacy.tagline}</span>
            </div>
            
            <h2 className="text-section-heading font-serif font-bold text-foreground leading-[1.1]">
              {homeData.legacy.headline} <br />
              <span className="italic gold-gradient-text font-normal">{homeData.legacy.highlight}</span>.
            </h2>
            
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-gold rounded-full" />
            
            <p className="text-foreground/80 text-body leading-relaxed font-light font-sans">
              {homeData.legacy.description}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <Link 
                href="/about" 
                className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-primary text-white font-semibold text-button uppercase tracking-wider shadow-lg hover:bg-primary/90 hover:scale-105 transition-all"
              >
                <span>Read Our Phoenix Genesis Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              
              <div className="flex items-center gap-2 text-body font-medium text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Autonomous & Deemed University since 1983</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-[420px] md:h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl border border-border/80 group">
              <Image
                src={homeData.legacy.image}
                alt="Historical Campus"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Floating Museum Quote Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/90 dark:bg-[#1c1919]/90 backdrop-blur-xl border border-white/20 shadow-2xl">
                <div className="flex items-start gap-3">
                  <span className="text-section-heading font-serif text-primary dark:text-gold leading-none">&ldquo;</span>
                  <div>
                    <p className="font-serif italic text-body text-foreground mb-2 leading-relaxed">
                      {homeData.legacy.quote}
                    </p>
                    <p className="text-small-label text-primary dark:text-gold uppercase tracking-widest font-bold">
                      — {homeData.legacy.quoteAuthor}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Gold Accent Badge */}
            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-gradient-to-br from-gold to-amber-600 p-1 shadow-2xl hidden md:flex items-center justify-center text-center animate-pulse">
              <div className="w-full h-full rounded-full bg-[#1e0408] flex flex-col items-center justify-center text-white p-2">
                <span className="text-card-title font-bold font-serif text-gold">90</span>
                <span className="text-[9px] uppercase tracking-widest leading-tight">Years of Pride</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// --- The Living Campus ---
function LivingCampus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 bg-gradient-to-b from-[#140205] via-[#1e0408] to-[#2a060c] text-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(128,24,36,0.2),rgba(0,0,0,0))] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold text-small-label font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>{homeData.campus.tagline}</span>
            </div>
            <h3 className="text-section-heading font-serif font-bold leading-[1.1] text-white">
              {homeData.campus.headlinePart1} <br />
              <span className="italic gold-gradient-text font-normal">{homeData.campus.headlinePart2}</span>
            </h3>
          </div>
          <p className="text-white/70 font-light max-w-md text-body leading-relaxed">
            {homeData.campus.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeData.campus.places.map((place, idx) => (
            <motion.div
              key={place.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
            >
              <Link
                href="/campus-life"
                className={`group block relative rounded-3xl overflow-hidden shadow-xl border border-white/10 hover:border-gold/50 cursor-pointer ${place.span} min-h-[300px] md:min-h-[360px] flex flex-col justify-end transition-all duration-500 hover:-translate-y-2`}
              >
                <Image 
                  src={place.img} 
                  alt={place.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="relative z-10 p-7 space-y-2">
                  <div className="inline-block px-2.5 py-1 rounded-md bg-gold/20 backdrop-blur-md border border-gold/30 text-gold text-small-label font-bold uppercase tracking-wider">
                    Featured Precinct
                  </div>
                  <h4 className="text-white font-serif font-bold text-card-title group-hover:text-gold transition-colors">
                    {place.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-button font-semibold text-white/80 group-hover:text-white pt-2">
                    <span>Explore Precinct Gallery</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform text-gold" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/campus-life"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold text-black font-bold text-button uppercase tracking-wider hover:bg-gold/90 transition-all shadow-xl hover:scale-105"
          >
            <span>Explore All 13 Campus Precincts & Hostels</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// --- Main Page Component ---
export default function HomePage() {
  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden">
      <PremiumHero />
      <InteractiveToolsShowcase />
      <LegacyStory />
      <PanchmukhiExplorer />
      <LivingCampus />
    </div>
  );
}
