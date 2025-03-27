import React from "react";
import HomeHero from "../sections/homeHero";
import Who from "../sections/who";
import What from "../sections/what";
import How from "../sections/how";
import HomeCTA from "../sections/homeCta";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <Who />
      <What />
      <How />
      <HomeCTA />
    </div>
  );
};

export default Home;
