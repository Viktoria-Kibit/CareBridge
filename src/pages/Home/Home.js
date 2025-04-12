import React, {useState} from 'react';
import Register from '../../components/RegisterForm/Register';
import RegisterVolonter from '../../components/RegisterForm/RegisterVolonter';
import RegisterInstitution from '../../components/RegisterForm/RegisterInstitution';

import AdCard from "../../components/AdCard/AdCard";
import HeroSection from "../../components/HomePageComponents/HeroSection/HeroSection";
import FeaturesSection from "../../components/HomePageComponents/FeaturesSection/FeaturesSection";
import AboutPlatform from "../../components/HomePageComponents/AboutPlatform/AboutPlatform";
import NewsSection from "../../components/HomePageComponents/NewsSection/NewsSection";

const Home = () => {
  return (
    <div>

      <h1>Welcome to the Home page</h1>
      <HeroSection />
      <FeaturesSection />
      <AboutPlatform />
      <NewsSection />
    </div>
  );
};

export default Home;
