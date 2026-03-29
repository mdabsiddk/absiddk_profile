"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, Terminal } from "lucide-react";

export default function HeroSection({ content }: { content?: any }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="blob-blue" style={{ top: "15%", left: "10%" }} />
      <div className="blob-purple" style={{ bottom: "15%", right: "10%" }} />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass card-glow-blue text-sm font-medium text-blue-300 tracking-widest uppercase">
              <Terminal size={14} className="text-blue-400" />
              স্বাগতম, আমি
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-gradient-gold drop-shadow-[0_0_40px_rgba(250,204,21,0.25)]">
              {content?.title || "মোঃ আবু বকর"}
            </h1>
          </motion.div>

          {/* Typed role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-300 mb-10 h-20 md:h-24"
          >
            <TypeAnimation
              sequence={[
                "Software Requirements Analyst",
                2000,
                "Social awareness & Political analysis",
                2000,
                "Content Creator",
                2000,
                "Content Writer",
                2000,
                "Digital Marketer",
                2000,
                "Social Media Manager",
                2000,
                "Customer Care Manager",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gradient"
            />
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a
              href="#about"
              className="px-9 py-4 rounded-full text-white font-semibold text-lg transition-all flex items-center gap-2 group"
              style={{
                background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
                boxShadow: "0 0 25px rgba(79,70,229,0.4), 0 4px 15px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.12) inset",
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 40px rgba(79,70,229,0.65), 0 8px 25px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.12) inset")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 25px rgba(79,70,229,0.4), 0 4px 15px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.12) inset")}
            >
              আমার সম্পর্কে
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-9 py-4 rounded-full text-slate-200 font-semibold text-lg transition-all glass card-glow-purple"
            >
              যোগাযোগ করুন
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-600/60 flex justify-center p-1 backdrop-blur-sm"
          style={{ boxShadow: "0 0 10px rgba(99,102,241,0.2)" }}>
          <div className="w-1 h-2 bg-indigo-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
