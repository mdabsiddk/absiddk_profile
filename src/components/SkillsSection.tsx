"use client";

import { motion } from "framer-motion";
import { Code2, BookOpen, Layers, Zap } from "lucide-react";

export default function SkillsSection({ content }: { content?: any }) {
  const professionalSkills = [
    { name: "Software Requirements Analysis", level: 95, color: "from-blue-500 to-indigo-500", glow: "rgba(99,102,241,0.6)" },
    { name: "Requirements Documentation",     level: 90, color: "from-indigo-500 to-purple-500", glow: "rgba(168,85,247,0.55)" },
    { name: "Stakeholder Communication",      level: 85, color: "from-sky-400 to-blue-500",   glow: "rgba(59,130,246,0.55)" },
    { name: "Process Modeling & Workflow Design", level: 80, color: "from-violet-500 to-indigo-500", glow: "rgba(139,92,246,0.5)" },
    { name: "Education Service Management",   level: 85, color: "from-teal-400 to-emerald-500", glow: "rgba(16,185,129,0.5)" },
  ];

  const personalSkills = [
    { name: "বাংলা সাহিত্য ও রচনা",           icon: <BookOpen size={26} className="text-indigo-400" />, glowClass: "card-glow-purple" },
    { name: "ডিজিটাল কনটেন্ট ক্রিয়েশন",       icon: <Zap       size={26} className="text-yellow-400" />, glowClass: "card-glow-gold"   },
    { name: "সমাজ সচেতনতা ও রাজনৈতিক বিশ্লেষণ", icon: <Layers  size={26} className="text-blue-400"   />, glowClass: "card-glow-blue"   },
    { name: "বহুভাষিক যোগাযোগ",               icon: <Code2    size={26} className="text-purple-400" />, glowClass: "card-glow-purple" },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* bg strip */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#080e1f] to-slate-950 -z-10" />
      <div className="blob-purple" style={{ top: "20%", right: "-5%" }} />

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
              <Zap className="text-yellow-400" size={28} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">দক্ষতা ও পারদর্শিতা</h2>
          </div>
          <div className="w-24 h-[2px] bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full shadow-[0_0_12px_rgba(234,179,8,0.6)]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Professional Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card card-glow-blue p-8 h-full">
              <h3 className="text-xl font-bold mb-8 text-blue-300 flex items-center gap-2">
                <Code2 size={20} /> পেশাদার দক্ষতা
              </h3>
              <div className="space-y-7">
                {professionalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-200 font-medium text-sm">{skill.name}</span>
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(99,102,241,0.15)", color: "#a5b4fc", border: "1px solid rgba(99,102,241,0.3)" }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="progress-track h-[10px] w-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        style={{ boxShadow: `0 0 10px ${skill.glow}` }}
                      >
                        {/* Gloss sheen on bar */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-full" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Personal Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="mb-8">
              <h3 className="text-xl font-bold text-purple-300 flex items-center gap-2 mb-6">
                <Layers size={20} /> ব্যক্তিগত দক্ষতা
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {personalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -6, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className={`glass-card ${skill.glowClass} p-6 flex flex-col items-center text-center gap-4 cursor-default`}
                  >
                    <div className="icon-box p-4">
                      {skill.icon}
                    </div>
                    <h4 className="text-base font-semibold text-slate-200 leading-snug">{skill.name}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
