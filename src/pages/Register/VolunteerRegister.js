import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function VolunteerRegister() {
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = () => {
    if (!email || !password || !login || !phoneNumber) {
      alert("Будь ласка, заповніть всі поля");
      return;
    }

    const userData = {
      role: "volunteer",
      email,
      password,
      login,
      phoneNumber,
    };

    const isRegistered = register(userData);
    if (isRegistered) {
      alert("Реєстрація успішна!");
      navigate("/login");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-white rounded-2xl p-6 w-96 shadow-lg relative">
        <h2 className="text-2xl font-bold mb-5 text-center">
          Реєстрація волонтера
        </h2>
        <label className="block text-left text-lg font-medium mb-1">
          Email:
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
          onClick={handleSubmit}
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mb-4"
        >
          Продовжити
        </button>
      </div>
    </div>
  );
}

export default VolunteerRegister;
