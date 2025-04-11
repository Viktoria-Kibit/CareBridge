import { FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 px-10">
      <div className="flex justify-between items-center">
        {/* Логотип або текст */}
        <div className="text-3xl font-bold">CareBridge</div>

        {/* Навігація */}
        <nav className="flex space-x-8 font-medium">
          {["Про нас", "Контакти", "Політика конфіденційності"].map(
            (text, i) => {
              const routes = ["/about", "/contact", "/privacy-policy"];
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

        {/* Соціальні мережі */}
        <div className="flex space-x-4 items-center">
          <Link
            to="https://github.com"
            className="hover:scale-110 transition-transform duration-200"
          >
            <FaGithub className="w-7 h-7 cursor-pointer" />
          </Link>
          <Link
            to="https://twitter.com"
            className="hover:scale-110 transition-transform duration-200"
          >
            <FaTwitter className="w-7 h-7 cursor-pointer" />
          </Link>
          <Link
            to="https://facebook.com"
            className="hover:scale-110 transition-transform duration-200"
          >
            <FaFacebook className="w-7 h-7 cursor-pointer" />
          </Link>
        </div>
      </div>

      {/* Інформація про підтримку */}
      <div className="mt-8 text-center text-sm">
        <p className="text-lg font-semibold">Вітаємо на нашому сайті!</p>
        <p>
          Ми завжди готові допомогти вам у питаннях порятунку та догляду за
          тваринами. Нижче ви знайдете контактні дані та інструкції, як отримати
          підтримку.
        </p>
        <p className="mt-4">
          <span className="font-semibold">
            Гаряча лінія для екстрених випадків:
          </span>{" "}
          +380 (XX) XXX-XX-XX
        </p>
        <p>
          <span className="font-semibold">Загальні запитання:</span> +380 (XX)
          XXX-XX-XX
          <br />
          (Доступна з 09:00 до 18:00, Пн-Пт)
        </p>
      </div>

      {/* Авторські права */}
      <div className="text-center text-sm mt-4">
        &copy; 2025 CareBridge. Всі права захищені.
      </div>
    </footer>
  );
}
