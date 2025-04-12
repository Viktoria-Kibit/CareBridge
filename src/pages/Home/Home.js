import React, { useState } from "react";

import HeroSection from "../../components/HomePageComponents/HeroSection/HeroSection";
import FeaturesSection from "../../components/HomePageComponents/FeaturesSection/FeaturesSection";
import AboutPlatform from "../../components/HomePageComponents/AboutPlatform/AboutPlatform";
import NewsSection from "../../components/HomePageComponents/NewsSection/NewsSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <AboutPlatform />
      <NewsSection />
    </div>
  );
};

export default Home;
