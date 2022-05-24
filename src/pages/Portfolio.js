import React from "react";

const Portfolio = () => {
  return (
    <div className="text-center h-screen">
      <h2 className="text-3xl text-center text-orange-500 my-12 font-bold">
        My Portfolio
      </h2>
      <p>Name: Abu Bakar Rakib</p>
      <p>Email: abrakib942@gmail.com</p>

      <h2 className="text-xl font-bold mt-4">Skills:</h2>
      <p>
        HTML5, Css3, Bootstrap, Tailwind css, Javascript, ES6, React, React
        Router, Nodejs, Express js, MongoDB
      </p>
      <h2 className="text-xl font-bold mt-4">Live Websites:</h2>
      <p>
        1.{" "}
        <a href="https://grocery-store-cbc0a.web.app/">
          https://grocery-store-cbc0a.web.app/
        </a>
      </p>
      <p>
        2.{" "}
        <a href="https://sports-photographer-815dd.web.app/">
          https://sports-photographer-815dd.web.app/
        </a>
      </p>
      <p>
        3.{" "}
        <a href="https://lucky-one-ab.netlify.app/">
          https://lucky-one-ab.netlify.app/
        </a>
      </p>
    </div>
  );
};

export default Portfolio;
