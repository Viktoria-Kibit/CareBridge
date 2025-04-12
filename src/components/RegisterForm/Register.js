import React from 'react';
import styles from './Register.module.css';
  import houseSign from '../../assets/HouseSign.png';
  import avatarSign from '../../assets/AvatarSign.png';

function Register({ onClose, onSelect }) {
  return (
   
    <div className={styles.modal}>
      <button onClick={onClose} className={styles.closeButton}>×</button>

      <h2 className={styles.title}>Реєстрація</h2>

      <button onClick={() => onSelect('volunteer')} className={styles.roleButton}>
        <img src={avatarSign} alt="Avatar" className={styles.logo} />
        Волонтер
      </button>
      <button onClick={() => onSelect('institute')} className={styles.roleButton}>
        <img src={houseSign} alt="House" className={styles.logo} />
        Заклад
      </button>
    </div>
  );
}
export default Register;