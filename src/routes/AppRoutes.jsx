import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const AppRoutes = () => (
  <BrowserRouter>
    <Header /> {/* Додаємо Header тут */}
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer /> {/* Додаємо Footer тут */}
  </BrowserRouter>
);

export default AppRoutes;
