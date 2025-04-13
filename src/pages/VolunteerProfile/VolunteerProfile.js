import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import defaultAvatar from "../../assets/default-avatar.jpg";

export default function VolunteerProfile() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>Завантаження...</p>;
  }

  const volunteerData = {
    name: user.login || "Користувач",
    bio: "Чистимо волонтера гуляємо з собаками. Годуємо котиків",
    posts: [
      {
        id: 1,
        content:
          "Привіт я Анна і сьогодні було ще один день наповнений шерстю мокрих носиків й безумовою любов'ю 🐱‍🦺",
        likes: 50,
        comments: 10,
        date: "2023-10-05",
      },
      {
        id: 2,
        content:
          "Мій шлях у волонтерстві Волонтерство стало частиною моєї життя і кожен день, який в привсючну допомогу іншим відриває мені нові горизонти Мій шлях не був миттєвим, все почалось з маленького кроку, який здається змінив мою реальність Спочатку я не могла точно визначити я саме я хочу допомагати Здавалось що стільки різних ініціатив що можна було б приєднатися але мене особисто завжди тягла допомагати людям з якими я можу безпосередньо взаємодіяти Тому я вирішила долучитися до проектів які безпосередньо допомагають тим хто потребує уваги і підтримки Крок за кроком я працювала з людьми які пережили важкі часи закрема з дітьми та молодькою що опинилася в складних життєвих обставинах Спочатку це були просто збори для благодійних акцій потім організація допомоги навчання та підтримка у важких ситуаціях Усе це зробило мою душу більш відкритою та готовою до викликів Волонтерство стало для мене не просто роботою а справжнім позиванням З кожним новим проектом я дізналася більше про людей що потребують допомоги і зростала як особистість Я зрозуміла що навіть маленька дія може змінити життя навіть",
        likes: 30,
        comments: 7,
        date: "2023-10-04",
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Шапка профілю */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">{volunteerData.name}</h1>
          <span className="text-gray-500">@{user.email.split("@")[0]}</span>
        </div>
        <div>
          <span className="mr-4">
            Підписники: {volunteerData.posts.length * 10}
          </span>
          <span>Кількість дописів: {volunteerData.posts.length}</span>
        </div>
      </div>

      {/* Аватар */}
      <div className="mb-6">
        <img
          src={user.photo || defaultAvatar}
          alt="Фото волонтера"
          className="w-48 h-48 rounded-full object-cover"
        />
      </div>

      {/* Опис волонтера */}
      {volunteerData.bio && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Опис</h2>
          <p>{volunteerData.bio}</p>
        </div>
      )}

      {/* Дописи */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Дописи</h2>
        {volunteerData.posts.map((post) => (
          <div key={post.id} className="mb-6 bg-white p-4 rounded shadow">
            <p className="text-gray-500 text-sm">Дата: {post.date}</p>
            <p className="mt-2">{post.content}</p>
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <span>👍 {post.likes}</span>
              <span className="ml-4">💬 {post.comments}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
