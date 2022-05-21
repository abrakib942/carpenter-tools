import React from "react";
import banner2 from "../../assets/extra-banner.jpg";

const ExtraOne = () => {
  return (
    <section
      style={{
        background: `url(${banner2})`,
      }}
      className="p-36 my-16"
    >
      <div className="text-center text-white">
        <h2 className="text-xl font-mono  ">POWER TOOLS YOU SHOULD OWN</h2>
        <h2 className="text-3xl">
          ENJOY THE BEST QUALITY AND FEATURES MADE BY <br /> OUR TEAM
        </h2>
        <button className="btn btn-outline btn-primary my-3">View more</button>
      </div>
    </section>
  );
};

export default ExtraOne;
