"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  Bus, 
  Calendar, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Compass, 
  CreditCard, 
  HelpCircle, 
  Home, 
  Info, 
  MapPin, 
  Navigation, 
  Phone, 
  Plane, 
  Radio, 
  ShieldAlert, 
  Sparkles, 
  Train, 
  Users 
} from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'admission' | 'campus' | 'academics' | 'facilities';
  highlight?: string;
}

const OFFICIAL_FAQS: FAQItem[] = [
  {
    id: 1,
    category: 'admission',
    question: "How can I obtain and submit the Banasthali Vidyapith admission form?",
    answer: "Admission forms are normally available from February onwards. You can obtain the form by sending a Demand Draft of Rs. 1,000/- in favor of 'Banasthali Vidyapith' payable at Banasthali/Jaipur to The Secretary, Banasthali Vidyapith, or by paying cash Rs. 1,000/- in person at Surya Mandir / Prabha Mandir. Online submission of applications is also available directly on the official portal. Separate forms must be filled for B.Pharm, B.Ed, and postgraduate courses.",
    highlight: "Last Date: May 31st (Without Late Fee) | July 15th (With Late Fee Rs. 900/-)"
  },
  {
    id: 2,
    category: 'admission',
    question: "In whose name should all fee payments and Demand Drafts be made?",
    answer: "All fee payments and Demand Drafts must be drawn in favor of 'Banasthali Vidyapith' payable at Banasthali Vidyapith or any bank in Jaipur. IMPORTANT: Payments by personal cheques are strictly NOT accepted by the Vidyapith under any circumstances. Online fee payment can also be made through the official portal.",
    highlight: "Cheques are NOT accepted. Use DD or Official Online Payment."
  },
  {
    id: 3,
    category: 'campus',
    question: "Is Banasthali Vidyapith exclusively for women?",
    answer: "Yes! Banasthali Vidyapith is strictly and exclusively for women, providing holistic educational opportunities from the Nursery stage all the way up to the Doctoral (Ph.D.) level. It is the world's largest residential university exclusively for women.",
    highlight: "Exclusively for Women from Nursery to Ph.D."
  },
  {
    id: 4,
    category: 'campus',
    question: "Is Banasthali Vidyapith a fully residential institution?",
    answer: "Yes, Banasthali Vidyapith is a fully residential institution. A student admitted to the Vidyapith has to compulsorily join a hostel of the Vidyapith unless she is a ward of a Vidyapith employee residing on campus or belongs to a neighboring village community. Hostel admission starts from Class VI onwards across our 29 modern hostels.",
    highlight: "Fully Residential Sanctuary with 29 Hostels"
  },
  {
    id: 5,
    category: 'academics',
    question: "What is the official medium of instruction across courses?",
    answer: "The medium of instruction in school education is mainly Hindi; however, we provide a bilingual system (English as well as Hindi for instructions, textbooks, and question papers) to cater to students desiring English medium. In Higher Education (Undergraduate and Postgraduate), both English and Hindi are used as mediums of instruction, with professional engineering and management programs conducted in English.",
    highlight: "Bilingual (English & Hindi) in Higher Education"
  },
  {
    id: 6,
    category: 'academics',
    question: "Does Banasthali Vidyapith offer any distance learning or online degrees?",
    answer: "No. Banasthali Vidyapith strictly DOES NOT offer any program under distance learning or correspondence. We believe in the immersive, residential 'Panchmukhi Shiksha' (Five-Fold Education) model which requires physical presence and holistic campus participation.",
    highlight: "No Distance Learning. 100% Regular Residential Programs."
  },
  {
    id: 7,
    category: 'campus',
    question: "Does Banasthali Vidyapith have any other campus outside Rajasthan?",
    answer: "No. Banasthali Vidyapith presently DOES NOT have any other campus anywhere else. All academic, sports, aviation, and research activities are centered exclusively at our single, sprawling 850-acre campus sanctuary in Banasthali, District Tonk, Rajasthan.",
    highlight: "Single Sprawling 850-Acre Campus Sanctuary in Rajasthan"
  },
  {
    id: 8,
    category: 'admission',
    question: "Does Banasthali Vidyapith provide scholarships and financial aid?",
    answer: "Yes! There are numerous institutional and endowed schemes helping students financially. The Vidyapith awards Merit Scholarships (for 1st and 2nd rankers), Merit-cum-Need scholarships (Rs. 5,000 to Rs. 10,000 annually), special waivers for daughters of Kargil Martyrs, government SC/ST/OBC scholarships, and private endowments like K.C. Mahindra Trust and Kanoria Trust.",
    highlight: "30+ Scholarships & Loan Facilitation Available"
  },
  {
    id: 9,
    category: 'facilities',
    question: "Can I study part-time courses in Gliding & Flying, Horse Riding, or Dance?",
    answer: "Yes! You can enroll in specialized part-time diploma and certificate courses in Gliding & Flying (at our own licensed airstrip), Horse Riding (with our 41 horses at Veer Bala Maidan), Classical Dance, Music, and Foreign Languages, PROVIDED you are a full-time regular student of a degree program at Banasthali Vidyapith.",
    highlight: "Open exclusively to full-time regular students of Vidyapith"
  },
  {
    id: 10,
    category: 'academics',
    question: "Does Banasthali Vidyapith have a dedicated placement cell?",
    answer: "Yes! Banasthali Vidyapith has an active, highly reputed Central Placement Cell that regularly attracts top Indian and multinational corporations. The Vidyapith maintains a record of ALMOST 100% PLACEMENT in professional disciplines especially in Information Technology, Management, Biotechnology, and Textile Design.",
    highlight: "Almost 100% Placement Record with Top Global Multinationals"
  }
];

