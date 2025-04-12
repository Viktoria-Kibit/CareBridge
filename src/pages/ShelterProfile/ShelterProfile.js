import React from 'react';
import './ShelterProfile.css';

export default function ShelterProfile({ shelter })
{
  return (
    <div className="shelter-profile">
      <div className="shelter-info">
        <img className="shelter-photo" src={shelter.photo} alt="Фото shelter" />
        <div className="shelter-details">
          <h3>{shelter.name}</h3>
          <p><strong>Рейтинг:</strong> {shelter.rating}</p>
          <p><strong>Контакти:</strong></p>
          <ul>
            <li>Email: <a href={`mailto:${shelter.email}`}>{shelter.email}</a></li>
            <li>Телефон: <a href={`tel:${shelter.phone}`}>{shelter.phone}</a></li>
          </ul>
          <p><strong>Врятовано тварин:</strong> {shelter.savedAnimalsCount}</p>
        </div>
      </div>

      <div className="shelter-reviews">
        <h3>Відгуки:</h3>
        <div className="reviews-list">
          {shelter.reviews.length === 0 ? (
            <p>Поки що немає відгуків</p>
          ) : (
            shelter.reviews.map((review, index) => (
              <div key={index} className="review-card">
                <p><strong>{review.author}</strong>: {review.comment}</p>
              </div>
            ))
          )}
        </div>
        <h3>Донати:</h3>
        <p>Зібрано: {shelter.donations} грн</p>
      </div>

      <div className="shelter-ads">
        <h3>Оголошення:</h3>
        <div className="ads-list">
          {shelter.ads.length === 0 ? (
            <p>Поки що немає оголошень</p>
          ) : (
            shelter.ads.map((ad, index) => (
              <div key={index} className="ad-card-wrapper">{ad}</div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
