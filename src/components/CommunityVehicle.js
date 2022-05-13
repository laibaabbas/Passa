import React from "react";

const CommunityVehicle = () => {
  return (
    <>
      <section className="p-tb120 ">
        <div className="wt-bnr-inr  p-b40">
          <div className="container-lg">
            <div className="banner-title-name p-tb10">
              <h1 className="wt-title">Community Vehicle</h1>
            </div>

            <div className="banner-image">
              <img src="./Vehicle.png" alt="" />
            </div>
          </div>
        </div>
        <div className="page-contant">
          <div className="container">
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

            <div className="booking-btn m-t50">
              <button className="btn btn-green p-lr30  p-tb10">
                Book a Vehicle
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunityVehicle;
