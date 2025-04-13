import React, { useState } from "react";

const shelters = [
  "Затишний дім",
  "Happy Paw",
  "Лапка допомоги",
  "DogRescue",
  "Кіт та пес",
];

export default function Donate() {
  const [query, setQuery] = useState("");
  const [selectedTarget, setSelectedTarget] = useState("");
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");

  const filteredShelters = shelters.filter((shelter) =>
    shelter.toLowerCase().includes(query.toLowerCase())
  );

  const handleDonate = () => {
    if (!selectedTarget || !amount) {
      alert("Будь ласка, заповніть ціль донату та суму.");
      return;
    }

    alert(
      `Ви задонатили ${amount}₴ на "${
        selectedTarget === "carebridge" ? "фонд CareBridge" : selectedTarget
      }"! Дякуємо 💛`
    );

    setQuery("");
    setSelectedTarget("");
    setAmount("");
    setComment("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Зробити донат</h1>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <label className="block text-sm font-medium mb-2">
          Оберіть притулок або фонд:
        </label>
        <input
          type="text"
          placeholder="Пошук притулку..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedTarget(""); // очищуємо, якщо змінено запит
          }}
          className="w-full border rounded-md px-4 py-2 mb-2"
        />

        {query && (
          <div className="bg-white border rounded-md max-h-40 overflow-y-auto">
            {filteredShelters.length > 0 ? (
              filteredShelters.map((shelter) => (
                <div
                  key={shelter}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                    selectedTarget === shelter ? "bg-gray-200" : ""
                  }`}
                  onClick={() => {
                    setSelectedTarget(shelter);
                    setQuery(shelter);
                  }}
                >
                  {shelter}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-sm text-gray-500">
                Нічого не знайдено
              </div>
            )}
          </div>
        )}

        <div className="flex items-center gap-2 mt-4">
          <input
            type="radio"
            id="carebridge"
            name="donateTarget"
            checked={selectedTarget === "carebridge"}
            onChange={() => {
              setSelectedTarget("carebridge");
              setQuery("");
            }}
          />
          <label htmlFor="carebridge" className="text-sm">
            Донат у фонд платформи <strong>CareBridge</strong>
          </label>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <label className="block text-sm font-medium mb-2">
          Сума донату (₴):
        </label>
        <input
          type="number"
          min="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded-md px-4 py-2 mb-4"
        />

        <label className="block text-sm font-medium mb-2">
          Коментар (необов’язково):
        </label>
        <input
          type="text"
          placeholder="Ваше побажання або повідомлення"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border rounded-md px-4 py-2 mb-6"
        />

        <button
          onClick={handleDonate}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Надіслати донат
        </button>
      </div>
    </div>
  );
}
