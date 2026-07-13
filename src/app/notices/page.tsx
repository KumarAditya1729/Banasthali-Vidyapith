"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";

import { Sparkles, FileText, Download, Search, Bell, Calendar, Filter, ShieldCheck, Award, BookOpen, ExternalLink } from "lucide-react";
import Link from "next/link";

interface UniversityDoc {
  id: string;
  title: string;
  category: 'aptitude' | 'nirf' | 'governance' | 'results' | 'academic';
  filename: string;
  localPath: string;
  date: string;
  size: string;
}

const documents: UniversityDoc[] = [
  // Aptitude Test Sample Papers
  {
    id: "btech-bpharm",
    title: "Aptitude Test Syllabi & Sample Questions (B.Tech / B.Pharm)",
    category: "aptitude",
    filename: "1_BTECH-BPHARM.pdf",
    localPath: "/scraped-docs/1_BTECH-BPHARM.pdf",
    date: "Latest Session",
    size: "1.2 MB"
  },
  {
    id: "mba-sample",
    title: "Aptitude Test Sample Questions & Guidelines (MBA)",
    category: "aptitude",
    filename: "2_MBA.pdf",
    localPath: "/scraped-docs/2_MBA.pdf",
    date: "Latest Session",
    size: "850 KB"
  },
  {
    id: "llm-sample",
    title: "Aptitude Test Syllabi & Sample Questions (LL.M Law)",
    category: "aptitude",
    filename: "5_LLM.pdf",
    localPath: "/scraped-docs/5_LLM.pdf",
    date: "Latest Session",
    size: "720 KB"
  },
  {
    id: "nursing-sample",
    title: "Aptitude Test Syllabi & Sample Questions (B.Sc Nursing)",
    category: "aptitude",
    filename: "6_NURSING.pdf",
    localPath: "/scraped-docs/6_NURSING.pdf",
    date: "Latest Session",
    size: "680 KB"
  },
  {
    id: "babed-sample",
    title: "Aptitude Test Syllabi (B.A. B.Ed / B.Sc B.Ed Integrated)",
    category: "aptitude",
    filename: "4_BABEd-BSCBEd.pdf",
    localPath: "/scraped-docs/4_BABEd-BSCBEd.pdf",
    date: "Latest Session",
    size: "940 KB"
  },
  {
    id: "brochure",
    title: "Official Admission Brochure (Jan-May Cycle)",
    category: "aptitude",
    filename: "61_Brochure_Jan-May.pdf",
    localPath: "/scraped-docs/61_Brochure_Jan-May.pdf",
    date: "2026",
    size: "3.4 MB"
  },

  // Governance & Policies
  {
    id: "anti-ragging-comm",
    title: "Anti-Ragging Committee Constitution & Regulations",
    category: "governance",
    filename: "22_Anti-Ragging-Committee-2024.pdf",
    localPath: "/scraped-docs/22_Anti-Ragging-Committee-2024.pdf",
    date: "2024-2026",
    size: "450 KB"
  },
  {
    id: "anti-ragging-squad",
    title: "Anti-Ragging Squad & Emergency Monitoring Protocol",
    category: "governance",
    filename: "23_Anti-Ragging-Squad-2024.pdf",
    localPath: "/scraped-docs/23_Anti-Ragging-Squad-2024.pdf",
    date: "2024-2026",
    size: "380 KB"
  },
  {
    id: "code-of-ethics",
    title: "Code of Ethics & Academic Integrity in Research",
    category: "governance",
    filename: "19_3-4-1-Code-of-Ethics-in-Resaerch.pdf",
    localPath: "/scraped-docs/19_3-4-1-Code-of-Ethics-in-Resaerch.pdf",
    date: "Institutional Policy",
    size: "520 KB"
  },
  {
    id: "research-scheme",
    title: "Banasthali Vidyapith Research Promotion Scheme",
    category: "governance",
    filename: "20_Banasthali-Vidyapith-Research-Promation-Scheme.pdf",
    localPath: "/scraped-docs/20_Banasthali-Vidyapith-Research-Promation-Scheme.pdf",
    date: "Institutional Policy",
    size: "610 KB"
  },
  {
    id: "infra-policy",
    title: "Policy for Infrastructure Utilization & Maintenance",
    category: "governance",
    filename: "25_Infrastructure-Utilization-and-Maintenance-Policy.pdf",
    localPath: "/scraped-docs/25_Infrastructure-Utilization-and-Maintenance-Policy.pdf",
    date: "Institutional Policy",
    size: "490 KB"
  },

  // NIRF & Statutory Reports
  {
    id: "nirf-overall-26",
    title: "MHRD NIRF Overall University Data (IR26)",
    category: "nirf",
    filename: "56_BV_NIRF_Overall_Data_IR26.pdf",
    localPath: "/scraped-docs/56_BV_NIRF_Overall_Data_IR26.pdf",
    date: "NIRF 2026",
    size: "2.1 MB"
  },
  {
    id: "nirf-engg-26",
    title: "MHRD NIRF Engineering Category Data (IR26)",
    category: "nirf",
    filename: "59_BV_NIRF_Engineering_Data_IR26.pdf",
    localPath: "/scraped-docs/59_BV_NIRF_Engineering_Data_IR26.pdf",
    date: "NIRF 2026",
    size: "1.8 MB"
  },
  {
    id: "nirf-pharm-26",
    title: "MHRD NIRF Pharmacy Category Data (IR26)",
    category: "nirf",
    filename: "60_BV_NIRF_Pharmacy_Data_IR26.pdf",
    localPath: "/scraped-docs/60_BV_NIRF_Pharmacy_Data_IR26.pdf",
    date: "NIRF 2026",
    size: "1.6 MB"
  },
  {
    id: "nirf-sdg-26",
    title: "MHRD NIRF SDG Institution Data (IR26)",
    category: "nirf",
    filename: "57_BV_NIRF_SDG_Institution_Data_IR26.pdf",
    localPath: "/scraped-docs/57_BV_NIRF_SDG_Institution_Data_IR26.pdf",
    date: "NIRF 2026",
    size: "1.4 MB"
  },
  {
    id: "aicte-report",
    title: "Application & AICTE Approval Report",
    category: "nirf",
    filename: "0_Application_AICTE_Report_2019-20.pdf",
    localPath: "/scraped-docs/0_Application_AICTE_Report_2019-20.pdf",
    date: "Statutory Filing",
    size: "3.2 MB"
  },

  // Results & Notices
  {
    id: "seminar-me",
    title: "National Seminar on India's Macroeconomic Landscape (March 2026)",
    category: "results",
    filename: "63_National_Seminar_India_ME_Landscape_EIS_Outlook.pdf",
    localPath: "/scraped-docs/63_National_Seminar_India_ME_Landscape_EIS_Outlook.pdf",
    date: "March 13-14, 2026",
    size: "780 KB"
  },
  {
    id: "seminar-icssr",
    title: "ICSSR Sponsored National Seminar on Sustainable Development",
    category: "results",
    filename: "64_ICSSR_Sponsored_National_Seminar_2024.pdf",
    localPath: "/scraped-docs/64_ICSSR_Sponsored_National_Seminar_2024.pdf",
    date: "September 28-29",
    size: "820 KB"
  },
  {
    id: "result-he",
    title: "Certificate & Diploma Course (Higher Education) Results Declared",
    category: "results",
    filename: "74_Certificate_Diploma_Course_HE_Result.pdf",
    localPath: "/scraped-docs/74_Certificate_Diploma_Course_HE_Result.pdf",
    date: "Result Notification",
    size: "540 KB"
  },
  {
    id: "result-school-22",
    title: "Senior Secondary School Results (12th Humanities, Science, Commerce)",
    category: "results",
    filename: "66_Result-2022-12.pdf",
    localPath: "/scraped-docs/66_Result-2022-12.pdf",
    date: "Result Declaration",
    size: "1.1 MB"
  },
  {
    id: "tender-1",
    title: "Official Institutional Tender Notice I",
    category: "results",
    filename: "69_Tender-I.pdf",
    localPath: "/scraped-docs/69_Tender-I.pdf",
    date: "Tender Bulletin",
    size: "620 KB"
  },

  // Academic Councils
  {
    id: "acad-council",
    title: "Academic Council Composition & Mandate",
    category: "academic",
    filename: "11_Academic_Council.pdf",
    localPath: "/scraped-docs/11_Academic_Council.pdf",
    date: "Statutory Council",
    size: "410 KB"
  },
  {
    id: "exec-council",
    title: "Executive Council Composition & Proceedings",
    category: "academic",
    filename: "9_Executive_Council.pdf",
    localPath: "/scraped-docs/9_Executive_Council.pdf",
    date: "Statutory Council",
    size: "430 KB"
  },
  {
    id: "fin-committee",
    title: "Finance Committee Composition & Governance",
    category: "academic",
    filename: "10_Finance_Committee.pdf",
    localPath: "/scraped-docs/10_Finance_Committee.pdf",
    date: "Statutory Council",
    size: "390 KB"
  },
  {
    id: "po-ug",
    title: "Programme Objectives & Outcomes (Undergraduate Courses)",
    category: "academic",
    filename: "14_PO-CO-Undergraduate-courses.pdf",
    localPath: "/scraped-docs/14_PO-CO-Undergraduate-courses.pdf",
    date: "Curriculum Outcome",
    size: "1.5 MB"
  },
  {
    id: "po-pg",
    title: "Programme Objectives & Outcomes (Postgraduate Courses)",
    category: "academic",
    filename: "15_PO-post-graduate.pdf",
    localPath: "/scraped-docs/15_PO-post-graduate.pdf",
    date: "Curriculum Outcome",
    size: "1.7 MB"
  }
];

