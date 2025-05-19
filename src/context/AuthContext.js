import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const register = (userData) => {
    const { login, password } = userData;

    const safeLogin = String(login).trim();
    const safePassword = String(password).trim();

    if (!safeLogin || !safePassword) {
      alert("Будь ласка, заповніть усі поля");
      return false;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isUserExists = users.some((u) => u.login === safeLogin);
    if (isUserExists) {
      alert("Користувач з таким логіном вже існує");
      return false;
    }

    const newUser = { login: safeLogin, password: safePassword };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    return true;
  };

  const login = (loginInput, passwordInput) => {
    const safeLogin = String(loginInput).trim();
    const safePassword = String(passwordInput).trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (u) => u.login === safeLogin && u.password === safePassword
    );

    if (!foundUser) {
      alert("Неправильний логін або пароль");
      return false;
    }

    setUser(foundUser);
    localStorage.setItem("user", JSON.stringify(foundUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
