import React from "react";
import banner from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <section
      style={{
        background: `url(${banner})`,
      }}
      className="p-32"
    >
      <div>
        <h2 className="text-2xl font-mono text-white font-bold">
          Best Carpenter's Company
        </h2>
        <h2 className="text-4xl text-primary my-4 font-bold">
          PROFESSIONAL & QUANTITY <br /> CARPENTER SERVICE
        </h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
          doloremque.
        </p>
        <button className="btn btn-primary  mt-3 ">Read more</button>
      </div>
    </section>
  );
};

export default Banner;
