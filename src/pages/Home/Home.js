
import React, { useState } from "react";

import HeroSection from "../../components/HomePageComponents/HeroSection/HeroSection";
import FeaturesSection from "../../components/HomePageComponents/FeaturesSection/FeaturesSection";
import AboutPlatform from "../../components/HomePageComponents/AboutPlatform/AboutPlatform";
import NewsSection from "../../components/HomePageComponents/NewsSection/NewsSection";
import ShelterProfile from "../ShelterProfile/ShelterProfile";
import AdCard from "../../components/AdCard/AdCard";
const shelter = {
    name:"Лапки Надії",
    rating: 4.5,
    email: "Shelter@gmail.com",
    phone: "+380970000",
    savedAnimalsCount: 60,
    currentAnimalsAtShelterCount: 20,
    reviews : [
      { author: "WOW",
        comment: "Nice shelter" },
      { author: "Mom",
        comment:"I like this place" }
    ],
    donations: 9000,
    ads: [
      <AdCard type={"cat"} name={"Kitty"} age={2} sex={"female"} city={"Rivne"} rate={3} />
    ]
}
const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <AboutPlatform />
      <NewsSection />
      <ShelterProfile shelter={shelter}/>
    </div>
  );
};

export default Home;

