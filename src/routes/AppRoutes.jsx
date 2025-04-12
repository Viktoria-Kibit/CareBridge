import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Adverts from "../pages/Adverts/Adverts";

const AppRoutes = () => (
  <BrowserRouter>
    <Header /> {/* Додаємо Header тут */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/adverts" element={<Adverts />} />
    </Routes>
    <Footer /> {/* Додаємо Footer тут */}
  </BrowserRouter>
);

export default AppRoutes;
