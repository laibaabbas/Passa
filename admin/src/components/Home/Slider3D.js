import React, { useState } from "react";
import Slider from "react-slick";

const images = [
  {
    img: "./header/slide1.png",
  },
  {
    img: "./header/slide2.png",
  },
  {
    img: "./header/slide3.png",
  },
  {
    img: "./header/slide1.png",
  },
  {
    img: "./header/slide3.png",
  },
];
const Slider3D = () => {
  const [ImageIndex, setImageIndex] = useState(0);
  const settings = {
    infinity: true,
    lazyload: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    dots: true,
    arrows: false,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <>
      <div className="header-slider">
        <Slider {...settings}>
          {images.map((value, index) => {
            return (
              <div
                key={index}
                className={index === ImageIndex ? "slide activeSlide" : "slide"}
              >
                <img src={value.img} alt={value.img} />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Slider3D;
