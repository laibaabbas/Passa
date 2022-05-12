import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

const AppBar = () => {
  $("#mobile-side-drawer").on("click", function () {
    $(".mobile-sider-drawer-menu").toggleClass("active");
  });
  return (
    <>
      {/* <!-- HEADER START --> */}
      <header class="site-header header-style-3 mobile-sider-drawer-menu ">
        <div class="sticky-wrapper" style={{ height: "90px;" }}>
          <div class="is-fixed main-bar-wraper navbar-expand-lg sticky-header">
            <div class="main-bar shadow">
              <div class="container-fluid clearfix">
                <div class="logo-header">
                  <div class="logo-header-inner logo-header-one">
                    <Link to="/home">
                      <img src="./paasa-logo.png" alt="" />
                    </Link>
                  </div>
                </div>

                {/* <!-- NAV Toggle Button --> */}
                <button
                  id="mobile-side-drawer"
                  data-target="#header-nav"
                  data-toggle="collapse"
                  type="button"
                  aria-controls="header-nav"
                  class="navbar-toggler collapsed"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar icon-bar-first"></span>
                  <span class="icon-bar icon-bar-two"></span>
                  <span class="icon-bar icon-bar-three"></span>
                </button>

                {/* <!-- MAIN Vav --> */}
                <div
                  id="header-nav"
                  class="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center"
                >
                  <ul class=" nav navbar-nav">
                    <li>
                      <Link to="/">About PASSA</Link>{" "}
                    </li>
                    <li>
                      <Link to="/">Management committee</Link>
                    </li>
                    <li>
                      <Link to="/">COVID 19 info</Link>
                    </li>
                    <li>
                      <Link to="/">News and Events</Link>
                    </li>
                    <li>
                      <Link to="/communityVehicle">Book a Vehicle</Link>
                    </li>
                  </ul>
                </div>

                {/* <!-- Header Right Section--> */}
                <div class="extra-nav header-2-nav">
                  <button className="btn btn-outline-gray">Join Us</button>

                  <button className="btn btn-green ">$ Donate us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- HEADER END --> */}
    </>
  );
};

export default AppBar;
