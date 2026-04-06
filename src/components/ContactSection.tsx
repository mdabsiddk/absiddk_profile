"use client";

import { motion } from "framer-motion";
import { useState, ReactNode } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, Instagram, Check } from "lucide-react";

/* ──────────────────────────────────────────
   FloatingField — পুনর্ব্যবহারযোগ্য wrapper
   ব্যবহার:
     <FloatingField label="লেবেল" isTextarea={false}>
       <input ... />
     </FloatingField>
   textarea হলে isTextarea={true} পাস করুন।
────────────────────────────────────────── */
function FloatingField({
  label,
  isTextarea = false,
  children,
}: {
  label: string;
  isTextarea?: boolean;
  children: ReactNode;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue,  setHasValue]  = useState(false);

  const wrapperClass = [
    "floating-field",
    isTextarea    ? "is-textarea" : "",
    isFocused     ? "is-focused"  : "",
    hasValue      ? "has-value"   : "",
  ].filter(Boolean).join(" ");

  return (
    <div
      className={wrapperClass}
      onFocus={() => setIsFocused(true)}
      onBlur={(e) => {
        setIsFocused(false);
        setHasValue((e.target as HTMLInputElement | HTMLTextAreaElement).value.length > 0);
      }}
      onChange={(e) => {
        setHasValue((e.target as HTMLInputElement | HTMLTextAreaElement).value.length > 0);
      }}
    >
      <label>{label}</label>
      {children}
    </div>
  );
}

