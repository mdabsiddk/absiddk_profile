"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Terminal, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "হোম",      href: "#home",       id: "home"       },
  { name: "পরিচিতি",  href: "#about",      id: "about"      },
  { name: "দক্ষতা",   href: "#skills",     id: "skills"     },
  { name: "অভিজ্ঞতা", href: "#experience", id: "experience" },
  { name: "যোগাযোগ",  href: "#contact",    id: "contact"    },
];

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  /* ── scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── active section detection ── */
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1  }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={
          scrolled
            ? {
                background:
                  "linear-gradient(180deg,rgba(5,8,16,0.96) 0%,rgba(4,6,14,0.94) 100%)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                borderBottom: "1px solid rgba(99,102,241,0.12)",
                boxShadow:
                  "0 8px 40px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.04) inset",
              }
            : {
                background: "transparent",
                backdropFilter: "none",
              }
        }
      >
        {/* thin top accent line – only when scrolled */}
        {scrolled && (
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg,transparent 0%,rgba(99,102,241,0.5) 30%,rgba(168,85,247,0.4) 70%,transparent 100%)",
            }}
          />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[68px]">

            {/* ── Logo ── */}
            <a href="#home" className="flex items-center gap-3 group flex-shrink-0">
              {/* Icon box */}
              <div
                className="relative w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(145deg,#1e2b46 0%,#0f1a32 100%)",
                  border: "1px solid rgba(99,102,241,0.3)",
                  boxShadow:
                    "0 4px 16px rgba(0,0,0,0.5), 0 0 20px rgba(99,102,241,0.2), 0 1px 0 rgba(255,255,255,0.08) inset",
                }}
              >
                {/* gloss */}
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(160deg,rgba(255,255,255,0.1) 0%,transparent 50%)",
                  }}
                />
                <Terminal size={16} className="text-blue-400 relative z-10" />
              </div>

              {/* Name */}
              <div className="flex flex-col leading-none">
                <span
                  className="text-lg font-bold tracking-wide"
                  style={{
                    background:
                      "linear-gradient(90deg,#facc15 0%,#fbbf24 60%,#f59e0b 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 8px rgba(250,204,21,0.3))",
                  }}
                >
                  এবি সিদ্দিক
                </span>
                <span className="text-[9px] text-slate-500 tracking-[0.18em] uppercase font-inter font-medium">
                  AB Siddk
                </span>
              </div>
            </a>

            {/* ── Desktop links ── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = active === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="relative px-4 py-2 rounded-lg text-sm font-medium transition-colors group"
                    style={{ color: isActive ? "#e2e8f0" : "#64748b" }}
                    onMouseEnter={e =>
                      (e.currentTarget.style.color = "#e2e8f0")
                    }
                    onMouseLeave={e =>
                      (e.currentTarget.style.color = isActive ? "#e2e8f0" : "#64748b")
                    }
                  >
                    {/* Background highlight when active */}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-pill"
                        className="absolute inset-0 rounded-lg"
                        style={{
                          background:
                            "linear-gradient(135deg,rgba(37,99,235,0.18),rgba(99,102,241,0.12))",
                          border: "1px solid rgba(99,102,241,0.25)",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    {/* Hover highlight */}
                    <span
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background:
                          "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    />
                    <span className="relative z-10">{link.name}</span>

                    {/* Active bottom dot */}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-dot"
                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{
                          background: "#818cf8",
                          boxShadow: "0 0 6px rgba(129,140,248,0.8)",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* ── Right side: CTA + avatar ── */}
            <div className="hidden md:flex items-center gap-3">
              {/* Status badge */}
              <div
                className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(16,185,129,0.08)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  color: "#34d399",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                  style={{ boxShadow: "0 0 6px rgba(52,211,153,0.8)", animation: "pulse 2s infinite" }}
                />
                Available for work
              </div>

              {/* CTA button */}
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white transition-all"
                style={{
                  background:
                    "linear-gradient(135deg,#2563eb 0%,#4f46e5 100%)",
                  boxShadow:
                    "0 0 18px rgba(79,70,229,0.4), 0 2px 8px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.12) inset",
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 32px rgba(79,70,229,0.65), 0 4px 14px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.14) inset")
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 18px rgba(79,70,229,0.4), 0 2px 8px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.12) inset")
                }
              >
                <Code2 size={14} />
                যোগাযোগ
              </a>
            </div>

            {/* ── Mobile toggle ── */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl transition-all text-slate-400 hover:text-white"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1  }}
                    exit={{   rotate: 90,  opacity: 0  }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90,  opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1  }}
                    exit={{   rotate: -90, opacity: 0  }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{   opacity: 0, height: 0       }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg,rgba(5,8,16,0.98) 0%,rgba(4,6,14,0.99) 100%)",
                backdropFilter: "blur(24px)",
                borderTop: "1px solid rgba(99,102,241,0.12)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.7)",
              }}
            >
              <div className="px-4 pt-3 pb-5 space-y-1">
                {navLinks.map((link, i) => {
                  const isActive = active === link.id;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0   }}
                      transition={{ delay: i * 0.05  }}
                      className="flex items-center justify-between px-4 py-3 rounded-xl transition-all"
                      style={{
                        background: isActive
                          ? "rgba(37,99,235,0.12)"
                          : "transparent",
                        border: isActive
                          ? "1px solid rgba(99,102,241,0.25)"
                          : "1px solid transparent",
                        color: isActive ? "#c7d2fe" : "#94a3b8",
                      }}
                    >
                      <span className="text-base font-medium">{link.name}</span>
                      {isActive && (
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            background: "#818cf8",
                            boxShadow: "0 0 6px rgba(129,140,248,0.8)",
                          }}
                        />
                      )}
                    </motion.a>
                  );
                })}

                {/* Mobile CTA */}
                <div className="pt-2">
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-semibold text-sm"
                    style={{
                      background:
                        "linear-gradient(135deg,#2563eb 0%,#4f46e5 100%)",
                      boxShadow:
                        "0 0 20px rgba(79,70,229,0.4), 0 1px 0 rgba(255,255,255,0.12) inset",
                    }}
                  >
                    <Code2 size={15} />
                    যোগাযোগ করুন
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
