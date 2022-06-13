import React from "react";

import AppBar from "../../commonComponents/AppBar";
import ExecutiveCards from "./ExecutiveCards";
import ManagementCards from "./ManagementCards";
import VolunteersCards from "./VolunteersCards";
const ManagementCommittee = () => {
  return (
    <>
      <AppBar />
      <section className="m-t100">
        <div className="wt-bnr-inr  p-t100">
          <div className="container-lg">
            <div className="banner-title-name m-t40">
              <h1 className="wt-title">Management committee</h1>
            </div>
            <div className="para">
              <p>
                Volunteer community social work is a challenging job which
                require high levels of motivation and commitment. PAASA
                management committee is elect by the financial members for every
                two year in the AGM. Management committee then further choose
                their executive committee members who run different portfolios.
                We are highly motivated and dynamic team committed to represent
                our community in an exemplary way. We are constantly working to
                improve our services to the community and to further strengthen
                our relations with other multicultural community organizations.
              </p>
              <b className="green-text">
                PAASA has elected a new management committee on April 10, 2021
              </b>
            </div>
          </div>
        </div>

        <ManagementCards />
        <div className="wt-bnr-inr  ">
          <div className="container-lg">
            <div className="banner-title-name">
              <h1 className="wt-title">Executive committee</h1>
            </div>
            <div className="para ">
              <p>
                If you are passionate about community work then PAASA welcomes
                you to join us as executive member and be the part of team in
                any of the following portfolio, New Migrants Assistance, Women
                representative, Sports, Urdu School, Funeral Fund Program,
                Community Liaison, Student representative and Business and trade
                liaison.
              </p>
            </div>
          </div>
        </div>
        <ExecutiveCards />
        <div className="wt-bnr-inr  ">
          <div className="container-lg">
            <div className="banner-title-name">
              <h1 className="wt-title">Volunteers</h1>
            </div>
            <div className="para">
              <p>
                We organize different social and cultural programs for the
                community. Pakistan Day, Eid -al-Fiter, Eid -al-Adha, Pakistan
                Independence Day, Community BBQ Picnic and Australia Day are our
                fixed events. Besides these events we also organize new migrants
                meet and greet sessions, one dish parties and small gatherings.
                We are always in need of volunteers to come help us in
                organizing these community events. If you love to take pride in
                volunteer work please let us know.
              </p>
            </div>
          </div>
        </div>
        <VolunteersCards />
      </section>
    </>
  );
};

export default ManagementCommittee;
