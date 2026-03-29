"use client";

import { motion } from "framer-motion";
import { LogOut, LayoutDashboard, Settings, User } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex overflow-hidden">
      
      {/* Sidebar Navigation */}
      <motion.aside 
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-72 bg-slate-900/50 backdrop-blur-xl border-r border-white/5 flex flex-col z-20"
      >
        <div className="p-8 pb-6 border-b border-white/5">
          <div className="flex gap-3 items-center mb-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex flex-shrink-0 items-center justify-center">
              <span className="text-xl font-bold font-serif text-indigo-400">A</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-100 tracking-wide font-serif">AdminPanel</h2>
              <p className="text-xs text-slate-500 font-medium tracking-widest uppercase">Content Manager</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-6 space-y-2">
          {/* Dashboard Link */}
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-2 transition-colors">
            <LayoutDashboard size={20} />
            <span className="font-semibold text-sm">Dashboard</span>
          </Link>
          
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors cursor-not-allowed opacity-50">
            <User size={20} />
            <span className="font-semibold text-sm">Profile (Soon)</span>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors cursor-not-allowed opacity-50">
            <Settings size={20} />
            <span className="font-semibold text-sm">Settings (Soon)</span>
          </div>
        </nav>

        <div className="p-6 border-t border-white/5">
          <div className="glass-card bg-slate-900/40 border border-white/5 rounded-2xl p-4 mb-4 flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
               <span className="text-white text-xs font-bold">AB</span>
             </div>
             <div className="overflow-hidden">
               <p className="text-sm font-semibold text-slate-200 truncate">A B Siddk</p>
               <p className="text-xs text-slate-500 truncate">mdabsiddk@...com</p>
             </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors border border-transparent hover:border-red-500/20"
          >
            <LogOut size={18} />
            <span className="font-medium text-sm">Sign Out</span>
          </button>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-y-auto">
        {/* Background grids and lights for content area */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
             style={{ background: "radial-gradient(circle at 70% 30%, #4338ca 0%, transparent 60%)" }} />
        <div className="absolute inset-0 z-0 pointer-events-none"
             style={{
               backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
               backgroundSize: "40px 40px",
             }} />
             
        <div className="relative z-10 p-8 md:p-12 lg:p-16 max-w-6xl mx-auto min-h-full">
          {children}
        </div>
      </main>

    </div>
  );
}
