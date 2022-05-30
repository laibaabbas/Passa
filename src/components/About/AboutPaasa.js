import AppBar from "../../commonComponents/AppBar";
const AboutPaasa = () => {
  return (
    <>
      <AppBar />
      <section className="p-t120 ">
        <div className="wt-bnr-inr m-b20 ">
          <div className="container-lg">
            <div className="banner-title-name p-tb10">
              <h1 className="wt-title">Community Vehicle</h1>
            </div>

            <div className="banner-image">
              <img className="rounded" src="./vehicles/header-car.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="page-contant">
          <div className="container-lg">
            <div className="para">
              <p>
                Pakistan Australian Association of South Australia (PAASA) was
                formed in 1984 by a small group of people from Pakistani origin
                in Adelaide such as Mr Shamim Noori and his family, Khalid
                Farooqi and Rukhsana Farooqi, Mr Ashraf Choudhry and his family,
                Dr A. Farooque and Roshan Farooque . Mr Shamim Noori was elected
                as the first President of PAASA, Masood Chaudhry (Vice
                President), Dr. Farooque (Treasurer) and Khalid Farooqui
                (Secretary). In 1986 the second President of PAASA’s was
                elected, Dr Farooque. Due to the contribution of our founder
                members the Pakistani Australian Association of SA has greatly
                flourished and provided the community a platform where Pakistani
                families can get to gather and celebrate special occasions.
                Serving the Pakistanis / Pakistani Australian community is the
                Association’s main charter and evolving it to provide better
                services to the community.
              </p>
            </div>
            <div className="para">
              <b className="green-text">Mission and Goals</b>
              <p>
                PAASs mission is to promote Pakistani culture and values within
                an integrated and connected Australian community and continue to
                be a part of multicultural and ethnic society of South
                Australia.
              </p>
            </div>
            <div className="para">
              <b className="green-text">PAASA’s primary goals are:</b>
              <p>
                To promote Pakistani cultural and linguistic diversity.
                <br />
                To encourage participation in community volunteer and charitable
                activities
                <br />
                To increase awareness about Pakistan and Pakistani culture in
                the local community
                <br />
                To promote leadership, volunteerism, sports, and educational
                activities for its youth members
              </p>
            </div>
            <div className="wt-bnr-inr">
              <div className="home-title-name p-tb10">
                <h1 className="wt-title">Urdu School</h1>
              </div>
            </div>{" "}
            <div className="row">
              <div className="col-xl-7">
                <div className="home-para">
                  <p>
                    Ethnic School Association of SA runs Language and Culture
                    Schools in South Australia under the governance of
                    Department of Education. The basic purpose of language
                    school is to value the learning of community languages both
                    educationally and socially to enhance and develop young
                    people's bilingual/multilingual literacies, intercultural
                    capabilities and identities. PAASA used to run Urdu School
                    for Pakistani community kids in Adelaide from 1990s till
                    2012. Structure of Urdu School includes school
                    administration and academic committee to manage and run the
                    school effectively under the constitution. Parents and other
                    community members are part of these committees to run the
                    school. School needs to run after hours for at least 2 hours
                    a week. We are in the process of opening the Urdu School
                    again for our kids. If you want to register your interest
                    for the school management or academic committee, please
                    contact PAASA management committee.
                  </p>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="side-img">
                  <img src="./home/vaccine.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPaasa;
