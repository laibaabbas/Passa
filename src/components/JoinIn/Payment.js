import React from "react";

import { Link } from "react-router-dom";
import AppBar from "../../commonComponents/AppBar";

const Payment = () => {
  const priceCards = [
    {
      head: "Couple",
      text: "Access until Thu Jun 30, 2022",
      price: "$30",
      btn: "Become a member",
    },
  ];
  return (
    <>
      <>
        <AppBar />
        <section className="p-t80 membership-plan payment">
          <div className="wt-bnr-inr  ">
            <div className="container-lg">
              <div className="banner-nav">
                <Link to="/SignUp"> Create account </Link>
                <i className="	fa fa-angle-left"></i>
                <Link to="/MembershipPlan"> Chose membership plan </Link>
                <i className="	fa fa-angle-left"></i>
                <span className="green-text">Payment</span>
              </div>
            </div>
          </div>

          <div className="container-lg">
            <div className="row">
              <div className="col-xl-6 col-sm-12 col-12">
                <div className="pay-contan">
                  <div className="long-form signUp payment-form">
                    <div className="container-lg">
                      {/* <div className="close-icon">
      <Close />
    </div> */}
                      <div className="form-heading ">
                        <h4>Payment</h4>
                      </div>
                      <form>
                        <div className="row">
                          <div className="col-lg-12">
                            <span className="SignUpAs">
                              Choose payment method
                            </span>
                          </div>
                          <div className="col-lg-12">
                            <div class="form-check form-check-inline">
                              <input
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value="option1"
                              />
                              <label
                                class="form-check-label radio-label"
                                for="inlineRadio1"
                              >
                                Credit card
                              </label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                value="option2"
                              />
                              <label
                                class="form-check-label radio-label"
                                for="inlineRadio2"
                              >
                                <img
                                  className="paypal-img"
                                  src="./JoinIn/paypal-logo.svg"
                                  alt=""
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div className="col-lg-12">
                            <input
                              required
                              type="text"
                              class="form-control credit-card "
                              id="inputCnumber"
                              placeholder="Card number"
                            />
                            <div className="row">
                              <div className="col-lg-7">
                                {" "}
                                <input
                                  required
                                  type="text"
                                  class="form-control"
                                  id="inputEDate"
                                  placeholder="Date of expiry"
                                />
                              </div>
                              <div className="col-lg-5">
                                <input
                                  required
                                  type="text"
                                  class="form-control"
                                  id="inputCSV"
                                  placeholder="CSV"
                                />
                              </div>
                            </div>

                            <button className="btn btn-green ">
                              {" "}
                              <Link to="/">Pay ($30)</Link>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-sm-12 col-12">
                {priceCards.map((value, index) => {
                  return (
                    <>
                      <div
                        className="membership-cards payment-card"
                        key={index}
                      >
                        <div class="card text-center">
                          <div class="card-header shadow">{value.head}</div>
                          <div class="card-body">
                            <p class="card-title">{value.text}</p>

                            <div className="card-price"> {value.price} </div>
                          </div>
                        </div>
                      </div>{" "}
                    </>
                  );
                })}
                <div className="change-package">
                  <Link to="/MembershipPlan">Change package</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Payment;
