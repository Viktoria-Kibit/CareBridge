import React from "react";

import AdCard from "../../components/AdCard/AdCard";
import HeroSection from "../../components/HomePageComponents/HeroSection/HeroSection";
import FeaturesSection from "../../components/HomePageComponents/FeaturesSection/FeaturesSection";
import AboutPlatform from "../../components/HomePageComponents/AboutPlatform/AboutPlatform";
import NewsSection from "../../components/HomePageComponents/NewsSection/NewsSection";
import FormSect from "../../components/AddAdForm/AddAdForm";
import Carousel from "../../components/CardCarousel/CardCarousel";
import VolunteerProfile from "../VolunteerProfile/VolunteerProfile";

AdCard({})
const cards = [
  <AdCard name={"name1"} sex={"female"}  age={1} visiting={20} rate={3.1} />,
  <AdCard name={"name2"} sex={"female"}  age={2} visiting={10} rate={3.5} />,
  <AdCard name={"name3"} sex={"male"}  age={1} visiting={4} rate={1.0} />,
  <AdCard name={"name4"} sex={"female"}  age={4} visiting={22} rate={5.0} />,
  <AdCard name={"name5"} sex={"female"}  age={4} visiting={22} rate={5.0} />,
  <AdCard name={"name6"} sex={"male"}  age={2} visiting={12} rate={1.0} />,
  <AdCard name={"name7"} sex={"female"}  age={4} visiting={24} rate={3.0} />,
  <AdCard name={"name8"} sex={"male"}  age={4} visiting={1} rate={4.0} />,
  <AdCard name={"name9"} sex={"female"}  age={5} visiting={99} rate={5.0} />
]


const volunteerData = {
  name: 'Олена Ковальчук',
  photo: '/images/volunteer-photo.jpg',
  email: 'olena@example.com',
  phone: '+380987654321',
  savedAnimalsCount: 34,
  ads: cards,
};

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <AboutPlatform />
      <NewsSection />
      {/* <Carousel cards={cards}/> */}
      <VolunteerProfile volunteer={volunteerData}/>
    </div>
  );
};

export default Home;
