import React from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const UrduSchool = () => {
  return (
    <>
      <section>
        <div className="container-lg">
          <div className="row">
            <div className="col-xl-7">
              <div className="wt-bnr-inr">
                <div className="home-title-name p-tb10">
                  <h1 className="wt-title">Urdu School</h1>
                </div>
                <div className="home-para">
                  <p>
                    Ethnic School Association of SA runs Language and Culture
                    Schools in South Australia under the governance of
                    Department of Education. The basic purpose of language
                    school is to value the learning of community languages both
                    educationally and socially to enhance and develop young
                    people's bilingual/multilingual literacies, intercultural
                    capabilities and identities. PAASA used to run Urdu School
                    for Pakistani community kids in Adelaide from 1990s till
                    2012. Structure of Urdu School includes school
                    administration and academic committee to manage and run the
                    school effectively under the constitution. Parents and other
                    community members are part of these committees to run the
                    school. School needs to run after hours for at least 2 hours
                    a week. We are in the process of opening the Urdu School
                    again for our kids. If you want to register your interest
                    for the school management or academic committee, please
                    contact PAASA management committee.
                  </p>
                </div>
                <div className="info-link">
                  <a href="/">
                    See more information <ArrowForwardIcon />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="side-img">
                <img src="./home/vaccine.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UrduSchool;
