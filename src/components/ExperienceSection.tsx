"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Briefcase, MapPin, Calendar, ChevronRight,
  Circle, Star, TrendingUp, Users, FileText, Award
} from "lucide-react";

interface Skill { label: string; color: string }
interface Achievement { icon: React.ReactNode; value: string; label: string }
interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  durationYears: number;
  maxYears: number;
  description: string;
  skills: Skill[];
  achievements: Achievement[];
  active: boolean;
  accentColor: string;
  glowRgb: string;
  gradientFrom: string;
  gradientTo: string;
}

const experiences: Experience[] = [
  {
    role: "Software Requirements Analyst",
    company: "Autonomous IT Organization",
    location: "ঢাকা, বাংলাদেশ",
    period: "২০২৫ — বর্তমান",
    duration: "১+ বছর",
    durationYears: 1,
    maxYears: 8,
    description:
      "সফটওয়্যার তৈরি এবং ডেভেলপমেন্ট টিমের জন্য সঠিক রিকয়ারমেন্টস বিশ্লেষণ ও ডকুমেন্টেশন তৈরি করা। ক্লায়েন্ট এবং স্টেকহোল্ডারদের সাথে নিরবচ্ছিন্ন যোগাযোগ রক্ষা করা।",
    skills: [
      { label: "Requirements Analysis", color: "rgba(59,130,246,0.15)" },
      { label: "Documentation",         color: "rgba(99,102,241,0.15)" },
      { label: "Stakeholder Mgmt",      color: "rgba(168,85,247,0.15)" },
      { label: "Process Modeling",      color: "rgba(14,165,233,0.15)" },
    ],
    achievements: [
      { icon: <FileText size={14} />, value: "৫০+",  label: "ডকুমেন্ট তৈরি" },
      { icon: <Users    size={14} />, value: "১০+",  label: "স্টেকহোল্ডার" },
      { icon: <Star     size={14} />, value: "৯৫%",  label: "নির্ভুলতা"    },
    ],
    active: true,
    accentColor: "#3b82f6",
    glowRgb: "59,130,246",
    gradientFrom: "#2563eb",
    gradientTo: "#4f46e5",
  },
  {
    role: "Junior Executive",
    company: "Education Service, স্বায়ত্তশাসিত শিক্ষা প্রতিষ্ঠান",
    location: "ঢাকা, বাংলাদেশ",
    period: "২০১৮ — ২০২৫",
    duration: "৭ বছর",
    durationYears: 7,
    maxYears: 8,
    description:
      "শিক্ষা প্রতিষ্ঠানের বিভিন্ন দাপ্তরিক কাজ পরিচালনা এবং ম্যানেজমেন্ট টিমের সাথে কাজ করে প্রতিষ্ঠানের সেবা ও শিক্ষার মান উন্নয়নে সহায়ক ভূমিকা পালন।",
    skills: [
      { label: "Operations Mgmt",   color: "rgba(168,85,247,0.15)" },
      { label: "Team Coordination", color: "rgba(139,92,246,0.15)" },
      { label: "Customer Service",  color: "rgba(99,102,241,0.15)" },
      { label: "Administration",    color: "rgba(79,70,229,0.15)"  },
    ],
    achievements: [
      { icon: <TrendingUp size={14} />, value: "৭",    label: "বছরের অভিজ্ঞতা" },
      { icon: <Award      size={14} />, value: "১০০+", label: "প্রজেক্ট"        },
      { icon: <Users      size={14} />, value: "৫০০+", label: "শিক্ষার্থী"      },
    ],
    active: false,
    accentColor: "#a855f7",
    glowRgb: "168,85,247",
    gradientFrom: "#7c3aed",
    gradientTo: "#a855f7",
  },
];

/* ── Animated progress bar ── */
function DurationBar({
  years, max, color, glowRgb,
}: { years: number; max: number; color: string; glowRgb: string }) {
  const ref  = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30%" });
  const pct  = Math.round((years / max) * 100);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center text-xs">
        <span className="text-slate-500 font-inter tracking-wider uppercase">কর্মকাল</span>
        <span className="font-bold" style={{ color }}>{pct}%</span>
      </div>

      {/* Track */}
      <div
        className="h-2 w-full rounded-full overflow-hidden relative"
        style={{
          background: "linear-gradient(90deg,#0d1324 0%,#111829 100%)",
          border: "1px solid rgba(255,255,255,0.05)",
          boxShadow: "inset 0 2px 6px rgba(0,0,0,0.6)",
        }}
      >
        {/* Filled bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${pct}%` : 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg,${color} 0%,${color}cc 100%)`,
            boxShadow: `0 0 10px rgba(${glowRgb},0.6), 0 0 20px rgba(${glowRgb},0.25)`,
          }}
        >
          {/* Gloss sheen */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/25 to-transparent rounded-full" />
          {/* Shimmer stripe */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5, ease: "linear" }}
            className="absolute inset-0 w-1/3"
            style={{
              background:
                "linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.25) 50%,transparent 100%)",
            }}
          />
        </motion.div>

        {/* Step ticks */}
        {Array.from({ length: max - 1 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: `${((i + 1) / max) * 100}%`,
              background: "rgba(255,255,255,0.06)",
            }}
          />
        ))}
      </div>

      {/* Year markers */}
      <div className="flex justify-between text-[10px] text-slate-600 font-inter px-0.5">
        <span>০</span>
        <span>{max / 2} বছর</span>
        <span>{max} বছর</span>
      </div>
    </div>
  );
}

