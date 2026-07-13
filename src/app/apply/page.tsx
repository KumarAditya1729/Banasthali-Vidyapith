"use client";

import { useState } from "react";
import { Sparkles, CheckCircle2, HelpCircle, Send, Phone, Mail, FileText, Home } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    category: "Residential Life",
    question: "Is hostel accommodation compulsory at Banasthali Vidyapith?",
    answer: "Yes! Banasthali Vidyapith is a fully residential women's university. All students from school level up to doctoral research must reside in one of our 31 modern student hostels on campus. This fosters community living, self-reliance, simple living, and safety."
  },
  {
    category: "Admissions & Exams",
    question: "Which courses require the Banasthali University Aptitude Test?",
    answer: "Admission to B.Tech, MBA, B.Des, B.Sc Nursing, B.A. LL.B., and B.Ed programs is based on merit in the qualifying examination combined with the Banasthali University Aptitude Test. For other undergraduate and postgraduate courses, admission is strictly based on academic merit."
  },
  {
    category: "Aviation",
    question: "How can I join the Gliding & Flying Club (BVGFC)?",
    answer: "Any enrolled student at Banasthali can join the Gliding & Flying Club under the Physical Education pillar of Panchmukhi Shiksha! Students in B.Sc Aviation receive integrated flight training on Cessna 172 aircraft towards earning their Student Pilot License (SPL) and Commercial Pilot License (CPL)."
  },
  {
    category: "Fee Structure",
    question: "What is the general fee structure and payment mode?",
    answer: "Banasthali provides subsidized, non-profit education. Fees include tuition, development charges, hostel accommodation, and pure vegetarian dining. Exact fee structures vary by program (e.g. Engineering vs. Humanities) and are published annually in the official Admission Brochure."
  },
  {
    category: "Panchmukhi Shiksha",
    question: "What is the Five-Fold Education model?",
    answer: "Panchmukhi Shiksha is our unique curriculum blending five pillars: Physical (parade, sports, flying, riding), Practical (Sanganeri block printing, tailoring, Shramadan), Aesthetic (music, dance, painting), Moral (Sarva-Dharma prayers, ethics), and Intellectual (rigorous academics and research)."
  }
];

