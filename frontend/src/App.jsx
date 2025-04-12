import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DonorHome from "./pages/DonorHome";
import DonorLogin from "./pages/DonorLogin";
import DonorRegister from "./pages/DonorRegister";
import BloodBanks from "./pages/BloodBanks";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import SearchBlood from "./pages/SearchBlood";
import AddBloodBank from "./pages/AddBloodBank";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donor-home" element={<DonorHome />} />
        <Route path="/donor-login" element={<DonorLogin />} />
        <Route path="/donor-register" element={<DonorRegister />} />
        <Route path="/blood-banks" element={<BloodBanks />} />
        <Route path='/find-blood' element={<SearchBlood/>}/>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/add-bloodbank" element={<AddBloodBank />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
