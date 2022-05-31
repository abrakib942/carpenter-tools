import React from "react";
import banner2 from "../../assets/extra-banner.jpg";

const ExtraOne = () => {
  return (
    <section
      style={{
        background: `url(${banner2})`,
      }}
      className="lg:p-36 md:p-24 p-12 my-20"
    >
      <div
        data-aos="zoom-in-up"
        data-aos-delay="400"
        data-aos-duration="900"
        className="text-center text-white"
      >
        <h2 className="lg:text-xl text-sm font-mono  ">
          POWER TOOLS YOU SHOULD OWN
        </h2>
        <h2 className="lg:text-3xl">
          ENJOY THE BEST QUALITY AND FEATURES MADE BY <br /> OUR TEAM
        </h2>
        <button className="btn btn-outline btn-primary my-3">View more</button>
      </div>
    </section>
  );
};

export default ExtraOne;
