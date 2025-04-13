import React from "react";
import mainImage from "../../../assets/mainpage-font.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      className="relative h-[400px] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${mainImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-10">
        <div className="text-right">
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">
            РОЗІГРАШ ДЛЯ ДОБРА
          </h2>
          <p className="max-w-md ml-auto text-sm leading-relaxed">
            Приєднуйся зараз і допоможи тим, хто саме не може попросити про
            допомогу, і отримай шанс виграти чудові іграшки та корм для тварин.
            <br />
            <br />
            Умови участі: Зроби донат на підтримку будь-якого притулку на суму
            від 10 грн та чекай на результат розіграшу.
            <br />
            <br />
            Переможців оголосимо 1 травня.
          </p>
        </div>

        <div className="flex space-x-4">
          <button className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200 transition">
            <Link to={"/donate"}>Допомога зараз</Link>
          </button>
          <button className="bg-orange-400 text-white px-4 py-2 rounded shadow hover:bg-orange-500 transition">
            <Link to={"/register"}>Додати оголошення</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
