"use client";

import { motion } from "framer-motion";
import { Code2, BookOpen, Layers, Zap } from "lucide-react";

export default function SkillsSection() {
  const professionalSkills = [
    { name: "Software Requirements Analysis", level: 95 },
    { name: "Requirements Documentation", level: 90 },
    { name: "Stakeholder Communication", level: 85 },
    { name: "Process Modeling & Workflow Design", level: 80 },
    { name: "Education Service Management", level: 85 },
  ];

  const personalSkills = [
    { name: "বাংলা সাহিত্য ও রচনা", icon: <BookOpen className="text-indigo-400" /> },
    { name: "ডিজিটাল কনটেন্ট ক্রিয়েশন", icon: <Zap className="text-yellow-400" /> },
    { name: "সমাজ সচেতনতা ও রাজনৈতিক বিশ্লেষণ", icon: <Layers className="text-blue-400" /> },
    { name: "বহুভাষিক যোগাযোগ", icon: <Code2 className="text-purple-400" /> },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Zap className="text-yellow-400" size={40} />
            <span className="text-gradient">দক্ষতা ও পারদর্শিতা</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Professional Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-blue-300 flex items-center gap-2">
              <Code2 size={24} /> পেশাদার দক্ষতা
            </h3>
            <div className="space-y-6">
              {professionalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-200 font-medium">{skill.name}</span>
                    <span className="text-indigo-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full relative"
                    >
                      <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-[progress_1s_linear_infinite]" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Personal Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-purple-300 flex items-center gap-2">
              <Layers size={24} /> ব্যক্তিগত দক্ষতা
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass p-6 rounded-2xl border border-slate-700/50 flex flex-col items-center text-center gap-4 hover:border-purple-500/50 transition-colors"
                >
                  <div className="p-4 bg-slate-800/80 rounded-full">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-medium text-slate-200">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
