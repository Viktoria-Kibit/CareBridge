import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Підключення стилів

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Платформа для порятунку тварин</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/login">Вхід</Link>
          </li>
          <li>
            <Link to="/registration">Реєстрація</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
