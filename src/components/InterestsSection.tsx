"use client";

import { motion } from "framer-motion";
import { Laptop, BookOpen, Vote, Leaf, Music, PlaySquare, Heart } from "lucide-react";

export default function InterestsSection() {
  const interests = [
    { name: "প্রযুক্তি ও সফটওয়্যার", icon: <Laptop className="text-blue-400" size={32} /> },
    { name: "শিক্ষা ও সাহিত্য", icon: <BookOpen className="text-indigo-400" size={32} /> },
    { name: "ক্রিকেট (KKR)", icon: <PlaySquare className="text-purple-400" size={32} /> },
    { name: "পরিবেশ ও প্রকৃতি", icon: <Leaf className="text-emerald-400" size={32} /> },
    { name: "ইসলামিক সংগীত", icon: <Music className="text-yellow-400" size={32} /> },
    { name: "রাজনৈতিক সচেতনতা", icon: <Vote className="text-red-400" size={32} /> },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Heart className="text-red-500" size={40} />
            <span className="text-gradient">আগ্রহ ও অনুপ্রেরণা</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)" }}
              className="glass p-8 rounded-3xl flex flex-col items-center justify-center gap-4 text-center cursor-pointer group"
            >
              <div className="p-5 bg-slate-800/80 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                {interest.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors">
                {interest.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl" />
          <div className="glass-card relative p-8 md:p-12 text-center border-t border-b border-l-0 border-r-0 border-slate-700/50">
            <span className="text-6xl text-slate-700 absolute top-4 left-8 font-serif">"</span>
            <p className="text-2xl md:text-3xl font-medium text-slate-200 leading-relaxed italic z-10 relative">
              অন্ধকার ১২ ঘন্টা সময়ের ব্যবধানে কোটি বছরের পুরনো সূর্যটা পুনরায় নতুন লাগে। <br/>
              <span className="text-gradient-gold font-bold not-italic text-3xl md:text-4xl mt-6 block">
                Change your Perspective
              </span>
            </p>
            <span className="text-6xl text-slate-700 absolute bottom-[-20px] right-8 font-serif">"</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
