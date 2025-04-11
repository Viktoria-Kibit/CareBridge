import React, { useState } from "react";
import newImage1 from "../../../assets/news1.png";
import newImage2 from "../../../assets/news2.png";
import newImage3 from "../../../assets/news3.jpg";

export default function NewsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {/* Ліва новина */}
        <div className="col-span-1 md:col-span-2">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col">
            <img
              src={newImage3}
              alt="News Main"
              className="w-full h-64 object-cover rounded-lg mb-4" // ширина 100% та висота 64
            />
            <div className="flex flex-col justify-between">
              <h3 className="text-2xl font-semibold mb-4">
                Прогулянки з собаками
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>
                  У притулку “Лапки Надії” кожен охочий може подарувати трохи
                  тепла нашим хвостатим підопічним!
                </strong>{" "}
                Приходьте на прогулянку з собаками — це чудовий спосіб провести
                час, допомогти тваринам соціалізуватися та подарувати їм
                радість.
              </p>
              {isExpanded && (
                <p className="text-gray-700 mb-4">
                  Прогулянки можливі щодня, за попереднім записом. Не потрібно
                  мати досвід — лише добре серце. Ми чекаємо на вас, щоб ви
                  могли стати частиною нашої великої родини любителів тварин та
                  допомогти тим, хто цього потребує. Ваші зусилля і тепло дуже
                  важливі для кожної тваринки!
                </p>
              )}
              <button
                onClick={handleToggle}
                className="text-blue-500 hover:underline transition duration-300"
              >
                {isExpanded ? "Згорнути" : "Читати далі"}
              </button>
            </div>
          </div>
        </div>

        {/* Праві новини */}
        <div className="col-span-1">
          <div className="space-y-6">
            {/* Перша новина */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex">
              <img
                src={newImage1}
                alt="News 1"
                className="w-32 h-32 object-cover rounded-lg mr-4"
              />
              <div>
                <h4 className="font-semibold text-lg mb-2">20 березня 2025</h4>
                <p className="text-gray-700 mb-4">
                  <strong>Як підготуватися до всиновлення.</strong> Лекцію «Як
                  підготуватися до всиновлення» проводить ...
                </p>
                <button className="text-blue-500 hover:underline transition duration-300">
                  Читати далі
                </button>
              </div>
            </div>

            {/* Друга новина */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex">
              <img
                src={newImage2}
                alt="News 2"
                className="w-32 h-32 object-cover rounded-lg mr-4"
              />
              <div>
                <h4 className="font-semibold text-lg mb-2">14 квітня 2025</h4>
                <p className="text-gray-700 mb-4">
                  <strong>Майстер-клас по догляду за тваринами.</strong>
                  <br />
                  Ви дізнаєтесь усе необхідне для комфортного життя з ...
                </p>
                <button className="text-blue-500 hover:underline transition duration-300">
                  Читати далі
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
