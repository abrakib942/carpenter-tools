import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import Rating from "react-rating";
import people from "../../assets/people.png";

const Review = ({ review }) => {
  const { name, description, rating, date } = review;

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        className="card bg-base-100 shadow-xl"
      >
        <div className="card-body">
          <div className="flex">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                <img src={people} alt="" />
              </div>
            </div>
            <div>
              <h2 className="card-title">{name}</h2>
              <small className="text-accent font-bold text-xs "> {date}</small>
            </div>
          </div>
          <p>{description}</p>
          <h2 className=" flex">
            <Rating
              initialRating={rating}
              emptySymbol={<StarIcon className="h-5 w-5 text-gray-400" />}
              fullSymbol={<StarIcon className="h-5 w-5 text-orange-500" />}
              readonly
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Review;
