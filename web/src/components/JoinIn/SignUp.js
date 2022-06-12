import React, { useState } from "react";

import AppBar from "../../commonComponents/AppBar";

import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import axios from "../../axiosInstance";

import { toast } from "react-toastify";

const SignUp = () => {

  const [SignUpData, setSignUpData] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();
    const data = {
      email: SignUpData?.email,
      password: SignUpData?.password,
      userRole: SignUpData?.userRole,
      isAcceptedTerms: true,
      profile: {
        firstName: SignUpData?.firstName,
        lastName: SignUpData?.lastName,
        phoneNumber: SignUpData?.phoneNumber,
        addressLine1: SignUpData?.addressLine1,
        city: SignUpData?.city,
        state: SignUpData?.state,
        zipCode: SignUpData?.zipCode,
        nationality: SignUpData?.nationality,
      },
    };
    let response;
    try {
      response = await axios.post("/user/register", data);
      if(response?.data?.type=="success"){
        toast.success("Data Saved Succesfully")
        if(SignUpData?.userRole==="FINANCIAL"){
          navigate("/MembershipPlan");
        }
      }
      console.log(response.data?.type);
    } catch (e) {
      console.trace(e);
    }
    return;
  };
  const onChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setSignUpData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
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
            <form type="submit" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-12">
                  <span className="SignUpAs">Sign up as</span>
                </div>
                <div className="col-lg-12">
                  <div class="form-check form-check-inline">
                    <input
                      onChange={onChange}
                      type="radio"
                      name="userRole"
                      id="inlineRadio1"
                      value="VOLUNTEER"
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
                      onChange={onChange}
                      type="radio"
                      name="userRole"
                      id="inlineRadio2"
                      value="COMMUNITY"
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
                      onChange={onChange}
                      type="radio"
                      name="userRole"
                      id="inlineRadio3"
                      value="FINANCIAL"
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
                    onChange={onChange}
                    required
                    type="text"
                    class="form-control "
                    id="inputFname"
                    placeholder="First Name"
                    name="firstName"
                  />
                  <input
                    onChange={onChange}
                    required
                    type="email"
                    class="form-control "
                    id="inputEmail"
                    placeholder="Email"
                    name="email"
                  />
                  <input
                    onChange={onChange}
                    required
                    type="text"
                    class="form-control "
                    id="inputAdress"
                    placeholder="Address"
                    name="addressLine1"
                  />
                  <input
                    onChange={onChange}
                    required
                    type="text"
                    class="form-control "
                    id="inputSuburb"
                    placeholder="Suburb"
                    name="city"
                  />
                  <input
                    onChange={onChange}
                    required
                    type="password"
                    class="form-control "
                    id="inputpasswaord"
                    placeholder="password"
                    name="password"
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    onChange={onChange}
                    required
                    type="text"
                    class="form-control "
                    id="inputLname"
                    placeholder="last Name"
                    name="lastName"
                  />
                  <input
                    onChange={onChange}
                    required
                    type="text"
                    class="form-control"
                    id="inputPhoneNumber"
                    placeholder="Phone Number"
                    name="phoneNumber"
                  />
                  <select
                    onChange={onChange}
                    name="state"
                    required
                    class="form-control form-select"
                  >
                    <option value="">State</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <input
                    onChange={onChange}
                    required
                    type="text"
                    class="form-control"
                    id="inputPostCode"
                    placeholder="Post code"
                    name="zipCode"
                  />

                  <select
                    name="nationality"
                    onChange={onChange}
                    required
                    class="form-control form-select"
                  >
                    <option value="">Nationality</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <button 
                  type="submit" 
                  className="btn btn-green"
                  >
                     {/* <Link
                      to={SignUpData?userRole==="FINANCIAL"?"/MembershipPlan":"dfd"}
                      > */}
                     Next 
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
