import React from "react";

const cardData = [
  {
    bgImg: "./ManagementCommittee/card-bg.png",
    PicImg: "./ManagementCommittee/pic.png",
    name: "Naseem Khokhar",
    title: "Chairperson",
  },
  {
    bgImg: "./ManagementCommittee/card-bg.png",
    PicImg: "./ManagementCommittee/pic.png",
    name: "Naseem Khokhar",
    title: "Chairperson",
  },
  {
    bgImg: "./ManagementCommittee/card-bg.png",
    PicImg: "./ManagementCommittee/pic.png",
    name: "Naseem Khokhar",
    title: "Chairperson",
  },
  {
    bgImg: "./ManagementCommittee/card-bg.png",
    PicImg: "./ManagementCommittee/pic.png",
    name: "Naseem Khokhar",
    title: "Chairperson",
  },
];
const ManagementCards = () => {
  return (
    <>
      <div className="m-tb30">
        <div className="container">
          <div className="row">
            {cardData.map((val, index) => {
              return (
                <>
                  <div key={index} className="col-md-3 ">
                    <div class="card shadow mc-card border-0">
                      <img
                        src={val.bgImg}
                        class="card-img-top mc-bg-img"
                        alt={index}
                      />
                      <div class="card-img-overlay ">
                        <img className="mc-pic" src={val.PicImg} alt="" />
                      </div>
                      <div class="card-body text-center">
                        <p class=" mc-name">{val.name}</p>
                        <a href="/" class="green-text">
                          {val.title}
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagementCards;
