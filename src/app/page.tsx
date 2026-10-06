import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-zinc-100 selection:bg-cyan-500 selection:text-black">
      {/* Top Fixed Glassmorphic Navigation */}
      <Navbar />

      {/* Main Semantic Page Content */}
      <main className="flex-1 flex flex-col">
        {/* Hero & Profile Overview */}
        <Hero />

        {/* Selected Works & Architecture Case Studies */}
        <ProjectsSection />

        {/* Technical Capabilities & Stack Matrix */}
        <TechStackSection />

        {/* Experience Timeline */}
        <ExperienceSection />

        {/* Endorsements & Social Proof */}
        <TestimonialsSection />

        {/* Contact & Consultation Booking */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