export default function ContactSection({ content }: { content?: any }) {
  const contactInfo = [
    {
      icon: <Mail className="text-blue-400" size={22} />,
      title: "ইমেইল",
      value: content?.email || "mdabsiddk2331@gmail.com",
      link: `mailto:${content?.email || "mdabsiddk2331@gmail.com"}`,
      glowClass: "card-glow-blue",
      accentColor: "#3b82f6",
    },
    {
      icon: <Phone className="text-emerald-400" size={22} />,
      title: "ফোন নম্বর",
      value: "+8801519005033",
      link: "tel:+8801519005033",
      glowClass: "card-glow-green",
      accentColor: "#10b981",
    },
    {
      icon: <MapPin className="text-red-400" size={22} />,
      title: "বর্তমান অবস্থান",
      value: "ঢাকা, বাংলাদেশ",
      link: "https://maps.google.com/?q=Dhaka,Bangladesh",
      glowClass: "card-glow-red",
      accentColor: "#ef4444",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={22} />,
      name: "GitHub",
      href: "https://github.com/mdabsiddk",
      bg: "linear-gradient(135deg,#333333,#000000)",
      glow: "rgba(255,255,255,0.4)",
    },
    {
      icon: <Linkedin size={22} />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/absiddk",
      bg: "linear-gradient(135deg,#0a66c2,#0077b5)",
      glow: "rgba(10,102,194,0.6)",
    },
    {
      icon: <Facebook size={22} />,
      name: "Facebook",
      href: "https://www.facebook.com/mdabubakarpage/",
      bg: "linear-gradient(135deg,#1877f2,#166fe5)",
      glow: "rgba(24,119,242,0.6)",
    },
    {
      icon: <Instagram size={22} />,
      name: "Instagram",
      href: "https://www.instagram.com/a.siddk",
      bg: "linear-gradient(135deg,#e1306c,#c13584,#833ab4)",
      glow: "rgba(225,48,108,0.55)",
    },
  ];

  /* shared inline styles for every input / textarea */
  const fieldStyle = {
    background: "linear-gradient(135deg,#0f1629 0%,#0a0e1c 100%)",
    border: "1px solid rgba(255,255,255,0.07)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.4) inset",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)";
  };
  const handleBlur  = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
  };

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      // ── Clarity Custom Event ──
      import("@microsoft/clarity").then((ClarityModule) => {
        const c = (ClarityModule as any).default || (ClarityModule as any).clarity;
        if (c && typeof c.event === 'function') {
          c.event("contact_form_submitted");
        }
      });

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      <div className="blob-purple" style={{ bottom: "15%", left: "0" }} />
      <div className="blob-blue"   style={{ top: "15%",  right: "0" }} />

      {/* grid bg */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <Send className="text-blue-400" size={28} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              {content?.heading || "যোগাযোগ করুন"}
            </h2>
          </div>
          <div className="w-24 h-[2px] bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full shadow-[0_0_12px_rgba(99,102,241,0.6)]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* ── Left – contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <h3 className="text-2xl font-semibold text-slate-200 mb-2">আমার সাথে কথা বলুন</h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              সফটওয়্যার রিকয়ারমেন্টস অ্যানালিসিস, কনটেন্ট ক্রিয়েশন বা যে কোনো দরকারে আমার সাথে যোগাযোগ করতে পারেন।
              নিচের মাধ্যমগুলোতে আমি সবসময় সচল থাকি।
            </p>

            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className={`glass-card ${info.glowClass} flex items-center gap-5 p-5 cursor-pointer group`}
              >
                <div className="icon-box p-3 flex-shrink-0">{info.icon}</div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">
                    {info.title}
                  </h4>
                  <p className="text-lg font-semibold text-slate-100 group-hover:text-blue-300 transition-colors">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Social buttons */}
            <div className="pt-6">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
                সামাজিক যোগাযোগ মাধ্যম
              </h4>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    aria-label={social.name}
                    className="p-3 rounded-2xl text-white transition-all"
                    style={{
                      background: social.bg,
                      boxShadow: `0 4px 16px ${social.glow}, 0 1px 0 rgba(255,255,255,0.15) inset`,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 8px 28px ${social.glow}, 0 1px 0 rgba(255,255,255,0.15) inset`)}
                    onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 4px 16px ${social.glow}, 0 1px 0 rgba(255,255,255,0.15) inset`)}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right – message form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={`glass-card card-glow-blue p-8 md:p-10 transition-all ${status === 'success' ? 'scale-[1.02] border-blue-400/50' : ''}`}>
              <h3 className="text-2xl font-semibold mb-7 text-slate-200 flex items-center gap-2">
                <Send size={20} className="text-blue-400" />
                <span className="text-gradient">
                  {status === "success" ? "বার্তা সফলভাবে পাঠানো হয়েছে!" : "বার্তা পাঠান"}
                </span>
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit}>

                {/* ── নাম ── */}
                <FloatingField label="আপনার নাম">
                  <input
                    type="text"
                    id="contact-name"
                    className="w-full px-4 py-3 rounded-xl text-slate-200 transition-all focus:outline-none focus:ring-2"
                    style={fieldStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </FloatingField>

                {/* ── ইমেইল ── */}
                <FloatingField label="ইমেইল ঠিকানা">
                  <input
                    type="email"
                    id="contact-email"
                    className="w-full px-4 py-3 rounded-xl text-slate-200 transition-all focus:outline-none"
                    style={fieldStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </FloatingField>

                {/* ── বার্তা ── */}
                <FloatingField label="আপনার বার্তা লিখুন..." isTextarea>
                  <textarea
                    id="contact-message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl text-slate-200 transition-all resize-none focus:outline-none"
                    style={fieldStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </FloatingField>

                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="w-full py-4 rounded-xl text-white font-semibold text-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    background: status === "success" 
                      ? "linear-gradient(135deg, #10b981 0%, #059669 100%)" 
                      : "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
                    boxShadow: status === "success"
                      ? "0 0 25px rgba(16,185,129,0.4), 0 4px 15px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.12) inset"
                      : "0 0 25px rgba(79,70,229,0.4), 0 4px 15px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.12) inset",
                  }}
                  onMouseEnter={e => {
                    if (status === "idle") {
                      e.currentTarget.style.boxShadow = "0 0 45px rgba(79,70,229,0.7), 0 8px 25px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.14) inset";
                    }
                  }}
                  onMouseLeave={e => {
                    if (status === "idle") {
                      e.currentTarget.style.boxShadow = "0 0 25px rgba(79,70,229,0.4), 0 4px 15px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.12) inset";
                    }
                  }}
                >
                  {status === "submitting" ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      পাঠানো হচ্ছে...
                    </div>
                  ) : status === "success" ? (
                    <div className="flex items-center gap-2">
                       <Check size={20} />
                       সফলভাবে পাঠানো হয়েছে
                    </div>
                  ) : (
                    <>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      বার্তা পাঠান
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
