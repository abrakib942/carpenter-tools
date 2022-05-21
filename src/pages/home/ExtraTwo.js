import React from "react";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import blog4 from "../../assets/blog4.png";

const ExtraTwo = () => {
  return (
    <div>
      <p className="text-center text-accent text-xs">LATEST WOOD WORK NEWS</p>
      <h2 className="text-3xl font-bold text-center">Carpenters Blog</h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 px-16 mt-16">
        <div class="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src={blog1} alt="Shoes" />
          </figure>
          <div class="card-body">
            <small className="font-bold"> By Abdullah, April 16, 2022 </small>
            <h2 class="card-title">
              {" "}
              A luxury custom home builder new home remodeling{" "}
            </h2>
            <div class="card-actions justify-start">
              <button class="btn btn-outline btn-accent">View more</button>
            </div>
          </div>
        </div>

        <div class="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src={blog2} alt="Shoes" />
          </figure>
          <div class="card-body">
            <small className="font-bold"> By Murtaza, April 28, 2022 </small>
            <h2 class="card-title">
              {" "}
              Dedicated to offering the highest quality furniture{" "}
            </h2>
            <div class="card-actions justify-start">
              <button class="btn btn-outline btn-accent">View more</button>
            </div>
          </div>
        </div>

        <div class="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src={blog3} alt="Shoes" />
          </figure>
          <div class="card-body">
            <small className="font-bold"> By Zayed, May 4, 2022 </small>
            <h2 class="card-title">
              {" "}
              Tackling a wide variety of construction with plywood
            </h2>
            <div class="card-actions justify-start">
              <button class="btn btn-outline btn-accent">View more</button>
            </div>
          </div>
        </div>

        <div class="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src={blog4} alt="Shoes" />
          </figure>
          <div class="card-body">
            <small className="font-bold"> By Usman, May 18, 2022 </small>
            <h2 class="card-title">
              {" "}
              Your ideas crafted with precision and detail in wood
            </h2>
            <div class="card-actions justify-start">
              <button class="btn btn-outline btn-accent">View more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraTwo;
