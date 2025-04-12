

import React, {useState} from 'react';
import Register from '../../components/RegisterForm/Register';
import RegisterVolonter from '../../components/RegisterForm/RegisterVolonter';
import RegisterInstitution from '../../components/RegisterForm/RegisterInstitution';



import PetStories from '../../components/PetStories/PetStories';  // імпортуемо компонент
import AdCard from "../../components/AdCard/AdCard";
import HeroSection from "../../components/HomePageComponents/HeroSection/HeroSection";
import FeaturesSection from "../../components/HomePageComponents/FeaturesSection/FeaturesSection";
import AboutPlatform from "../../components/HomePageComponents/AboutPlatform/AboutPlatform";
import NewsSection from "../../components/HomePageComponents/NewsSection/NewsSection";
import FormSect from "../../components/AddAdForm/AddAdForm";
import Carousel from "../../components/CardCarousel/CardCarousel";
import VolunteerProfile from "../VolunteerProfile/VolunteerProfile";
import ShelterProfile from "../ShelterProfile/ShelterProfile";
import AddRequestForm from '../../components/AddRequestForm/AddRequestForm';
import ShelterAdDetails from '../ShelterAdDetails/ShelterAdDetails';

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
  name: 'Олена Данченко',
  photo: '',
  email: 'danchenkoolena07@gmail.com',
  phone: '+380000000000',
  savedAnimalsCount: 3,
  ads: cards,
};

const shelterData = {
  name: "Щасливі лапки",
  photo: '',
  email: "shelter@gmail.com",
  phone: '+380000000000',
  rating: 4,
  savedAnimalsCount: 57,
  reviews: [
    {
      author: "Тарас Шевченко",
      comment: "Який прерасний притулок! Усі тваринки чистенькі та доглянуті"
    },
    {
      author: "Смялко Владислав",
      comment: "Притулок Щасиві лапки врятував стільки котиків! Вони мої улюблені тваринки. Я взяв собі з притулку Рижика та дуже щасливий"
    }
  ],
  ads: cards,
  donations: 3600
}
const card = <AdCard name={"name1"} sex={"female"}  age={1} visiting={20} rate={3.1} />;
const animal = { ...card.props, health: "average", breed: "som breed", description: "some desc"};


const Home = () => {
  return (
    <div>

      <h1>Welcome to the Home page</h1>
     {/*<PetStories />*/}   {/* Вставляемо компонент PetStories*/}
      <HeroSection />
      <FeaturesSection />
      <AboutPlatform />
      <NewsSection />
      {/* <Carousel cards={cards}/> */}
      {/* <VolunteerProfile volunteer={volunteerData}/> */}
      {/* <ShelterProfile shelter={shelterData} /> */}
      {/* <AddRequestForm /> */}
      {/* <ShelterAdDetails animal={animal} shelter={shelterData}/> */}
    </div>
  );
};
/*
const Home = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleSelect = (role) => {
    setSelectedRole(role);
    console.log('Вибрано:', role);
  };
  const handleClose = () => {
    setSelectedRole(null);
  };
  return (
    <div>
     
      {!selectedRole && (
        <Register onSelect={handleSelect} onClose={handleClose} />
      )}

      {selectedRole === 'volunteer' && (
        <RegisterVolonter onClose={handleClose} />
      )}

      {selectedRole === 'institute' && (
        <RegisterInstitution onClose={handleClose} />
      )}
    </div>
  );
};


*/

export default Home;
