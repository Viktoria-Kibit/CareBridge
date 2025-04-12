import React from "react";
import fem from "../../assets/female-symbol.png";
import male from "../../assets/male-symbol.png";
import cat from "../../assets/cat-symbol.png";
import photo from "../../assets/cat_image.png";

function AdCard({ name, sex, age, visiting, rate }) {
  return (
    <div
      className={`w-full max-w-[150px] bg-white ${
        rate === 5 ? "border-2 border-yellow-400" : "border"
      } rounded-lg p-4 shadow-md text-center transition-transform transform hover:scale-105`}
    >
      <div>
        <img src={photo} alt="pet" className="w-full h-auto rounded-md" />
        <div className="pt-2 flex justify-start items-center">
          <p className="font-mono text-lg">{name}</p>
        </div>
      </div>
      <div className="mt-2 flex justify-start items-center">
        <p className="font-mono text-sm mr-2">{age} роки</p>
        <p className="flex">
          {sex === "female" ? (
            <img src={fem} alt="female" className="w-6 h-6" />
          ) : (
            <img src={male} alt="male" className="w-6 h-6" />
          )}
          <img src={cat} alt="cat" className="w-6 h-6 ml-1" />
        </p>
      </div>
      <button className="mt-4 bg-gray-400 hover:bg-gray-500 text-white py-1 px-3 rounded-md transition-all duration-200">
        Переглянути
      </button>
    </div>
  );
}

export default AdCard;
