import React, { useState } from "react";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const cardDate = [
  {
    img: "./home/slider-card.png",
    date: "13",
    month: "AUG",
    year: "2022",
    title: "Sufi Nights by PAASA",
    para: "Indulge in the Passionate and Entrancing beats of Sufi Music and enjoy the delectable taste of Pakistani Cuisine for Dinner. Live Sufi Music by Farhan Shan & Brothers, Melodious songs...",
    timing: "August 28, 2021 @ 4:00 pm - 10:00 pm",
  },
  {
    img: "./home/slider-card.png",
    date: "13",
    month: "AUG",
    year: "2022",
    title: "Sufi Nights by PAASA",
    para: "Indulge in the Passionate and Entrancing beats of Sufi Music and enjoy the delectable taste of Pakistani Cuisine for Dinner. Live Sufi Music by Farhan Shan & Brothers, Melodious songs...",
    timing: "August 28, 2021 @ 4:00 pm - 10:00 pm",
  },
  {
    img: "./home/slider-card.png",
    date: "13",
    month: "AUG",
    year: "2022",
    title: "Sufi Nights by PAASA",
    para: "Indulge in the Passionate and Entrancing beats of Sufi Music and enjoy the delectable taste of Pakistani Cuisine for Dinner. Live Sufi Music by Farhan Shan & Brothers, Melodious songs...",
    timing: "August 28, 2021 @ 4:00 pm - 10:00 pm",
  },
  {
    img: "./home/slider-card.png",
    date: "13",
    month: "AUG",
    year: "2022",
    title: "Sufi Nights by PAASA",
    para: "Indulge in the Passionate and Entrancing beats of Sufi Music and enjoy the delectable taste of Pakistani Cuisine for Dinner. Live Sufi Music by Farhan Shan & Brothers, Melodious songs...",
    timing: "August 28, 2021 @ 4:00 pm - 10:00 pm",
  },
  {
    img: "./home/slider-card.png",
    date: "13",
    month: "AUG",
    year: "2022",
    title: "Sufi Nights by PAASA",
    para: "Indulge in the Passionate and Entrancing beats of Sufi Music and enjoy the delectable taste of Pakistani Cuisine for Dinner. Live Sufi Music by Farhan Shan & Brothers, Melodious songs...",
    timing: "August 28, 2021 @ 4:00 pm - 10:00 pm",
  },
];
const NewEvents = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow arrow-next" onClick={onClick}>
        <ArrowForwardIosIcon />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow arrow-prev" onClick={onClick}>
        <ArrowBackIosNewIcon />
      </div>
    );
  };
  const settings = {
    infinity: true,
    lazyload: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <section>
        <div className="container-lg">
          <div className="wt-bnr-inr m-t120">
            <div className="home-title-name p-tb10 left-green">
              <h1 className="wt-title">Community News & Events</h1>
            </div>
          </div>
          <div className="card-slider-bg">
            <div className="blue-cut"></div>
            <div className="card-slider">
              <Slider {...settings}>
                {cardDate.map((val, index) => {
                  return (
                    <>
                      <div class="card">
                        <img src={val.img} class="card-img-top" alt={index} />
                        <div class="card-img-overlay ">
                          <div className="card-date">
                            <b>13</b>
                            <span className="month">{val.month} </span>
                            <span className="year">{val.year} </span>
                          </div>
                          <h5 className="card-tille"> {val.title}</h5>
                        </div>
                        <div class="card-body">
                          <p class="card-text">{val.para}</p>
                          <hr />
                          <a href="/" class="card-time">
                            {val.timing}
                          </a>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewEvents;
