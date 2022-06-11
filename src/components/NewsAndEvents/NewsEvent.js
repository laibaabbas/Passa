import React from "react";

import AppBar from "../../commonComponents/AppBar";
import PastEvents from "./PastEvents";
import ReserveTicket from "./ReserveTicket";
import UpEvents from "./UpEvents";
const NewsEvent = () => {
  return (
    <>
      <AppBar />
      <section className="p-t100 ">
        <div className=" m-t40  m-b60">
          <div className="container-lg">
            <div className="banner-title-name p-tb20">
              <h2 className="wt-title">Sufi Nights by PAASA</h2>
            </div>

            <div className="banner-image event-overlay ">
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

            <div className="row">
              <div className="col-md-9 m-t40  ">
                <div className="para m-r50">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. .Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                </div>
              </div>
              <div className="col-md-3">
                <div className="ticket-det">
                  <div className="pricePerPersone">
                    <span className="price">$20</span>
                    <span className="per">/Person</span>
                  </div>
                  {/* <button className="btn btn-green res-ticket">
                    Reserve your ticket
                  </button> */}
                  <ReserveTicket />
                  <div className="ava-ticket">23 Seats Available</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="green-text show-time">
                August 28, 2021 @ 4:00 pm - 10:00 pm
              </div>
            </div>
          </div>
        </div>

        <UpEvents />
        <PastEvents />
      </section>
    </>
  );
};

export default NewsEvent;
