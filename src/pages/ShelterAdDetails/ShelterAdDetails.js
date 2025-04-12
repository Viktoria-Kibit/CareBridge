import React, { useState } from 'react';
import "./ShelterAdDetails.css";
import photo from '../../assets/cat_image2.png'
import fem from '../../assets/female-symbol.png';
import male from '../../assets/male-symbol.png';
import saved from '../../assets/saved-icon-big.png';
import close from '../../assets/close-icon.png';

const ShelterAdDetails = ({animal, shelter}) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      alert(`Повідомлення надіслано: "${message}"`);
      setMessage('');
    }
  };

  return (
    <div className="animal-full-card">
      <div className='animal-photo-container'>
        <img src={photo} alt={animal.name} className="animal-photo" />
      </div>
      <div className="animal-details">
        <h2 className="animal-name">
          {animal.name}
          {animal.sex === 'female' ? <img src={fem} alt="female"className="sex"></img> : <img src={male} alt="male"className="sex"></img>}
          {/* <span className="icon">{animal.icon}</span> */}
        </h2>
        <p><strong>Вік:</strong> {animal.age}</p>
        <p><strong>Стан здоров’я:</strong> {animal.health}</p>
        <p><strong>Порода:</strong> {animal.breed}</p>
        <p><strong>Стерилізований:</strong> {animal.sterilized ? 'Так' : 'Ні'}</p>
        <p className="description">{animal.description}</p>
      </div>

      <div className="shelter-section">
        <h3>Притулок: {shelter.name}</h3>
        <p><strong>Рейтинг:</strong> {shelter.rating}</p>
        <p><strong>Контакти:</strong></p>
        <ul>
          <li><a href={`mailto:${shelter.email}`}>{shelter.email}</a></li>
          <li><a href={`tel:${shelter.phone}`}>{shelter.phone}</a></li>
        </ul>

        <div className="message-box">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Напишіть повідомлення притулку..."
          />
          <button onClick={handleSend}>Надіслати</button>
        </div>
      </div>

      <div className="btn-n-icon">
        <img src={close} alt='close' className='close-btn'></img>
        <button className="guardian-btn">Стати опікуном</button>
        <img src={saved} alt='save' className='save-btn'></img>
      </div>
    </div>
  );
};
export default ShelterAdDetails;
