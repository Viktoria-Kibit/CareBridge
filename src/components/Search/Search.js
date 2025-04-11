import React, { useState } from 'react';
import filter from '../../assets/filter-icon.png';
import "./Search.css"

function  Search () {

    const [showAnimalOrShelterDropdown, setShowAnimalOrShelterDropdown] = useState(false);
    const [firstChoice, setFirstChoice] = useState('');
    const [secondChoice, setSecondChoice] = useState('');

    const WhenImageClick = () => {
        {showAnimalOrShelterDropdown === false ? setShowAnimalOrShelterDropdown(true): setShowAnimalOrShelterDropdown(false)};
        setFirstChoice('');
        setSecondChoice('');
    };

    const WhenAnimalOrShelterSelected = (e) => {
        setFirstChoice(e.target.value);
        setSecondChoice('');
    };

    const WhenSelectedAnimalOrShelterType = (e) => {
        setSecondChoice(e.target.value);
    };

    return (
        <div className="menu_container">
        <img 
            src={filter} 
            alt="clickable" 
            onClick={WhenImageClick} 
            className="clickable_image" 
        />

        {showAnimalOrShelterDropdown && (
            <select onChange={WhenAnimalOrShelterSelected} value={firstChoice}>
            <option value="">Оберіть категорію</option>
            <option value="animals">Тварини</option>
            <option value="shelters">Притулки</option>
            </select>
        )}

        {firstChoice === 'animals' && (
            <select onChange={WhenSelectedAnimalOrShelterType} value={secondChoice}>
            <option value="">Оберіть тип</option>
            <option value="cats">Коти</option>
            <option value="dogs">Собаки</option>
            <option value="parrots">Папуги</option>
            <option value="hamsters">Хом'ячки</option>
            <option value="other animal">Інше</option>
            </select>
        )}

        {firstChoice === 'shelters' && (
            <select onChange={WhenSelectedAnimalOrShelterType} value={secondChoice}>
            <option value="">Оберіть тип закладу</option>
            <option value="shelter">Притулок</option>
            <option value="vet">Ветклініка</option>
            <option value="breed">Розплідник</option>
            <option value="other">Інше</option>
            </select>
        )}

        {secondChoice && (
            <div className="menu_box">
            {(secondChoice === 'cats' || secondChoice === 'dogs' || secondChoice === 'parrots' || secondChoice === 'hamsters' || secondChoice === 'other animal') && 
            <p>Налаштування тварин</p>}

            {(secondChoice === 'shelter' || secondChoice === 'vet' || secondChoice === 'breed' || secondChoice === 'other') && 
            <p>Налаштування закладів</p>}
            </div>
        )}
        </div>
    )
};

export default Search;
