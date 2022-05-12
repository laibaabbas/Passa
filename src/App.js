import React from "react";
import { Route, Routes } from "react-router-dom";
import AppBar from "./commonComponents/AppBar";
import Footer from "./commonComponents/Footer";
import Home from "./components/Home";
import CommunityVehicle from "./components/CommunityVehicle";

const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route index element={<CommunityVehicle />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
