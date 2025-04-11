import React from "react";

import AdCard from "../../components/AdCard/AdCard";
import HeroSection from "../../components/HomePageComponents/HeroSection/HeroSection";
import FeaturesSection from "../../components/HomePageComponents/FeaturesSection/FeaturesSection";
import AboutPlatform from "../../components/HomePageComponents/AboutPlatform/AboutPlatform";
import NewsSection from "../../components/HomePageComponents/NewsSection/NewsSection";
import FormSect from "../../components/AddAdForm/AddAdForm";

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
