import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <header class="header" role="banner">
        <h1 class="logo">
          <a href="#">
            Admin <span>Dashboard</span>
          </a>
        </h1>
        <div class="nav-wrap">
          <nav class="main-nav" role="navigation">
            <ul class="unstyled list-hover-slide">
              <li>
                <Link to="/admin-dashboard/categories">Categories</Link>
              </li>
              <li>
                <Link to="/admin-dashboard/vahicles">Vahicles</Link>
              </li>
              <li>
                <Link to="/admin-dashboard/booking">Booking Request</Link>
              </li>
              <li>
                <Link to="/admin-dashboard/vehicleissue">Vehicle Issue</Link>
              </li>
              <li>
                <Link to="/admin-dashboard/returnvehicle">Return Vehicle</Link>
              </li>
              <li>
                <Link to="/admin-dashboard/discount">Discount</Link>
              </li>
            </ul>
          </nav>
          {/* <ul class="social-links list-inline unstyled list-hover-slide">
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Google+</a>
            </li>
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">CodePen</a>
            </li>
          </ul> */}
        </div>
      </header>
    </div>
  );
};

export default Sidebar;
