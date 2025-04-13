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
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isUserExists = users.some((u) => u.email === userData.email);
    if (isUserExists) {
      alert("Користувач з таким email вже існує");
      return false;
    }
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    return true;
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) {
      alert("Неправильний email або пароль");
      return;
    }
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
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
