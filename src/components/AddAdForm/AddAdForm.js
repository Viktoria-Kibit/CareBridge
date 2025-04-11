import React, { useState } from 'react';
import "./AddAdForm.css";
function AddAdForm() {
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
          <h2><b>Додати оголошення</b></h2>
    
          <label>Фото тварини:</label>
          <input type="file" name="photo" accept="image/*" onChange={handleChange} />
    
          <label>Ім’я:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
    
          <label>Вік (у роках):</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
    
          <label>Стан здоров’я:</label>
          <select name="health" value={formData.health} onChange={handleChange}>
            <option value="healthy">Здоровий</option>
            <option value="average">Трохи хворий</option>
            <option value="sick">Значні хвороби/травми</option>
          </select>

          <label>Категорія:</label>
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="cat">Кіт</option>
            <option value="dog">Пес</option>
            <option value="parrot">Папуга</option>
            <option value="hamster">Хом'як</option>
            <option value="other">Інша тварина</option>
          </select>
    
          <label>Опис:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} rows="4" />
    
          <button type="submit">Додати оголошення</button>
        </form>
      );
}
export default AddAdForm;