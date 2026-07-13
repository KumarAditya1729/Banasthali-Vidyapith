"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Award, Quote } from "lucide-react";
import Image from "next/image";
import HeritageTimeline from "@/components/about/HeritageTimeline";

interface Alumni {
  name: string;
  role: string;
  achievement: string;
  quote: string;
  year?: string;
}

const notableAlumni: Alumni[] = [
  {
    name: "Flt. Lt. Avani Chaturvedi",
    role: "First Indian Female Fighter Pilot",
    achievement: "Made history as one of the first three female combat fighter pilots in the Indian Air Force. She completed her flight training and earned her wings at Banasthali Vidyapith Gliding & Flying Club (BVGFC).",
    quote: "Banasthali gave me the wings to fly—literally and metaphorically. The discipline and confidence I gained at the airfield shaped my destiny."
  },
  {
    name: "Smt. Meira Kumar",
    role: "15th Speaker of the Lok Sabha & Diplomat",
    achievement: "The first female Speaker of India's Lok Sabha (Parliament) and an Indian Foreign Service (IFS) officer. She is one of India's most respected stateswomen and diplomats.",
    quote: "The values of simplicity, nationalism, and self-reliance that I internalized at Banasthali have been my guiding light throughout my public service."
  },
  {
    name: "Dr. Kamla Beniwal",
    role: "Former Governor & Political Leader",
    achievement: "Served as the Governor of Gujarat, Tripura, and Mizoram, and was the first female minister in the Government of Rajasthan.",
    quote: "Banasthali taught us that a woman's voice can lead states and shape policies with empathy and unwavering courage."
  },
  {
    name: "Smt. Sunita Godara",
    role: "Asian Marathon Champion & Olympian",
    achievement: "Won the 1992 Asian Marathon Championship and completed over 70 international marathons, carrying India's flag across the globe.",
    quote: "The compulsory physical endurance training and morning parades at Banasthali built the stamina and mental fortitude that won me international gold."
  },
  {
    name: "Prof. Sushila Vyas",
    role: "First Student & First Director of Banasthali",
    achievement: "One of the original five students in the mud huts in 1935, she rose to become the first Director of Banasthali Vidyapith upon its Deemed University conferment in 1983.",
    quote: "From five girls in mud huts to a global university—our journey is proof that when you educate a woman, you elevate an entire civilization."
  }
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<'history' | 'philosophy' | 'alumni' | 'leadership'>('history');

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Hero Banner */}
      <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 bg-gradient-to-b from-primary/10 via-background to-background overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,50,0,0.15),rgba(255,255,255,0))]" />
        
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium tracking-wide mb-6">
            <Clock className="w-4 h-4" />
            <span>Established October 6, 1935 • 90 Years of Heritage</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            A Vision That Sparked a <span className="text-primary italic">Revolution</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Arising like the fabled phoenix from the ashes of grief, Banasthali Vidyapith has grown from five students in mud huts into the world's largest residential women's university.
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6 border-t border-border/40">
            {[
              { id: 'history', label: 'Our Story & Heritage' },
              { id: 'philosophy', label: 'Panchmukhi Shiksha' },
              { id: 'alumni', label: 'Alumni Hall of Fame' },
              { id: 'leadership', label: 'Founders & Governance' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-md scale-105'
                    : 'bg-card hover:bg-muted text-foreground/80 border border-border/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab 1: History & Heritage */}
      {activeTab === 'history' && (
        <section className="py-16 md:py-24 container mx-auto px-6 md:px-12 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                The Phoenix of Banasthali
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
                From Five Girls in Mud Huts to a Global Movement
              </h2>
              <p className="text-foreground/80 text-base md:text-lg leading-relaxed font-light">
                It was on <strong>October 6, 1935</strong> that Pandit Hiralal Shastri and Smt. Ratan Shastri founded Banasthali to fill up the vacuum caused by the sudden death of their highly talented and promising 12-year-old daughter, <strong>Shantabai</strong>. They had cherished high expectations that she would work for women's cause when she grew up. But destiny ordained otherwise.
              </p>
              <p className="text-foreground/80 text-base md:text-lg leading-relaxed font-light">
                To complete her unfinished task, they started <em>Shri Shantabai Shiksha Kutir</em> in mud huts with just five girls. Thus, Banasthali owes its existence neither to the zeal of an educationist nor to a philanthropist's purse—it arose like the fabled phoenix from the ashes of a blossoming flower.
              </p>
            </div>
            
            <div className="relative h-96 md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-border">
              <Image
                src="/scraped-images/163_arch-2.jpg"
                alt="Banasthali Heritage Architecture"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="font-serif text-2xl font-bold mb-1">1935 - Present</div>
                  <div className="text-sm text-white/80">90 Years of Unwavering Dedication to Women's Empowerment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Heritage Timeline Component */}
          <HeritageTimeline />
        </section>
      )}

      {/* Tab 2: Panchmukhi Shiksha */}
      {activeTab === 'philosophy' && (
        <section className="py-16 md:py-24 container mx-auto px-6 md:px-12 flex-1">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              Holistic Education Model
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Panchmukhi Shiksha (Five-Fold Education)
            </h2>
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed font-light">
              Banasthali firmly believes that human personality consists of five interdependent components, requiring equal attention. Our curriculum attempts a balance among five necessary aspects of education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "1. Physical Education", desc: "Compulsory physical fitness assessment, parade, shooting ranges, horse riding, flying club (Cessna aircraft), swimming, yoga, and modern/traditional sports like Kabaddi, Kho-Kho, basketball, and badminton.", icon: "🏃‍♀️", color: "from-blue-500/10 to-transparent" },
              { title: "2. Practical Education", desc: "Hands-on workshops in Sanganeri block printing & dyeing, batik, bandhej, tailoring, embroidery, paper-mache, and community Shramadan (collective labor for campus self-reliance).", icon: "🎨", color: "from-orange-500/10 to-transparent" },
              { title: "3. Aesthetic Education", desc: "Nurturing creative appreciation through classical vocal and instrumental music, Kathak and Bharatanatyam dance, painting, sculpture, and dramatization from Nursery to Ph.D.", icon: "🎻", color: "from-purple-500/10 to-transparent" },
              { title: "4. Moral Education", desc: "Cultivating respect for all world religions and ethical integrity through weekly Sarva-Dharma prayers, discourses, Vedic chanting, Gita/Ramayana recitation, and evening Udbodhan.", icon: "🕊️", color: "from-green-500/10 to-transparent" },
              { title: "5. Intellectual Education", desc: "Rigorous academic excellence across natural sciences, computing, engineering, management, humanities, and law—emphasizing project-based learning and research autonomy.", icon: "💡", color: "from-amber-500/10 to-transparent" },
              { title: "Synthesis of East & West", desc: "Our ultimate objective is the harmonious synthesis of spiritual values of the East with the scientific achievements and temperament of the West.", icon: "🌏", color: "from-rose-500/10 to-transparent" }
            ].map((pillar, i) => (
              <div key={i} className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-4">{pillar.icon}</div>
                  <h3 className="text-xl font-serif font-bold mb-3">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tab 3: Alumni Hall of Fame */}
      {activeTab === 'alumni' && (
        <section className="py-16 md:py-24 container mx-auto px-6 md:px-12 flex-1">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              Women Who Shaped India
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Notable Alumnae & Hall of Fame
            </h2>
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed font-light">
              For 90 years, Banasthali Vidyapith has nurtured women who broke glass ceilings across aviation, parliament, international diplomacy, athletics, and corporate leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {notableAlumni.map((alum, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card rounded-3xl p-8 border border-border shadow-md hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif font-bold text-lg">
                      {alum.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-foreground">{alum.name}</h3>
                      <p className="text-xs font-medium text-primary">{alum.role}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {alum.achievement}
                  </p>
                </div>

                <div className="pt-6 border-t border-border/60 bg-muted/20 -mx-8 -mb-8 p-6 rounded-b-3xl">
                  <div className="flex items-start gap-2 text-xs italic text-foreground/80">
                    <Quote className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>"{alum.quote}"</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Tab 4: Founders & Governance */}
      {activeTab === 'leadership' && (
        <section className="py-16 md:py-24 container mx-auto px-6 md:px-12 flex-1">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              Guiding Lights
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Founders & Governance
            </h2>
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed font-light">
              Guided by the ideals of Mahatma Gandhi and dedicated social reform, our founders built an institution autonomous in spirit and national in character.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-3xl bg-card border border-border shadow-sm">
              <span className="text-xs text-primary font-bold uppercase tracking-wider">Founding Father</span>
              <h3 className="text-2xl font-serif font-bold mt-1 mb-3">Pandit Hiralal Shastri</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                A brilliant scholar and statesman who resigned as Secretary in the Home and Foreign Department of Jaipur State to dedicate his life to rural reconstruction and women's education. He later became the first Chief Minister of Rajasthan.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-card border border-border shadow-sm">
              <span className="text-xs text-primary font-bold uppercase tracking-wider">Founding Mother</span>
              <h3 className="text-2xl font-serif font-bold mt-1 mb-3">Smt. Ratan Shastri</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Honoured with the Padma Bhushan, Padma Shri, and Jamnalal Bajaj Award, she was the maternal guiding force of Banasthali, nurturing thousands of students with unconditional love and simplicity.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
