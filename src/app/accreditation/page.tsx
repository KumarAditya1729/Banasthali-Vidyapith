"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";

import { Sparkles, Award, ShieldCheck, CheckCircle2, FileText, Scale, Users, ExternalLink } from "lucide-react";
import Image from "next/image";

const accreditations = [
  {
    title: "NAAC A++ Accreditation (Highest Grade)",
    issuer: "National Assessment and Accreditation Council (NAAC)",
    score: "CGPA 3.63 / 4.00",
    description: "Accredited with the highest 'A++' Grade by NAAC in its latest assessment cycle, recognizing Banasthali's academic excellence, research output, 100% residential infrastructure, and institutional values.",
    image: "/scraped-images/233_NAAC-Certificate.jpg",
    badge: "A++ Grade"
  },
  {
    title: "UGC Deemed University (Section 3)",
    issuer: "University Grants Commission (UGC)",
    score: "Granted in 1983",
    description: "Conferred Deemed University status under Section 3 of the UGC Act, 1956 by the Government of India, acknowledging its unique Panchmukhi Shiksha (Five-Fold Education) model and national importance.",
    image: "/scraped-images/4_1000.gif_ver_2023.1",
    badge: "UGC Recognized"
  },
  {
    title: "MHRD Category 'A' University",
    issuer: "Ministry of Education (formerly MHRD)",
    score: "Category 'A' Status",
    description: "Ranked in Category 'A' among Deemed Universities in India by the MHRD Review Committee based on academic quality, governance, and infrastructure.",
    image: "/scraped-images/225_Bloack-Diagram-of-Campus-NetworkingWebSite.jpg",
    badge: "Category 'A'"
  },
  {
    title: "Statutory Approvals (AICTE, BCI, INC, NCTE)",
    issuer: "National Statutory Councils",
    score: "100% Approved",
    description: "All technical, legal, nursing, and teacher education programs are fully approved by AICTE (Engineering/MBA), Bar Council of India (LL.B), Indian Nursing Council (B.Sc Nursing), and NCTE (B.Ed).",
    image: "/scraped-images/288_pharmacy1.jpg",
    badge: "Statutory Compliant"
  }
];

const statutoryCommittees = [
  {
    title: "Internal Complaints Committee (ICC)",
    mandate: "Prevention of Sexual Harassment (POSH)",
    description: "Constituted in accordance with UGC and Government of India regulations to ensure a safe, gender-sensitized, and zero-tolerance environment across all 850 acres.",
    image: "/scraped-images/226_ICC.png",
    contact: "icc@banasthali.in"
  },
  {
    title: "Student Grievance Redressal Committee (SGRC)",
    mandate: "Academic & Residential Grievances",
    description: "A transparent mechanism with appointed Ombudspersons for redressing student grievances regarding examinations, admissions, and hostel amenities.",
    image: "/scraped-images/227_SGRC.png",
    contact: "sgrc@banasthali.in"
  },
  {
    title: "Anti-Ragging Cell & Squad",
    mandate: "100% Ragging-Free Campus",
    description: "Banasthali maintains a strict zero-tolerance policy against ragging with 24/7 monitoring across all 31 hostels, dining halls, and academic blocks.",
    image: "/scraped-images/214_hostel2_thumb.jpg",
    contact: "antiragging@banasthali.in"
  }
];

export default function AccreditationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 bg-gradient-to-b from-primary/10 via-background to-background overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,50,0,0.15),rgba(255,255,255,0))]" />
        
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium tracking-wide mb-6">
            <Award className="w-4 h-4" />
            <span>Highest NAAC A++ Grade • UGC Deemed University</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            Accreditation, Rankings & <span className="text-primary italic">Governance</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Banasthali Vidyapith stands at the pinnacle of academic quality in India—endorsed by top national bodies for its rigorous standards, safety, and transparency.
          </p>
        </div>
      </section>

      {/* Accreditations Showcase */}
      <section className="py-16 md:py-24 container mx-auto px-6 md:px-12 flex-1">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">National Recognitions</h2>
          <p className="text-muted-foreground">Certified excellence by the Ministry of Education and UGC.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {accreditations.map((item, idx) => (
            <div key={idx} className="bg-card rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    {item.badge}
                  </span>
                  <span className="text-xs font-bold text-muted-foreground">{item.score}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2">{item.title}</h3>
                <div className="text-xs font-medium text-primary mb-4">{item.issuer}</div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="relative h-48 w-full rounded-2xl bg-muted overflow-hidden border border-border/40">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statutory Committees & Safe Campus */}
      <section className="py-16 md:py-24 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              Statutory Compliance
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">Governance & Student Safety</h2>
            <p className="text-muted-foreground">Dedicated committees upholding transparency, ethics, and dignity across campus.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {statutoryCommittees.map((comm, idx) => (
              <div key={idx} className="bg-card rounded-3xl p-8 border border-border shadow-sm flex flex-col justify-between">
                <div>
                  <div className="relative h-16 w-32 mb-6">
                    <Image
                      src={comm.image}
                      alt={comm.title}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <span className="text-xs text-primary font-bold uppercase tracking-wider">{comm.mandate}</span>
                  <h3 className="text-xl font-serif font-bold mt-1 mb-3">{comm.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-6">
                    {comm.description}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-border/60 text-xs font-medium text-foreground/80">
                  Official Email: <span className="text-primary font-semibold">{comm.contact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
