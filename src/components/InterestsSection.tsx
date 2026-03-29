"use client";

import { motion } from "framer-motion";
import { Laptop, BookOpen, Vote, Leaf, Music, PlaySquare, Heart } from "lucide-react";

export default function InterestsSection({ content }: { content?: any }) {
  const interests = [
    { name: "প্রযুক্তি ও সফটওয়্যার", icon: <Laptop    size={30} className="text-blue-400"    />, glowClass: "card-glow-blue"   },
    { name: "শিক্ষা ও সাহিত্য",       icon: <BookOpen  size={30} className="text-indigo-400"  />, glowClass: "card-glow-purple" },
    { name: "ক্রিকেট (KKR)",           icon: <PlaySquare size={30} className="text-purple-400" />, glowClass: "card-glow-purple" },
    { name: "পরিবেশ ও প্রকৃতি",       icon: <Leaf       size={30} className="text-emerald-400" />, glowClass: "card-glow-green"  },
    { name: "ইসলামিক সংগীত",          icon: <Music      size={30} className="text-yellow-400"  />, glowClass: "card-glow-gold"   },
    { name: "রাজনৈতিক সচেতনতা",       icon: <Vote       size={30} className="text-red-400"     />, glowClass: "card-glow-red"    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="blob-blue"   style={{ top: "10%",  left: "0"   }} />
      <div className="blob-purple" style={{ bottom: "10%", right: "0" }} />

      {/* Grid texture */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="icon-box p-3">
              <Heart className="text-red-400" size={28} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">{content?.heading || "আগ্রহ ও অনুপ্রেরণা"}</h2>
          </div>
          <div className="w-24 h-[2px] bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full shadow-[0_0_12px_rgba(239,68,68,0.6)]" />
        </motion.div>

        {/* Interest cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`glass-card ${interest.glowClass} p-8 flex flex-col items-center justify-center gap-5 text-center cursor-default`}
            >
              <div className="icon-box p-5">
                {interest.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-200 leading-snug">{interest.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-24"
        >
          {/* Outer atmospheric wrapper */}
          <div className="relative max-w-4xl mx-auto">
            {/* Minimalist ambient glow behind card */}
            <div
              className="absolute inset-0 rounded-3xl blur-2xl opacity-10 -z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(99,102,241,0.5), rgba(168,85,247,0.5))",
              }}
            />

            <div className="glass-card relative overflow-hidden rounded-3xl px-8 py-14 md:px-16 md:py-20 border border-white/5 bg-slate-900/40 backdrop-blur-xl">
              
              {/* Subtle Background Quote Marks */}
              <div className="absolute top-10 left-6 md:top-12 md:left-12 opacity-[0.03] select-none pointer-events-none">
                <span className="text-9xl font-serif text-white">"</span>
              </div>
              <div className="absolute bottom-4 right-6 md:bottom-6 md:right-12 opacity-[0.03] rotate-180 select-none pointer-events-none">
                <span className="text-9xl font-serif text-white">"</span>
              </div>

              {/* Core Philosophical Content */}
              <div className="relative z-10 text-left max-w-3xl mx-auto flex flex-col gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <p className="text-lg md:text-[22px] font-normal text-slate-200 leading-[1.7] md:leading-[1.8] tracking-wide">
                    <span className="text-indigo-400 text-2xl md:text-3xl align-bottom mr-1.5 font-serif font-bold leading-none">“</span>
                    {content?.philosophyQuote?.part1 || "আপনি জীবনে যত বড় অর্জন বয়ে আনেন না কেন, কেউ আপনাকে মনে রাখবে না!"}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <p className="text-lg md:text-[22px] font-normal text-slate-300 leading-[1.7] md:leading-[1.8] tracking-wide">
                    {content?.philosophyQuote?.part2 || "আপনার জীবনে বৃহৎ অর্জনের চেয়েও সুন্দর স্মৃতি অধিক মূল্যবান। তাই আপনার জীবনকে সেখানেই বিনিয়োগ করবেন, যেখানকার মুহূর্তগুলো আপনার অপেক্ষায় প্রহর গুনছে।"}
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <p className="text-lg md:text-[22px] font-normal text-slate-400 leading-[1.7] md:leading-[1.8] tracking-wide italic">
                    {content?.philosophyQuote?.part3 || "নিশ্চয়ই আপনি একক জীবনের প্রতিনিধিত্ব করছেন! এবং এতেই আপনার অস্তিত্বের চির সমাপ্তি ঘটবে!"}
                    <span className="text-indigo-400 text-2xl md:text-3xl align-top ml-1.5 font-serif font-bold not-italic leading-none">”</span>
                  </p>
                </motion.div>
              </div>

              {/* Minimalist Professional Author Signature */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="mt-10 flex flex-col items-end gap-2 relative z-10 max-w-3xl mx-auto"
              >
                <div className="h-[1px] w-12 bg-gradient-to-l from-slate-500/60 to-transparent mb-1" />
                <span className="text-slate-400 text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase text-right">
                  {content?.philosophyQuote?.authorName || "Md. Abu Bakar"}
                </span>
                <span className="text-slate-500 text-[9px] md:text-[11px] tracking-widest italic font-light text-right">
                  {content?.philosophyQuote?.authorSubName || "A B Siddk"}
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
