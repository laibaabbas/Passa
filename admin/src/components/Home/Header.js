import React from "react";
import Slide3D from "./Slider3D";

const Header = () => {
  return (
    <>
      <div className="home-header">
        <div
          className="overlay-wapper "
          style={{ backgroundImage: "url(./header/bg-img.jpeg)" }}
        >
          {/* <img src="./header/bg-img.jpeg" className="header-bg-img" alt="" /> */}
          <div className="container-lg h-100">
            <div className="row h-100 d-flex align-self-center ">
              <div className="col-lg-6">
                <div className="header-contant">
                  <span className="small-text">WELCOME TO PASA</span>

                  <h1>
                    <div className="main-heading">
                      COMMUNITY CULTURE IN AUSTRALIA
                    </div>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer is simply dummy
                    text of the <br /> adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt{" "}
                  </p>
                  <a href="/" className="btn btn-green header-btn">
                    Meet with Pakistani community
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <Slide3D />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
