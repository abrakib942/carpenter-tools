import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

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

  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const navigateToPurchase = (id) => {
    navigate(`/tool/${id}`);

    if (!user) {
      toast(
        "Offs! You are not logged in. If you want to buy, you have to log in.",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
    }
  };
  return (
    <div className="transform hover:scale-105 duration-500">
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="900"
        className="card bg-base-100 shadow-xl "
      >
        <figure>
          <img
            className="transform hover:scale-110 duration-500"
            src={img}
            alt="Shoes"
          />
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
    </div>
  );
};

export default Tool;
