import React from "react";
import {
  ChartPieIcon,
  FlagIcon,
  ThumbUpIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";

const Summary = () => {
  return (
    <div className="mb-16 px-16">
      <h2 className="text-center text-3xl text-accent font-bold">
        MILLIONS BUSINESS TRUST US
      </h2>
      <div
        data-aos="fade-right"
        data-aos-delay="400"
        data-aos-duration="900"
        className="grid lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-8 my-10"
      >
        <div className="card card-compact w-52 bg-base-100 ">
          <figure>
            <FlagIcon className="h-24 w-24 text-primary" />
          </figure>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-accent">65+</h2>
            <p className="text-orange-500 font-bold">Countries</p>
          </div>
        </div>
        <div className="card card-compact w-52 bg-base-100 ">
          <figure>
            <ChartPieIcon className="h-24 w-24 text-primary" />
          </figure>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-accent">1200+</h2>
            <p className="text-orange-500 font-bold">Total Purchase</p>
          </div>
        </div>
        <div className="card card-compact w-52 bg-base-100 ">
          <figure>
            <UserGroupIcon className="h-24 w-24 text-primary" />
          </figure>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-accent">255+</h2>
            <p className="text-orange-500 font-bold">Happy Clients</p>
          </div>
        </div>
        <div className="card card-compact w-52 bg-base-100 ">
          <figure>
            <ThumbUpIcon className="h-24 w-24 text-primary" />
          </figure>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-accent">343+</h2>
            <p className="text-orange-500 font-bold">Feedbacks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
