"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, 
  Search, 
   
  Sparkles, 
  CheckCircle2, 
   
  ShieldCheck, 
  HelpCircle, 
  RotateCcw, 
  ArrowRight, 
  Calculator, 
  Filter, 
  
  ChevronRight,
  
} from "lucide-react";
import Link from "next/link";

export interface Scholarship {
  id: string;
  title: string;
  category: 'merit' | 'need' | 'special' | 'government' | 'private';
  amount: string;
  eligibility: string;
  description: string;
  sponsor: string;
  tags: string[];
  minMerit?: number; // min percentage
  maxIncome?: number; // max income in LPA
  specialCategory?: string;
}

export const SCHOLARSHIPS_DATA: Scholarship[] = [
  // University Merit Scholarships
  {
    id: 'merit-ssc',
    title: 'Senior Secondary Merit Scholarship (Full Course)',
    category: 'merit',
    amount: 'Full Tuition Fee Waiver & Merit Stipend',
    eligibility: 'Students standing 1st and 2nd in the merit of Senior Secondary Certificate Examination of Banasthali Vidyapith.',
    description: 'Awarded to the top two academic performers in the university school system to encourage continued excellence.',
    sponsor: 'Banasthali Vidyapith',
    tags: ['100% Waiver', 'Top Rankers', 'School Topper'],
    minMerit: 90
  },
  {
    id: 'merit-ug',
    title: 'Undergraduate Excellence Scholarship',
    category: 'merit',
    amount: 'Annual Merit Award & Fee Rebate',
    eligibility: 'Students standing 1st and 2nd in the merit of B.A., B.Sc., B.C.A., B.B.A., and B.Sc. Home Science examinations.',
    description: 'Recognizes outstanding undergraduate scholars transitioning to higher semesters or postgraduate programs.',
    sponsor: 'Banasthali Vidyapith',
    tags: ['UG Toppers', 'Annual Rebate', 'Merit Award'],
    minMerit: 85
  },
  {
    id: 'merit-subject',
    title: 'Subject Topper Excellence Award',
    category: 'merit',
    amount: 'Special Academic Prize & Book Grant',
    eligibility: 'Students obtaining highest marks in examinations of Class VI, Senior Secondary Part-I, BCA, BBA, and B.Tech 1st & 2nd year.',
    description: 'Dedicated awards for individual subject toppers across technical, management, and science disciplines.',
    sponsor: 'Banasthali Vidyapith',
    tags: ['Subject Topper', 'Book Grant', 'Academic Prize'],
    minMerit: 80
  },
  {
    id: 'merit-pg',
    title: 'Postgraduate Semester Merit Scholarship',
    category: 'merit',
    amount: 'Semester Fee Exemption & Research Stipend',
    eligibility: 'Students obtaining highest marks in M.A., M.Sc., M.Sc. Home Science, and M.B.A. I and II semester examinations.',
    description: 'Encourages postgraduate researchers and scholars to maintain premier academic standards.',
    sponsor: 'Banasthali Vidyapith',
    tags: ['PG Excellence', 'Research Stipend', 'Semester Exemption'],
    minMerit: 85
  },

  // Merit-cum-Need Scholarships
  {
    id: 'need-5k',
    title: 'Vidyapith Merit-cum-Need Scholarship (Tier 1)',
    category: 'need',
    amount: 'Rs. 5,000/- Annual Support',
    eligibility: 'Economically deserving students with strong academic standing across undergraduate and postgraduate courses.',
    description: 'Direct financial assistance provided by the university to ensure financial constraints never hinder quality education.',
    sponsor: 'Banasthali Vidyapith',
    tags: ['Financial Aid', 'Merit-cum-Need', 'Annual Support'],
    minMerit: 60,
    maxIncome: 5.0
  },
  {
    id: 'need-10k',
    title: 'Vidyapith Merit-cum-Need Scholarship (Tier 2)',
    category: 'need',
    amount: 'Rs. 10,000/- Annual Support',
    eligibility: 'Meritorious students from lower-income backgrounds demonstrating exceptional dedication and potential.',
    description: 'Enhanced annual financial support for students requiring substantial tuition and campus living assistance.',
    sponsor: 'Banasthali Vidyapith',
    tags: ['Enhanced Aid', 'Lower Income Support', 'Tuition Support'],
    minMerit: 65,
    maxIncome: 2.5
  },
  {
    id: 'need-bank',
    title: 'Collaborative Bank Loan Scholarships & Interest Rebate',
    category: 'need',
    amount: 'Subsidized Education Loans & Institutional Guarantee',
    eligibility: 'Economically needy students admitted to professional courses (B.Tech, B.Pharm, MBA, Aviation) with higher fee structures.',
    description: 'Banasthali Vidyapith has formal collaborations with major national banks (SBI, UCO Bank, ICICI) to provide immediate loan scholarships.',
    sponsor: 'Partner National Banks & Vidyapith',
    tags: ['Subsidized Loans', 'Bank Collaboration', 'Professional Courses'],
    maxIncome: 8.0
  },

  // Special & National Honor Scholarships
  {
    id: 'spec-kargil',
    title: 'Daughters of Kargil Martyrs Scholarship',
    category: 'special',
    amount: '100% Complete Education & Boarding Waiver',
    eligibility: 'Daughters of Indian Armed Forces personnel who made the supreme sacrifice in the Kargil War or national defense operations.',
    description: 'A sacred institutional pledge by Banasthali Vidyapith to honor national heroes by providing comprehensive, lifelong educational support.',
    sponsor: 'Banasthali Vidyapith National Honor Fund',
    tags: ['100% Free Education', 'Defense Martyrs', 'National Honor'],
    specialCategory: 'defense'
  },
  {
    id: 'spec-warden',
    title: 'Hostel Wardens & Campus Staff Daughters Scholarship',
    category: 'special',
    amount: 'Special Tuition Rebate & Campus Support',
    eligibility: 'Daughters of dedicated hostel wardens and long-serving residential staff members of Banasthali Vidyapith.',
    description: 'Recognizes the tireless 24/7 dedication of campus residential staff who care for thousands of students across 29 hostels.',
    sponsor: 'Banasthali Vidyapith Welfare Fund',
    tags: ['Staff Welfare', 'Tuition Rebate', 'Hostel Staff'],
    specialCategory: 'staff'
  },
  {
    id: 'spec-assistantship',
    title: 'Teaching & Research Assistantships (TAs/RAs)',
    category: 'special',
    amount: 'Monthly Honorarium & Tuition Waiver',
    eligibility: 'M.Tech, M.Phil, and Doctoral (Ph.D.) scholars teaching undergraduate classes or assisting in sponsored research projects.',
    description: 'Provides valuable pedagogical and research experience along with financial self-sufficiency for advanced scholars.',
    sponsor: 'Vidyapith Research & MHRD/DST Grants',
    tags: ['Monthly Honorarium', 'Research Scholars', 'TA / RA'],
    minMerit: 70
  },

  // Government & Tribal Welfare Scholarships
  {
    id: 'gov-gor',
    title: 'Mahila Yogyata Chhatravritti (Govt. of Rajasthan)',
    category: 'government',
    amount: 'State Merit Stipend & Annual Allowance',
    eligibility: 'Meritorious female students domiciled in Rajasthan pursuing degree and professional courses.',
    description: 'Official state government scholarship recognizing female academic excellence across Rajasthan.',
    sponsor: 'Government of Rajasthan',
    tags: ['Rajasthan State', 'Govt Grant', 'Women Excellence'],
    minMerit: 75,
    specialCategory: 'rajasthan'
  },
  {
    id: 'gov-ne-tribal',
    title: 'North-East States Tribal Students Scholarship',
    category: 'government',
    amount: 'Complete Tuition, Boarding & Travel Allowance',
    eligibility: 'Tribal girl students hailing from North-Eastern states: Meghalaya, Mizoram, Assam, Nagaland, Tripura, Manipur, Sikkim, and Arunachal Pradesh.',
    description: 'Administered by the Dept. of Social Welfare, Govt. of India and state governments to promote national integration.',
    sponsor: 'Ministry of Tribal Affairs / NE State Governments',
    tags: ['North-East Tribal', '100% Boarding & Tuition', 'Govt of India'],
    specialCategory: 'northeast'
  },
  {
    id: 'gov-scst',
    title: 'Post-Metric SC/ST/OBC & Minorities Scholarship',
    category: 'government',
    amount: 'Full Tuition Reimbursement & Maintenance Allowance',
    eligibility: 'Students belonging to SC, ST, OBC, and Minority communities as per government income thresholds.',
    description: 'Provided by Social Justice and Welfare Departments across various state governments.',
    sponsor: 'Department of Social Justice & Empowerment',
    tags: ['SC / ST / OBC', 'Tuition Reimbursement', 'State Welfare'],
    maxIncome: 2.5,
    specialCategory: 'scst'
  },
  {
    id: 'gov-sanskrit',
    title: 'Rajasthan Sanskrit Academy Merit Scholarship',
    category: 'government',
    amount: 'Annual Classical Studies Stipend',
    eligibility: 'Meritorious undergraduate students specializing in Sanskrit, Vedic Studies, and Philosophy.',
    description: 'Encourages the preservation and advanced scholarly exploration of classical Indian languages and Vedic heritage.',
    sponsor: 'Rajasthan Sanskrit Academy',
    tags: ['Vedic Studies', 'Sanskrit Scholars', 'Classical Heritage'],
    minMerit: 70,
    specialCategory: 'sanskrit'
  },

  // Private, Endowed & Memorial Scholarships
  {
    id: 'priv-mahindra',
    title: 'K.C. Mahindra Education Trust Scholarship',
    category: 'private',
    amount: 'Mahindra Search for Talent Award & Grant',
    eligibility: 'Top performers and meritorious students across undergraduate and postgraduate disciplines.',
    description: 'Prestigious national scholarship awarded by the Mahindra Foundation to foster leadership and academic brilliance.',
    sponsor: 'K.C. Mahindra Education Trust',
    tags: ['Corporate Trust', 'Talent Search', 'Prestigious'],
    minMerit: 85
  },
  {
    id: 'priv-artech',
    title: 'Artech - Dalmia Scholarship for Technical Programs',
    category: 'private',
    amount: 'High-Value Technical Education Grant',
    eligibility: 'Deserving and meritorious students pursuing B.Tech, M.Tech, and MCA programs at Apaji Institute (AIM&ACT).',
    description: 'Endowed by industrialist Shri M.H. Dalmia and Artech Ltd. to empower women technologists and engineers.',
    sponsor: 'Artech Ltd. & Dalmia Trust',
    tags: ['B.Tech / M.Tech', 'Corporate Endowment', 'Women in Tech'],
    minMerit: 80
  },
  {
    id: 'priv-bajaj',
    title: 'Shri Jamnalal Bajaj Scholarship',
    category: 'private',
    amount: 'Annual Tuition Endowment',
    eligibility: 'Students demonstrating exemplary character, Gandhian values, and academic merit.',
    description: 'Instituted in memory of legendary freedom fighter and industrialist Shri Jamnalal Bajaj.',
    sponsor: 'Jamnalal Bajaj Foundation',
    tags: ['Gandhian Values', 'Memorial Trust', 'Tuition Endowment'],
    minMerit: 75
  },
  {
    id: 'priv-kanoria',
    title: 'Kanoria Memorial Trust Scholarship (MBA)',
    category: 'private',
    amount: 'Management Studies Tuition Grant',
    eligibility: 'Meritorious and economically deserving women students pursuing MBA at WISDOM (Faculty of Management).',
    description: 'Dedicated corporate trust scholarship supporting future women business leaders and corporate executives.',
    sponsor: 'Kanoria Memorial Trust',
    tags: ['MBA Scholars', 'WISDOM Faculty', 'Corporate Grant'],
    minMerit: 75,
    maxIncome: 6.0
  },
  {
    id: 'priv-rural-garg',
    title: 'Dr. Jagmohan Dayal Garg Rural Girl Scholarship',
    category: 'private',
    amount: 'Comprehensive Boarding & Tuition Support',
    eligibility: 'Poor and deserving girl students hailing from remote rural backgrounds with strong academic dedication.',
    description: 'Directly aligns with Banasthali’s foundational mission of rural reconstruction and empowering girls from underprivileged rural communities.',
    sponsor: 'Dr. Jagmohan Dayal Garg Foundation',
    tags: ['Rural Empowerment', 'Remote Backgrounds', 'Comprehensive Support'],
    maxIncome: 2.5
  }
];

