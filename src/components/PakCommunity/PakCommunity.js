import React from "react";
import AppBar from "../../commonComponents/AppBar";
const membercard = [
  {
    img: "./CommunityMember/profile-pic.webp",
    heading: "PMASA - Pakistani Medical Association of South Australia",
    name: "President: Dr. Ayaz Ahmed",
    para: "Representing the growing number of Pakistani-Australian health professionals in South Australia, the Pakistani Medical Association of Association (PMASA) aims to provide support to enable members to successfully integrate into the Australian healthcare system. Established in 2011, PMASA has held various social and educational events, providing a platform for networking and facilitating community interaction.",
    gmail: "pakistanimedicalassociationsa@gmail.com",
    web: "www.pmasa.org.au",
  },
  {
    img: "./CommunityMember/profile-pic.webp",
    heading: "PMASA - Pakistani Medical Association of South Australia",
    name: "President: Dr. Ayaz Ahmed",
    para: "Representing the growing number of Pakistani-Australian health professionals in South Australia, the Pakistani Medical Association of Association (PMASA) aims to provide support to enable members to successfully integrate into the Australian healthcare system. Established in 2011, PMASA has held various social and educational events, providing a platform for networking and facilitating community interaction.",
    gmail: "pakistanimedicalassociationsa@gmail.com",
    web: "www.pmasa.org.au",
  },
  {
    img: "./CommunityMember/profile-pic.webp",
    heading: "PMASA - Pakistani Medical Association of South Australia",
    name: "President: Dr. Ayaz Ahmed",
    para: "Representing the growing number of Pakistani-Australian health professionals in South Australia, the Pakistani Medical Association of Association (PMASA) aims to provide support to enable members to successfully integrate into the Australian healthcare system. Established in 2011, PMASA has held various social and educational events, providing a platform for networking and facilitating community interaction.",
    gmail: "pakistanimedicalassociationsa@gmail.com",
    web: "www.pmasa.org.au",
  },
  {
    img: "./CommunityMember/profile-pic.webp",
    heading: "PMASA - Pakistani Medical Association of South Australia",
    name: "President: Dr. Ayaz Ahmed",
    para: "Representing the growing number of Pakistani-Australian health professionals in South Australia, the Pakistani Medical Association of Association (PMASA) aims to provide support to enable members to successfully integrate into the Australian healthcare system. Established in 2011, PMASA has held various social and educational events, providing a platform for networking and facilitating community interaction.",
    gmail: "pakistanimedicalassociationsa@gmail.com",
    web: "www.pmasa.org.au",
  },
  {
    img: "./CommunityMember/profile-pic.webp",
    heading: "PMASA - Pakistani Medical Association of South Australia",
    name: "President: Dr. Ayaz Ahmed",
    para: "Representing the growing number of Pakistani-Australian health professionals in South Australia, the Pakistani Medical Association of Association (PMASA) aims to provide support to enable members to successfully integrate into the Australian healthcare system. Established in 2011, PMASA has held various social and educational events, providing a platform for networking and facilitating community interaction.",
    gmail: "pakistanimedicalassociationsa@gmail.com",
    web: "www.pmasa.org.au",
  },
];
const PakCommunity = () => {
  return (
    <>
      <AppBar />
      <section className="m-t100">
        <div className="wt-bnr-inr  p-t80">
          <div className="container-lg">
            <div className="banner-title-name m-t30">
              <h1 className="wt-title">Meet the community</h1>
            </div>
            <p className="banner-title-description">
              Other Pakistani Organisations and Groups in SA
            </p>
          </div>
        </div>

        <div className="container-lg">
          <div className="row">
            {membercard.map((val, index) => {
              return (
                <>
                  <div className="col-lg-12">
                    <div class="card mb-4 shadow  community-card">
                      <div class="row">
                        <div class="col-md-3">
                          <img
                            src={val.img}
                            class=" card-profile-pic rounded"
                            alt="..."
                          />
                        </div>
                        <div class="col-md-9">
                          <div class="card-body">
                            <h4 class="card-heading">{val.heading}</h4>
                            <p class="member-name green-text ">{val.name}</p>
                            <p class="card-text para">{val.para}</p>
                            <div className="blue-link">
                              <a className="mail-link" href="/">
                                <img
                                  src="./CommunityMember/mail-icon.png"
                                  alt=""
                                  className="icon-img"
                                />
                                {val.gmail}
                              </a>
                              <a className="web-link" href="/">
                                <img
                                  src="./CommunityMember/web-icon.png"
                                  alt=""
                                  className="icon-img"
                                />
                                {val.web}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PakCommunity;
