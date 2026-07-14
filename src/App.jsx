import { useState } from "react";
import SiteNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import CultCarousel from "./components/apple-cards-carousel-demo";
import FeaturesSectionDemo from "./components/features-section-demo-3";
import WhySection from "./components/WhySection";
import CultpassPlans from "./components/CultpassPlans";
import WellnessHub from "./components/WellnessHub";
import Footer from "./components/Footer";
import LoginPopup from "./components/LoginPopup";

export default function App() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="relative w-full">
      <SiteNavbar onLoginOpen={() => setLoginOpen(true)} />
      <Hero />
      <CultCarousel />
      <FeaturesSectionDemo />
      <WhySection />
      <CultpassPlans />
      <WellnessHub />
      <Footer />
      <LoginPopup open={loginOpen} onOpenChange={setLoginOpen} />
    </div>
  );
}
