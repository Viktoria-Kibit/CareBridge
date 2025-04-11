import React from 'react';
import PetStories from '../../components/PetStories/PetStories';  // імпортуемо компонент
import AdCard from "../../components/AdCard/AdCard";
import HeroSection from "../../components/HomePageComponents/HeroSection/HeroSection";
import FeaturesSection from "../../components/HomePageComponents/FeaturesSection/FeaturesSection";

const Home = () => {
  return (
    <div>

      <h1>Welcome to the Home page</h1>
      <PetStories />  {/* Вставляемо компонент PetStories */}
      <HeroSection />
      <FeaturesSection />
      <div className="min-h-screen bg-gradient-to-br from-teal-200 to-blue-300 flex items-center justify-center">
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
          <h1 className="text-3xl font-bold text-teal-600 mb-4">
            Tailwind працює! 🎉
          </h1>
          <p className="text-gray-600">
            Якщо бачиш гарну стилізовану карточку — все ок ✅
          </p>
        </div>
      </div>

    </div>
  );
};

export default Home;
