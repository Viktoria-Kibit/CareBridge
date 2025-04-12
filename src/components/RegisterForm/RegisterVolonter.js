import React, { useState } from "react";
import styles from "./Register.module.css";
import { FaGoogle, FaFacebook } from "react-icons/fa";

function VolunteerLogin({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = () => {
    console.log("Email:", email);
    console.log("Пароль:", password);
  };

  return (
    <div className={styles.modalVolonter}>
      <button onClick={onClose} className={styles.closeButton}>
        ×
      </button>

      <h2 className={styles.title}>Реєстрація</h2>

      <p className={styles.Text}>Адреса електронної пошти:</p>
      {/* Поле email */}
      <input
        className={styles.inputField}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <p className={styles.Text}>Логін:</p>
      {/* Поле login */}
      <input
        className={styles.inputField}
        type="login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <br />
      <p className={styles.Text}>Пароль:</p>
      {/* Поле пароль */}
      <input
        className={styles.inputField}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <p className={styles.Text}>Пароль:</p>
      {/* Номер телефону */}
      <input
        className={styles.inputField}
        type="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <br />

      {/* Кнопка входу */}
      <button onClick={handleSubmit} className={styles.roleButton}>
        Продовжити
      </button>

      {/* посилання на реэстрацію */}
      <p>
        Уже маєте обліковий запис?{" "}
        <button onClick={() => alert("Переход до реєстрації")}> Увійти</button>
      </p>

      <div className={styles.divider}>
        <label className={styles.line}></label>
        <label className={styles.orText}>Або</label>
        <label className={styles.line}></label>
      </div>
      <button
        className={styles.buttonContainer}
        onClick={() => alert("Google login")}
      >
        <FaGoogle />
        <span>Продовжити з Гугл</span>
      </button>
      <button
        className={styles.buttonContainer}
        onClick={() => alert("Facebook login")}
      >
        <FaFacebook />
        <span>Продовжити з Фейсбук</span>
      </button>
    </div>
  );
}

export default VolunteerLogin;
