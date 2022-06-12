import React from "react";
import AppBar from "../../commonComponents/AppBar";
import Footer from "../../commonComponents/Footer";
import VehicleCards from "./VehicleCards";

const CommunityVehicle = () => {
  return (
    <>
      <AppBar />
      <section className="p-t120 ">
        <div className="wt-bnr-inr  p-b40">
          <div className="container-lg">
            <div className="banner-title-name p-tb10">
              <h1 className="wt-title">Community Vehicle</h1>
            </div>

            <div className="banner-image">
              <img className="rounded" src="./vehicles/header-car.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="page-contant">
          <div className="container-lg">
            <div className="para">
              <p>
                With the help of Department of Multicultural Affairs, Office of
                the Premier and Cabinet, under Stronger Together grant program,
                PAASA purchased a 12-seater van for the Pakistani community in
                SA. This vehicle is for hire for the community members whenever
                they need it subject to the availability of the vehicle. Some of
                the purposes of this vehicle is to pick and drop newly arrived
                families from airport to their place and to provide transport
                assistance to the new migrants, elderly community members,
                socially isolated members, families and community groups.
              </p>
            </div>
          </div>
          <div className="container-lg">
            <VehicleCards />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CommunityVehicle;
