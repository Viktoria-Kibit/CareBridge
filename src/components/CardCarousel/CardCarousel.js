import React, { useState } from 'react';
import './CardCarousel.css';

const CardCarousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 5;
  const maxIndex = cards.length - visibleCards;

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="carousel-wrapper">
      <button className="nav-button left" onClick={prevSlide}>вліво</button>

      <div className="carousel-container">
      <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
        >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`carousel-card ${index === currentIndex ? 'active' : ''}`}
          >
            {card}
          </div>
        ))}
      </div>
      </div>
      <button className="nav-button right" onClick={nextSlide}>вправа</button>
    </div>
  );
};

export default CardCarousel;