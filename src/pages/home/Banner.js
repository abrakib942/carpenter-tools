import React from "react";
import banner from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <section
      style={{
        background: `url(${banner})`,
      }}
      className="p-12 lg:p-44 md:p-24"
    >
      <div>
        <h2
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="text-2xl font-mono text-white font-bold"
        >
          Best Carpenter's Company
        </h2>
        <h2
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="900"
          className="text-4xl text-primary my-4 font-bold"
        >
          PROFESSIONAL & QUANTITY <br /> CARPENTER SERVICE
        </h2>
        <p
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-duration="800"
          className="text-white"
        >
          Enjoy your Woodworking life with Carpenco. The best carpenter tools
          manufacturer.{" "}
        </p>
        <button className="btn btn-primary  mt-3 ">Read more</button>
      </div>
    </section>
  );
};

export default Banner;
