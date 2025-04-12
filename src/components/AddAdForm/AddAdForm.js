import React, { useState } from 'react';
import "./AddAdForm.css";
function AddAdForm({ old_name, old_age, old_health, old_category, old_description}) {
  const isEditMode = !!old_name;
    const [formData, setFormData] = useState({
        photo: null,
        name: '',
        age: '',
        health: 'healthy',
        category: "other",
        description: ''
      });
      if(isEditMode){
        formData.name = old_name;
        formData.age = old_age;
        formData.health = old_health;
        formData.category = old_category;
        formData.description = old_description;
      }
    
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
          <h2><b>{isEditMode?"Редагувати оголошення":"Додати оголошення"}</b></h2>
    
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
    
          <button type="submit" className='accept'>{isEditMode ? 'Зберегти зміни' : 'Додати оголошення'}</button>
          {isEditMode?<button className='reject'>Відхилити зміни</button>:<></>}
        </form>
      );
}
export default AddAdForm;