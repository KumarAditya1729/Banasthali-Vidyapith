"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, Sparkles, GraduationCap } from "lucide-react";
import QuickSearchModal from "@/components/common/QuickSearchModal";
import NoticeTicker from "@/components/home/NoticeTicker";

const navLinks = [
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/apply" },
  { name: "Scholarships", href: "/scholarships" },
  { name: "Campus Life", href: "/campus-life" },
  { name: "Research", href: "/research" },
  { name: "FAQ & Reach Us", href: "/faq-and-reach" },
  { name: "Notices & Docs", href: "/notices" },
  { name: "About Us", href: "/about" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full z-50 flex flex-col">
        <NoticeTicker />
        <header
          className={`w-full transition-all duration-300 ease-in-out ${
            isScrolled
              ? "bg-[#fffdf9]/95 dark:bg-[#1e0408]/95 backdrop-blur-xl border-b border-gold/30 shadow-lg shadow-primary/10 py-3.5"
              : "bg-gradient-to-b from-[#1e0408]/85 md:from-[#1e0408]/60 via-[#1e0408]/30 to-transparent py-5"
          }`}
        >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-50 group">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg border border-gold/40 ${
              isScrolled 
                ? "bg-gradient-to-br from-[#800000] to-[#5a0c16] text-gold shadow-primary/30" 
                : "bg-[#1e0408]/90 text-gold backdrop-blur-md shadow-black/30"
            }`}>
              <Image 
                src="/scraped-images/7_banasthali_panchmuki.gif" 
                alt="Banasthali Vidyapith Emblem" 
                width={26} 
                height={26} 
                className="object-contain filter brightness-110 group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-xl md:text-2xl font-bold tracking-wider transition-colors ${
                isScrolled ? "text-foreground" : "text-white drop-shadow-md"
              }`}>
                BANASTHALI
              </span>
              <span className={`text-[9px] md:text-[10px] tracking-[0.25em] uppercase font-semibold transition-colors ${
                isScrolled ? "text-primary dark:text-gold" : "text-white/90 drop-shadow-sm"
              }`}>
                Vidyapith • Est. 1935
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 bg-black/10 dark:bg-white/5 backdrop-blur-md px-5 py-2 rounded-full border border-white/15 dark:border-white/10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-semibold tracking-wide transition-all relative py-1 ${
                    isActive
                      ? isScrolled
                        ? "text-primary dark:text-gold font-bold"
                        : "text-gold font-bold"
                      : isScrolled
                      ? "text-foreground/80 hover:text-primary dark:hover:text-gold"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                        isScrolled ? "bg-primary dark:bg-gold" : "bg-gold"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => setSearchModalOpen(true)}
              aria-label="Search"
              className={`flex items-center gap-2.5 px-3.5 py-2 rounded-full transition-all text-xs font-semibold border ${
                isScrolled
                  ? "bg-secondary/60 hover:bg-secondary text-foreground border-border/60 shadow-sm"
                  : "bg-white/15 hover:bg-white/25 text-white border-white/20 backdrop-blur-md shadow-lg"
              }`}
            >
              <Search className="w-3.5 h-3.5 text-primary dark:text-gold animate-pulse" />
              <span>Ask AI / Search</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                isScrolled ? "bg-background text-muted-foreground" : "bg-black/30 text-white/80"
              }`}>
                ⌘K
              </span>
            </button>
            <Link
              href="/apply"
              className="group relative inline-flex items-center gap-1.5 bg-gradient-to-r from-primary via-red-800 to-amber-700 text-white px-6 py-2 rounded-full text-xs font-bold tracking-wider hover:scale-105 transition-all shadow-md hover:shadow-xl shadow-primary/20 overflow-hidden"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold animate-spin" style={{ animationDuration: "6s" }} />
              <span>APPLY NOW</span>
            </Link>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setSearchModalOpen(true)}
              aria-label="Search"
              className={`p-2.5 rounded-full transition-colors ${
                isScrolled ? "bg-secondary text-primary" : "bg-white/20 text-white backdrop-blur-md"
              }`}
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              className={`p-2 rounded-xl transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-0 left-0 w-full h-screen bg-background/95 dark:bg-[#1e0408]/95 backdrop-blur-2xl pt-24 px-6 lg:hidden z-40 flex flex-col justify-between pb-10"
            >
              <div className="flex flex-col space-y-4 overflow-y-auto">
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-2 mb-2">
                  Navigation Menu
                </div>
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`font-serif text-2xl px-4 py-2.5 rounded-2xl transition-all flex items-center justify-between ${
                        isActive 
                          ? "bg-primary/10 text-primary dark:text-gold font-bold pl-6 border-l-4 border-primary dark:border-gold" 
                          : "text-foreground hover:bg-muted/50"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{link.name}</span>
                      <span className="text-xs font-sans text-muted-foreground">→</span>
                    </Link>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setSearchModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-secondary text-foreground font-semibold text-sm shadow-sm"
                >
                  <Search className="w-4 h-4 text-primary" />
                  <span>Search Campus & Programs</span>
                </button>
                <Link
                  href="/apply"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-primary via-red-800 to-amber-700 text-white font-bold text-sm shadow-lg shadow-primary/20"
                >
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span>Apply Online for Admission</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      </div>

      {/* Quick Search Modal */}
      <QuickSearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
    </>
  );
}
