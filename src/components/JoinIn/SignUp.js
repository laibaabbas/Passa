import React from "react";

import AppBar from "../../commonComponents/AppBar";
const SignUp = () => {
  return (
    <>
      <AppBar />

      <div className="long-form  logIn-form ">
        <div className="container-lg">
          {/* <div className="close-icon">
      <Close />
    </div> */}
          <div className="form-heading ">
            <h4>PAASA Comity Member Log in </h4>
          </div>
          <form>
            <div class="row">
              <div className="col-12">
                <input
                  type="email"
                  class="form-control email-icon"
                  id="inputEmail"
                  placeholder="Email"
                />

                <input
                  type="password"
                  class="form-control password-icon"
                  id="inputpasswaord"
                  placeholder="password"
                />
                <div className="forget-password">
                  <a href="/"> Forgot password ? </a>
                </div>
                <button className="btn btn-green ">Log in</button>
                <div className="member">
                  New member? <a href="/"> SIGN UP HERE </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
