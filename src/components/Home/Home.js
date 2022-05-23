import React from "react";
import AdsBanner from "./AdsBanner";
import CovidVaccInfo from "./CovidVaccInfo";
import Header from "./Header";
import HomeNav from "./HomeNav";
import NewEvents from "./NewEvents";
import SportsPrograms from "./SportsPrograms";
import StrategicObjective from "./StrategicObjective";
import UrduSchool from "./UrduSchool";
import WelcomToPaasa from "./WelcomToPaasa";

const Home = () => {
  return (
    <>
      <HomeNav />
      <Header />
      <WelcomToPaasa />
      <CovidVaccInfo />
      <AdsBanner />
      <UrduSchool />
      <NewEvents />
      <SportsPrograms />
      <StrategicObjective />
    </>
  );
};

export default Home;
