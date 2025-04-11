import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User } from "lucide-react";
import SearchDropdown from "../Search/SearchDropdown";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-md py-6 px-10 flex flex-col gap-4 relative">
      <div className="flex justify-between items-center text-xl">
        <div className="text-3xl font-bold">CareBridge</div>

        <nav className="flex space-x-8 font-medium">
          {["Головна", "Про платформу", "Оголошення", "Допомога", "Блог"].map(
            (text, i) => {
              const routes = [
                "/",
                "/about",
                "/announcements",
                "/help",
                "/blog",
              ];
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
          <div className="relative">
            <button
              onClick={toggleSearch}
              className="hover:scale-110 transition-transform duration-200"
            >
              <Search className="w-7 h-7 cursor-pointer" />
            </button>

            {showSearch && (
              <div className="absolute top-full right-0 mt-2 z-50">
                <SearchDropdown onClose={() => setShowSearch(false)} />
              </div>
            )}
          </div>

          <Link
            to="/profile"
            className="hover:scale-110 transition-transform duration-200"
          >
            <User className="w-7 h-7 cursor-pointer" />
          </Link>
        </div>
      </div>
    </header>
  );
}
