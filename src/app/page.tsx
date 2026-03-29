import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import LanguagesSection from "@/components/LanguagesSection";
import InterestsSection from "@/components/InterestsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import fs from "fs";
import path from "path";

async function getLandingContent() {
  try {
    // Attempt to load from Cloudflare KV first
    let env: any;
    try {
      const context = await getCloudflareContext();
      env = context?.env;
    } catch (e) {
      // getCloudflareContext throws in some Next.js build phases or if not initialized
    }

    if (env && env.CONTENT_STORE) {
      const kvData = await env.CONTENT_STORE.get("landingContent");
      if (kvData) {
        return JSON.parse(kvData);
      }
    }

    // Fallback to local default JSON file
    const filePath = path.join(process.cwd(), "src", "data", "landingContent.json");
    const fileContent = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Failed to load landing content locally:", error);
    return null;
  }
}

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

export default async function Home() {
  const content = await getLandingContent() as any;

  return (
    <main
      className="min-h-screen text-slate-50 selection:bg-blue-500/30 selection:text-blue-200"
      style={{ background: "#080c14" }}
    >
      <Navbar />
      <HeroSection content={content?.hero} />

      <SectionDivider color="rgba(59,130,246,0.35)" />
      <AboutSection content={content?.about} />

      <SectionDivider color="rgba(168,85,247,0.30)" />
      <SkillsSection content={content?.skills} />

      <SectionDivider color="rgba(99,102,241,0.30)" />
      <ExperienceSection content={content?.experience} />

      <SectionDivider color="rgba(16,185,129,0.28)" />
      <LanguagesSection content={content?.languages} />

      <SectionDivider color="rgba(239,68,68,0.28)" />
      <InterestsSection content={content?.interests} />

      <SectionDivider color="rgba(59,130,246,0.32)" />
      <ContactSection content={content?.contact} />

      <Footer />
    </main>
  );
}
