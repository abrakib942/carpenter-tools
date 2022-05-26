import React, { useRef } from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
  const nameRef = useRef();
  const desRef = useRef();
  const minRef = useRef();
  const availableRef = useRef();
  const priceRef = useRef();
  const imgRef = useRef();

  const handleAdd = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const description = desRef.current.value;
    const minOrderQuantity = minRef.current.value;
    const availableQuantity = availableRef.current.value;
    const price = priceRef.current.value;
    const img = imgRef.current.value;

    const addProduct = {
      name,
      description,
      minOrderQuantity: Number(minOrderQuantity),
      availableQuantity: Number(availableQuantity),
      price: Number(price),
      img,
    };

    fetch("https://rocky-lowlands-40582.herokuapp.com/tool", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Product added Successfully");

          event.target.reset();
        }
      });
  };
  return (
    <div className="bg-base-300 py-8">
      <h2 className="text-2xl font-bold text-center my-5">Add Product</h2>

      <div className="hero">
        <div className="card  w-full max-w-sm shadow-2xl bg-primary">
          <div className="card-body">
            <form onSubmit={handleAdd}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  ref={desRef}
                  type="text"
                  placeholder="description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Minimum Order Quantity</span>
                </label>
                <input
                  value={10}
                  ref={minRef}
                  type="number"
                  className="input input-bordered"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <input
                  ref={availableRef}
                  type="number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price Per Unit</span>
                </label>
                <input
                  ref={priceRef}
                  type="number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Insert Url</span>
                </label>
                <input
                  ref={imgRef}
                  type="text"
                  placeholder="Photo Url"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-accent">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
