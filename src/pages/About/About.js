import React from "react";

export default function About() {
  return (
    <div className="px-10 py-16 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-orange-500">
        Про платформу CareBridge
      </h1>

      <p className="text-lg mb-4">
        CareBridge — це платформа, яка об’єднує людей, небайдужих до долі
        тварин. Ми створені для того, щоб зробити допомогу безпритульним,
        покинутим чи хворим тваринам доступнішою та ефективнішою.
      </p>

      <p className="text-lg mb-4">Завдяки нашій платформі ви можете:</p>

      <ul className="list-disc pl-6 text-lg mb-6 space-y-2">
        <li>Шукати тварин, яким потрібна допомога</li>
        <li>Публікувати оголошення про знайдених або загублених тварин</li>
        <li>Підтримувати притулки фінансово або речами</li>
        <li>Знаходити волонтерські ініціативи у вашому регіоні</li>
        <li>Брати участь у порятунку та догляді за тваринами</li>
      </ul>

      <p className="text-lg">
        Ми віримо, що разом можемо змінити долю багатьох хвостатих друзів ❤️
      </p>
    </div>
  );
}
