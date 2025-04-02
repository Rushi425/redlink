import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import DonorHome from "./pages/DonorHome";
import DonorLogin from "./pages/DonorLogin";
import DonorRegister from "./pages/DonorRegister";
import BloodSeekerHome from "./pages/BloodSeekerHome";
import BloodSeekerLogin from "./pages/BloodSeekerLogin";
import BloodSeekerRegister from "./pages/BloodSeekerRegister";
import BloodBanks from "./pages/BloodBanks";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donor-home" element={<DonorHome />} />
        <Route path="/donor-login" element={<DonorLogin />} />
        <Route path="/donor-register" element={<DonorRegister />} />
        <Route path="/seeker-home" element={<BloodSeekerHome />} />
        <Route path="/seeker-login" element={<BloodSeekerLogin />} />
        <Route path="/seeker-register" element={<BloodSeekerRegister />} />
        <Route path="/blood-banks" element={<BloodBanks />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
