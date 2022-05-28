import Close from "@mui/icons-material/Close";
import React from "react";
import { Link } from "react-router-dom";
import AppBar from "../../commonComponents/AppBar";

const Login = () => {
  return (
    <>
      <AppBar />
      <div className="form-contan ">
        <div className="long-form  logIn-form " id="logIn">
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
                    required
                    type="email"
                    class="form-control email-icon"
                    id="inputEmail"
                    placeholder="Email"
                  />

                  <input
                    required
                    type="password"
                    class="form-control password-icon"
                    id="inputpasswaord"
                    placeholder="password"
                  />
                  <div className="forget-password">
                    <a href="/"> Forgot password ? </a>
                  </div>
                  <button className="btn btn-green ">
                    <Link to="/">Log in</Link>
                  </button>
                  <div className="member">
                    New member? <Link to="/SignUp"> SIGN UP HERE </Link>
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

export default Login;
