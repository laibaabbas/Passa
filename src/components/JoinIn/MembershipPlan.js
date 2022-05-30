import React from "react";
import { Link } from "react-router-dom";
import AppBar from "../../commonComponents/AppBar";

const MembershipPlan = () => {
  const priceCards = [
    {
      head: "Family with Children",
      text: "Access until Thu Jun 30, 2022",
      price: "$50",
      btn: "Become a member",
    },
    {
      head: "Couple",
      text: "Access until Thu Jun 30, 2022",
      price: "$30",
      btn: "Become a member",
    },
    {
      head: "Single/Student",
      text: "Access until Thu Jun 30, 2022",
      price: "$20",
      btn: "Become a member",
    },
    {
      head: "Lifetime",
      link: "https://paasa.org.au/wp-content/uploads/2020/06/21.-Lifetime-Membership-Policy.pdf",
      price: "Free",
      btn: "Become a member",
    },
    {
      head: "New Arrivals",
      text: "Free for 3 months",
      price: "Free",
      btn: "Become a member",
    },
  ];
  return (
    <>
      <AppBar />
      <section className="p-t80 membership-plan">
        <div className="wt-bnr-inr  ">
          <div className="container-lg">
            <div className="banner-nav">
              <Link to="/SignUp"> Create account </Link>
              <i className="	fa fa-angle-left"></i>
              <span className="green-text">Chose membership plan</span>
            </div>
            <div className="banner-title-name m-t40">
              <h1 className="wt-title">Membership Benifits</h1>
            </div>
            <div className="home-para">
              <p>
                Preference will be given to Members & Member’s Kids for all
                Cultural Programmes & Events. Member’s kids get exclusive access
                to youth committee and youth activities. Inculcate a spirit of
                friendship, harmony and cooperation with all other Pakistani
                associations in South Australia particularly and other
                communities in Australia in general for welfare of the
                community. Access to special Developmental Initiatives &
                Community Service Activities and enhance Leadership qualities in
                Youth Committee members.
              </p>
            </div>
          </div>
        </div>
        <div className="wt-bnr-inr  ">
          <div className="container-lg">
            <div className="banner-title-name">
              <h1 className="wt-title">Membership Type</h1>
            </div>
            <div className="home-para ">
              <p>
                Membership per Family per Year (Jun –July) includes not only
                family members but their visiting Parents as well. Excellent
                Networking opportunity for members to touch-base with largest
                Pakistani community across South Australian region. Tools
                provided exclusively to members. Opportunity to celebrate major
                Pakistani events with the community. Special discounted prices
                for Members at sponsored vendor businesses and PAASA social
                events.
              </p>
            </div>
          </div>
        </div>
        <div className="wt-bnr-inr  ">
          <div className="container-lg">
            <div className="banner-title-name">
              <h1 className="wt-title">Chose membership plan</h1>
              <div className="membership-cards">
                <div className="row">
                  {priceCards.map((value, index) => {
                    return (
                      <>
                        <div className="col-xl-4 col-sm-6 col-12" key={index}>
                          <div class="card text-center">
                            <div class="card-header shadow-sm">
                              {value.head}
                            </div>
                            <div class="card-body">
                              {index === 3 ? (
                                <div className="card-link">{value.link} </div>
                              ) : (
                                <p class="card-title">{value.text}</p>
                              )}

                              <div className="card-price"> {value.price} </div>
                              <button className="btn btn-green ">
                                <Link to="/MemberDetail">{value.btn}</Link>
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MembershipPlan;
