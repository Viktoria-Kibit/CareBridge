import React, { useState } from 'react';
import "./AddRequestForm.css";
function AddRequestForm() {
    const [formData, setFormData] = useState({
        photo: null,
        name: '',
        age: '',
        health: 'healthy',
        category: "other",
        description: ''
      });
    
      const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: type === 'file' ? files[0] : value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
          photo: null,
          name: '',
          age: '',
          health: 'healthy',
          description: ''
        });
      };
    
      return (
        <form className="animal-form" onSubmit={handleSubmit}>
          <h2><b>Додати запит</b></h2>
          <label>Вік (у роках):</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
    
          <label>Стан здоров’я:</label>
          <select name="health" value={formData.health} onChange={handleChange}>
            <option value="healthy">Здоровий</option>
            <option value="average">Трохи хворий</option>
            <option value="sick">Значні хвороби/травми</option>
          </select>

          <label>Категорія:</label>
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="cat">Кіт</option>
            <option value="dog">Пес</option>
            <option value="parrot">Папуга</option>
            <option value="hamster">Хом'як</option>
            <option value="other">Інша тварина</option>
          </select>
    
          <label>Опис:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} rows="4" />
    
          <button className='accept'>Надіслати запит</button>
        </form>
      );
}
export default AddRequestForm;