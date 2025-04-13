import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Adverts from "../pages/Adverts/Adverts";

import RegisterChoice from "../pages/Register/RegisterChoice";
import VolunteerRegister from "../pages/Register/VolunteerRegister";
import InstitutionRegister from "../pages/Register/InstitutionRegister";
import Login from "../pages/Login/Login";

const AppRoutes = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/adverts" element={<Adverts />} />

      <Route path="/register" element={<RegisterChoice />} />
      <Route path="/register/volunteer" element={<VolunteerRegister />} />
      <Route path="/register/institution" element={<InstitutionRegister />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default AppRoutes;
