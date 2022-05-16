import React from "react";

const Bookcharges = () => {
  return (
    <>
      <div className="booking-charges  ">
        <div className="container-lg">
          <div className="chr-heading">
            <h4>Booking Charges</h4>
          </div>
          <div className="charges ">
            <div className="row">
              <div className="col-lg-10 col-sm-8  col-6">
                <div className="chr-deital">
                  <p>Security charges</p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="chr-price">$300</div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-sm-10 col-8">
                <div className="chr-deital det-long">
                  <p>Booking charges according to membership</p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-2 col-4">
                <div className="chr-price ">$80</div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-lg-9 col-sm-6 col-6">
                <div className="total-chr chr-deital">
                  <p>Total Charges</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="total-price">$380</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button className="btn btn-green pay-btn">
                Proceed to payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookcharges;
