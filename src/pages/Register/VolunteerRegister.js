import React, { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

function VolunteerRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = () => {
    console.log("Email:", email);
    console.log("Логін:", login);
    console.log("Пароль:", password);
    console.log("Телефон:", phoneNumber);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-white rounded-2xl p-6 w-96 shadow-lg relative">
        <h2 className="text-2xl font-bold mb-5 text-center">
          Реєстрація волонтера
        </h2>

        <label className="block text-left text-lg font-medium mb-1">
          Адреса електронної пошти:
        </label>
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block text-left text-lg font-medium mb-1">
          Логін:
        </label>
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <label className="block text-left text-lg font-medium mb-1">
          Пароль:
        </label>
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="block text-left text-lg font-medium mb-1">
          Номер телефону:
        </label>
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <button
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mb-4"
          onClick={handleSubmit}
        >
          Продовжити
        </button>

        <div className="text-center mb-2 text-gray-600">або</div>

        <div className="flex justify-center gap-4">
          <FaGoogle className="text-2xl text-gray-700 hover:text-red-500 cursor-pointer" />
          <FaFacebook className="text-2xl text-gray-700 hover:text-blue-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default VolunteerRegister;
