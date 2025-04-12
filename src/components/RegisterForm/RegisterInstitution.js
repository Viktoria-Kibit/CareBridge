import React, { useState } from 'react';
import styles from './Register.module.css';

function InstitutionReg({ onClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [institution, setInstitution] = useState('');

    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');

    const [contactPerson, setContactPerson] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    const handleSubmit = () => {
        console.log('Email:', email);
        console.log('Пароль:', password);
        console.log('Місто:', city);
        console.log('Вулиця:', street);
        console.log('Номер будинку:', houseNumber);
        console.log('Контактна особа:', contactPerson);
        console.log('Комер телефону:', contactNumber);
    };

    return (
        <div className={styles.modalVolonter}>
            <button onClick={onClose} className={styles.closeButton}>×</button>
            <h2 className={styles.title}>Реєстрація</h2>

            <p className={styles.Text}>Адреса електронної пошти:</p> 
            <input
                className={styles.inputField}
                type="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <p className={styles.Text}>Пароль:</p> 
            <input
                className={styles.inputField}
                type="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <p className={styles.Text}>Назва закладу:</p> 
            <input
                className={styles.inputField}
                type="Institution"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
            />
            <br />

            <h2 className={styles.title}>Категорія:</h2>
            <div className={styles.buttonRow}>
                <button className={styles.buttonContainer2} onClick={() => alert('Google login')}>
                    <span>Притулок</span>
                </button>
                <button className={styles.buttonContainer2} onClick={() => alert('Facebook login')}>
                    <span>Ветклініка</span>
                </button>
                <button className={styles.buttonContainer2} onClick={() => alert('Facebook login')}>
                    <span>Розплідник</span>
                </button>
            </div>

            <h2 className={styles.title}>Адреса:</h2>
            <div className={styles.formContainer}>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Місто:</label>
                    <input 
                        type="City" 
                        className={styles.inputField} 
                        value={city} 
                        onChange={(e) => setCity(e.target.value)} 
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Вулиця:</label>
                    <input 
                        type="Street" 
                        className={styles.inputField} 
                        value={street} 
                        onChange={(e) => setStreet(e.target.value)} 
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Номер будинку:</label>
                    <input 
                        type="House number" 
                        className={styles.inputField} 
                        value={houseNumber} 
                        onChange={(e) => setHouseNumber(e.target.value)} 
                    />
                </div>
            </div>

            <p className={styles.Text}>Контактна особа:</p> 
            <input
                className={styles.inputField}
                type="Contact person"
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
            />
            <br />

            <p className={styles.Text}>Номер контактної особи:</p> 
            <input
                className={styles.inputField}
                type="Phone number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
            />
            <br />

            <button className={styles.roleButton} onClick={() => alert('Google login')}>
                <span>Продовжити</span> 
            </button>
        </div>
    );
}

export default InstitutionReg;
