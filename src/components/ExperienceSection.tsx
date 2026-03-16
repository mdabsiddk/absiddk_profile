"use client";

import { motion } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Software Requirements Analyst",
      company: "Autonomous IT Organization",
      location: "ঢাকা, বাংলাদেশ",
      period: "২০২৫ — বর্তমান",
      description: "সফটওয়্যার তৈরি এবং ডেভেলপমেন্ট টিমের জন্য সঠিক রিকয়ারমেন্টস বিশ্লেষণ ও ডকুমেন্টেশন তৈরি করা। ক্লায়েন্ট এবং স্টেকহোল্ডারদের সাথে নিরবচ্ছিন্ন যোগাযোগ রক্ষা করা।",
      active: true,
    },
    {
      role: "Junior Executive",
      company: "Education Service, স্বায়ত্তশাসিত শিক্ষা প্রতিষ্ঠান",
      location: "ঢাকা, বাংলাদেশ",
      period: "২০১৮ — ২০২৫",
      description: "শিক্ষা প্রতিষ্ঠানের বিভিন্ন দাপ্তরিক কাজ পরিচালনা এবং ম্যানেজমেন্ট টিমের সাথে কাজ করে প্রতিষ্ঠানের সেবা ও শিক্ষার মান উন্নয়নে সহায়ক ভূমিকা পালন।",
      active: false,
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Briefcase className="text-purple-500" size={40} />
            <span className="text-gradient">কর্ম অভিজ্ঞতা</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-slate-700/50 md:ml-12 ml-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="mb-12 ml-8 relative"
            >
              <div 
                className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-slate-950 ${
                  exp.active ? "bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" : "bg-slate-500"
                }`}
              />
              
              <div className="glass-card p-6 md:p-8 hover:border-purple-500/30 transition-colors group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-1">{exp.role}</h3>
                    <h4 className="text-lg text-blue-400 font-medium">{exp.company}</h4>
                    <p className="text-sm text-slate-400 flex items-center gap-1 mt-1">
                      <ChevronRight size={14} /> {exp.location}
                    </p>
                  </div>
                  <div className="inline-block px-4 py-2 bg-slate-800/80 rounded-full text-sm font-semibold text-slate-300 whitespace-nowrap border border-slate-700/50">
                    {exp.period}
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
