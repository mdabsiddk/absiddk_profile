import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import LanguagesSection from "@/components/LanguagesSection";
import InterestsSection from "@/components/InterestsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

function SectionDivider({ color }: { color: string }) {
  return (
    <div className="relative w-full flex items-center justify-center py-2">
      <div
        className="w-2/3 h-px"
        style={{
          background: `linear-gradient(90deg,transparent 0%,${color} 40%,${color} 60%,transparent 100%)`,
        }}
      />
      <div
        className="absolute w-2 h-2 rounded-full"
        style={{ background: color, boxShadow: `0 0 10px ${color}` }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <main
      className="min-h-screen text-slate-50 selection:bg-blue-500/30 selection:text-blue-200"
      style={{ background: "#080c14" }}
    >
      <Navbar />
      <HeroSection />

      <SectionDivider color="rgba(59,130,246,0.35)" />
      <AboutSection />

      <SectionDivider color="rgba(168,85,247,0.30)" />
      <SkillsSection />

      <SectionDivider color="rgba(99,102,241,0.30)" />
      <ExperienceSection />

      <SectionDivider color="rgba(16,185,129,0.28)" />
      <LanguagesSection />

      <SectionDivider color="rgba(239,68,68,0.28)" />
      <InterestsSection />

      <SectionDivider color="rgba(59,130,246,0.32)" />
      <ContactSection />

      <Footer />
    </main>
  );
}
