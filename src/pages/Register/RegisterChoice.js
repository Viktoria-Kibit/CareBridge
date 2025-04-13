import React from "react";
import { useNavigate } from "react-router-dom";

import { FaHome, FaUser } from "react-icons/fa";

function RegisterChoice() {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    if (role === "volunteer") {
      navigate("/register/volunteer");
    } else if (role === "institute") {
      navigate("/register/institution");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-center">
      <div className="bg-white rounded-2xl p-6 w-96 shadow-lg">
        <h2 className="text-2xl font-bold mb-5">Реєстрація</h2>

        <button
          onClick={() => handleSelect("volunteer")}
          className="flex items-center justify-center w-3/4 mx-auto my-2 py-2 text-lg bg-gray-300 rounded-full transition-colors hover:bg-gray-400"
        >
          <FaUser className="w-5 mr-3" />
          Волонтер
        </button>

        <button
          onClick={() => handleSelect("institute")}
          className="flex items-center justify-center w-3/4 mx-auto my-2 py-2 text-lg bg-gray-300 rounded-full transition-colors hover:bg-gray-400"
        >
          <FaHome className="w-5 mr-3" />
          Притулок
        </button>
      </div>
    </div>
  );
}

export default RegisterChoice;
