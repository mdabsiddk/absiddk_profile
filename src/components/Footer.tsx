export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gradient-gold mb-2">এবি সিদ্দিক</h2>
            <p className="text-slate-400 text-sm">
              Software Requirements Analyst & Digital Creator
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-slate-500 text-sm mb-2">
              &copy; {currentYear} মোঃ আবু বকর. সর্বস্বত্ব সংরক্ষিত.
            </p>
            <p className="text-slate-600 text-xs">
              ডিজাইন ও ডেভেলপমেন্ট: <span className="text-indigo-400/80 hover:text-indigo-400 cursor-pointer transition-colors">AB Siddk</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