export default function NoticesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredDocs = documents.filter(doc => {
    const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory;
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.filename.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 bg-gradient-to-b from-primary/10 via-background to-background overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,50,0,0.15),rgba(255,255,255,0))]" />
        
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium tracking-wide mb-6">
            <Bell className="w-4 h-4" />
            <span>Document Repository & Notice Board</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            Official Circulars & <span className="text-primary italic">Downloads</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Access authentic university documents, aptitude test sample papers, NIRF rankings, and statutory governance circulars.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by keyword (e.g. B.Tech, NIRF, Anti-Ragging, Result)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-card border border-border shadow-md focus:border-primary focus:outline-none text-sm md:text-base"
            />
          </div>
        </div>
      </section>

      {/* Main Repository Section */}
      <section className="py-16 md:py-24 container mx-auto px-6 md:px-12 flex-1">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Documents" },
            { id: "aptitude", label: "Aptitude Test & Syllabi" },
            { id: "nirf", label: "NIRF & Statutory Reports" },
            { id: "governance", label: "Governance & Policies" },
            { id: "results", label: "Results & Notices" },
            { id: "academic", label: "Academic Councils" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                selectedCategory === tab.id
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "bg-card hover:bg-muted text-foreground/80 border border-border/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Documents Table / Grid */}
        <div className="max-w-5xl mx-auto space-y-4">
          {filteredDocs.length === 0 ? (
            <div className="text-center py-16 bg-card rounded-3xl border border-border">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold mb-2">No Documents Found</h3>
              <p className="text-sm text-muted-foreground">Try searching for a different keyword or selecting 'All Documents'.</p>
            </div>
          ) : (
            filteredDocs.map((doc) => (
              <div
                key={doc.id}
                className="group bg-card p-6 rounded-2xl border border-border/80 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-muted text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        {doc.category}
                      </span>
                      <span className="text-xs text-muted-foreground">• {doc.date}</span>
                    </div>
                    <h3 className="font-serif font-bold text-base md:text-lg text-foreground group-hover:text-primary transition-colors">
                      {doc.title}
                    </h3>
                    <div className="text-xs text-muted-foreground font-mono mt-1">
                      Filename: {doc.filename} ({doc.size})
                    </div>
                  </div>
                </div>

                <a
                  href={doc.localPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto px-6 py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-sm shrink-0"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
              </div>
            ))
          )}
        </div>
      </section>


    </div>
  );
}
