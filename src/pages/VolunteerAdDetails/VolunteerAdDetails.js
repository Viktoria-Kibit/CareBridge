import React, { useState } from 'react';
import "./VolunteerAdDetails.css";
import photo from '../../assets/cat_image2.png'
import fem from '../../assets/female-symbol.png';
import male from '../../assets/male-symbol.png';
import saved from '../../assets/saved-icon-big.png';
import close from '../../assets/close-icon.png';

const VolunteerAdDetails = ({animal, volunteer}) => {
  return (
    <div className="animal-full-card">
      <div className='animal-photo-container'>
        <img src={photo} alt={animal.name} className="animal-photo" />
      </div>
      <div className="animal-details">
        <h2 className="animal-name">
          {animal.name}
          {animal.sex === 'female' ? <img src={fem} alt="female"className="sex"></img> : <img src={male} alt="male"className="sex"></img>}
        </h2>
        <p><strong>Приблизний вік:</strong> {animal.age}</p>
        <p><strong>Стан здоров’я:</strong> {animal.health}</p>
        <p className="description">{animal.description}</p>
      </div>

      <div className="volunteer-section">
        <p><strong>Контакти:</strong></p>
        <ul>
          <li><a href={`mailto:${volunteer.email}`}>{volunteer.email}</a></li>
          <li><a href={`tel:${volunteer.phone}`}>{volunteer.phone}</a></li>
        </ul>
      </div>

      <div className="btn-n-icon">
        <img src={close} alt='close' className='close-btn'></img>
        <button className="guardian-btn">Відгукнутись</button>
        <img src={saved} alt='save' className='save-btn'></img>
      </div>
    </div>
  );
};
export default VolunteerAdDetails;
