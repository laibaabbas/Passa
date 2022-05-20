import React, { useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

const AppBar = () => {
  function meanuToggle() {
    $("#mobile-side-drawer").on("click", function () {
      $(".mobile-sider-drawer-menu").toggleClass("active");
    });
  }
  // function ToggleNav() {
  //   document
  //     .getElementById("mobile-side-drawer")
  //     .addEventListener("click", toggleSidenav);
  // }
  // function toggleSidenav() {
  //   document
  //     .querySelector(".mobile-sider-drawer-menu")
  //     .classList.toggleClass("active");
  // }
  // $(window).scroll(function () {
  //   var scroll = $(window).scrollTop();
  //   if (scroll > 100) {
  //     $(".main-bar").css("background", "#ffffff");
  //   } else {
  //     $(".main-bar").css("background", "transparent");
  //   }
  // });
  // const [navbar, setNavbar] = useState(false)
  // const changeBackground = () => {
  //   console.log(window.scrollY)
  //   if (window.scrollY >= 66) {
  //     setNavbar(true)
  //   } else {
  //     setNavbar(false)
  //   }
  // }
  const [ColorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      {/* <!-- HEADER START --> */}
      <header className="site-header header-style-3 mobile-sider-drawer-menu ">
        <div className="sticky-wrapper" style={{ height: "90px;" }}>
          <div className="is-fixed main-bar-wraper navbar-expand-lg sticky-header">
            <div
              className={
                ColorChange ? "main-bar  color-fill" : "main-bar shadow"
              }
            >
              <div className="container-fluid clearfix">
                <div className="logo-header">
                  <div className="logo-header-inner logo-header-one">
                    <Link to="/">
                      <img src="./paasa-logo.png" alt="" />
                    </Link>
                  </div>
                </div>

                {/* <!-- NAV Toggle Button --> */}
                <button
                  onClick={meanuToggle}
                  id="mobile-side-drawer"
                  data-target="#header-nav"
                  data-toggle="collapse"
                  type="button"
                  aria-controls="header-nav"
                  className="navbar-toggler collapsed"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar icon-bar-first"></span>
                  <span className="icon-bar icon-bar-two"></span>
                  <span className="icon-bar icon-bar-three"></span>
                </button>

                {/* <!-- MAIN Vav --> */}
                <div
                  id="header-nav"
                  className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center"
                >
                  <ul className=" nav navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        About PASSA
                      </Link>{" "}
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Management committee
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        News and Events
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        COVID 19 info
                      </Link>
                    </li>
                    <li className="nav-item ">
                      <Link className="nav-link active" to="/BookVehicle">
                        Book a Vehicle
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* <!-- Header Right Section--> */}
                <div className="extra-nav header-2-nav">
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
