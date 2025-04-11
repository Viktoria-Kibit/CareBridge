import React from "react";
import { useNavigate } from "react-router-dom";
import feature1 from "../../../assets/feature-section-image-1.png";
import feature2 from "../../../assets/feature-section-image-2.png";
import feature3 from "../../../assets/feature-section-image-3.png";

export default function FeaturesSection() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Знайти друга",
      text: "Ці тваринки шукають люблячу родину!",
      img: feature1,
      link: "/search",
    },
    {
      title: "Pet stories",
      text: "Радісні історії хвостиків, які знайшли новий дім!",
      img: feature2,
      link: "/stories",
    },
    {
      title: "У пошуках затишку",
      text: "Інші хвостики, яких потрібно врятувати!",
      img: feature3,
      link: "/rescue",
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h3 className="text-2xl font-medium mb-10">
        <span className="text-orange-500 font-semibold">Прихисти тваринку</span>
        <br />
        Їм час знайти дім
      </h3>

      {/* Центруємо блоки та зменшуємо відстань між ними */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 justify-items-center">
        {features.map((f, i) => (
          <div
            key={i}
            onClick={() => navigate(f.link)}
            className="flex flex-col items-center cursor-pointer group transition duration-300"
          >
            <img
              src={f.img}
              alt={f.title}
              className="w-40 h-40 rounded-full object-cover shadow-lg mb-4 transform group-hover:scale-110 transition duration-300"
            />
            <h4 className="text-xl font-medium group-hover:underline transition duration-300">
              {f.title}
            </h4>
            <p className="text-sm mt-2">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
