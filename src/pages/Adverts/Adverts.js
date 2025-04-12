import React from "react";
import CardCarousel from "../../components/CardCarousel/CardCarousel";
import FoundAnimalBanner from "../../components/AdvertsPageComponents/FoundAnimalBanner/FoundAnimalBanner";
import AdCard from "../../components/AdCard/AdCard";

const AdventsPage = () => {
  // Список карточок від притулків з використанням компонента AdCard
  const shelterCards = [
    <AdCard key={1} name="Animal 1" sex="female" age={2} rate={5} />,
    <AdCard key={2} name="Animal 2" sex="male" age={3} rate={4} />,
    <AdCard key={3} name="Animal 3" sex="female" age={1} rate={3} />,
    <AdCard key={4} name="Animal 4" sex="male" age={4} rate={2} />,
    <AdCard key={5} name="Animal 5" sex="female" age={5} rate={5} />,
    <AdCard key={6} name="Animal 6" sex="male" age={6} rate={4} />,
  ];

  // Список карточок від волонтерів з використанням компонента AdCard
  const volunteerCards = [
    <AdCard key={1} name="FAnimal 1" sex="female" age={1} rate={4} />,
    <AdCard key={2} name="FAnimal 2" sex="male" age={2} rate={3} />,
    <AdCard key={3} name="FAnimal 3" sex="female" age={3} rate={2} />,
    <AdCard key={4} name="FAnimal 4" sex="male" age={4} rate={5} />,
    <AdCard key={5} name="FAnimal 5" sex="female" age={5} rate={5} />,
    <AdCard key={6} name="FAnimal 6" sex="male" age={6} rate={4} />,
  ];

  return (
    <div>
      {/* Карусель з оголошеннями від притулків */}
      <section className="py-16">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Знайомтесь — ці тварини чекають на вас
        </h2>
        <CardCarousel cards={shelterCards} />
      </section>

      {/* Карусель з оголошеннями від волонтерів */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Потребують прихистку
        </h2>
        <CardCarousel cards={volunteerCards} />
      </section>

      {/* FoundAnimalBanner */}
      <FoundAnimalBanner />
    </div>
  );
};

export default AdventsPage;
