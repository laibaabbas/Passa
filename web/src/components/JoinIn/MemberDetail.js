import React from "react";
import AppBar from "../../commonComponents/AppBar";

import { Link } from "react-router-dom";

const MemberDetail = () => {
  return (
    <>
      <AppBar />
      <div className="form-contan">
        <div className="long-form  logIn-form signUp">
          <div className="container-lg">
            <div className="form-heading ">
              <h4>Create your account</h4>
            </div>
            <form>
              <div className="row">
                <div className="col-lg-12">
                  <span className="SignUpAs">Type of membership</span>
                </div>
                <div className="col-lg-12">
                  <div className="couple">
                    <span className="c-title">Couple</span>
                    <span className="couple-btn">AUD 30 </span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div className="col-lg-6">
                  <select required class="form-control form-select">
                    <option value="">What is your field of profession</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>

                  <select required class="form-control form-select">
                    <option value="">
                      No of kids you have under 10 years of age
                    </option>
                    <option value="1">11</option>
                    <option value="2">12</option>
                    <option value="3">13</option>
                  </select>
                  <div className="goBack">
                    <i className="	fa fa-angle-left"></i>
                    <Link to="/MembershipPlan"> BACK </Link>
                  </div>
                </div>

                <div className="col-lg-6">
                  <input
                    required
                    type="text"
                    class="form-control "
                    id="inputSname"
                    placeholder="Spouse name"
                  />
                  <input
                    required
                    type="email"
                    class="form-control "
                    id="inputSemail"
                    placeholder="Spouse email"
                  />

                  <button className="btn btn-green ">
                    <Link to="/Payment">Proceed to payment</Link>
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

export default MemberDetail;
