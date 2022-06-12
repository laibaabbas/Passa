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

import SetAuthToken from './SetAuthToken'

import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  let userdata = localStorage.getItem("userData");
  userdata = JSON.parse(userdata);
  if (userdata?.usertoken) {
    SetAuthToken(userdata?.usertoken);
  }
  
  return (
    <>
       <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        transition={Flip}
        limit={1}
      />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/BookVehicle" element={<CommunityVehicle />} />
        <Route path="/AboutPaasa" element={<AboutPaasa />} />
        <Route path="/Covid19Info" element={<CovidInfo />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MembershipPlan" element={<MembershipPlan />} />
        <Route path="/MemberDetail" element={<MemberDetail />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/ManagementCommittee" element={<ManagementCommittee />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
