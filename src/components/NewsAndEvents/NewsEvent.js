import React from "react";

import AppBar from "../../commonComponents/AppBar";
const NewsEvent = () => {
  return (
    <>
      <AppBar />
      <section className="p-t120 ">
        <div className=" m-tb20">
          <div className="container-lg">
            <div className="banner-title-name p-tb20">
              <h2 className="wt-title">Sufi Nights by PAASA</h2>
            </div>

            <div className="banner-image event-overlay">
              <img
                className="rounded "
                src="./NewsAndEvents/Nusrat-Fateh-Al.jpeg"
                alt=""
              />
              <div class="event-date">
                <b className="date">13</b>
                <span className="month">AUG</span>
                <span className="year">2022 </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsEvent;
