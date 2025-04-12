import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import googleLogo from '../../assets/GoogleLogo.png';
import FacebookLogo from '../../assets/FacebookLogo.png';


function LoginForm() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleLogin = (e) => {
    e.preventDefault(); 
    console.log('Логін:', email);
    console.log('Пароль:', password);
  };
  return (
    <div className = {styles.formContainer}>
      <h2 className={styles.title}>Вхід</h2>

      <form onSubmit={handleLogin}>
        {/* Поле для e-mail/логіна */}
        <div>
          <label className={styles.label}>Email:</label><br />
          <input className = {styles.input}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Поле для пароля */}
        <div>
          <label className={styles.label}>Пароль:</label><br />
          <input className = {styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <br />

        {/* Кнопка "Увійти" */}
        <button type="submit" className={styles.button}>Увійти</button>
      </form>

      <br />

      {/* Кнопки входу через соцмережі */}
      <button className={styles.socialButton} onClick={() => alert('Увійти через Google')}>
        <img src={googleLogo} alt="Google" className={styles.logo} />
        <span>Продовжити з Google</span> 
    </button>{' '}
      <button className={styles.socialButton} onClick={() => alert('Увійти через Facebook')}>
        <img src={FacebookLogo} alt="Facebook" className={styles.logo} />
        <span>Продовжити з Facebook</span> 
     </button>

      <br /><br />

      
    </div>
  );
}

export default LoginForm;