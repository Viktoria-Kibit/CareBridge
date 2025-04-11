import React from "react";
import { useNavigate } from "react-router-dom";

export default function AboutPlatform() {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h3 className="text-2xl font-medium mb-6">
        <span className="text-orange-500 font-semibold">Про платформу</span>
      </h3>

      <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
        Наша платформа — це онлайн-сервіс, створений для об'єднання небайдужих
        людей, волонтерів, зоозахисних організацій і власників тварин з метою
        надання допомоги безпритульним, хворим або покинутим тваринам.
      </p>

      <button
        onClick={() => navigate("/about")}
        className="px-6 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition duration-300"
      >
        Дізнатись більше
      </button>
    </section>
  );
}
