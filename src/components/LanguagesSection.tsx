"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function LanguagesSection() {
  const languages = [
    { name: "বাংলা", level: "মাতৃভাষা (Native)", percentage: 100, color: "from-green-400 to-emerald-500" },
    { name: "English", level: "দক্ষ (Proficient)", percentage: 85, color: "from-blue-400 to-indigo-500" },
    { name: "হিন্দি", level: "মধ্যম (Intermediate)", percentage: 60, color: "from-orange-400 to-red-500" },
    { name: "উর্দু", level: "বেসিক (Basic)", percentage: 30, color: "from-purple-400 to-pink-500" },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <MessageCircle className="text-emerald-400" size={40} />
            <span className="text-gradient">ভাষাদক্ষতা</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-2xl border border-slate-700/50 hover:border-emerald-500/30 transition-all group"
            >
              <div className="flex justify-between items-end mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-1">{lang.name}</h3>
                  <p className="text-sm text-slate-400">{lang.level}</p>
                </div>
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r {lang.color}">
                  {lang.percentage}%
                </span>
              </div>
              
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2 + index * 0.1, type: "spring" }}
                  className={`h-full rounded-full bg-gradient-to-r ${lang.color} relative`}
                >
                  <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]" style={{ transform: 'translateX(-100%)' }} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
