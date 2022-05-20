import React from "react";

const Footer = () => {
  return (
    <>
      <footer className=" footer-dark m-t80">
        <div className="ftr-nw-ltr site-bg-white">
          <div className="ftr-nw-ltr-inner site-bg-primary">
            <div className="container-md">
              <div className="ftr-nw-content">
                <div className="ftr-nw-title">
                  <p>Are you ready to get our news letters?</p>
                </div>
                <div className="ftr-nw-form">
                  <form>
                    <input
                      name="news-letter"
                      className="form-control"
                      placeholder="Enter email address"
                      type="text"
                    />
                    <button className="ftr-nw-subcribe-btn  btn">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ftr-bg">
          {/* <!-- FOOTER BLOCKES START -->   */}
          <div className="footer-top">
            <div className="container-sm">
              <div className="row ">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className=" widget_about">
                    <div className="logo-footer clearfix">
                      <a href="/">
                        <img src="./paasa-logo.png" alt="" />
                      </a>
                    </div>
                    <p>
                      PAASA is a not for profit community <br /> organisation in
                      SA. We are united, trusted and progressing Pakistani
                      community in South Australia.
                    </p>
                  </div>
                </div>

                <div className="col-lg-2 col-sm-6 col-6 col-xs-12">
                  <div className="widget widget_services ftr-list-center">
                    <ul>
                      <li>
                        <a href="/" className="widget-title">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="/">About PASSA</a>
                      </li>
                      <li>
                        <a href="/">News and Events</a>
                      </li>
                      <li>
                        <a href="/">COVID 19 Ifo</a>
                      </li>
                      <li>
                        <a href="/BookVehicle">Book a Vehicle</a>
                      </li>
                      <li>
                        <a href="/">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 p-0 col-sm-6 col-6 col-xs-12">
                  <div className="widget widget_services ftr-list-center">
                    <ul>
                      <li>
                        <a href="/">Urdu School</a>
                      </li>
                      <li>
                        <a href="/">Meet the community</a>
                      </li>
                      <li>
                        <a href="/">Management committee</a>
                      </li>
                      <li>
                        <a href="/">Strategic Objectives</a>
                      </li>
                      <li>
                        <a href="/">Community Sports Programs</a>
                      </li>
                      <li>
                        <a href="/">Funeral funds</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="widget widget_services ftr-list-center">
                    <h3 className="widget-title-dark">
                      Find us on social media
                    </h3>
                    <ul className="social-icons">
                      <li>
                        <a href="/" className="fa fa-linkedin"></a>
                      </li>
                      <li>
                        <a href="/" className="fa fa-facebook-f"></a>
                      </li>
                      <li>
                        <a href="/" className="fa fa-twitter"></a>
                      </li>
                      <li>
                        <svg
                          className="insta-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          // width="27"
                          // height="27"
                          viewBox="0 0 50 50"
                          style={{ " fill": "#333333" }}
                        >
                          <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                        </svg>

                        {/* <a href="" className="fa fa-instagram"></a> */}
                      </li>
                      <li>
                        <a href="/" className="fa fa-youtube-play"></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- FOOTER COPYRIGHT --> */}

          <div className="footer-bottom">
            <div className="container">
              <div className="footer-bottom-info">
                <div className="footer-copy-right">
                  <span className="copyrights-text">
                    Paasa - Copyright 2019. Design by FutureSol
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
