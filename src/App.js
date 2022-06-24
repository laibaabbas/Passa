import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./commonComponents/Footer";
import Home from "./components/Home/Home";
import CommunityVehicle from "./components/BookingVehicale/CommunityVehicle";
import AboutPaasa from "./components/About/AboutPaasa";
import CovidInfo from "./components/CovidInfo/CovidInfo";

import LogIn from "./components/JoinIn/Login";
import SignUp from "./components/JoinIn/SignUp";
import MembershipPlan from "./components/JoinIn/MembershipPlan";
import MemberDetail from "./components/JoinIn/MemberDetail";
import Payment from "./components/JoinIn/Payment";
import ManagementCommittee from "./components/ManagementCommittee/ManagementCommittee";
import NewsEvent from "./components/NewsAndEvents/NewsEvent";
import PakCommunity from "./components/PakCommunity/PakCommunity";
import FuneralFund from "./components/FuneralFunds/FuneralFund";
const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/BookVehicle" element={<CommunityVehicle />} />
        <Route path="/AboutPaasa" element={<AboutPaasa />} />
        <Route path="/NewsAndEvents" element={<NewsEvent />} />
        <Route path="/Covid19Info" element={<CovidInfo />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MembershipPlan" element={<MembershipPlan />} />
        <Route path="/MemberDetail" element={<MemberDetail />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/ManagementCommittee" element={<ManagementCommittee />} />
        <Route path="/Meetthecommunity" element={<PakCommunity />} />
        <Route path="/FuneralFunds" element={<FuneralFund />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
