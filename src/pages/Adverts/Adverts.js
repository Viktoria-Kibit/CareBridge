import React from "react";
import CardCarousel from "../../components/CardCarousel/CardCarousel";
import FoundAnimalBanner from "../../components/AdvertsPageComponents/FoundAnimalBanner/FoundAnimalBanner";
import AdCard from "../../components/AdCard/AdCard";

const AdventsPage = () => {
  // Список карточок від притулків
  const shelterCards = [
    <AdCard
      key={1}
      type="shelter"
      name="Мурка"
      sex="female"
      age={2}
      rate={5}
    />,
    <AdCard key={2} type="shelter" name="Боні" sex="male" age={3} rate={4} />,
    <AdCard key={3} type="shelter" name="Рекс" sex="female" age={1} rate={3} />,
    <AdCard key={4} type="shelter" name="Айва" sex="male" age={4} rate={2} />,
    <AdCard key={5} type="shelter" name="Бекі" sex="female" age={5} rate={5} />,
    <AdCard key={6} type="shelter" name="Animal" sex="male" age={6} rate={4} />,
    <AdCard
      key={7}
      type="shelter"
      name="Мурка"
      sex="female"
      age={2}
      rate={5}
    />,
    <AdCard key={8} type="shelter" name="Боні" sex="male" age={3} rate={4} />,
    <AdCard key={9} type="shelter" name="Рекс" sex="female" age={1} rate={3} />,
    <AdCard key={10} type="shelter" name="Айва" sex="male" age={4} rate={2} />,
    <AdCard
      key={11}
      type="shelter"
      name="Бекі"
      sex="female"
      age={5}
      rate={5}
    />,
    <AdCard
      key={12}
      type="shelter"
      name="Animal"
      sex="male"
      age={6}
      rate={4}
    />,
  ];

  // Список карточок від волонтерів
  const volunteerCards = [
    <AdCard key={1} name="FAnimal 1" sex="female" type={""} city={"Kyiv"} />,
    <AdCard key={2} name="FAnimal 2" sex="male" type={""} city={"Kyiv"} />,
    <AdCard key={3} name="FAnimal 3" sex="female" type={""} city={"Kyiv"} />,
    <AdCard key={4} name="FAnimal 4" sex="male" type={""} city={"Kyiv"} />,
    <AdCard key={5} name="FAnimal 5" sex="female" type={""} city={"Kyiv"} />,
    <AdCard key={6} name="FAnimal 6" sex="male" type={""} city={"Kyiv"} />,
    <AdCard key={7} name="FAnimal 1" sex="female" type={""} city={"Kyiv"} />,
    <AdCard key={8} name="FAnimal 2" sex="male" type={""} city={"Kyiv"} />,
    <AdCard key={9} name="FAnimal 3" sex="female" type={""} city={"Kyiv"} />,
    <AdCard key={10} name="FAnimal 4" sex="male" type={""} city={"Kyiv"} />,
    <AdCard key={11} name="FAnimal 5" sex="female" type={""} city={"Kyiv"} />,
    <AdCard key={12} name="FAnimal 6" sex="male" type={""} city={"Kyiv"} />,
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
