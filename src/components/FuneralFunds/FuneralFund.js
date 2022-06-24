import React from "react";
import AppBar from "../../commonComponents/AppBar";

const FuneralFund = () => {
  return (
    <>
      <AppBar />
      <section className="m-t120 ">
        <div className="wt-bnr-inr m-b20  p-t90">
          <div className="container-lg">
            <div className="banner-title-name  ">
              <h1 className="wt-title">Funeral Funds Donation</h1>
            </div>
            <div className="para m-t30">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. .
              </p>
              <p className="funeral-form-link">
                <a href="/">Click here to download funeral form</a>
              </p>
            </div>

            <div className="banner-mid-image m-tb30">
              <img
                className="rounded"
                src="./donation/Funeral-Fund1.jpeg"
                alt=" Funeral Fund Banner"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FuneralFund;
