import React from "react";

const slider3D = () => {
  return (
    <div className="header-slider">
      <label htmlFor="s1" id="slider1">
        <img src="./header/slide1.png" alt="" />
      </label>
      <label htmlFor="s2" id="slider2">
        <img src="./header/slide2.png" alt="" />
      </label>
      <label htmlFor="s3" id="slider3">
        <img src="./header/slide3.png" alt="" />
      </label>
      <input type="radio" name="slider" id="s1" />
      <input type="radio" name="slider" id="s2" />
      <input type="radio" name="slider" id="s3" />
    </div>
  );
};

export default slider3D;
