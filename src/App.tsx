import Hero from "./components/Hero";
import AppShowcase from "./components/AppShowcase";
import HearTheColor from "./components/HearTheColor";
import FeatureGrid from "./components/FeatureGrid";
import LogoMarquee from "./components/LogoMarquee";
import InteractiveDemos from "./components/InteractiveDemos";
import Integrations from "./components/Integrations";
import FeaturesList from "./components/FeaturesList";
import TestimonialSection from "./components/TestimonialSection";
import BottomCTA from "./components/BottomCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-[#FF4500] selection:text-white font-sans antialiased">
      {/* 1440px centered main display page block as requested */}
      <div className="w-full max-w-[1440px] mx-auto bg-[#050505] relative shadow-2xl shadow-black">
        
        {/* Subtle orange-amber cosmic edge bleed background lines representing audio signals */}
        <div className="absolute top-[5%] left-0 w-px h-[90%] bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
        <div className="absolute top-[5%] right-0 w-px h-[90%] bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />

        {/* Section 1: Hero Section */}
        <Hero />

        {/* Section 2: App UI Showcase */}
        <AppShowcase />

        {/* Section 3: "Hear the color" Section */}
        <HearTheColor />

        {/* Section 4: Feature Visuals Grid */}
        <FeatureGrid />

        {/* Section 5: Customer Logos (Marquee) */}
        <LogoMarquee />

        {/* Section 6: Interactive Demo ("Hearing is believing") */}
        <InteractiveDemos />

        {/* Section 7: Integrations Section */}
        <Integrations />

        {/* Section 8: Feature Details */}
        <FeaturesList />

        {/* Section 9: Testimonial Section */}
        <TestimonialSection />

        {/* Section 10: Bottom CTA & Footer Section */}
        <BottomCTA />

      </div>
    </div>
  );
}
