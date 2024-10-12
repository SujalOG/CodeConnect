import React from "react";
import HomeNavbar from "./components/HomeNavbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";

import WorkFlow from "./components/WorkFlow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import About from "./components/About";

const HomeMain = () => {
  return (
    <>
      <HomeNavbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <About />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default HomeMain;
