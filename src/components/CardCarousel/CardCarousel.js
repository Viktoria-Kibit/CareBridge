import React, { useState } from 'react';
import './CardCarousel.css';

const CardCarousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="carousel-wrapper">
      <button className="nav-button left" onClick={prevSlide}>вліво</button>

      <div className="carousel-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`carousel-card ${index === currentIndex ? 'active' : ''}`}
          >
            {card}
          </div>
        ))}
      </div>

      <button className="nav-button right" onClick={nextSlide}>вправа</button>
    </div>
  );
};

export default CardCarousel;