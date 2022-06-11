import React from "react";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const cardDate = [
  {
    img: "./NewsAndEvents/card-bg.jpeg",
    date: "13",
    month: "AUG",
    year: "2022",
    title: "Sufi Nights by PAASA",
    para: "Indulge in the Passionate and Entrancing beats of Sufi Music and enjoy the delectable taste of Pakistani Cuisine for Dinner. Live Sufi Music by Farhan Shan & Brothers, Melodious songs...",
    timing: "August 28, 2021 @ 4:00 pm - 10:00 pm",
  },
  {
    img: "./NewsAndEvents/card-bg.jpeg",
    date: "13",
    month: "AUG",
    year: "2022",
    title: "Sufi Nights by PAASA",
    para: "Indulge in the Passionate and Entrancing beats of Sufi Music and enjoy the delectable taste of Pakistani Cuisine for Dinner. Live Sufi Music by Farhan Shan & Brothers, Melodious songs...",
    timing: "August 28, 2021 @ 4:00 pm - 10:00 pm",
  },
  {
    img: "./NewsAndEvents/card-bg.jpeg",
    date: "13",
    month: "AUG",
    year: "2022",
    title: "Sufi Nights by PAASA",
    para: "Indulge in the Passionate and Entrancing beats of Sufi Music and enjoy the delectable taste of Pakistani Cuisine for Dinner. Live Sufi Music by Farhan Shan & Brothers, Melodious songs...",
    timing: "August 28, 2021 @ 4:00 pm - 10:00 pm",
  },
  {
    img: "./NewsAndEvents/card-bg.jpeg",
    date: "13",
    month: "AUG",
    year: "2022",
    title: "Sufi Nights by PAASA",
    para: "Indulge in the Passionate and Entrancing beats of Sufi Music and enjoy the delectable taste of Pakistani Cuisine for Dinner. Live Sufi Music by Farhan Shan & Brothers, Melodious songs...",
    timing: "August 28, 2021 @ 4:00 pm - 10:00 pm",
  },
  {
    img: "./NewsAndEvents/card-bg.jpeg",
    date: "13",
    month: "AUG",
    year: "2022",
    title: "Sufi Nights by PAASA",
    para: "Indulge in the Passionate and Entrancing beats of Sufi Music and enjoy the delectable taste of Pakistani Cuisine for Dinner. Live Sufi Music by Farhan Shan & Brothers, Melodious songs...",
    timing: "August 28, 2021 @ 4:00 pm - 10:00 pm",
  },
];
const PastEvents = () => {
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
      <div className="container-lg">
        <div className="wt-bnr-inr ">
          <div className="banner-title-name p-t10 ">
            <h2 className="wt-title">Past Events</h2>
          </div>
        </div>
        <div className=" event-card-bg">
          {/* <div className="blue-cut"></div> */}
          <div className="card-slider ">
            <Slider {...settings}>
              {cardDate.map((val, index) => {
                return (
                  <>
                    <div class="card">
                      <img src={val.img} class="card-img-top" alt={index} />
                      <div class="card-img-overlay ">
                        <div className="card-date">
                          <span className="date">13</span>
                          <span className="month">{val.month} </span>
                          <span className="year">{val.year} </span>
                        </div>
                        <h6 className="card-tille"> {val.title}</h6>
                      </div>
                      <div class="card-body event-cBody ">
                        <p class="card-text event-text text-left">{val.para}</p>
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
    </>
  );
};

export default PastEvents;