export default function ScholarshipMatcher() {
  const [activeTab, setActiveTab] = useState<'quiz' | 'browse' | 'calculator'>('quiz');
  
  // Quiz State
  const [incomeLpa, setIncomeLpa] = useState<number>(3.0);
  const [meritScore, setMeritScore] = useState<number>(85);
  const [specialCat, setSpecialCat] = useState<string>('none');

  // Browse State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Calculator State
  const [calcFee, setCalcFee] = useState<number>(160000);

  // Matcher calculation
  const matchedScholarships = useMemo(() => {
    return SCHOLARSHIPS_DATA.filter(s => {
      // Check special category match first
      if (specialCat !== 'none' && s.specialCategory === specialCat) {
        return true;
      }
      
      // Check merit threshold
      const meetsMerit = !s.minMerit || meritScore >= s.minMerit;
      
      // Check income threshold
      const meetsIncome = !s.maxIncome || incomeLpa <= s.maxIncome;

      // If neither special category was selected nor did it strictly match, verify merit and income
      return meetsMerit && meetsIncome;
    });
  }, [incomeLpa, meritScore, specialCat]);

  // Browse filtering
  const browseResults = useMemo(() => {
    return SCHOLARSHIPS_DATA.filter(s => {
      const matchesCat = selectedCategory === 'all' || s.category === selectedCategory;
      const matchesSearch = 
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.sponsor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Financial Aid Estimate Calculator
  const aidEstimate = useMemo(() => {
    let waiverPercent = 0;
    const reasons: string[] = [];

    if (specialCat === 'defense' || specialCat === 'northeast') {
      waiverPercent = 100;
      reasons.push("100% Special Category Waiver (Defense / North-East Tribal)");
    } else {
      if (meritScore >= 90) {
        waiverPercent += 50;
        reasons.push("50% Merit Waiver (>= 90% Academic Score)");
      } else if (meritScore >= 80) {
        waiverPercent += 25;
        reasons.push("25% Merit Waiver (80% - 89% Academic Score)");
      }

      if (incomeLpa <= 2.5) {
        waiverPercent += 40;
        reasons.push("40% Need-Based Grant (Annual Income <= ₹2.5 LPA)");
      } else if (incomeLpa <= 5.0) {
        waiverPercent += 20;
        reasons.push("20% Need-Based Grant (Annual Income <= ₹5.0 LPA)");
      }
    }

    const totalWaiver = Math.min(waiverPercent, 100);
    const amountSaved = Math.round((calcFee * totalWaiver) / 100);
    const finalFee = calcFee - amountSaved;

    return { totalWaiver, amountSaved, finalFee, reasons };
  }, [specialCat, meritScore, incomeLpa, calcFee]);

  return (
    <div className="w-full bg-[#141212] py-16 px-4 md:px-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden my-12">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      {/* Header */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-small-label font-semibold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              Financial Aid & Scholarship Concierge
            </div>
            <h2 className="text-section-heading font-garamond text-white tracking-wide">
              Unlock Your Scholarship Eligibility
            </h2>
            <p className="text-white/60 text-body mt-2 max-w-2xl">
              At Banasthali Vidyapith, no student should be deprived of education due to financial constraints. Use our interactive tools to match with 20+ endowment funds.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10 w-full md:w-auto">
            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex-1 md:flex-none px-4 py-2.5 rounded-xl text-button font-medium transition-all flex items-center justify-center gap-2 ${
                activeTab === 'quiz' ? "bg-gold text-black font-semibold shadow-lg" : "text-white/70 hover:text-white"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              AI Matcher
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`flex-1 md:flex-none px-4 py-2.5 rounded-xl text-button font-medium transition-all flex items-center justify-center gap-2 ${
                activeTab === 'calculator' ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold shadow-lg" : "text-white/70 hover:text-white"
              }`}
            >
              <Calculator className="w-4 h-4" />
              Fee Estimator
            </button>
            <button
              onClick={() => setActiveTab('browse')}
              className={`flex-1 md:flex-none px-4 py-2.5 rounded-xl text-button font-medium transition-all flex items-center justify-center gap-2 ${
                activeTab === 'browse' ? "bg-white text-black font-semibold shadow-lg" : "text-white/70 hover:text-white"
              }`}
            >
              <Search className="w-4 h-4" />
              Browse All
            </button>
          </div>
        </div>

        {/* TAB 1: QUIZ MATCHER */}
        {activeTab === 'quiz' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Interactive Inputs */}
            <div className="lg:col-span-5 bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-card-title font-garamond text-white font-semibold flex items-center gap-2 border-b border-white/10 pb-4">
                <Filter className="w-5 h-5 text-gold" />
                Your Profile Attributes
              </h3>

              {/* Slider 1: Merit Score */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-small-label font-semibold text-white/80 uppercase tracking-wider">
                    Academic Merit (% in Qualifying Exam)
                  </label>
                  <span className="text-small-label font-bold text-gold bg-gold/10 px-2.5 py-0.5 rounded-md border border-gold/20">
                    {meritScore}%
                  </span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={100}
                  value={meritScore}
                  onChange={(e) => setMeritScore(Number(e.target.value))}
                  className="w-full accent-gold bg-white/10 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-small-label text-white/40 mt-1">
                  <span>50%</span>
                  <span>75%</span>
                  <span>100% (Topper)</span>
                </div>
              </div>

              {/* Slider 2: Annual Family Income */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-small-label font-semibold text-white/80 uppercase tracking-wider">
                    Annual Family Income
                  </label>
                  <span className="text-small-label font-bold text-green-400 bg-green-500/10 px-2.5 py-0.5 rounded-md border border-green-500/20">
                    ₹ {incomeLpa} LPA
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={15}
                  step={0.5}
                  value={incomeLpa}
                  onChange={(e) => setIncomeLpa(Number(e.target.value))}
                  className="w-full accent-green-400 bg-white/10 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-small-label text-white/40 mt-1">
                  <span>₹ 1 LPA</span>
                  <span>₹ 8 LPA</span>
                  <span>₹ 15+ LPA</span>
                </div>
              </div>

              {/* Special Category Selection */}
              <div>
                <label className="text-small-label font-semibold text-white/80 uppercase tracking-wider block mb-2.5">
                  Special / Priority Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: 'none', label: 'General / No Special Cat' },
                    { id: 'defense', label: 'Daughter of Kargil Martyr' },
                    { id: 'northeast', label: 'North-East Tribal Student' },
                    { id: 'scst', label: 'SC / ST / OBC / Minority' },
                    { id: 'rajasthan', label: 'Rajasthan Domicile' },
                    { id: 'staff', label: 'Hostel Warden / Staff Daughter' },
                    { id: 'sanskrit', label: 'Sanskrit / Vedic Studies' }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSpecialCat(cat.id)}
                      className={`p-2.5 rounded-xl text-left text-button font-medium transition-all border ${
                        specialCat === cat.id
                          ? "bg-gold text-black font-semibold border-gold shadow"
                          : "bg-black/30 text-white/70 hover:bg-white/10 hover:text-white border-white/5"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setMeritScore(85);
                  setIncomeLpa(3.0);
                  setSpecialCat('none');
                }}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 text-button font-medium transition-colors flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Profile Attributes
              </button>
            </div>

            {/* Right Column: Matched Scholarships */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-card-title font-garamond text-white font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  Eligible Scholarships Found ({matchedScholarships.length})
                </h3>
                <span className="text-small-label text-white/50 bg-white/5 px-3 py-1 rounded-full">
                  Real-time matching
                </span>
              </div>

              <AnimatePresence mode="popLayout">
                {matchedScholarships.length > 0 ? (
                  <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                    {matchedScholarships.map((s) => (
                      <motion.div
                        key={s.id}
                        layout
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="bg-[#1c1919] border border-white/10 rounded-2xl p-6 hover:border-gold/40 transition-all shadow-md group"
                      >
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
                          <div>
                            <span className="inline-block px-2.5 py-0.5 rounded-md bg-gold/10 text-gold text-small-label font-semibold uppercase tracking-wider mb-2">
                              {s.category.toUpperCase()} FUND
                            </span>
                            <h4 className="text-card-title font-garamond text-white font-semibold group-hover:text-gold transition-colors">
                              {s.title}
                            </h4>
                          </div>
                          <div className="bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-xl text-green-400 text-small-label font-semibold shrink-0">
                            {s.amount}
                          </div>
                        </div>

                        <p className="text-body text-white/70 mb-4 leading-relaxed font-light">
                          {s.description}
                        </p>

                        <div className="bg-black/30 p-3 rounded-xl border border-white/5 text-body text-white/60 mb-4">
                          <strong className="text-white/80">Eligibility criteria:</strong> {s.eligibility}
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10 text-caption">
                          <div className="flex flex-wrap gap-1.5">
                            {s.tags.map((t, idx) => (
                              <span key={idx} className="bg-white/5 px-2 py-0.5 rounded text-[10px] text-white/60">
                                #{t}
                              </span>
                            ))}
                          </div>
                          <span className="text-white/40 italic text-small-label">Sponsor: {s.sponsor}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-white/5 rounded-2xl border border-white/10">
                    <HelpCircle className="w-12 h-12 text-white/20 mx-auto mb-3" />
                    <h4 className="text-card-title font-garamond text-white font-medium">No strict matches found</h4>
                    <p className="text-body text-white/50 mt-1 max-w-md mx-auto">
                      Don&apos;t worry! Banasthali Vidyapith also offers collaborative bank loan scholarships and general student aid. Try lowering income criteria or checking &apos;General&apos; category.
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* TAB 2: FEE ESTIMATOR CALCULATOR */}
        {activeTab === 'calculator' && (
          <div className="bg-gradient-to-br from-emerald-900/30 via-[#1c1919] to-black/80 p-6 md:p-10 rounded-2xl border border-emerald-500/30">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-small-label font-bold uppercase tracking-widest text-emerald-400 block mb-2">
                  Transparent Financial Planning
                </span>
                <h3 className="text-section-heading font-garamond text-white font-semibold">
                  Personalized Tuition Fee Savings Estimator
                </h3>
                <p className="text-white/70 text-body mt-2">
                  Adjust your annual course tuition fee and see how your profile attributes (from the AI Matcher) translate into direct fee waivers!
                </p>
              </div>

              {/* Slider for Course Fee */}
              <div className="bg-black/50 p-6 rounded-2xl border border-white/10 mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-small-label font-semibold text-white uppercase tracking-wider">
                    Select Estimated Annual Tuition Fee
                  </label>
                  <span className="text-card-title font-bold text-emerald-400">
                    ₹ {calcFee.toLocaleString('en-IN')} / yr
                  </span>
                </div>
                <input
                  type="range"
                  min={80000}
                  max={250000}
                  step={5000}
                  value={calcFee}
                  onChange={(e) => setCalcFee(Number(e.target.value))}
                  className="w-full accent-emerald-400 bg-white/10 h-3 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-caption text-white/40 mt-2">
                  <span>₹ 80,000 (Humanities / B.Sc)</span>
                  <span>₹ 1,50,000 (B.Tech / MBA)</span>
                  <span>₹ 2,50,000 (Aviation / Special)</span>
                </div>
              </div>

              {/* Breakdown Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 p-5 rounded-2xl border border-white/10 text-center">
                  <span className="text-small-label text-white/50 block mb-1">Standard Annual Fee</span>
                  <div className="text-section-heading font-garamond text-white font-bold">
                    ₹ {calcFee.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="bg-emerald-500/10 p-5 rounded-2xl border border-emerald-500/30 text-center">
                  <span className="text-small-label text-emerald-300 block mb-1">Estimated Waiver ({aidEstimate.totalWaiver}%)</span>
                  <div className="text-section-heading font-garamond text-emerald-400 font-bold">
                    - ₹ {aidEstimate.amountSaved.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="bg-gold/10 p-5 rounded-2xl border border-gold/40 text-center shadow-[0_0_25px_rgba(212,175,55,0.15)]">
                  <span className="text-small-label text-gold block mb-1 font-semibold">Effective Payable Fee</span>
                  <div className="text-section-heading font-garamond text-gold font-bold">
                    ₹ {aidEstimate.finalFee.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {/* Reasons Applied */}
              <div className="bg-black/40 p-5 rounded-2xl border border-white/10 space-y-2">
                <h4 className="text-small-label font-bold uppercase tracking-wider text-white/60 mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Waivers Applied Based on Your Profile:
                </h4>
                {aidEstimate.reasons.length > 0 ? (
                  aidEstimate.reasons.map((r, i) => (
                    <div key={i} className="flex items-center gap-2 text-body text-white/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{r}</span>
                    </div>
                  ))
                ) : (
                  <div className="text-caption text-white/50 italic">
                    No automatic percentage waivers triggered. Try increasing academic merit or selecting a special category in the AI Matcher tab!
                  </div>
                )}
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-button transition-all shadow-lg"
                >
                  <span>Apply for Scholarship & Admission</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: BROWSE ALL SCHOLARSHIPS */}
        {activeTab === 'browse' && (
          <div className="space-y-6">
            {/* Search and Category Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Search scholarships, sponsors, tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/40 text-body focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {[
                  { id: 'all', label: 'All Funds' },
                  { id: 'merit', label: 'Merit' },
                  { id: 'need', label: 'Need-Based' },
                  { id: 'government', label: 'Government' },
                  { id: 'private', label: 'Private & Trusts' },
                  { id: 'special', label: 'Special / Defense' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-button font-medium transition-all ${
                      selectedCategory === cat.id
                        ? "bg-gold text-black font-semibold shadow"
                        : "bg-black/30 text-white/70 hover:bg-white/10 hover:text-white border border-white/5"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {browseResults.map((s) => (
                <div
                  key={s.id}
                  className="bg-[#1c1919] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-gold/40 transition-all shadow-md group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-md bg-white/5 text-white/60 text-small-label uppercase font-semibold">
                        {s.category}
                      </span>
                      <span className="text-small-label font-semibold text-green-400 bg-green-500/10 px-2.5 py-0.5 rounded-md">
                        {s.amount}
                      </span>
                    </div>

                    <h4 className="text-card-title font-garamond text-white font-semibold mb-2 group-hover:text-gold transition-colors">
                      {s.title}
                    </h4>

                    <p className="text-body text-white/70 mb-4 leading-relaxed line-clamp-3">
                      {s.description}
                    </p>

                    <div className="bg-black/30 p-3 rounded-xl border border-white/5 text-caption text-white/60 mb-4">
                      <strong className="text-white/80">Eligibility:</strong> {s.eligibility}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-caption">
                    <span className="text-white/40 italic text-small-label">Sponsor: {s.sponsor}</span>
                    <Link
                      href="/admissions"
                      className="text-gold font-semibold hover:text-white inline-flex items-center gap-1 text-button"
                    >
                      Inquire
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
