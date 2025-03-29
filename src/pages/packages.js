import React from "react";
import PackagesHero from "../sections/packagesHero";
import PackagesPrice from "../sections/packagesPrice";
import PackagesAddOns from "../sections/packagesAddOns";

const Home = () => {
  return (
    <div>
      <PackagesHero />
      <PackagesPrice />
      <PackagesAddOns />
    </div>
  );
};

export default Home;
