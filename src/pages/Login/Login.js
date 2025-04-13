import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    if (!email || !password) {
      alert("Будь ласка, введіть email та пароль");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) {
      alert("Неправильний email або пароль");
      return;
    }

    login(user);
    if (user.role === "institution") {
      navigate("/shelter");
    } else if (user.role === "volunteer") {
      navigate("/profile");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 min-h-screen py-12">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Вхід</h2>
        <label className="block text-lg font-medium mb-1">Email:</label>
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="block text-lg font-medium mb-1">Пароль:</label>
        <input
          className="w-full p-2 mb-6 border border-gray-300 rounded-md"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600"
        >
          Увійти
        </button>
      </div>
    </div>
  );
}

export default Login;
