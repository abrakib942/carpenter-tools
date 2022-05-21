import React from "react";

const Tool = ({ tool }) => {
  const { name, img, description, minOrderQuantity, availableQuantity, price } =
    tool;
  return (
    <div class="card bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
        <p className="font-bold">
          Minimum Order Quantity:{" "}
          <span className="text-orange-500">{minOrderQuantity}</span>{" "}
        </p>
        <p className="font-bold">
          Available Quantity:{" "}
          <span className="text-orange-500">{availableQuantity}</span>{" "}
        </p>
        <h3 className="text-2xl font-bold text-orange-500"> ${price} </h3>
        <div class="card-actions justify-end">
          <button class="btn btn-primary hover:btn-link text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
