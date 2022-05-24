import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const Purchase = () => {
  const { id } = useParams({});
  const [tool, setTool] = useState({});

  const [count, setCount] = useState(10);

  const [orderCount, setOrderCount] = useState(10);

  const [totalPrice, setTotalPrice] = useState();

  const nameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const formRef = useRef();
  const orderQuantityRef = useRef();
  const totalRef = useRef();
  const toolRef = useRef();

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
    const orderQuantity = orderQuantityRef.current.value;
    const totalPrice = totalRef.current.value;
    const tool = toolRef.current.value;

    const purchase = {
      name,
      email,
      address,
      phone,
      orderQuantity,
      totalPrice,
      tool,
    };

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchase),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("You have purchase the order");
        }
      });

    event.target.reset();
  };

  const tPrice = orderCount * tool.price;

  const handleIncrease = (event) => {
    event.preventDefault();

    const iCount = count + 1;

    const newIncreaseCount = orderCount + 1;

    if (count === tool.availableQuantity) {
      toast.error("Your Order quantity reached available quantity");
    } else {
      setCount(iCount);
      setOrderCount(newIncreaseCount);
      setTotalPrice(tPrice);
    }

    // const tPrice = tool.orderQuantity * tool.price;
    // setTotalPrice(tPrice);

    // fetch(`http://localhost:5000/tool/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(orderQuantity),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };

  const handleDecrease = (event) => {
    event.preventDefault();
    const dCount = count - 1;

    const newDecreaseCount = orderCount - 1;

    if (count === tool.minOrderQuantity) {
      toast.error("Offs! You are already in minimum order Quantity");
    } else {
      setCount(dCount);
      setOrderCount(newDecreaseCount);
      setTotalPrice(tPrice);
    }
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
            <span className="text-orange-500 text-2xl">${orderCount}</span>{" "}
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
                  value={count}
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
                <span class="label-text text-white">Tool</span>
              </label>
              <input
                ref={toolRef}
                value={tool.name}
                type="text"
                class="input input-bordered"
                disabled
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text-white">Your Name</span>
              </label>
              <input
                ref={nameRef}
                value={user.displayName}
                type="text"
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
                ref={orderQuantityRef}
                value={orderCount}
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
                ref={totalRef}
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
