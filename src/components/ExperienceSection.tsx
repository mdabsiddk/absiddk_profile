"use client";

import { motion } from "framer-motion";
import { Briefcase, ChevronRight, Circle } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Software Requirements Analyst",
      company: "Autonomous IT Organization",
      location: "ঢাকা, বাংলাদেশ",
      period: "২০২৫ — বর্তমান",
      description:
        "সফটওয়্যার তৈরি এবং ডেভেলপমেন্ট টিমের জন্য সঠিক রিকয়ারমেন্টস বিশ্লেষণ ও ডকুমেন্টেশন তৈরি করা। ক্লায়েন্ট এবং স্টেকহোল্ডারদের সাথে নিরবচ্ছিন্ন যোগাযোগ রক্ষা করা।",
      active: true,
      glowClass: "card-glow-blue",
      accentColor: "#3b82f6",
    },
    {
      role: "Junior Executive",
      company: "Education Service, স্বায়ত্তশাসিত শিক্ষা প্রতিষ্ঠান",
      location: "ঢাকা, বাংলাদেশ",
      period: "২০১৮ — ২০২৫",
      description:
        "শিক্ষা প্রতিষ্ঠানের বিভিন্ন দাপ্তরিক কাজ পরিচালনা এবং ম্যানেজমেন্ট টিমের সাথে কাজ করে প্রতিষ্ঠানের সেবা ও শিক্ষার মান উন্নয়নে সহায়ক ভূমিকা পালন।",
      active: false,
      glowClass: "card-glow-purple",
      accentColor: "#a855f7",
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#07091a] to-slate-950 -z-10" />
      <div className="blob-purple" style={{ top: "40%", right: "0" }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <Briefcase className="text-purple-400" size={28} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">কর্ম অভিজ্ঞতা</h2>
          </div>
          <div className="w-24 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full shadow-[0_0_12px_rgba(168,85,247,0.6)]" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="mb-10 pl-20 md:pl-24 relative"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-[18px] md:left-[26px] top-6 w-5 h-5 rounded-full border-2 border-slate-950 z-10"
                style={{
                  background: exp.active ? exp.accentColor : "#334155",
                  boxShadow: exp.active
                    ? `0 0 0 4px rgba(59,130,246,0.15), 0 0 18px ${exp.accentColor}`
                    : "none",
                }}
              />

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                className={`glass-card ${exp.glowClass} p-7 md:p-9`}
              >
                {/* Active badge */}
                {exp.active && (
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-4"
                    style={{
                      background: "rgba(59,130,246,0.12)",
                      color: "#60a5fa",
                      border: "1px solid rgba(59,130,246,0.3)",
                    }}
                  >
                    <Circle size={6} className="fill-blue-400 text-blue-400 animate-pulse" />
                    বর্তমানে কর্মরত
                  </span>
                )}

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-5">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-1">{exp.role}</h3>
                    <h4 className="text-base font-semibold" style={{ color: exp.accentColor }}>{exp.company}</h4>
                    <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                      <ChevronRight size={13} /> {exp.location}
                    </p>
                  </div>
                  <div
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-slate-300 whitespace-nowrap"
                    style={{
                      background: "rgba(15,20,40,0.8)",
                      border: `1px solid ${exp.accentColor}40`,
                      boxShadow: `0 0 10px ${exp.accentColor}20`,
                    }}
                  >
                    {exp.period}
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed border-t border-slate-800/60 pt-4">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
