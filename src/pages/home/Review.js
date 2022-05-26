import React from "react";

const Review = ({ review }) => {
  const { name, description, rating, date } = review;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <small className="text-accent font-bold text-xs "> {date}</small>
          <p>{description}</p>
          <h2 className="text-orange-500 font-bold">{rating} stars</h2>
        </div>
      </div>
    </div>
  );
};

export default Review;
