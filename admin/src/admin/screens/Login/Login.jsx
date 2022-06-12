import React, { useState } from "react";
import "./Login.css";
import axios from "../../../axiosInstance";

const AdminLogin = () => {
  const [loading, setLoading] = useState();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (data.email === "" || data.password === "") {
      setLoading(false);
      alert("All Fields are required");
    } else {
      try {
        let res = await axios.post("/user/login", data);
        localStorage.setItem("adminToken", JSON.stringify(res.data.data.token));
        window.location.href = "/admin-dashboard/categories";
        setLoading(false);
      } catch (error) {
        setLoading(false);
        alert("Something went wrong");
      }
    }
  };
  return (
    <div class="admin_login_wrapper fadeInDown">
      <div id="formContent">
        <h2 class="active"> Admin Login</h2>
        <form>
          <input
            type="text"
            id="email"
            class="fadeIn second"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            class="fadeIn third"
            value={data.password}
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
          <input
            type="submit"
            class="fadeIn fourth"
            value={loading ? "Loading..." : "Admin Login"}
            onClick={handleLogin}
          />
        </form>
        <div id="formFooter">
          {/* <a class="underlineHover">Forgot Password?</a> */}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