export default function ApplyPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [chatQuery, setChatQuery] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([
    { sender: 'bot', text: "Namaste! I am your Banasthali AI Counselor. How can I help you with admissions, hostel rules, or courses today?" }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatQuery.trim()) return;

    const newMessages = [...chatMessages, { sender: 'user' as const, text: chatQuery }];
    setChatMessages(newMessages);
    const query = chatQuery.toLowerCase();
    setChatQuery("");

    setTimeout(() => {
      let botResponse = "For detailed admission queries, please contact our admissions office or refer to the official brochure. You can also explore our course catalog under Academics!";
      
      if (query.includes("hostel") || query.includes("stay") || query.includes("residential")) {
        botResponse = "Banasthali is a 100% residential university! All students reside in one of our 31 hostels across our 850-acre green campus. Hostels provide nutritious vegetarian meals, solar heating, and 24/7 security.";
      } else if (query.includes("fee") || query.includes("cost") || query.includes("money")) {
        botResponse = "Our fee structure is non-profit and highly subsidized. It covers tuition, hostel room, and pure vegetarian dining. Please visit our Academics page or download the official Admission Brochure for exact course-wise fees.";
      } else if (query.includes("fly") || query.includes("pilot") || query.includes("aviation") || query.includes("cessna")) {
        botResponse = "We are the only women's university in India with its own licensed airfield and Cessna 172 fleet! You can join the Gliding & Flying Club (BVGFC) or enroll in B.Sc Aviation Science to train as a pilot!";
      } else if (query.includes("b.tech") || query.includes("engineering") || query.includes("aptitude") || query.includes("exam")) {
        botResponse = "For B.Tech (CS, AI, Biotech, Chemical, EC, EE), admission is based on your 10+2 marks (Physics, Chemistry, Maths) and performance in the Banasthali University Aptitude Test. Applications open online every spring!";
      } else if (query.includes("panchmukhi") || query.includes("five") || query.includes("fold") || query.includes("philosophy")) {
        botResponse = "Panchmukhi Shiksha (Five-Fold Education) balances Physical, Practical, Aesthetic, Moral, and Intellectual development. You will learn horse riding, classical music, block printing, and ethics alongside your core degree!";
      }

      setChatMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
    }, 600);
  };

  const filteredFaqs = selectedCategory === "All"
    ? faqs
    : faqs.filter(f => f.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 bg-gradient-to-b from-primary/10 via-background to-background overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,50,0,0.15),rgba(255,255,255,0))]" />
        
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-small-label font-medium tracking-wide mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Admissions Portal & AI Helpdesk</span>
          </div>
          <h1 className="text-hero font-serif font-bold tracking-tight mb-6">
            Begin Your Journey at <span className="text-primary italic">Banasthali</span>
          </h1>
          <p className="text-subheading text-foreground/80 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Join a 90-year legacy of empowering women leaders. Explore our 3-step admission process or chat instantly with our AI Student Counselor below.
          </p>
        </div>
      </section>

      {/* 3-Step Application Guide */}
      <section className="py-16 container mx-auto px-6 md:px-12">
        <h2 className="text-section-heading font-serif font-bold text-center mb-12">How to Apply (3-Step Process)</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { step: "01", title: "Submit Application", desc: "Fill out the online application form or obtain the prospectus and form from the university campus / designated centers.", icon: <FileText className="w-6 h-6 text-primary" /> },
            { step: "02", title: "Aptitude Test / Merit", desc: "Appear for the Banasthali University Aptitude Test (for B.Tech, MBA, B.Des, LL.B) or await merit list declaration for merit-based programs.", icon: <CheckCircle2 className="w-6 h-6 text-primary" /> },
            { step: "03", title: "Counseling & Hostel", desc: "Attend counseling and document verification. Upon selection, receive your hostel allotment in one of our 31 student residences!", icon: <Home className="w-6 h-6 text-primary" /> },
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-card border border-border/80 shadow-sm relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="p-3 rounded-2xl bg-primary/10">{item.icon}</span>
                  <span className="text-section-heading font-serif font-bold text-primary/30">{item.step}</span>
                </div>
                <h3 className="text-card-title font-serif font-bold mb-3">{item.title}</h3>
                <p className="text-body text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Counselor Helpdesk & FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/20 border-t border-border flex-1">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            
            {/* Left: Interactive AI Chatbot */}
            <div className="lg:col-span-6 bg-card rounded-3xl border border-border shadow-xl overflow-hidden flex flex-col h-[550px]">
              <div className="p-6 bg-gradient-to-r from-primary/10 via-background to-background border-b border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-card-title font-serif font-bold shadow-md">
                  AI
                </div>
                <div>
                  <h3 className="text-card-title font-serif font-bold">Banasthali AI Counselor</h3>
                  <p className="text-small-label text-green-600 font-medium flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" /> Live Helpdesk Assistant
                  </p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-6 overflow-y-auto flex-1 space-y-4">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl text-body leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-primary text-primary-foreground rounded-br-none shadow-sm'
                          : 'bg-muted text-foreground rounded-bl-none border border-border/60'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Chip Questions */}
              <div className="px-6 py-3 bg-muted/30 border-t border-border flex items-center gap-2 overflow-x-auto no-scrollbar">
                {[
                  "Is hostel compulsory?",
                  "What is the fee structure?",
                  "How to join Flying Club?",
                  "What is Panchmukhi Shiksha?",
                ].map((chip, i) => (
                  <button
                    key={i}
                    onClick={() => setChatQuery(chip)}
                    className="px-3 py-1 rounded-full bg-background border border-border hover:border-primary text-small-label font-medium text-foreground/80 whitespace-nowrap shrink-0 transition-colors"
                  >
                    {chip}
                  </button>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="p-4 bg-card border-t border-border flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Ask any question about admissions or courses..."
                  value={chatQuery}
                  onChange={(e) => setChatQuery(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none text-body"
                />
                <button
                  type="submit"
                  className="p-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm shrink-0"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Right: Frequently Asked Questions */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="text-section-heading font-serif font-bold mb-2">Frequently Asked Questions</h3>
                <p className="text-body text-muted-foreground">Quick answers to common queries from parents and students.</p>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {["All", "Residential Life", "Admissions & Exams", "Aviation", "Fee Structure", "Panchmukhi Shiksha"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-button font-medium transition-all ${
                      selectedCategory === cat
                        ? "bg-foreground text-background font-semibold"
                        : "bg-card hover:bg-muted text-foreground/80 border border-border"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* FAQ Accordions */}
              <div className="space-y-4">
                {filteredFaqs.map((faq, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-2">
                    <h4 className="text-card-title font-serif font-bold text-foreground flex items-start gap-2">
                      <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </h4>
                    <p className="text-body text-muted-foreground leading-relaxed pl-7">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-primary/10 text-primary">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-card-title font-serif font-bold">Need Official Help? Contact Admissions</h4>
              <p className="text-caption text-muted-foreground">Banasthali Vidyapith, P.O. Banasthali Vidyapith, Rajasthan - 304022</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-body font-medium">
            <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted border border-border">
              <Mail className="w-4 h-4 text-primary" /> siddharthshastri@banasthali.in
            </span>
          </div>
        </div>
      </section>


    </div>
  );
}
