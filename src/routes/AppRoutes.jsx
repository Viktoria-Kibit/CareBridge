import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Header from "../components/Header/Header";

const AppRoutes = () => (
  <BrowserRouter>
    <Header /> {/* Додаємо Header тут */}
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
