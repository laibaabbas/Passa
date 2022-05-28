import React from "react";

import AppBar from "../../commonComponents/AppBar";

import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <>
      <AppBar />
      <div className="form-contan">
        <div className="long-form  logIn-form signUp">
          <div className="container-lg">
            {/* <div className="close-icon">
      <Close />
    </div> */}
            <div className="form-heading ">
              <h4>Create your account</h4>
            </div>
            <form>
              <div className="row">
                <div className="col-lg-12">
                  <span className="SignUpAs">Sign up as</span>
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
                      Volunteer
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
                      Community member
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio3"
                      value="option3"
                    />
                    <label
                      class="form-check-label radio-label"
                      for="inlineRadio3"
                    >
                      Financial member
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div className="col-lg-6">
                  <input
                    required
                    type="text"
                    class="form-control "
                    id="inputFname"
                    placeholder="First Name"
                  />
                  <input
                    required
                    type="email"
                    class="form-control "
                    id="inputEmail"
                    placeholder="Email"
                  />
                  <input
                    required
                    type="text"
                    class="form-control "
                    id="inputAdress"
                    placeholder="Address"
                  />
                  <input
                    required
                    type="text"
                    class="form-control "
                    id="inputSuburb"
                    placeholder="Suburb"
                  />
                  <input
                    required
                    type="password"
                    class="form-control "
                    id="inputpasswaord"
                    placeholder="password"
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    required
                    type="text"
                    class="form-control "
                    id="inputLname"
                    placeholder="last Name"
                  />
                  <input
                    required
                    type="text"
                    class="form-control"
                    id="inputPhoneNumber"
                    placeholder="Phone Number"
                  />
                  <select required class="form-control form-select">
                    <option value="">State</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <input
                    required
                    type="text"
                    class="form-control"
                    id="inputPostCode"
                    placeholder="Post code"
                  />

                  <select required class="form-control form-select">
                    <option value="">Nationality</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button className="btn btn-green ">
                    {" "}
                    <Link to="/MembershipPlan">Next</Link>
                  </button>
                  <div className="member">
                    Not New member? <Link to="/LogIn"> SIGN IN </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
