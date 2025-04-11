import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Header from "../components/Header/Header";

import AdCard from "../components/AdCard/AdCard";

const AppRoutes = () => (
  <BrowserRouter>
    <Header /> {/* Додаємо Header тут */}
    <AdCard name="Боні" sex="female" age={3} rate = {5} visiting={20} /> {}
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
