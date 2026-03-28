"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function LanguagesSection() {
  const languages = [
    { name: "বাংলা",   level: "মাতৃভাষা (Native)",       percentage: 100, color: "from-emerald-400 to-green-500",   glow: "rgba(16,185,129,0.55)",  glowClass: "card-glow-green"  },
    { name: "English", level: "দক্ষ (Proficient)",         percentage: 85,  color: "from-blue-400 to-indigo-500",     glow: "rgba(59,130,246,0.55)",  glowClass: "card-glow-blue"   },
    { name: "হিন্দি",  level: "মধ্যম (Intermediate)",     percentage: 60,  color: "from-orange-400 to-red-500",      glow: "rgba(249,115,22,0.55)",  glowClass: "card-glow-red"    },
    { name: "উর্দু",   level: "বেসিক (Basic)",             percentage: 30,  color: "from-purple-400 to-pink-500",     glow: "rgba(168,85,247,0.55)",  glowClass: "card-glow-purple" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#080e1f] to-slate-950 -z-10" />
      <div className="blob-blue" style={{ bottom: "10%", left: "10%" }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <MessageCircle className="text-emerald-400" size={28} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">ভাষাদক্ষতা</h2>
          </div>
          <div className="w-24 h-[2px] bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`glass-card ${lang.glowClass} p-7`}
            >
              <div className="flex justify-between items-end mb-5">
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-1">{lang.name}</h3>
                  <p className="text-sm text-slate-500">{lang.level}</p>
                </div>
                <span
                  className="text-lg font-bold px-3 py-1 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${lang.glow.replace("0.55", "0.12")}, transparent)`,
                    border: `1px solid ${lang.glow.replace("0.55", "0.35")}`,
                    color: "#f1f5f9",
                  }}
                >
                  {lang.percentage}%
                </span>
              </div>

              <div className="progress-track h-[10px] w-full">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2 + index * 0.1, type: "spring", damping: 20 }}
                  className={`h-full rounded-full bg-gradient-to-r ${lang.color} relative`}
                  style={{ boxShadow: `0 0 12px ${lang.glow}` }}
                >
                  {/* glossy top sheen on bar */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/25 to-transparent rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
