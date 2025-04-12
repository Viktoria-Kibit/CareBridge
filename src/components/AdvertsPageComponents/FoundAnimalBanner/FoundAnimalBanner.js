import React from "react";
import { useNavigate } from "react-router-dom";

export default function FoundAnimalBanner() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/report-animal"); // або твій шлях на сторінку подання заявки
  };

  return (
    <section className="bg-[#f5f5f5] text-center py-12 px-4 rounded-lg shadow-sm">
      <h2 className="text-2xl md:text-3xl font-semibold mb-1">
        Знайшли тварину на вулиці<span className="text-black">?</span>
      </h2>
      <p className="text-lg font-medium mb-4 text-gray-600">
        Допоможемо разом<span className="text-black">!</span>
      </p>

      <button
        onClick={handleClick}
        className="bg-orange-200 hover:bg-orange-300 text-black font-semibold py-2 px-6 rounded-full mb-6 transition"
      >
        Подати заявку
      </button>

      <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Ми організовуємо пошук тимчасових домівок, ветеринарну допомогу та
        забезпечення кормом. <br />
        Ваше повідомлення може стати першим кроком до нової надії для тварини!
      </p>
    </section>
  );
}
