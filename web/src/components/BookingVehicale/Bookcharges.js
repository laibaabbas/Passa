import React from "react";

const Bookcharges = ({BillingData, ProceedToPayment}) => {
  const ProceedtoPayment = ()=>{
    ProceedToPayment();
  }
 console.log(BillingData,"BillingData");
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
                  <p>Booking Days</p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="chr-price">{BillingData?.bookingDays}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-sm-8  col-6">
                <div className="chr-deital">
                  <p>Per Day Vehicle Rent</p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="chr-price">{BillingData?.perDayPrice}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-sm-8  col-6">
                <div className="chr-deital">
                  <p>Booking Price$</p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="chr-price">{BillingData?.bookingPrice}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-sm-8  col-6">
                <div className="chr-deital">
                  <p>Discount According To Memberhsip</p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="chr-price">{BillingData?.discount}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-sm-8  col-6">
                <div className="chr-deital">
                  <p>Booking Charges$</p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="chr-price">{BillingData?.bookingTotalPrice}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-sm-8  col-6">
                <div className="chr-deital">
                  <p>Security Charges$</p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="chr-price">{BillingData?.securityDeposit}</div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-lg-10 col-sm-8  col-6">
                <div className="chr-deital">
                  <p>  Total Charges$</p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="chr-price">{BillingData?.totalPriceWithSecurity}</div>
              </div>
            </div>
            
          </div>
          <div className="row">
            <div className="col-12">
              <button
               className="btn btn-green pay-btn"
               onClick={ProceedtoPayment}
               >
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
