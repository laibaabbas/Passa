import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SportsPrograms = () => {
  return (
    <>
      <section>
        <div className="container-lg m-tb40">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="sport-bg-img"
                style={{ backgroundImage: "url(./home/sport-bg.png)" }}
              >
                <img src="./home/sports2.png" alt="" className="lower-right" />
                <img src="./home/sports1.png" alt="" className="upper-left" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="wt-bnr-inr m-t50">
                <div className="home-title-name p-tb10">
                  <h2 className="wt-title">Community Sports Programs</h2>
                </div>
              </div>
              <div className="home-para">
                <p>
                  This was Dr Ashfaque Ahmed who came to Australia in 1962 in
                  Sydney and then moved to Adelaide to work in The Royal
                  Adelaide hospital in 1965, decided to start a Pakistani
                  Association. His idea finally came into existence in 1967 with
                  the name as Australian Pakistani Association. Dr. Ashfaque
                  Ahmed was the first President with Vice President Captain
                  Sabir Shah of the Pakistani Army, and treasurer Mr. Azhar
                  Jamal Minhas from Lahore. Later in 1984 that association
                  become Pakistani Australian Association of SA- PAASA with Mr.
                  Shamim Noori as President,
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
      </section>
    </>
  );
};

export default SportsPrograms;
