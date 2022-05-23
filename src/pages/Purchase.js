import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const Purchase = () => {
  const { id } = useParams({});
  const [tool, setTool] = useState({});

  const [totalPrice, setTotalPrice] = useState();

  const nameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const formRef = useRef();

  const quantityRef = useRef();

  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/tool/${id}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [id]);

  const handlePurchase = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const address = addressRef.current.value;
    const phone = phoneRef.current.value;

    console.log(name, email, address, phone);
  };

  const handleIncrease = (event) => {
    event.preventDefault();

    const quantity = quantityRef.current.value;

    if (quantity < 1) {
      setTool(tool);
      toast.error("Input only positive number");
    } else if (quantity && tool.orderQuantity > tool.availableQuantity) {
      toast.error(
        "Order quantity cannot greater than available quantity, Please Decrease quantity"
      );
    } else {
      setTool({
        ...tool,
        orderQuantity: tool.orderQuantity + Number(quantity),
      });
    }
    const tPrice = tool.orderQuantity * tool.price;
    setTotalPrice(tPrice);

    formRef.current.reset();
  };

  const handleDecrease = (event) => {
    event.preventDefault();
    const quantity = quantityRef.current.value;

    if (quantity < 1) {
      setTool(tool);
      toast.error("Input only positive number");
    } else if (tool.orderQuantity < tool.minOrderQuantity) {
      toast.error(
        "order quantity must be less than minimum order quantity, Please Increase quantity"
      );
    } else {
      setTool({
        ...tool,
        orderQuantity: tool.orderQuantity - Number(quantity),
      });
    }
    formRef.current.reset();
  };

  return (
    <div>
      <div class="card lg:card-side px-12 lg:ml-24 lg:flex lg:items-center">
        <figure>
          <img className="" src={tool.img} alt="Album" />
        </figure>
        <div class="card-body md:mx-auto">
          <h2 class="card-title text-2xl font-bold">{tool.name}</h2>
          <small>{tool.description}</small>
          <h2 className="text-xl">
            Minimum Order Quantity:{" "}
            <span className="text-orange-500">{tool.minOrderQuantity}</span>{" "}
          </h2>
          <h2 className="text-xl">
            Available Quantity:{" "}
            <span className="text-orange-500">{tool.availableQuantity}</span>{" "}
          </h2>
          <h2 className="text-xl">
            Price per unit:{" "}
            <span className="text-orange-500 text-2xl">${tool.price}</span>{" "}
          </h2>

          {/* total */}
          <h2 className="text-xl mt-6">
            Your Order Quantity:{" "}
            <span className="text-orange-500 text-2xl">
              ${tool.orderQuantity}
            </span>{" "}
          </h2>
          <h2 className="text-xl">
            Total Price:{" "}
            <span className="text-orange-500 text-2xl">${totalPrice}</span>{" "}
          </h2>

          {/* change quantity */}
          <div class="card w-96 bg-base-300 text-neutral-content my-8">
            <div class="card-body items-center text-center">
              <h2 class="text-accent text-xl">Change Quantity</h2>
              <form ref={formRef}>
                <input
                  ref={quantityRef}
                  type="number"
                  placeholder="Update Quantity"
                  class="input input-bordered text-black w-full max-w-xs"
                />
                <div class="card-actions justify-end mt-3">
                  <button
                    type="submit"
                    onClick={handleIncrease}
                    class="btn btn-primary"
                  >
                    Increase
                  </button>
                  <button
                    type="submit"
                    onClick={handleDecrease}
                    class="btn btn-accent"
                  >
                    Decrease
                  </button>
                </div>
              </form>
            </div>
          </div>
          <button className="btn-primary p-2 rounded-lg font-bold">
            Purchase
          </button>
        </div>
      </div>

      {/* purchase order */}
      <h2 className="text-3xl text-center font-bold text-primary mt-8">
        Give Information To Purchase: {tool.name}{" "}
      </h2>
      <div class="w-96 mx-auto my-10">
        <div class="card shadow-2xl card-body bg-accent">
          <form onSubmit={handlePurchase}>
            <div class="form-control">
              <label class="label">
                <span class="label-text text-white">Name</span>
              </label>
              <input
                ref={nameRef}
                value={user.displayName}
                type="text"
                placeholder="name"
                class="input input-bordered"
                disabled
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text-white">Email</span>
              </label>
              <input
                ref={emailRef}
                value={user.email}
                type="email"
                placeholder="email"
                class="input input-bordered"
                disabled
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text-white">Address</span>
              </label>
              <input
                ref={addressRef}
                type="text"
                placeholder="address"
                class="input input-bordered"
                required
              />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text text-white">Phone number</span>
              </label>
              <input
                ref={phoneRef}
                type="number"
                placeholder="Phone"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text-white"> Your Order Quantity</span>
              </label>
              <input
                value={tool.orderQuantity}
                type="text"
                class="input input-bordered"
                disabled
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text-white"> Total Price</span>
              </label>
              <input
                value={totalPrice}
                type="text"
                class="input input-bordered"
                disabled
              />
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Purchase</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
