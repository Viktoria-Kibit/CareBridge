import React from "react";
import { Link } from "react-router-dom";
import { Search, User } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-6 px-10 flex justify-between items-center text-xl">
      <div className="text-3xl font-bold">CareBridge</div>

      <nav className="flex space-x-8 font-medium">
        {["Головна", "Про платформу", "Оголошення", "Допомога", "Блог"].map(
          (text, i) => {
            const routes = ["/", "/about", "/announcements", "/help", "/blog"];
            return (
              <Link
                key={i}
                to={routes[i]}
                className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                {text}
              </Link>
            );
          }
        )}
      </nav>

      <div className="flex space-x-4 items-center">
        <button className="hover:scale-110 transition-transform duration-200">
          <Search className="w-7 h-7 cursor-pointer" />
        </button>
        <Link
          to="/profile"
          className="hover:scale-110 transition-transform duration-200"
        >
          <User className="w-7 h-7 cursor-pointer" />
        </Link>
      </div>
    </header>
  );
}
