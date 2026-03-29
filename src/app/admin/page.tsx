"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Save, Loader2, RefreshCw } from "lucide-react";

export default function AdminDashboard() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/content");
      const data = await res.json();
      if (data.success) {
        setContent(data.data);
      } else {
        setMessage({ type: "error", text: "Failed to load content" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Network error loading content" });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setMessage({ type: "success", text: "Content successfully updated and applied!" });
        setTimeout(() => setMessage(null), 5000);
      } else {
        setMessage({ type: "error", text: data.message || "Failed to save content" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Network error occurred while saving." });
    } finally {
      setSaving(false);
    }
  };

  // Helper function to handle deeply nested JSON updates dynamically
  const handleChange = (sectionPath: string[], value: string) => {
    setContent((prev: any) => {
      const newContent = { ...prev };
      let current = newContent;
      
      // Navigate to the correct nested object
      for (let i = 0; i < sectionPath.length - 1; i++) {
        current = current[sectionPath[i]];
      }
      
      // Update the final key
      current[sectionPath[sectionPath.length - 1]] = value;
      return newContent;
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-20 flex-col gap-4">
        <Loader2 className="animate-spin text-indigo-400" size={40} />
        <p className="text-slate-400 font-medium">Loading content data...</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20"
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold font-serif text-slate-100 flex items-center gap-3">
            Content Editor
          </h1>
          <p className="text-slate-400 mt-2">Manage all dynamic landing page texts directly</p>
        </div>
        
        <button
          onClick={fetchContent}
          className="p-3 bg-slate-800/50 hover:bg-slate-800 rounded-xl border border-white/10 text-slate-300 transition-colors"
          title="Reload Data"
        >
          <RefreshCw size={20} />
        </button>
      </div>

      {message && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`px-5 py-4 mb-8 rounded-xl border flex items-center gap-3 ${
            message.type === 'success' 
            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
            : 'bg-red-500/10 border-red-500/30 text-red-500'
          }`}
        >
          {message.text}
        </motion.div>
      )}

      <form onSubmit={handleSave} className="space-y-8">
        
        {/* Hero Section Form */}
        <section className="glass-card bg-slate-900/40 p-8 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full" />
          <h2 className="text-2xl font-semibold text-indigo-300 mb-6 border-b border-white/10 pb-4">Hero Section</h2>
          
          <div className="grid gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">Title</label>
              <input
                type="text"
                value={content?.hero?.title || ""}
                onChange={(e) => handleChange(["hero", "title"], e.target.value)}
                className="w-full bg-slate-950/50 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">Subtitle</label>
              <input
                type="text"
                value={content?.hero?.subtitle || ""}
                onChange={(e) => handleChange(["hero", "subtitle"], e.target.value)}
                className="w-full bg-slate-950/50 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">Description</label>
              <textarea
                rows={3}
                value={content?.hero?.description || ""}
                onChange={(e) => handleChange(["hero", "description"], e.target.value)}
                className="w-full bg-slate-950/50 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-y"
              />
            </div>
          </div>
        </section>

        {/* About Section Form */}
        <section className="glass-card bg-slate-900/40 p-8 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden">
          <h2 className="text-2xl font-semibold text-purple-300 mb-6 border-b border-white/10 pb-4">About Section</h2>
          <div className="grid gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">Heading</label>
              <input
                type="text"
                value={content?.about?.heading || ""}
                onChange={(e) => handleChange(["about", "heading"], e.target.value)}
                className="w-full bg-slate-950/50 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">Content / Description</label>
              <textarea
                rows={4}
                value={content?.about?.content || ""}
                onChange={(e) => handleChange(["about", "content"], e.target.value)}
                className="w-full bg-slate-950/50 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-y"
              />
            </div>
          </div>
        </section>

        {/* Interests & Philosophical Quote Section Form */}
        <section className="glass-card bg-slate-900/40 p-8 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 blur-3xl rounded-full" />
          <h2 className="text-2xl font-semibold text-pink-300 mb-6 border-b border-white/10 pb-4">Interests & Philosophical Quote</h2>
          
          <div className="grid gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">Section Heading</label>
              <input
                type="text"
                value={content?.interests?.heading || ""}
                onChange={(e) => handleChange(["interests", "heading"], e.target.value)}
                className="w-full bg-slate-950/50 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
              />
            </div>

            <div className="p-6 bg-slate-950/50 border border-pink-500/20 rounded-2xl space-y-5">
              <h3 className="text-lg font-medium text-slate-200 font-serif">Quote Parts</h3>
              
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-500 uppercase tracking-widest text-right block">Fragment 1 (The Hard Truth)</label>
                <textarea
                  rows={2}
                  value={content?.interests?.philosophyQuote?.part1 || ""}
                  onChange={(e) => handleChange(["interests", "philosophyQuote", "part1"], e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-1 focus:ring-pink-500/50 font-serif"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-500 uppercase tracking-widest text-right block">Fragment 2 (The Wisdom)</label>
                <textarea
                  rows={3}
                  value={content?.interests?.philosophyQuote?.part2 || ""}
                  onChange={(e) => handleChange(["interests", "philosophyQuote", "part2"], e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-1 focus:ring-pink-500/50 font-serif"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-500 uppercase tracking-widest text-right block">Fragment 3 (Existential Closing)</label>
                <textarea
                  rows={2}
                  value={content?.interests?.philosophyQuote?.part3 || ""}
                  onChange={(e) => handleChange(["interests", "philosophyQuote", "part3"], e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-1 focus:ring-pink-500/50 font-serif"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-500 uppercase">Author Main Name</label>
                  <input
                    type="text"
                    value={content?.interests?.philosophyQuote?.authorName || ""}
                    onChange={(e) => handleChange(["interests", "philosophyQuote", "authorName"], e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-1 focus:ring-pink-500/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-500 uppercase">Author Sub Name</label>
                  <input
                    type="text"
                    value={content?.interests?.philosophyQuote?.authorSubName || ""}
                    onChange={(e) => handleChange(["interests", "philosophyQuote", "authorSubName"], e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-1 focus:ring-pink-500/50"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Global Action Bar anchored to bottom */}
        <div className="fixed bottom-0 left-72 right-0 p-6 bg-slate-950/80 backdrop-blur-xl border-t border-white/10 flex justify-end z-50">
          <button
            type="submit"
            disabled={saving}
            className="group relative overflow-hidden rounded-xl p-[1px] w-48 shadow-lg shadow-indigo-500/20 cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-xl opacity-80 group-hover:opacity-100 transition-opacity bg-[length:200%_auto] block group-hover:animate-gradient" />
            <div className="relative bg-slate-900/90 backdrop-blur-sm px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all">
              {saving ? (
                <Loader2 className="animate-spin text-white" size={20} />
              ) : (
                <>
                  <Save size={20} className="text-white relative z-10" />
                  <span className="font-semibold text-white tracking-wide relative z-10">Save All Changes</span>
                </>
              )}
            </div>
          </button>
        </div>

      </form>
    </motion.div>
  );
}
