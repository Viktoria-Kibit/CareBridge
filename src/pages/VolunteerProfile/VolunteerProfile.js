import React from 'react';
import './VolunteerProfile.css';

export default function VolunteerProfile({ volunteer })
{
  return (
    <div className="volunteer-profile">
      <div className="volunteer-info">
        <img className="volunteer-photo" src={volunteer.photo} alt="Фото волонтера" />
        <div className="volunteer-details">
          <h3>{volunteer.name}</h3>
          <p><strong>Контакти:</strong></p>
          <ul>
            <li>Email: <a href={`mailto:${volunteer.email}`}>{volunteer.email}</a></li>
            <li>Телефон: <a href={`tel:${volunteer.phone}`}>{volunteer.phone}</a></li>
          </ul>
          <p><strong>Врятовано тварин:</strong> {volunteer.savedAnimalsCount}</p>
        </div>
      </div>

      <div className="volunteer-ads">
        <h3>Оголошення:</h3>
        <div className="ads-list">
          {volunteer.ads.length === 0 ? (
            <p>Поки що немає оголошень</p>
          ) : (
            volunteer.ads.map((ad, index) => (
              <div key={index} className="ad-card-wrapper">{ad}</div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
