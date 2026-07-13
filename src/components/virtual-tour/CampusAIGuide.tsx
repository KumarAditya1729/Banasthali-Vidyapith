"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, X, Sparkles, MapPin } from "lucide-react";
import { CampusMarker, campusMarkers } from "@/data/campus";

interface CampusAIGuideProps {
  onLocationFound: (marker: CampusMarker) => void;
}

export default function CampusAIGuide({ onLocationFound }: CampusAIGuideProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<{ role: "ai" | "user"; content: string; isAction?: boolean }[]>([
    { role: "ai", content: "Namaste! I am your Banasthali AI Guide. Ask me to find any building, hostel, or facility on campus." }
  ]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userQuery = query.toLowerCase();
    setMessages(prev => [...prev, { role: "user", content: query }]);
    setQuery("");

    // Simulate AI processing and intent matching
    setTimeout(() => {
      // Very basic keyword matching for the simulation
      const match = campusMarkers.find(m => 
        userQuery.includes(m.name.toLowerCase()) || 
        userQuery.includes(m.category.toLowerCase()) ||
        m.facilities.some(f => userQuery.includes(f.toLowerCase())) ||
        (userQuery.includes("library") && m.id === "library") ||
        (userQuery.includes("hospital") && m.id === "hospital") ||
        (userQuery.includes("hostel") && m.category === "hostel") ||
        (userQuery.includes("admin") && m.id === "admin-block") ||
        (userQuery.includes("gate") && m.id === "main-gate")
      );

      if (match) {
        setMessages(prev => [...prev, { 
          role: "ai", 
          content: `I found ${match.name}. Would you like me to guide you there?`,
          isAction: true 
        }]);
        // Trigger the map pan
        onLocationFound(match);
      } else {
        setMessages(prev => [...prev, { 
          role: "ai", 
          content: "I couldn't find an exact match for that on our current map. Try asking for the Library, Arogya Mandir, or a Hostel." 
        }]);
      }
    }, 600);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-16 h-16 bg-gradient-to-br from-gold to-yellow-600 rounded-full shadow-2xl flex items-center justify-center text-[#1e0408] hover:scale-110 transition-transform z-[1500] border-4 border-white/20 dark:border-[#1e0408]/50"
      >
        <Sparkles className="w-6 h-6 absolute top-3 right-3 animate-pulse opacity-70" />
        <Bot className="w-8 h-8" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-[90vw] max-w-[380px] h-[500px] max-h-[80vh] bg-background border border-border/60 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] z-[1600] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#2a060c] to-[#1e0408] p-5 flex items-center justify-between border-b border-gold/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/50">
                  <Bot className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-white font-serif font-bold text-lg leading-tight">AI Campus Guide</h3>
                  <p className="text-gold/70 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Online and ready
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat History */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-muted/20 dark:bg-black/20 custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm shadow-sm ${
                    msg.role === "user" 
                      ? "bg-primary text-primary-foreground rounded-tr-sm" 
                      : "bg-card text-card-foreground border border-border/50 rounded-tl-sm"
                  }`}>
                    {msg.content}
                    {msg.isAction && (
                      <div className="mt-3 pt-3 border-t border-border/50 flex items-center gap-2 text-gold font-semibold text-xs uppercase tracking-wider">
                        <MapPin className="w-3.5 h-3.5" />
                        Destination Highlighted
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSearch} className="p-4 bg-background border-t border-border/50">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full bg-muted/50 border border-border rounded-full pl-5 pr-12 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow text-foreground placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  disabled={!query.trim()}
                  className="absolute right-2 w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full hover:bg-primary/90 disabled:opacity-50 disabled:hover:bg-primary transition-colors"
                >
                  <Send className="w-4 h-4 ml-1" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
