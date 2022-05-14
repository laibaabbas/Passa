import React from "react";

const Bookcharges = () => {
  return (
    <>
      <div className="booking-charges">
        <div className="container-md">
          <div className="chr-heading">
            <h4>Booking Charges</h4>
          </div>
          <div className="charges p-tb20">
            <div className="row">
              <div className="col-md-10">
                <div className="chr-deital">Security charges</div>
              </div>
              <div className="col-md-2">
                <div className="chr-price">$300</div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-10">
                <div className="chr-deital">
                  Booking charges according to membership
                </div>
              </div>
              <div className="col-md-2">
                <div className="chr-price">$80</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookcharges;
