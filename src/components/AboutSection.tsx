"use client";

import { motion } from "framer-motion";
import { User, MapPin, Calendar, Globe, Info } from "lucide-react";

export default function AboutSection({ content }: { content: any }) {
  const infoCards = [
    {
      icon: <MapPin size={22} className="text-blue-400" />,
      label: "বর্তমান শহর",
      value: content?.location || "ঢাকা, বাংলাদেশ",
      glowClass: "card-glow-blue",
      accent: "text-blue-400",
    },
    {
      icon: <Info size={22} className="text-indigo-400" />,
      label: "গ্রামের বাড়ি",
      value: content?.hometown || "পটুয়াখালী",
      glowClass: "card-glow-purple",
      accent: "text-indigo-400",
    },
    {
      icon: <Calendar size={22} className="text-purple-400" />,
      label: "জন্মতারিখ",
      value: content?.birthDate || "১ মার্চ, ২০০১",
      glowClass: "card-glow-purple",
      accent: "text-purple-400",
    },
    {
      icon: <Globe size={22} className="text-yellow-400" />,
      label: "ক্যাটাগরি",
      value: content?.category || "ডিজিটাল ক্রিয়েটর",
      glowClass: "card-glow-gold",
      accent: "text-yellow-400",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="blob-blue" style={{ top: "30%", left: "-5%" }} />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="icon-box p-3">
              <User className="text-blue-400" size={28} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">{content?.heading || "আমার সম্পর্কে"}</h2>
          </div>
          <div className="w-24 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full shadow-[0_0_12px_rgba(99,102,241,0.6)]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card card-glow-blue p-8 md:p-10 space-y-5 text-slate-300 text-lg leading-relaxed whitespace-pre-line">
              {content?.content || (
                <>
                  <p>
                    নমস্কার ও স্বাগতম! আমি{" "}
                    <strong className="text-blue-400 font-semibold">মোঃ আবু বকর (AB Siddk)</strong>, একজন নিবেদিতপ্রাণ{" "}
                    <span className="text-indigo-400 font-semibold">Software Requirements Analyst</span> এবং ডিজিটাল ক্রিয়েটর।
                  </p>
                  <p>
                    আমার জন্ম পটুয়াখালীর স্নিগ্ধ পরিবেশে হলেও, বর্তমানে আমি বাংলাদেশের রাজধানী ঢাকায় অবস্থান করছি এবং একটি স্বনামধন্য{" "}
                    <span className="text-purple-400 font-semibold">Autonomous IT Organization</span>-এ কর্মরত আছি।
                    এর আগে আমি শিক্ষা ক্ষেত্রে{" "}
                    <span className="text-blue-400 font-semibold">Education Service</span>-এ জুনিয়র এক্সিকিউটিভ হিসেবে দীর্ঘ সময় কাজ করেছি।
                  </p>
                  <p>
                    প্রযুক্তির প্রতি আমার যেমন তীব্র অনুরাগ রয়েছে, তেমনি বাংলা সাহিত্য, সমাজনীতি ও পরিবেশ নিয়েও আমি গভীরভাবে ভাবি।
                    আমার জীবনদর্শন হলো,{" "}
                    <em className="text-slate-200">
                      &ldquo;অন্ধকার ১২ ঘণ্টা সময়ের ব্যবধানে কোটি বছরের পুরোনো সূর্যটা পুনরায় নতুন লাগে।&rdquo;
                    </em>
                  </p>
                </>
              )}
            </div>
          </motion.div>

          {/* Info cards grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {infoCards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`glass-card ${card.glowClass} p-6 flex flex-col items-start gap-4`}
              >
                <div className="icon-box p-3">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-slate-500 text-xs font-inter tracking-widest uppercase mb-1">{card.label}</h3>
                  <p className={`text-xl font-bold ${card.accent}`}>{card.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
