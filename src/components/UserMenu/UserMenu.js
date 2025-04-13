import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Імпорт useNavigate
import { User } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function UserMenu() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate(); // Ініціалізація navigate
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const timeoutRef = useRef(null);

  const toggleMenu = () => setOpen((prev) => !prev);

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 5000);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Функція для виходу з системи та перенаправлення
  const handleLogout = () => {
    logout(); // Викликаємо logout для очищення даних користувача
    navigate("/"); // Перенаправляємо на головну сторінку
  };

  const guestMenu = (
    <div
      className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow p-4 z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={menuRef}
    >
      <div className="flex items-center gap-2 border-b pb-2 mb-2">
        <User className="w-6 h-6" /> <span>Гість</span>
      </div>
      <nav className="flex flex-col gap-3">
        <Link
          to="/login"
          className="text-lg hover:text-xl transition-all duration-200"
        >
          Вхід
        </Link>
        <Link
          to="/register"
          className="text-lg hover:text-xl transition-all duration-200"
        >
          Реєстрація
        </Link>
      </nav>
    </div>
  );

  const volunteerMenu = (
    <div
      className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow p-4 z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={menuRef}
    >
      <div className="flex items-center gap-2 border-b pb-2 mb-2">
        <User className="w-6 h-6" />{" "}
        <span>Вітаємо, {user?.name || "Користувач"}</span>
      </div>
      <nav className="flex flex-col gap-3">
        <Link
          to="/profile"
          className="text-lg hover:text-xl transition-all duration-200"
        >
          Моя сторінка
        </Link>
        <Link
          to="/requests"
          className="text-lg hover:text-xl transition-all duration-200"
        >
          Запити
        </Link>
        <Link
          to="/saved"
          className="text-lg hover:text-xl transition-all duration-200"
        >
          Збережені оголошення
        </Link>
        <Link
          to="/donate"
          className="text-lg hover:text-xl transition-all duration-200"
        >
          Донати
        </Link>
        <Link
          to="/edit-profile"
          className="text-lg hover:text-xl transition-all duration-200"
        >
          Редагування профілю
        </Link>
        <button className="text-left text-red-600" onClick={handleLogout}>
          Вийти
        </button>
      </nav>
    </div>
  );

  const shelterMenu = (
    <div
      className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow p-4 z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={menuRef}
    >
      <div className="flex items-center gap-2 border-b pb-2 mb-2">
        <User className="w-6 h-6" />{" "}
        <span>Вітаємо, {user?.name || "Користувач"}</span>
      </div>
      <nav className="flex flex-col gap-3">
        <Link
          to="/shelter"
          className="text-lg hover:text-xl transition-all duration-200"
        >
          Сторінка мого притулку
        </Link>
        <Link
          to="/new-announcement"
          className="text-lg hover:text-xl transition-all duration-200"
        >
          Додати оголошення
        </Link>
        <Link
          to="/edit-profile"
          className="text-lg hover:text-xl transition-all duration-200"
        >
          Редагування профілю
        </Link>
        <button className="text-left text-red-600" onClick={handleLogout}>
          Вийти
        </button>
      </nav>
    </div>
  );

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="hover:scale-110 transition-transform duration-200"
      >
        <User />
      </button>
      {open &&
        (user
          ? user.role === "volunteer"
            ? volunteerMenu
            : shelterMenu
          : guestMenu)}
    </div>
  );
}
