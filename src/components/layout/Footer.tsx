import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Sparkles, Award, GraduationCap, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1e0408] via-[#2a060c] to-[#140205] text-white pt-20 pb-12 border-t border-gold/40 relative overflow-hidden shadow-[0_-15px_40px_rgba(128,0,0,0.25)]">
      {/* Decorative Golden Ambient Glow */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-gold/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-amber-700 flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <GraduationCap className="w-5 h-5 text-gold" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  BANASTHALI
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-semibold">
                  Vidyapith • Est. 1935
                </span>
              </div>
            </Link>

            <p className="text-white/70 leading-relaxed font-light text-sm pr-6">
              The world&apos;s largest fully residential university for women. Rooted in Gandhian simplicity and Panchmukhi Shiksha, empowering over 15,000 scholars from nursery to doctoral research in an 850-acre sanctuary.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-gold/30 text-gold text-xs font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>NAAC A++ Grade</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-semibold">
                <span>⚡ QS Asia Ranked</span>
              </div>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg font-bold mb-6 text-gold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Explore Portal</span>
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Academics & 45+ Degrees', href: '/academics' },
                { name: 'Online Admissions 2025-26', href: '/apply' },
                { name: 'Scholarship Calculator', href: '/scholarships' },
                { name: 'Campus Life & 31 Hostels', href: '/campus-life' },
                { name: 'Aviation & Research Labs', href: '/research' },
                { name: 'Official FAQs & Reach Us', href: '/faq-and-reach' },
                { name: 'NAAC Accreditation Docs', href: '/accreditation' },
                { name: 'Notices & Announcements', href: '/notices' },
                { name: 'Our 90-Year Legacy', href: '/about' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/70 hover:text-gold transition-all flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 mr-2.5 group-hover:bg-gold group-hover:scale-125 transition-all" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Logistics (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-lg font-bold mb-6 text-gold">Contact Us</h3>
            <ul className="space-y-4 text-xs sm:text-sm text-white/70 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                <span>P.O. Banasthali Vidyapith,<br />Tonk District, Rajasthan - 304022, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>+91 1438 228384</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>info@banasthali.ac.in</span>
              </li>
            </ul>
          </div>

          {/* Call to Action Box (3 cols) */}
          <div className="lg:col-span-3">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 backdrop-blur-xl relative overflow-hidden shadow-2xl">
              <div className="text-xs font-bold uppercase tracking-wider text-gold mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "6s" }} />
                <span>Admissions 2025-26</span>
              </div>
              <h4 className="font-serif text-xl font-bold text-white mb-3">
                Shaping Women Leaders
              </h4>
              <p className="text-xs text-white/70 font-light leading-relaxed mb-6">
                Applications are now open for B.Tech, UG, PG, and School residential programs. Take the first step today.
              </p>
              <Link 
                href="/apply" 
                className="group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary via-red-800 to-amber-700 text-white py-3 px-6 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg shadow-primary/30 hover:scale-105 transition-all"
              >
                <span>Apply Online Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 font-light gap-4">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Banasthali Vidyapith. Built with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>and Real Scraped Campus Data.</span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/accreditation" className="hover:text-gold transition-colors">NAAC A++ Certificate</Link>
            <Link href="/notices" className="hover:text-gold transition-colors">Official Documents</Link>
            <Link href="/faq-and-reach" className="hover:text-gold transition-colors">How to Reach</Link>
            <Link href="/about" className="hover:text-gold transition-colors">Privacy & Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
