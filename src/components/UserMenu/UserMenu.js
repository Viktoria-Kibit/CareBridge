import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

export default function UserMenu({ user }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const guestMenu = (
    <Link
      to="/login"
      className="block px-6 py-3 rounded-xl shadow bg-white hover:bg-gray-100"
    >
      <div className="flex items-center gap-2">
        <User className="w-6 h-6" /> Вхід / Реєстрація
      </div>
    </Link>
  );

  const volunteerMenu = (
    <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow p-4 z-50">
      <div className="flex items-center gap-2 border-b pb-2 mb-2">
        <User className="w-6 h-6" /> <span>Вітаємо, {user.name}</span>
      </div>
      <nav className="flex flex-col gap-3">
        <Link to="/profile">Моя сторінка</Link>
        <Link to="/requests">Запити</Link>
        <Link to="/saved">Збережені оголошення</Link>
        <Link to="/donate">Донати</Link>
        <Link to="/edit-profile">Редагування профілю</Link>
        <button className="text-left text-red-600" onClick={user.logout}>
          Вийти
        </button>
      </nav>
    </div>
  );

  const shelterMenu = (
    <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow p-4 z-50">
      <div className="flex items-center gap-2 border-b pb-2 mb-2">
        <User className="w-6 h-6" /> <span>Вітаємо, {user.name}</span>
      </div>
      <nav className="flex flex-col gap-3">
        <Link to="/shelter">Сторінка мого притулку</Link>
        <Link to="/new-announcement">Додати оголошення</Link>
        <Link to="/edit-profile">Редагування профілю</Link>
        <button className="text-left text-red-600" onClick={user.logout}>
          Вийти
        </button>
      </nav>
    </div>
  );

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="hover:scale-110 transition-transform duration-200"
      >
        <User className="w-7 h-7 cursor-pointer" />
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
