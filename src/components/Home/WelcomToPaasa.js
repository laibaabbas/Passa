import React from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const WelcomToPaasa = () => {
  return (
    <>
      <section>
        <div className="container-lg">
          <div className="wt-bnr-inr">
            <div className="home-title-name p-t10">
              <h1 className="wt-title">Welcome to PAASA</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
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
                  Shamim Noori as President, Dr. Khalid Farooqi as Secretary and
                  Dr. Farooq as Treasurer.Since then PAASA has been representing
                  Pakistani community in South Australia on social and cultural
                  platforms and providing platform to the community members to
                  not only celebrate their events of significant importance but
                  also to showcase our ethnic diversity, unique culture and
                  social and religious values to the multicultural communities
                  in SA.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="side-img">
                <img src="./home/welcom3.avif" className="m-tb20" alt="" />
              </div>
            </div>
          </div>
          <div className="info-link">
            <a href="/">
              See more information <ArrowForwardIcon />
            </a>
          </div>
        </div>
        <div className="clippy">
          <div className="green-clip"></div>
          <div className="blue-clip"></div>
        </div>
      </section>
    </>
  );
};

export default WelcomToPaasa;