export default function FAQAndReachPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [travelOrigin, setTravelOrigin] = useState<string>('jaipur');

  const filteredFaqs = OFFICIAL_FAQS.filter(
    faq => selectedCategory === 'all' || faq.category === selectedCategory
  );

  return (
    <main className="min-h-screen bg-background text-foreground pt-36 md:pt-44 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#2a060c] via-[#1e0408] to-[#140205] text-white shadow-2xl p-8 sm:p-14 border border-gold/40">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none overflow-hidden">
            <Image 
              src="/scraped-images/0_headerimg.jpg" 
              alt="Banasthali Aerial Campus" 
              fill 
              className="object-cover"
            />
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-gold text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
              <Compass className="w-3.5 h-3.5" />
              <span>Official Helpdesk & Travel Guide</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight font-serif">
              Everything You Need to <span className="text-gold underline decoration-gold/50 underline-offset-8">Know & Reach Us</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed font-light">
              Explore official answers to frequently asked questions regarding admissions and residential life, or plan your journey to our serene <strong className="text-white font-semibold">850-acre campus sanctuary</strong> in Rajasthan.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#official-faqs" 
                className="px-8 py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <HelpCircle className="w-5 h-5" />
                Browse Official FAQs
              </a>
              <a 
                href="#how-to-reach" 
                className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <Navigation className="w-5 h-5 text-gold" />
                How to Reach Guide
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Connectivity Stats */}
      <div className="max-w-7xl mx-auto mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card dark:bg-[#1e0408] p-6 rounded-2xl shadow-sm border border-border/60 flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-primary/10 dark:bg-primary/30 text-primary dark:text-gold">
            <Bus className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-semibold text-muted-foreground uppercase block">By Road</span>
            <h4 className="text-lg font-bold text-foreground">72 km from Jaipur</h4>
            <p className="text-xs text-muted-foreground mt-0.5">14 Roadways buses daily</p>
          </div>
        </div>

        <div className="bg-card dark:bg-[#1e0408] p-6 rounded-2xl shadow-sm border border-border/60 flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
            <Train className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-semibold text-muted-foreground uppercase block">By Rail</span>
            <h4 className="text-lg font-bold text-foreground">Banasthali-Newai (7 km)</h4>
            <p className="text-xs text-muted-foreground mt-0.5">On Jaipur-Mumbai Mainline</p>
          </div>
        </div>

        <div className="bg-card dark:bg-[#1e0408] p-6 rounded-2xl shadow-sm border border-border/60 flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
            <Plane className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-semibold text-muted-foreground uppercase block">By Air</span>
            <h4 className="text-lg font-bold text-foreground">Jaipur Airport (59 km)</h4>
            <p className="text-xs text-muted-foreground mt-0.5">Own Licensed Airfield on campus</p>
          </div>
        </div>

        <div className="bg-card dark:bg-[#1e0408] p-6 rounded-2xl shadow-sm border border-border/60 flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
            <Radio className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-semibold text-muted-foreground uppercase block">Campus Radio</span>
            <h4 className="text-lg font-bold text-foreground">90.4 MHz FM</h4>
            <p className="text-xs text-muted-foreground mt-0.5">30 km community reach</p>
          </div>
        </div>
      </div>

      {/* Official FAQs Section */}
      <div id="official-faqs" className="max-w-5xl mx-auto mb-20 scroll-mt-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-serif mb-4">
            Frequently Asked Questions (Official Archive)
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Direct answers from the University Grants Commission (UGC) notified institutional charter and prospectus.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All 10 Official FAQs' },
            { id: 'admission', label: 'Admissions & Fees' },
            { id: 'campus', label: 'Residential Life' },
            { id: 'academics', label: 'Academics & Medium' },
            { id: 'facilities', label: 'Special Courses & Placements' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'bg-card dark:bg-[#1e0408] text-foreground border border-border/60 hover:bg-muted/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-card dark:bg-[#1e0408] rounded-2xl border border-border/60 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-muted/30 transition-colors"
                >
                  <span className="font-bold text-lg text-foreground flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-primary/10 dark:bg-primary/30 text-primary dark:text-gold font-mono text-xs flex items-center justify-center shrink-0 border border-primary/20">
                      Q{faq.id}
                    </span>
                    {faq.question}
                  </span>
                  <span className="p-1 rounded-full bg-muted text-muted-foreground shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-border/40 text-muted-foreground text-sm sm:text-base leading-relaxed">
                    <p className="mb-4">{faq.answer}</p>
                    {faq.highlight && (
                      <div className="p-3 rounded-xl bg-primary/5 dark:bg-primary/20 border border-primary/20 text-foreground text-xs font-semibold flex items-center gap-2">
                        <Sparkles className="w-4 h-4 shrink-0 text-gold" />
                        <span>Key Note: {faq.highlight}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* How to Reach Guide Section */}
      <div id="how-to-reach" className="max-w-7xl mx-auto mb-20 scroll-mt-8">
        <div className="bg-[#2a060c] dark:bg-[#1e0408] text-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-gold/40">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-3.5 py-1 rounded-full bg-primary/20 text-gold text-xs font-semibold uppercase tracking-wider inline-block mb-3 border border-primary/30">
              Location & Travel Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">
              How to Reach Banasthali Vidyapith
            </h2>
            <p className="text-white/80 text-base sm:text-lg">
              Located in District Tonk, Rajasthan, our campus is seamlessly connected by major national highways, broad-gauge railways, and air routes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Road */}
            <div className="bg-black/30 p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/30 text-gold flex items-center justify-center mb-6">
                  <Bus className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">By Road (Highways & Buses)</h3>
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  Banasthali is located <strong>72 km from Jaipur</strong> and 8 km off the Jaipur-Kota National Highway (NH-52) at the 65 km milestone.
                </p>
                <ul className="text-xs text-white/80 space-y-2.5">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>14 Daily Express Buses:</strong> Rajasthan State Road Transport Corporation (RSRTC) operates direct express buses between Jaipur and Banasthali.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Frequency:</strong> Regular buses run almost every hour from 6:00 AM to evening from Sindhi Camp Bus Stand, Jaipur.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Kota Route:</strong> Alight at Newai or Banasthali More (65 km stone) on the Kota-Jaipur route and take university shuttle buses.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 text-xs text-gold/80 font-mono">
                GPS: 26.4024° N, 75.8752° E
              </div>
            </div>

            {/* Rail */}
            <div className="bg-black/30 p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6">
                  <Train className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">By Rail (Banasthali-Newai Station)</h3>
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  Our nearest railway station is <strong>Banasthali-Newai (Station Code: BNLW)</strong>, situated just 7 km from the university campus.
                </p>
                <ul className="text-xs text-white/80 space-y-2.5">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Strategic Line:</strong> On the Jaipur-Sawai Madhopur-Mumbai Broad Gauge mainline of Western Railway. Equidistant (66 km) from Jaipur & Sawai Madhopur.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Direct Connections:</strong> Direct trains from Delhi, Mumbai, Ahmedabad, Indore, Bhopal, Udaipur, Bikaner, Chennai, and Howrah.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>University Shuttle:</strong> Dedicated Vidyapith buses connect Banasthali-Newai station to campus for every major train arrival.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 text-xs text-emerald-400/80 font-mono">
                Station Code: BNLW (Western Railway)
              </div>
            </div>

            {/* Air */}
            <div className="bg-black/30 p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-6">
                  <Plane className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">By Air (Jaipur Airport & Airfield)</h3>
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  The nearest international airport is <strong>Jaipur International Airport (JAI)</strong>, located 59 km away with direct flights worldwide.
                </p>
                <ul className="text-xs text-white/80 space-y-2.5">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Jaipur Airport (59 km):</strong> 1 hour drive via Tonk Road / NH-52. Caxis and app-based cabs are readily available from airport terminal to campus.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Licensed Campus Airfield:</strong> Banasthali Vidyapith boasts its own licensed airstrip (09/26) spanning 50,191 sq. meters!</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Aviation Training:</strong> Used by BVGFC (Banasthali Vidyapith Gliding & Flying Club) since 1960 for pilot training and VIP aircraft landings.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 text-xs text-purple-400/80 font-mono">
                Airstrip: Runway 09/26 (BVGFC)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 850-Acre Campus Ecosystem Directory */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold font-serif text-foreground mb-3">
            An Self-Contained 850-Acre Sanctuary
          </h2>
          <p className="text-muted-foreground text-base">
            Our campus is a complete digital town equipped with world-class residential, medical, banking, and media amenities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card dark:bg-[#1e0408] p-6 rounded-2xl border border-border/60 shadow-sm">
            <h4 className="font-bold text-foreground mb-3 flex items-center gap-2 text-lg">
              <Home className="w-5 h-5 text-primary dark:text-gold" />
              29 Student Hostels & Quarters
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Housing over 15,000 students across 29 hostels (Shri Shanta Niveshanam, Shanta Vasam, Shanta Ayanam, etc.) with 24/7 internet PCs in rooms, plus 400 staff quarters and a Working Women's Hostel (113 seats).
            </p>
          </div>

          <div className="bg-card dark:bg-[#1e0408] p-6 rounded-2xl border border-border/60 shadow-sm">
            <h4 className="font-bold text-foreground mb-3 flex items-center gap-2 text-lg">
              <CreditCard className="w-5 h-5 text-emerald-600" />
              6 On-Campus Banks & ATMs
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Full-service branches of State Bank of India (SBI), UCO Bank, and Co-operative Bank with 6 24/7 ATMs (SBI, UCO, ICICI) across campus. Complete Post Office with Speed Post facility!
            </p>
          </div>

          <div className="bg-card dark:bg-[#1e0408] p-6 rounded-2xl border border-border/60 shadow-sm">
            <h4 className="font-bold text-foreground mb-3 flex items-center gap-2 text-lg">
              <Radio className="w-5 h-5 text-amber-600" />
              Radio Banasthali 90.4 MHz FM
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Our own community FM radio station broadcasting daily educational, health, and agricultural awareness programs prepared and presented by senior students across a 30 km rural radius!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
