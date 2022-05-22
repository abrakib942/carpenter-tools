import React from "react";

import Banner from "./Banner";
import ExtraOne from "./ExtraOne";
import ExtraTwo from "./ExtraTwo";
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
    </div>
  );
};

export default Home;
