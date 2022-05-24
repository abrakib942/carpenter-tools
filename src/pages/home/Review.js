import React from "react";

const Review = ({ review }) => {
  const { name, description, rating, date } = review;
  return (
    <div>
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <small className="text-accent font-bold text-xs ">On {date}</small>
          <p>{description}</p>
          <h2 className="text-orange-500 font-bold">{rating} stars</h2>
        </div>
      </div>
    </div>
  );
};

export default Review;
