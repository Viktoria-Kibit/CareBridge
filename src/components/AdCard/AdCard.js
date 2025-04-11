import React from "react";
import "./AdCard.css";
import fem from '../../assets/female-symbol.png';
import male from '../../assets/male-symbol.png';
import cat from '../../assets/cat-symbol.png';
import photo from '../../assets/cat_image.png';

function  AdCard ({ name, sex, age, visiting, rate }) {
  return (
    <>
      <div className= {rate===5? "golden_card":"card"}>
        <div>
            <img src={photo} alt="pet" className="photo"></img>
            <div className="pet_header">
                <p className="pet_name">{name}</p>
                <p className="icons">
                    {sex === 'female' ? <img src={fem} alt="female"className="sex"></img> : <img src={male} alt="male"className="sex"></img>}
                
                    <img src={cat} alt="cat"className="category"></img>
                </p>
            </div>
        </div>
        <div className="info">
            <p className="age">{age} роки</p>
        </div>
        <button className="view">Переглянути</button>
        </div>
    </>
    );
};

export default AdCard;
