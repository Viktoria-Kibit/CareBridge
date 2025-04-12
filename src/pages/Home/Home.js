import React from "react";

import AdCard from "../../components/AdCard/AdCard";
import HeroSection from "../../components/HomePageComponents/HeroSection/HeroSection";
import FeaturesSection from "../../components/HomePageComponents/FeaturesSection/FeaturesSection";
import AboutPlatform from "../../components/HomePageComponents/AboutPlatform/AboutPlatform";
import NewsSection from "../../components/HomePageComponents/NewsSection/NewsSection";
import FormSect from "../../components/AddAdForm/AddAdForm";
import Carousel from "../../components/CardCarousel/CardCarousel";

AdCard({})
const cards = [
  <AdCard name={"name1"} sex={"female"}  age={1} visiting={20} rate={3.1} />,
  <AdCard name={"name2"} sex={"female"}  age={2} visiting={10} rate={3.5} />,
  <AdCard name={"name3"} sex={"male"}  age={1} visiting={4} rate={1.0} />,
  <AdCard name={"name4"} sex={"female"}  age={4} visiting={22} rate={5.0} />
]

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <AboutPlatform />
      <NewsSection />
      <Carousel cards={cards}/>
    </div>
  );
};

export default Home;
