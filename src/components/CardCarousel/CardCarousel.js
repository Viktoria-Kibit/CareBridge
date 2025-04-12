import React, { useState } from "react";
import left_icon from "../../assets/arrow-left.png";
import right_icon from "../../assets/arrow-right.png";

const CardCarousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Адаптивна кількість видимих карток
  const getVisibleCards = () => {
    if (window.innerWidth >= 1024) {
      return 5; // Для великих екранів
    } else if (window.innerWidth >= 768) {
      return 3; // Для середніх екранів
    } else {
      return 1; // Для малих екранів
    }
  };

  const visibleCards = getVisibleCards();

  // Обчислюємо максимальний індекс для каруселі, щоб йти по колу
  const maxIndex = cards.length;

  // Функція для переміщення вперед
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % maxIndex);
  };

  // Функція для переміщення назад
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + maxIndex) % maxIndex);
  };

  return (
    <div className="relative w-full max-w-[900px] mx-auto">
      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 z-10 bg-transparent hover:scale-105 transition"
      >
        <img src={left_icon} alt="Вліво" className="w-8 h-8" />
      </button>

      {/* Carousel */}
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-300 gap-6"
          style={{
            transform: `translateX(-${
              (currentIndex % maxIndex) * (100 / visibleCards)
            }%)`,
          }}
        >
          {cards.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-[calc(100%/5)] px-2">
              {card}
            </div>
          ))}
        </div>
      </div>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-[-70px] top-1/2 transform -translate-y-1/2 z-10 bg-transparent hover:scale-105 transition"
      >
        <img src={right_icon} alt="Вправо" className="w-8 h-8" />
      </button>
    </div>
  );
};

export default CardCarousel;
