import React from "react";
import AdCard from "../../components/AdCard/AdCard";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import defaultAvatar from "../../assets/default-avatar.jpg";

export default function ShelterProfile() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>Завантаження...</p>;
  }

  // Приклад даних профілю притулку
  const shelterData = {
    name: user.institution || "Притулок",
    description:
      "У нашому притулку Лапки Надії тварини, які ще чекають свого постійного дома. Але ти вже сьогодні можеш стати для когось із них справжнім героєм — опікуном.",
    animals: [
      {
        id: 1,
        name: "Лео",
        age: "1 рік",
        sex: "male",
        type: "shelter",
        city: "Київ",
        rate: 5,
      },
      {
        id: 2,
        name: "Персик",
        age: "9 років",
        sex: "female",
        type: "shelter",
        city: "Львів",
        rate: 4,
      },
      {
        id: 3,
        name: "Тедді",
        age: "1 рік",
        sex: "male",
        type: "shelter",
        city: "Одеса",
        rate: 3,
      },
      {
        id: 4,
        name: "Айва",
        age: "3 роки",
        sex: "female",
        type: "shelter",
        city: "Харків",
        rate: 5,
      },
      {
        id: 5,
        name: "Пушок",
        age: "2 роки",
        sex: "male",
        type: "shelter",
        city: "Дніпро",
        rate: 4,
      },
    ],
    subscribers: 1250,
    animalsCount: 58,
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Шапка профілю */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">{shelterData.name}</h1>
          <span className="text-gray-500">Категорія закладу: Притулок</span>
        </div>
        <div>
          <span className="mr-4">Підписники: {shelterData.subscribers}</span>
          <span>Кількість тварин у притулку: {shelterData.animalsCount}</span>
        </div>
      </div>

      {/* Аватар закладу */}
      <div className="mb-6">
        <img
          src={user.photo || defaultAvatar}
          alt="Фото притулку"
          className="w-48 h-48 rounded-full object-cover"
        />
      </div>

      {/* Опис притулку */}
      {shelterData.description && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Опис</h2>
          <p>{shelterData.description}</p>
        </div>
      )}

      {/* Галерея тварин */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Наші тваринки</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {shelterData.animals.map((animal) => (
            <AdCard
              key={animal.id}
              type={animal.type}
              name={animal.name}
              age={animal.age}
              sex={animal.sex}
              city={animal.city}
              rate={animal.rate}
            />
          ))}
        </div>
      </div>

      {/* Допомога та опції */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Допомога та опції</h2>
        <div className="flex gap-4">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            Надіслати донат
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Стати опікуном
          </button>
        </div>
      </div>

      {/* Коментарі */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Коментарі</h2>
        <form className="mb-4">
          <textarea
            placeholder="Залиште відгук (максимум 1000 символів)"
            className="w-full p-2 border border-gray-300 rounded-md resize-none"
            rows={4}
          ></textarea>
          <button className="bg-gray-500 text-white px-4 py-2 mt-2 rounded hover:bg-gray-600">
            Надіслати відгук
          </button>
        </form>
      </div>

      {/* Оцінка закладу */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Оцінка закладу</h2>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((rating) => (
            <span key={rating}>
              <i
                className={`fas fa-star ${
                  rating <= (user.rating || 0)
                    ? "text-yellow-500"
                    : "text-gray-400"
                } cursor-pointer`}
              ></i>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
