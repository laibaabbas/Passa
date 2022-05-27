import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./commonComponents/Footer";
import Home from "./components/Home/Home";
import CommunityVehicle from "./components/BookingVehicale/CommunityVehicle";
import AboutPaasa from "./components/About/AboutPaasa";

import LogIn from "./components/JoinIn/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/BookVehicle" element={<CommunityVehicle />} />
        <Route path="/AboutPaasa" element={<AboutPaasa />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
