import React from "react";
import fem from "../../assets/female-symbol.png";
import male from "../../assets/male-symbol.png";
import cat from "../../assets/cat-symbol.png";
import photo from "../../assets/cat_image.png";

function AdCard({ type, name, age, sex, city, rate }) {
  return (
    <div
      className={`w-full max-w-[150px] bg-white ${
        rate === 5 ? "border-2 border-yellow-400" : "border"
      } rounded-lg p-4 shadow-md text-center transition-transform transform hover:scale-105`}
    >
      <img src={photo} alt="pet" className="w-full h-auto rounded-md" />

      {type === "shelter" ? (
        <>
          {/* Притулок: Ім’я, вік, стать, іконки */}
          <div className="pt-2 text-left">
            <p className="font-mono text-lg">{name}</p>
            <div className="mt-1 flex items-center gap-2">
              <p className="font-mono text-sm">{age} роки</p>
              {sex && (
                <div className="flex items-center gap-1">
                  <img
                    src={sex === "female" ? fem : male}
                    alt={sex}
                    className="w-5 h-5"
                  />
                  <img src={cat} alt="cat" className="w-5 h-5" />
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Волонтер: Назва, місто, вік */}
          <div className="pt-2 text-left">
            <p className="font-mono text-lg font-semibold">{name}</p>
            <div className="mt-1 flex items-center gap-2">
              <p className="font-mono text-sm text-gray-600">{city}</p>
              {sex && (
                <div className="flex items-center gap-1">
                  <img
                    src={sex === "female" ? fem : male}
                    alt={sex}
                    className="w-5 h-5"
                  />
                  <img src={cat} alt="cat" className="w-5 h-5" />
                </div>
              )}
            </div>
          </div>
        </>
      )}

      <button className="mt-4 bg-gray-400 hover:bg-gray-500 text-white py-1 px-3 rounded-md transition-all duration-200">
        Переглянути
      </button>
    </div>
  );
}

export default AdCard;
