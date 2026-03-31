"use client";

import { Terminal } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "হোম",      href: "#home"       },
    { name: "পরিচিতি",  href: "#about"      },
    { name: "দক্ষতা",   href: "#skills"     },
    { name: "অভিজ্ঞতা", href: "#experience" },
    { name: "যোগাযোগ",  href: "#contact"    },
  ];

  const socialLinks = [
    { icon: <FaGithub size={16} />, href: "https://github.com/mdabsiddk",             glow: "rgba(255,255,255,0.4)", bg: "linear-gradient(135deg,#333333,#000000)" },
    { icon: <FaLinkedin size={16} />, href: "https://www.linkedin.com/in/absiddk",        glow: "rgba(10,102,194,0.6)",  bg: "linear-gradient(135deg,#0a66c2,#0078b4)" },
    { icon: <FaFacebook size={16} />, href: "https://www.facebook.com/mdabubakarpage/",   glow: "rgba(24,119,242,0.6)",  bg: "linear-gradient(135deg,#1877f2,#166fe5)" },
    { icon: <FaInstagram size={16} />, href: "https://www.instagram.com/a.siddk",         glow: "rgba(225,48,108,0.55)", bg: "linear-gradient(135deg,#e1306c,#833ab4)" },
  ];

  return (
    <footer
      className="relative overflow-hidden pt-14 pb-8"
      style={{
        background: "linear-gradient(180deg,rgba(6,9,18,0) 0%,#050810 30%,#030610 100%)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Top neon line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
        style={{ background: "linear-gradient(90deg,transparent,rgba(99,102,241,0.5),transparent)" }}
      />
      {/* Subtle glow centre */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 -z-10"
        style={{ background: "radial-gradient(ellipse,rgba(79,70,229,0.07) 0%,transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-10">

          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2 mb-3 group">
              <div
                className="p-2 rounded-xl transition-all"
                style={{
                  background: "linear-gradient(145deg,#1e2740,#111827)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.5), 0 0 20px rgba(59,130,246,0.1)",
                }}
              >
                <Terminal size={14} className="text-blue-400" />
              </div>
              <span className="text-xl font-bold text-gradient-gold">এবি সিদ্দিক</span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Software Requirements Analyst &amp; Digital Creator<br />
              ঢাকা, বাংলাদেশ
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-white transition-all"
                style={{
                  background: s.bg,
                  boxShadow: `0 4px 14px ${s.glow}, 0 1px 0 rgba(255,255,255,0.12) inset`,
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 6px 22px ${s.glow}, 0 1px 0 rgba(255,255,255,0.12) inset`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 4px 14px ${s.glow}, 0 1px 0 rgba(255,255,255,0.12) inset`)}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p className="text-slate-600 text-xs">
            &copy; {currentYear} মোঃ আবু বকর (AB Siddk). সর্বস্বত্ব সংরক্ষিত.
          </p>
          <p className="text-slate-700 text-xs">
            ডিজাইন ও ডেভেলপমেন্ট:{" "}
            <span className="text-indigo-400/70 hover:text-indigo-400 cursor-pointer transition-colors">
              AB Siddk
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
