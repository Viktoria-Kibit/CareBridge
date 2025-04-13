import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchDropdown({ onClose }) {
  const [firstChoice, setFirstChoice] = useState("");
  const [secondChoice, setSecondChoice] = useState("");
  const [filters, setFilters] = useState({});

  const handleFirstChoice = (e) => {
    setFirstChoice(e.target.value);
    setSecondChoice("");
    setFilters({});
  };

  const handleSecondChoice = (e) => {
    setSecondChoice(e.target.value);
    setFilters({});
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleApplyFilters = () => {
    console.log({ firstChoice, secondChoice, filters });
    onClose();
  };

  const handleClearFilters = () => {
    setFirstChoice("");
    setSecondChoice("");
    setFilters({});
    onClose();
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 w-80 z-50 flex flex-col gap-4">
      <select
        onChange={handleFirstChoice}
        value={firstChoice}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option disabled value="">
          Оберіть категорію
        </option>
        <option value="animals">Тварини</option>
        <option value="shelters">Притулки</option>
      </select>

      {firstChoice && (
        <select
          onChange={handleSecondChoice}
          value={secondChoice}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">
            {firstChoice === "animals" ? "Оберіть вид" : "Оберіть тип закладу"}
          </option>
          {firstChoice === "animals" ? (
            <>
              <option value="cats">Коти</option>
              <option value="dogs">Собаки</option>
              <option value="parrots">Папуги</option>
              <option value="hamsters">Хом'ячки</option>
              <option value="other animal">Інше</option>
            </>
          ) : (
            <>
              <option value="shelter">Притулок</option>
              <option value="vet">Ветклініка</option>
              <option value="breed">Розплідник</option>
              <option value="other">Інше</option>
            </>
          )}
        </select>
      )}

      {secondChoice && (
        <div className="flex flex-col gap-4 border-t pt-4">
          <div>
            <label className="block mb-1 font-medium">Розташування (км):</label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="від"
                className="w-1/2 p-2 border rounded-md"
                value={filters.distanceFrom || ""}
                onChange={(e) =>
                  handleFilterChange("distanceFrom", e.target.value)
                }
              />
              <input
                type="number"
                placeholder="до"
                className="w-1/2 p-2 border rounded-md"
                value={filters.distanceTo || ""}
                onChange={(e) =>
                  handleFilterChange("distanceTo", e.target.value)
                }
              />
            </div>
          </div>

          {firstChoice === "animals" ? (
            <>
              <div>
                <label className="block mb-1 font-medium">Вік:</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={filters.age || ""}
                  onChange={(e) => handleFilterChange("age", e.target.value)}
                >
                  <option value="">Оберіть</option>
                  <option value="youngToOld">від молодших до старших</option>
                  <option value="oldToYoung">від старших до молодших</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Стан здоров’я:</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={filters.health || ""}
                  onChange={(e) => handleFilterChange("health", e.target.value)}
                >
                  <option value="">Оберіть</option>
                  <option value="healthy">Здоровий</option>
                  <option value="minorIssues">Незначні хвороби/травми</option>
                  <option value="majorIssues">Значні хвороби/травми</option>
                </select>
              </div>
            </>
          ) : (
            <div>
              <label className="block mb-1 font-medium">Рейтинг:</label>
              <select
                className="w-full p-2 border rounded-md"
                value={filters.rating || ""}
                onChange={(e) => handleFilterChange("rating", e.target.value)}
              >
                <option value="">Оберіть</option>
                <option value="lowToHigh">від нижчого до вищого</option>
                <option value="highToLow">від вищого до нижчого</option>
              </select>
            </div>
          )}

          <div className="flex justify-between">
            <button
              onClick={handleClearFilters}
              className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
            >
              Очистити
            </button>
            <button
              onClick={handleApplyFilters}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
            >
              <Link to={"/adverts"}>Застосувати</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
