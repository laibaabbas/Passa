import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const CovidVaccInfo = () => {
  return (
    <>
      <section>
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div
                className="side-image"
                style={{ backgroundImage: "url(./home/Covid-bg.png)" }}
              >
                <img className="topLeft-img" src="./home/Covid.png" alt="" />
                <img
                  className="bottomRight-img"
                  src="./home/vaccine.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="wt-bnr-inr m-t50">
                <div className="home-title-name p-tb10">
                  <h1 className="wt-title">COVID 19 Vaccinations info</h1>
                </div>
                <div className="home-para">
                  <p>
                    This was Dr Ashfaque Ahmed who came to Australia in 1962 in
                    Sydney and then moved to Adelaide to work in The Royal
                    Adelaide hospital in 1965, decided to start a Pakistani
                    Association. His idea finally came into existence in 1967
                    with the name as Australian Pakistani Association. Dr.
                    Ashfaque Ahmed was the first President with Vice President
                    Captain Sabir Shah of the Pakistani Army, and treasurer Mr.
                    Azhar Jamal Minhas from Lahore. Later in 1984 that
                    association become Pakistani Australian Association of SA-
                    PAASA with Mr. Shamim Noori as President,
                  </p>
                </div>
                <div className="info-link">
                  <a href="/">
                    See more information <ArrowForwardIcon />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CovidVaccInfo;
