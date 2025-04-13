import React from 'react';
import './ShelterProfile.css';
import photo from '../../assets/cat_image2.png'
import star from '../../assets/star-icon.png'

export default function ShelterProfile({ shelter })
{
  return (
    <div className="shelter-profile">
      <div className="shelter-info">
        <img className="shelter-photo" src={photo} alt="Фото shelter" />
        <div className="shelter-details">

          <div className='shelter-name-div'>
            <span className='shelter-name'>{shelter.name}</span>
            <div className='rating-div'>
              <img src={star} alt='rating' className='rating-icon'></img>
              <span className='rating-num'>{shelter.rating}</span>
            </div>
          </div>
          <div className='animals-amount-div'>
            <p><strong>Врятовано тварин:</strong> {shelter.savedAnimalsCount}</p>
            <p><strong>Кількість тварин у притулку:</strong> {shelter.currentAnimalsAtShelterCount}</p>
          </div>

          <div className='descriotion1'>
          <div>🐾 Лапки Надії - Притулок для Тих, Хто Чекає Дому 🏡 </div>
          <div>Ми — маленький, але щирий куточок турботи, де кожна тваринка отримує шанс на друге життя.</div>
          <div>🐶🐱 Рятуємо, лікуємо, любимо й шукаємо найкращих людей для наших хвостатих друзів.</div>
          <div>🤝 Хочеш допомогти? Приходь в гості, стань волонтером, подаруй другий шанс - всього один дім змінює життя.</div>
          <div>💌 Напиши нам</div>
          <p><strong>Контакти:</strong></p>
          <ul>
            <li>Email: <a href={`mailto:${shelter.email}`}>{shelter.email}</a></li>
            <li>Телефон: <a href={`tel:${shelter.phone}`}>{shelter.phone}</a></li>
          </ul>
          <div>📢 Дивись історії наших Лапок нижче - можливо, твій найкращий друг уже чекає на тебе! 🐾</div>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className="shelter-ads">
        <h3>Наші тваринки:</h3>
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

        <hr></hr>
      <div className='donat-div'>
        <div className='description2'>
        <div><h2>Поділись серцем 🧡</h2></div>
        <div>У нашому притулку "Лапки Надії" є тваринки, які ще чекають свого постійного дому. Але ти вже сьогодні можеш стати для когось із них справжнім героєм – опікуном</div>
        <div>👣 Опіка – це турбота на відстані:</div>
        <div>Ти обираєш хвостатого друга, якому хочеш допомогти, і щомісяця підтримуєш його: їжа, лікування, комфортне місце у притулку — усе завдяки твоїй підтримці.</div>
        <div> 💌 Ми надсилатимемо тобі фото, історії, новини про твого підопічного. Ти можеш приїжджати в гості, гуляти з ним або просто знати — десь поруч є хвостик, якому ти даруєш шанс</div>
        <div>💳 Хочеш просто допомогти загалом? Будемо вдячні за будь-який донат — кожна гривня важлива! Разом ми можемо більше. Разом — ми надія для тих, хто не може сказати, але так сильно чекає добра</div>
        </div>
        <h3><br></br>Донати:</h3>
        <p>Зібрано: {shelter.donations} грн</p>

        <div className='donat-btn'>
          <button className='btn'>Надіслати донат</button>
          <button className='btn'>Стати опікуном</button>
        </div>
          </div>
          <hr></hr>

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

            <div className="review-form">
              <textarea placeholder="Напишіть ваш відгук..." rows={4} />
              <button>Надіслати відгук</button>
            </div>
        </div>
        
    </div>
  );
};
