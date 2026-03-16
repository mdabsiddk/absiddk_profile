import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import LanguagesSection from "@/components/LanguagesSection";
import InterestsSection from "@/components/InterestsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <HeroSection />
      
      {/* Decorative divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-12" />
      
      <AboutSection />
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-12" />
      
      <SkillsSection />
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-12" />
      
      <ExperienceSection />
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-12" />
      
      <LanguagesSection />
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-12" />
      
      <InterestsSection />

      <ContactSection />
      
      <Footer />
    </main>
  );
}
