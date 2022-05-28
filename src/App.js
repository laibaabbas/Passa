import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./commonComponents/Footer";
import Home from "./components/Home/Home";
import CommunityVehicle from "./components/BookingVehicale/CommunityVehicle";
import AboutPaasa from "./components/About/AboutPaasa";

import LogIn from "./components/JoinIn/Login";
import SignUp from "./components/JoinIn/SignUp";
import MembershipPlan from "./components/JoinIn/MembershipPlan";
const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/BookVehicle" element={<CommunityVehicle />} />
        <Route path="/AboutPaasa" element={<AboutPaasa />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MembershipPlan" element={<MembershipPlan />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