/* ── Single experience card ── */
function ExpCard({ exp, index }: { exp: Experience; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cardRef  = useRef<HTMLDivElement>(null);
  const inView   = useInView(cardRef, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.18, ease: "easeOut" }}
      className="relative pl-12 md:pl-16"
    >
      {/* ── Timeline connector dot ── */}
      <div className="absolute left-0 top-7 flex flex-col items-center">
        {/* Outer ring */}
        <motion.div
          animate={
            exp.active
              ? { boxShadow: [`0 0 0 0 rgba(${exp.glowRgb},0.4)`, `0 0 0 12px rgba(${exp.glowRgb},0)`] }
              : {}
          }
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          className="w-5 h-5 rounded-full border-2 border-slate-950 flex items-center justify-center"
          style={{
            background: exp.active
              ? `linear-gradient(135deg,${exp.gradientFrom},${exp.gradientTo})`
              : "#334155",
            boxShadow: exp.active
              ? `0 0 0 3px rgba(${exp.glowRgb},0.2), 0 0 20px rgba(${exp.glowRgb},0.5)`
              : "0 0 0 3px rgba(255,255,255,0.05)",
          }}
        >
          {exp.active && (
            <Circle size={6} className="fill-white text-white" />
          )}
        </motion.div>
      </div>

      {/* ── Card ── */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="glass-card p-6 md:p-8 transition-all duration-300 cursor-default"
        style={{
          borderColor: hovered
            ? `rgba(${exp.glowRgb},0.4)`
            : `rgba(${exp.glowRgb},0.18)`,
          boxShadow: hovered
            ? `0 30px 70px -12px rgba(0,0,0,0.9),
               0 0 0 1px rgba(${exp.glowRgb},0.25),
               0 0 50px -8px rgba(${exp.glowRgb},0.4),
               0 1px 0 rgba(255,255,255,0.1) inset`
            : `0 18px 50px -10px rgba(0,0,0,0.8),
               0 0 0 1px rgba(${exp.glowRgb},0.12),
               0 0 25px -10px rgba(${exp.glowRgb},0.2),
               0 1px 0 rgba(255,255,255,0.06) inset`,
          transform: hovered ? "translateY(-5px)" : "translateY(0)",
        }}
      >
        {/* Active badge */}
        {exp.active && (
          <div className="flex mb-5">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{
                background: `rgba(${exp.glowRgb},0.1)`,
                border: `1px solid rgba(${exp.glowRgb},0.3)`,
                color: exp.accentColor,
              }}
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: exp.accentColor }}
              />
              বর্তমানে কর্মরত
            </span>
          </div>
        )}

        {/* Role + Period row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-1 leading-snug">
              {exp.role}
            </h3>
            <h4 className="text-base font-semibold mb-1.5" style={{ color: exp.accentColor }}>
              {exp.company}
            </h4>
            <p className="text-sm text-slate-500 flex items-center gap-1.5">
              <MapPin size={12} style={{ color: exp.accentColor }} />
              {exp.location}
            </p>
          </div>

          {/* Period pill */}
          <div
            className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
            style={{
              background: `rgba(${exp.glowRgb},0.08)`,
              border: `1px solid rgba(${exp.glowRgb},0.25)`,
              color: exp.accentColor,
            }}
          >
            <Calendar size={13} />
            {exp.period}
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 leading-relaxed mb-6 text-sm md:text-base border-t border-slate-800/60 pt-4">
          {exp.description}
        </p>

        {/* Duration progress bar */}
        <div className="mb-6">
          <DurationBar
            years={exp.durationYears}
            max={exp.maxYears}
            color={exp.accentColor}
            glowRgb={exp.glowRgb}
          />
        </div>

        {/* Achievement stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {exp.achievements.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.18 + 0.5 + i * 0.08 }}
              className="flex flex-col items-center justify-center py-3 px-2 rounded-xl text-center gap-1"
              style={{
                background: `rgba(${exp.glowRgb},0.07)`,
                border: `1px solid rgba(${exp.glowRgb},0.18)`,
              }}
            >
              <span style={{ color: exp.accentColor }}>{ach.icon}</span>
              <span className="text-xl font-bold text-slate-100">{ach.value}</span>
              <span className="text-[10px] text-slate-500 leading-tight">{ach.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-2">
          {exp.skills.map((sk, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.18 + 0.7 + i * 0.06 }}
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{
                background: sk.color,
                border: `1px solid ${sk.color.replace("0.15", "0.3")}`,
                color: "#cbd5e1",
              }}
            >
              {sk.label}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main section ── */
export default function ExperienceSection({ content }: { content?: any }) {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#07091a] to-slate-950 -z-10" />
      <div className="blob-purple" style={{ top: "30%", right: "-5%" }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Heading ── */}
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
          <div
            className="w-24 h-[2px] mx-auto rounded-full"
            style={{
              background: "linear-gradient(90deg,#7c3aed,#a855f7)",
              boxShadow: "0 0 12px rgba(168,85,247,0.6)",
            }}
          />

          {/* Total experience badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 mt-6 px-5 py-2 rounded-full text-sm font-medium"
            style={{
              background: "rgba(168,85,247,0.08)",
              border: "1px solid rgba(168,85,247,0.25)",
              color: "#c084fc",
            }}
          >
            <TrendingUp size={14} />
            মোট অভিজ্ঞতা: ৮+ বছর
          </motion.div>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">

          {/* Vertical guide line */}
          <div
            className="absolute left-[8px] md:left-[10px] top-8 bottom-8 w-px"
            style={{
              background:
                "linear-gradient(180deg,rgba(59,130,246,0.6) 0%,rgba(168,85,247,0.4) 60%,rgba(168,85,247,0.1) 100%)",
            }}
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <ExpCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
