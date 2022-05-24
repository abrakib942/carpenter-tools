import React from "react";

import Banner from "./Banner";
import ExtraOne from "./ExtraOne";
import ExtraTwo from "./ExtraTwo";
import Reviews from "./Reviews";
import Summary from "./Summary";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tools />
      <ExtraOne />
      <Summary />
      <ExtraTwo />
      <Reviews />
    </div>
  );
};

export default Home;
