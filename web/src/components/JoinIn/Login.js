import Close from "@mui/icons-material/Close";
import React,{useState} from "react";
import { Link } from "react-router-dom";
import AppBar from "../../commonComponents/AppBar";

import InputComponent from "../../commonComponents/Input/InputComponent";
import ButtonComponent from '../../commonComponents/Button/ButtonComponent';

import jwt from 'jwt-decode'

import axios from "../../axiosInstance";

const Login = () => {
  
const [formData, setFormData] = useState({})
const _setState = (key,value)=>{
  const obj={}
  obj[key] = value;
  setFormData({...formData,...obj})
}
  const handleSubmit = async(e)=>{
    e.preventDefault();
    let response;
    try {
      response = await axios.post("/user/login", formData);
      console.log(response.data.data.token);
      const token = response?.data?.data?.token;
      const user = jwt(token); // decode your token here
      localStorage.setItem('tokenData', user)
      const dataObj = {
        usertoken: response?.data?.data?.token,
      };
    
      localStorage.setItem("userData", JSON.stringify(dataObj));
      window.location = "/AboutPaasa";
    } catch (e) {
      console.trace(e);
    }
    return;
  };
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
            <form
            type="submit"
            onSubmit={handleSubmit}
            >
              <div class="row">
                <div className="col-12">
                  <InputComponent
                    required={true}
                    type="email"
                    className="form-control email-icon"
                    id="inputEmail"
                    placeholder="Email"
                    onChange={(e)=>
                      _setState("email",e.target.value)
                    }
                  />
                  {/* <input
                    required
                    type="email"
                    class="form-control email-icon"
                    id="inputEmail"
                    placeholder="Email"
                  /> */}
                  <InputComponent
                    required={true}
                    type="password"
                    className="form-control password-icon"
                    id="inputpasswaord"
                    placeholder="password"
                    onChange={(e)=>_setState("password",e.target.value)}
                  />
                  {/* <input
                    required
                    type="password"
                    class="form-control password-icon"
                    id="inputpasswaord"
                    placeholder="password"
                  /> */}
                  <div className="forget-password">
                    <a href="/"> Forgot password ? </a>
                  </div>
                  {/* <button >Log in</button> */}
                  <ButtonComponent
                  className="btn btn-green "
                  text="Log in"
                  type="submit"
                  />
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
