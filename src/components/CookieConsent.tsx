"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Cookie, X, Check, ShieldCheck } from "lucide-react";
import clarity from "@microsoft/clarity";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "granted");
    clarity.consentV2(); // Grant consent to Clarity
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "denied");
    // We don't call consentV2 with denied here because Clarity defaults to tracking 
    // unless configured otherwise, but calling it with denied is safer if required.
    clarity.consentV2({ ad_Storage: "denied", analytics_Storage: "denied" });
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:w-[400px] z-[9999]"
        >
          <div className="glass-card card-glow-blue p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="icon-box p-2 bg-blue-500/10 border-blue-500/20">
                  <Cookie className="text-blue-400" size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-100 uppercase tracking-wider">
                  Cookies & Privacy
                </h3>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-slate-500 hover:text-slate-300 transition-colors p-1"
              >
                <X size={18} />
              </button>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              We use cookies to improve your experience, analyze site traffic, and support our marketing efforts. 
              By clicking "Accept", you agree to our use of these tools like <span className="text-blue-400 font-medium">Microsoft Clarity</span>.
            </p>

            <div className="flex gap-3 pt-2">
              <button
                onClick={handleAccept}
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 hover:shadow-blue-500/30 transition-all active:scale-95"
              >
                <Check size={16} />
                Accept
              </button>
              <button
                onClick={handleDecline}
                className="px-4 py-2.5 rounded-xl bg-slate-800/50 border border-white/5 text-slate-400 font-medium text-sm hover:bg-slate-800 hover:text-slate-200 transition-all active:scale-95"
              >
                Decline
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-1.5 opacity-30 pointer-events-none">
                <ShieldCheck size={12} />
                <span className="text-[10px] uppercase tracking-[0.1em] font-bold">Secure Verification</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
