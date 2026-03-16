"use client";

import { motion } from "framer-motion";
import { User, MapPin, Calendar, Globe, Info } from "lucide-react";

export default function AboutSection() {
  const infoCards = [
    { icon: <MapPin size={24} className="text-blue-400" />, label: "বর্তমান শহর", value: "ঢাকা, বাংলাদেশ", glow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]" },
    { icon: <Info size={24} className="text-indigo-400" />, label: "গ্রামের বাড়ি", value: "পটুয়াখালী", glow: "hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]" },
    { icon: <Calendar size={24} className="text-purple-400" />, label: "জন্মতারিখ", value: "১ মার্চ, ২০০১", glow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]" },
    { icon: <Globe size={24} className="text-gold-400" />, label: "ক্যাটাগরি", value: "ডিজিটাল ক্রিয়েটর", glow: "hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <User className="text-blue-500" size={40} />
            <span className="text-gradient">আমার সম্পর্কে</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-slate-300 text-lg leading-relaxed"
          >
            <p>
              নমস্কার ও স্বাগতম! আমি <strong className="text-blue-400 font-semibold">মোঃ আবু বকর (AB Siddk)</strong>, একজন নিবেদিতপ্রাণ 
              <span className="text-indigo-400 font-semibold"> Software Requirements Analyst</span> এবং ডিজিটাল ক্রিয়েটর।
            </p>
            <p>
              আমার জন্ম পটুয়াখালীর স্নিগ্ধ পরিবেশে হলেও, বর্তমানে আমি বাংলাদেশের রাজধানী ঢাকায় অবস্থান করছি এবং 
              একটি স্বনামধন্য <span className="text-purple-400 font-semibold">Autonomous IT Organization</span>-এ কর্মরত আছি। 
              এর আগে আমি শিক্ষা ক্ষেত্রে <span className="text-blue-400 font-semibold">Education Service</span>-এ জুনিয়র এক্সিকিউটিভ হিসেবে দীর্ঘ সময় কাজ করেছি।
            </p>
            <p>
              প্রযুক্তির প্রতি আমার যেমন তীব্র অনুরাগ রয়েছে, তেমনি বাংলা সাহিত্য, সমাজনীতি ও পরিবেশ নিয়েও আমি গভীরভাবে ভাবি। 
              আমার জীবনদর্শন হলো, <i>"অন্ধকার ১২ ঘণ্টা সময়ের ব্যবধানে কোটি বছরের পুরোনো সূর্যটা পুনরায় নতুন লাগে।"</i> 
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {infoCards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`glass-card p-6 flex flex-col items-center sm:items-start text-center sm:text-left transition-all duration-300 ${card.glow}`}
              >
                <div className="mb-4 p-3 bg-slate-800/80 rounded-2xl">
                  {card.icon}
                </div>
                <h3 className="text-slate-400 text-sm font-inter tracking-wider uppercase mb-1">{card.label}</h3>
                <p className="text-xl font-medium text-slate-100">{card.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
