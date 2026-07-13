"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, Sparkles, Command } from "lucide-react";
import QuickSearchModal from "@/components/common/QuickSearchModal";
import NoticeTicker from "@/components/home/NoticeTicker";

const navLinks = [
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "Scholarships", href: "/scholarships" },
  { name: "Campus", href: "/campus-life" },
  { name: "Research", href: "/research" },
  { name: "Virtual Tour", href: "/virtual-tour" },
  { name: "FAQ", href: "/faq-and-reach" },
  { name: "Notices", href: "/notices" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHeaderSolid = isScrolled || !isHomePage;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full z-50 flex flex-col">
        <NoticeTicker />
        <header
          className={`w-full transition-all duration-300 ease-in-out ${
            isHeaderSolid
              ? "bg-[#fffdf9]/95 dark:bg-[#1e0408]/95 backdrop-blur-xl border-b border-gold/30 shadow-lg shadow-primary/10 py-3.5"
              : "bg-gradient-to-b from-[#1e0408]/85 md:from-[#1e0408]/60 via-[#1e0408]/30 to-transparent py-5"
          }`}
        >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between gap-4 xl:gap-8">
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-3 lg:gap-4 group z-50">
            <div className={`relative w-10 h-10 lg:w-11 lg:h-11 rounded-full overflow-hidden border shadow-lg flex items-center justify-center transition-all ${
              isHeaderSolid ? "bg-white border-primary/20 shadow-primary/10" : "border-white/20 shadow-black/20 bg-white/5 backdrop-blur-sm"
            }`}>
              <Image 
                src="/scraped-images/7_banasthali_panchmuki.gif" 
                alt="Banasthali Vidyapith Emblem" 
                width={24} 
                height={24} 
                style={{ width: "auto", height: "auto" }}
                className="object-contain filter brightness-110 group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <span className={`font-serif text-[13px] lg:text-[15px] font-bold tracking-wider transition-colors ${
                isHeaderSolid ? "text-foreground" : "text-white drop-shadow-md"
              }`}>
                BANASTHALI VIDYAPITH
              </span>
              <span className={`text-[8px] lg:text-[9px] tracking-[0.25em] uppercase font-semibold transition-colors ${
                isHeaderSolid ? "text-primary dark:text-gold" : "text-white/90 drop-shadow-sm"
              }`}>
                Est. 1935 • 90 Years
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (Sleek, No Pill) */}
          <nav className="hidden xl:flex items-center space-x-4 2xl:space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[12px] 2xl:text-[13px] uppercase font-medium tracking-wider transition-all relative py-1 whitespace-nowrap ${
                    isActive
                      ? isHeaderSolid
                        ? "text-primary dark:text-gold font-bold"
                        : "text-gold font-bold"
                      : isHeaderSolid
                      ? "text-foreground/80 hover:text-primary dark:hover:text-gold"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className={`absolute -bottom-1 left-0 right-0 h-[2px] rounded-full ${
                        isHeaderSolid ? "bg-primary dark:bg-gold" : "bg-gold"
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
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all text-[12px] uppercase font-bold tracking-wider border whitespace-nowrap ${
                isHeaderSolid
                  ? "bg-white/5 hover:bg-black/5 text-foreground border-black/10 shadow-sm"
                  : "bg-black/20 hover:bg-black/40 text-white border-white/10 backdrop-blur-md shadow-lg"
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span className="opacity-90">Search</span>
              <kbd className="hidden 2xl:flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/10 text-[9px] font-medium opacity-70 ml-1">
                <Command className="w-2.5 h-2.5" /> K
              </kbd>
            </button>

            <Link
              href="/apply"
              className="flex items-center gap-2 px-5 py-1.5 rounded-full bg-white text-black hover:bg-white/90 font-bold text-[12px] tracking-wider uppercase shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all hover:scale-105 whitespace-nowrap"
            >
              <span>APPLY NOW</span>
            </Link>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setSearchModalOpen(true)}
              aria-label="Search"
              className={`p-2.5 rounded-full transition-colors ${
                isHeaderSolid ? "bg-secondary text-primary" : "bg-white/20 text-white backdrop-blur-md"
              }`}
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              className={`p-2 rounded-xl transition-colors ${
                isHeaderSolid ? "text-foreground" : "text-white"
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
                <div className="text-small-label text-muted-foreground uppercase tracking-widest px-2 mb-2">
                  Navigation Menu
                </div>
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`font-serif text-card-title px-4 py-2.5 rounded-2xl transition-all flex items-center justify-between ${
                        isActive 
                          ? "bg-primary/10 text-primary dark:text-gold font-bold pl-6 border-l-4 border-primary dark:border-gold" 
                          : "text-foreground hover:bg-muted/50"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{link.name}</span>
                      <span className="text-caption font-sans text-muted-foreground">→</span>
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
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-secondary text-foreground font-semibold text-button shadow-sm"
                >
                  <Search className="w-4 h-4 text-primary" />
                  <span>Search Campus & Programs</span>
                </button>
                <Link
                  href="/apply"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-primary via-red-800 to-amber-700 text-white font-bold text-button shadow-lg shadow-primary/20"
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
