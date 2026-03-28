"use client";

import { motion } from "framer-motion";
import { Laptop, BookOpen, Vote, Leaf, Music, PlaySquare, Heart, Quote } from "lucide-react";

export default function InterestsSection() {
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
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">আগ্রহ ও অনুপ্রেরণা</h2>
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <div className="glass-card card-glow-blue relative p-10 md:p-14 text-center overflow-visible">
            {/* Corner quote icons */}
            <Quote
              size={48}
              className="absolute top-5 left-6 opacity-10 text-blue-400"
            />
            <Quote
              size={48}
              className="absolute bottom-5 right-6 opacity-10 text-indigo-400 rotate-180"
            />

            <p className="text-2xl md:text-3xl font-medium text-slate-200 leading-relaxed italic relative z-10">
              অন্ধকার ১২ ঘন্টা সময়ের ব্যবধানে কোটি বছরের পুরনো সূর্যটা পুনরায় নতুন লাগে।
            </p>
            <span className="text-gradient-gold font-bold not-italic text-2xl md:text-3xl mt-6 block tracking-wide">
              — Change your Perspective
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
