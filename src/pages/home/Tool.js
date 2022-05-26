import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const {
    _id,
    name,
    img,
    description,
    minOrderQuantity,
    availableQuantity,
    price,
  } = tool;
  const navigate = useNavigate();

  const navigateToPurchase = (id) => {
    navigate(`/tool/${id}`);
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
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
        <div className="card-actions justify-end">
          <button
            onClick={() => navigateToPurchase(_id)}
            className="btn btn-primary hover:btn-link text-white"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
