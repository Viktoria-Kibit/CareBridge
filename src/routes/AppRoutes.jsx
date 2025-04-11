import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import AdCard from "../components/AdCard/AdCard";
import Search from "../components/Search/Search";

const AppRoutes = () => (
  <BrowserRouter>
    <Header /> {/* Додаємо Header тут */}
    <AdCard name="Боні" sex="female" age={3} rate = {5} visiting={20} /> {}
    <Search />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer /> {/* Додаємо Footer тут */}
  </BrowserRouter>
);

export default AppRoutes;
