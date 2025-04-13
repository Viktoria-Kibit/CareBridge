import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function InstitutionRegister() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [institution, setInstitution] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    console.log("Дані реєстрації:");
    console.log({
      email,
      password,
      institution,
      category,
      city,
      street,
      houseNumber,
      contactPerson,
      contactNumber,
    });

    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 min-h-screen py-12">
      <div className="bg-white rounded-2xl p-8 w-full max-w-4xl shadow-lg relative">
        <h2 className="text-3xl font-bold mb-8 text-center">Реєстрація</h2>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium mb-1">Email:</label>
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="block text-lg font-medium mb-1">Пароль:</label>
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label className="block text-lg font-medium mb-1">
              Назва закладу:
            </label>
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              type="text"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
            />

            <label className="block text-lg font-medium mb-1">Категорія:</label>
            <div className="flex gap-2 mb-4">
              {["Притулок", "Ветклініка", "Розплідник"].map((type) => (
                <button
                  key={type}
                  onClick={() => setCategory(type)}
                  className={`p-2 flex-1 rounded-md border text-sm transition ${
                    category === type
                      ? "bg-blue-500 text-white border-blue-600"
                      : "bg-gray-200 text-black border-gray-300"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <label className="block text-lg font-medium mb-1">Місто:</label>
            <input
              type="text"
              className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <label className="block text-lg font-medium mb-1">Вулиця:</label>
            <input
              type="text"
              className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-1">
              Номер будинку:
            </label>
            <input
              type="text"
              className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
            />

            <label className="block text-lg font-medium mb-1">
              Контактна особа:
            </label>
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              type="text"
              value={contactPerson}
              onChange={(e) => setContactPerson(e.target.value)}
            />

            <label className="block text-lg font-medium mb-1">
              Номер телефону:
            </label>
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              type="text"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            className="w-full py-3 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Продовжити
          </button>
        </div>
      </div>
    </div>
  );
}

export default InstitutionRegister;
