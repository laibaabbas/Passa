import React from "react";

import { Route, Routes } from "react-router-dom";
import AppBar from "../../commonComponents/AppBar";
import CommunityVehicle from "../BookingVehicale/CommunityVehicle";

const Pages = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/BookVehicle" element={<CommunityVehicle />} />
      </Routes>
    </>
  );
};

export default Pages;
