"use client";

import { useState } from "react";
// import {} from "framer-";

import {  Microscope, Cpu, Dna, Globe, Award, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const researchCentres = [
  {
    id: "aim-act",
    title: "Centre for Artificial Intelligence, Mathematics & Computing (AIM & ACT)",
    category: "computing",
    image: "/scraped-images/255_ComputerScience-TEXT.gif",
    description: "A national center of excellence pioneering research in Artificial Intelligence, Neural Networks, Supercomputing, Cyber Security, and Mathematical Modeling. Funded by DST and industry partners.",
    stats: "AI & Supercomputing Hub"
  },
  {
    id: "bioinformatics",
    title: "Centre for Bioinformatics & Genomics",
    category: "lifesciences",
    image: "/scraped-images/284_SSR-Citrus-database.jpg",
    description: "Supported by the Department of Biotechnology (DBT), Government of India. Dedicated to computational biology, plant genomics, drug design, and biodiversity databases.",
    stats: "DBT Govt. of India Center"
  },
  {
    id: "curie",
    title: "DST CURIE Facility for Women Universities",
    category: "multidisciplinary",
    image: "/scraped-images/273_HPLC.JPG",
    description: "Consolidation of University Research for Innovation and Excellence (CURIE)—a flagship initiative by the Department of Science & Technology (DST) providing state-of-the-art analytical instrumentation.",
    stats: "Advanced Instrumentation"
  },
  {
    id: "pharmaceutical",
    title: "Herbal & Pharmaceutical Research Centre",
    category: "chemistry",
    image: "/scraped-images/280_Department_Library.JPG",
    description: "Focusing on indigenous herbal drug formulations, novel drug delivery systems (NDDS), pharmacology, and green chemistry synthesis.",
    stats: "PCI & AICTE Approved Labs"
  },
  {
    id: "women-scientist",
    title: "Women Scientist Scheme (WOS-A & WOS-B)",
    category: "multidisciplinary",
    image: "/scraped-images/264_Dept-JeevMandir.jpg",
    description: "Empowering women scientists and technologists to pursue independent doctoral and postdoctoral research, particularly supporting women returning to STEM careers after a break.",
    stats: "Women in STEM Leadership"
  },
  {
    id: "renewable-energy",
    title: "Centre for Renewable Energy & Environmental Science",
    category: "engineering",
    image: "/scraped-images/212_vigyan-mandir_thumb.jpg",
    description: "Innovating in solar energy harvesting, biofuel technology, wastewater treatment, and sustainable environmental engineering across rural Rajasthan.",
    stats: "Sustainable Technology"
  }
];

export default function ResearchPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCentres = selectedCategory === "all"
    ? researchCentres
    : researchCentres.filter(c => c.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 bg-gradient-to-b from-primary/10 via-background to-background overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,50,0,0.15),rgba(255,255,255,0))]" />
        
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-small-label font-medium tracking-wide mb-6">
            <Microscope className="w-4 h-4" />
            <span>DST CURIE & DBT Sponsored Research</span>
          </div>
          <h1 className="text-hero font-serif font-bold tracking-tight mb-6">
            Pioneering Research & <span className="text-primary italic">Innovation</span>
          </h1>
          <p className="text-subheading text-foreground/80 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Banasthali Vidyapith is recognized as a premier research university—fostering autonomous investigation, patent filing, and multidisciplinary scientific breakthroughs.
          </p>

          {/* Research Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border/40 text-left">
            <div className="p-4 rounded-2xl bg-card/60 border border-border/40 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <div className="text-card-title font-serif font-bold">AIM & ACT</div>
                <div className="text-caption text-muted-foreground">AI & Supercomputing</div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-card/60 border border-border/40 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                <Dna className="w-5 h-5" />
              </div>
              <div>
                <div className="text-card-title font-serif font-bold">DBT Centre</div>
                <div className="text-caption text-muted-foreground">Bioinformatics Hub</div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-card/60 border border-border/40 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-card-title font-serif font-bold">DST CURIE</div>
                <div className="text-caption text-muted-foreground">Govt. of India Grant</div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-card/60 border border-border/40 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="text-card-title font-serif font-bold">1000+</div>
                <div className="text-caption text-muted-foreground">Ph.D. Scholars</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Centers Grid */}
      <section className="py-16 md:py-24 container mx-auto px-6 md:px-12 flex-1">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-section-heading font-serif font-bold mb-3">Centres of Excellence</h2>
          <p className="text-body text-muted-foreground">Explore our specialized laboratories and national research initiatives.</p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Research Centres" },
            { id: "computing", label: "AI & Computing (AIM & ACT)" },
            { id: "lifesciences", label: "Bioinformatics & Genomics" },
            { id: "chemistry", label: "Herbal & Pharmaceutical" },
            { id: "engineering", label: "Renewable Energy & Engg." },
            { id: "multidisciplinary", label: "Women Scientist & CURIE" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-5 py-2 rounded-full text-button font-medium transition-all ${
                selectedCategory === tab.id
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "bg-card hover:bg-muted text-foreground/80 border border-border/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCentres.map((center) => (
            <div
              key={center.id}
              className="group bg-card rounded-3xl overflow-hidden border border-border/80 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-56 w-full bg-muted overflow-hidden">
                <Image
                  src={center.image}
                  alt={center.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                 sizes="100vw" />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-small-label font-medium">
                  {center.stats}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-card-title font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                    {center.title}
                  </h3>
                  <p className="text-body text-muted-foreground leading-relaxed mb-6">
                    {center.description}
                  </p>
                </div>

                <Link
                  href="/academics"
                  className="w-full py-2.5 px-4 rounded-xl bg-muted/60 hover:bg-primary hover:text-primary-foreground text-button font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Doctoral & Research Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Doctoral Admission Callout */}
      <section className="py-16 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <h2 className="text-section-heading font-serif font-bold mb-4">Interested in Pursuing a Ph.D. at Banasthali?</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto mb-8">
            We offer doctoral research programs across Engineering, Sciences, Management, Humanities, Education, and Law. Admissions are conducted via the Research Entrance Test (RET) and interview.
          </p>
          <Link
            href="/admissions"
            className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-button hover:bg-primary/90 transition-all shadow-md inline-block"
          >
            Check Ph.D. Guidelines & Apply
          </Link>
        </div>
      </section>


    </div>
  );
}
