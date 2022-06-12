import React from "react";
import Footer from "../../commonComponents/Footer";
import Header from "./Header";
import HomeNav from "./HomeNav";
import WelcomToPaasa from "./WelcomToPaasa";

const Home = () => {
  return (
    <>
      <HomeNav />
      <Header />
      <WelcomToPaasa />
      <Footer />
    </>
  );
};

export default Home;
