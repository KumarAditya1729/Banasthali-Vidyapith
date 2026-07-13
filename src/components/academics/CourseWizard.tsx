"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  GraduationCap, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Filter, 
  Sparkles,
  RotateCcw,
  Award,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { coursesData, facultiesData } from "@/data/academicsData";

export default function CourseWizard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");
  const [selectedFaculty, setSelectedFaculty] = useState<string>("All");
  
  // AI Wizard mode state
  const [isAiMode, setIsAiMode] = useState(false);
  const [interestAnswer, setInterestAnswer] = useState<string>("All");
  const [goalAnswer, setGoalAnswer] = useState<string>("All");

  const levels = ["All", "Undergraduate", "Postgraduate", "Doctoral", "Diploma"];

  // Map faculty IDs to readable short names for filter pills
  const facultyOptions = useMemo(() => {
    return [
      { id: "All", name: "All Disciplines" },
      ...facultiesData.map(f => ({ id: f.id, name: f.shortName }))
    ];
  }, []);

  // Filter logic
  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      // Normal filtering
      if (!isAiMode) {
        const matchesSearch = 
          course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.degree.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));
        
        const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
        const matchesFaculty = selectedFaculty === "All" || course.facultyId === selectedFaculty;
        
        return matchesSearch && matchesLevel && matchesFaculty;
      } else {
        // AI Guided Filtering
        let matchesInterest = true;
        if (interestAnswer === "tech") {
          matchesInterest = ["math-computing", "engineering", "automation"].includes(course.facultyId);
        } else if (interestAnswer === "bio") {
          matchesInterest = ["life-sciences", "home-science"].includes(course.facultyId);
        } else if (interestAnswer === "biz") {
          matchesInterest = ["management", "law"].includes(course.facultyId);
        } else if (interestAnswer === "arts") {
          matchesInterest = ["design-arts", "humanities-social"].includes(course.facultyId);
        }

        let matchesGoal = true;
        if (goalAnswer === "ug") {
          matchesGoal = course.level === "Undergraduate";
        } else if (goalAnswer === "pg") {
          matchesGoal = course.level === "Postgraduate";
        } else if (goalAnswer === "research") {
          matchesGoal = course.level === "Doctoral";
        }

        return matchesInterest && matchesGoal;
      }
    });
  }, [searchQuery, selectedLevel, selectedFaculty, isAiMode, interestAnswer, goalAnswer]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedLevel("All");
    setSelectedFaculty("All");
    setInterestAnswer("All");
    setGoalAnswer("All");
  };

  const getFacultyName = (id: string) => {
    const faculty = facultiesData.find(f => f.id === id);
    return faculty ? faculty.name : "General Discipline";
  };

  return (
    <div className="w-full bg-[#141212] py-16 px-4 md:px-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden my-12">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      {/* Header & Mode Switcher */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-small-label font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Interactive Academic Navigator
            </div>
            <h2 className="text-section-heading font-garamond text-white tracking-wide">
              Find Your Ideal Degree Program
            </h2>
            <p className="text-white/60 text-body mt-2 max-w-2xl">
              Explore over {coursesData.length} specialized undergraduate, postgraduate, and doctoral courses offered across 10 prestigious faculties.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/5 p-1.5 rounded-2xl border border-white/10">
            <button
              onClick={() => setIsAiMode(false)}
              className={`px-4 py-2 rounded-xl text-button font-medium transition-all flex items-center gap-2 ${
                !isAiMode ? "bg-gold text-black shadow-lg font-semibold" : "text-white/70 hover:text-white"
              }`}
            >
              <Filter className="w-4 h-4" />
              Standard Filter
            </button>
            <button
              onClick={() => setIsAiMode(true)}
              className={`px-4 py-2 rounded-xl text-button font-medium transition-all flex items-center gap-2 ${
                isAiMode ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg font-semibold" : "text-white/70 hover:text-white"
              }`}
            >
              <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" style={{ animationDuration: '4s' }} />
              AI Career Matcher
            </button>
          </div>
        </div>

        {/* Filter Section */}
        {!isAiMode ? (
          <div className="space-y-6 mb-12 bg-white/5 p-6 rounded-2xl border border-white/10">
            {/* Search Bar & Reset */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Search courses, degrees, keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/40 text-body focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <span className="text-small-label text-white/50 hidden md:inline">
                  Showing <strong className="text-gold">{filteredCourses.length}</strong> of {coursesData.length} programs
                </span>
                {(searchQuery || selectedLevel !== "All" || selectedFaculty !== "All") && (
                  <button
                    onClick={resetFilters}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 text-button transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset Filters
                  </button>
                )}
              </div>
            </div>

            {/* Level Pills */}
            <div>
              <label className="text-small-label font-semibold text-white/50 uppercase tracking-wider block mb-2.5">
                1. Select Academic Level
              </label>
              <div className="flex flex-wrap gap-2">
                {levels.map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`px-4 py-2 rounded-xl text-button font-medium transition-all ${
                      selectedLevel === lvl
                        ? "bg-gold text-black font-semibold shadow-md"
                        : "bg-black/30 text-white/70 hover:bg-white/10 hover:text-white border border-white/5"
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Faculty Pills */}
            <div>
              <label className="text-small-label font-semibold text-white/50 uppercase tracking-wider block mb-2.5">
                2. Select Discipline / Faculty
              </label>
              <div className="flex flex-wrap gap-2">
                {facultyOptions.map((fac) => (
                  <button
                    key={fac.id}
                    onClick={() => setSelectedFaculty(fac.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-small-label font-medium transition-all ${
                      selectedFaculty === fac.id
                        ? "bg-white text-black font-semibold shadow"
                        : "bg-black/30 text-white/60 hover:bg-white/10 hover:text-white border border-white/5"
                    }`}
                  >
                    {fac.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* AI Career Matcher Interactive Mode */
          <div className="mb-12 bg-gradient-to-br from-purple-900/40 via-indigo-900/30 to-black/60 p-6 md:p-8 rounded-2xl border border-purple-500/30">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-card-title font-garamond text-white font-semibold flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  Guided Career Matchmaker
                </h3>
                <p className="text-white/70 text-caption mt-1">
                  Answer two quick questions about your passion and goals, and let our recommendation engine find your tailored path.
                </p>
              </div>
              <button
                onClick={resetFilters}
                className="text-small-label text-purple-300 hover:text-white underline"
              >
                Reset Matcher
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Question 1 */}
              <div className="bg-black/40 p-5 rounded-xl border border-white/10">
                <span className="text-small-label font-bold uppercase tracking-wider text-purple-400 mb-2 block">
                  Question 1
                </span>
                <h4 className="text-body text-white font-medium mb-4">
                  What domain or passion excites you the most?
                </h4>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: "All", label: "Any / Open to All", icon: "🌐" },
                    { id: "tech", label: "Tech, AI & Robotics", icon: "💻" },
                    { id: "bio", label: "Biology, Pharma & Health", icon: "🧬" },
                    { id: "biz", label: "Business, Law & Leadership", icon: "⚖️" },
                    { id: "arts", label: "Design, Fashion & Arts", icon: "🎨" }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setInterestAnswer(opt.id)}
                      className={`p-3 rounded-lg text-left text-small-label font-medium transition-all flex items-center gap-2 border ${
                        interestAnswer === opt.id
                          ? "bg-purple-600 border-purple-400 text-white shadow-lg"
                          : "bg-white/5 border-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span className="text-body">{opt.icon}</span>
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2 */}
              <div className="bg-black/40 p-5 rounded-xl border border-white/10">
                <span className="text-small-label font-bold uppercase tracking-wider text-indigo-400 mb-2 block">
                  Question 2
                </span>
                <h4 className="text-body text-white font-medium mb-4">
                  What is your target degree level?
                </h4>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: "All", label: "Any Level", desc: "Explore all degrees" },
                    { id: "ug", label: "After 10+2 / School", desc: "Undergraduate (B.Tech, B.Sc, BBA...)" },
                    { id: "pg", label: "After Graduation", desc: "Postgraduate (M.Tech, MBA, M.Sc...)" },
                    { id: "research", label: "Doctoral Research", desc: "Ph.D programs across departments" }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setGoalAnswer(opt.id)}
                      className={`p-3 rounded-lg text-left transition-all border ${
                        goalAnswer === opt.id
                          ? "bg-indigo-600 border-indigo-400 text-white shadow-lg"
                          : "bg-white/5 border-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <div className="text-small-label font-semibold">{opt.label}</div>
                      <div className="text-small-label text-white/60 mt-0.5">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-card-title font-garamond text-white font-semibold">
              Available Programs ({filteredCourses.length})
            </h3>
            {filteredCourses.length === 0 && (
              <span className="text-small-label text-red-400">No matching programs found</span>
            )}
          </div>

          <AnimatePresence mode="popLayout">
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <motion.div
                    key={course.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#1c1919] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-gold/50 transition-all duration-300 group shadow-lg"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-md bg-gold/10 text-gold text-small-label font-semibold tracking-wide uppercase">
                          {course.degree}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 text-white/60 text-small-label">
                          {course.level}
                        </span>
                      </div>

                      {/* Course Title */}
                      <h4 className="text-card-title font-garamond text-white font-semibold mb-2 group-hover:text-gold transition-colors line-clamp-2">
                        {course.name}
                      </h4>

                      {/* Faculty Name */}
                      <p className="text-caption text-white/50 mb-4 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-terracotta" />
                        {getFacultyName(course.facultyId)}
                      </p>

                      {/* Duration & Eligibility */}
                      <div className="space-y-2 mb-6 text-caption text-white/70 bg-black/30 p-3.5 rounded-xl border border-white/5">
                        <div className="flex items-start gap-2">
                          <Clock className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                          <span><strong>Duration:</strong> {course.duration}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <BookOpen className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                          <span className="line-clamp-2"><strong>Eligibility:</strong> {course.eligibility}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-6 space-y-1.5">
                        <span className="text-small-label font-semibold text-white/40 uppercase tracking-wider block mb-1">
                          Key Highlights
                        </span>
                        {course.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-caption text-white/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Footer */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                      <Link
                        href="/admissions"
                        className="text-button font-semibold text-gold hover:text-white transition-colors flex items-center gap-1"
                      >
                        Admission Procedure
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href="/apply"
                        className="px-4 py-2 rounded-xl bg-gold text-black font-semibold text-button hover:bg-white transition-colors flex items-center gap-1.5 shadow"
                      >
                        Apply Now
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white/5 rounded-2xl border border-white/10">
                <GraduationCap className="w-12 h-12 text-white/20 mx-auto mb-3" />
                <h4 className="text-card-title font-garamond text-white font-medium">No courses matched your selection</h4>
                <p className="text-caption text-white/50 mt-1 max-w-md mx-auto">
                  Try broadening your search query or switching to another faculty or academic level.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-4 px-4 py-2 rounded-xl bg-gold text-black text-button font-semibold hover:bg-white transition-colors inline-flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset All Filters
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
