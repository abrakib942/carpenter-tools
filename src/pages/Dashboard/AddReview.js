import React, { useRef } from "react";
import { toast } from "react-toastify";

const AddReview = () => {
  const nameRef = useRef();
  const desRef = useRef();
  const ratingRef = useRef();

  const handleAdd = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const description = desRef.current.value;
    const rating = ratingRef.current.value;

    if (rating >= 1 && rating <= 5) {
      const addReview = {
        name,
        description,
        rating,
      };

      fetch("https://rocky-lowlands-40582.herokuapp.com/review", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addReview),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Review Added");
          }
        });

      event.target.reset();
    } else {
      toast.error("rating must be 1 to 5");
    }
  };

  return (
    <div className="bg-base-200 p-8 ">
      <h2 className="text-2xl text-center mt-8 mb-4 text-accent font-bold">
        Add Review
      </h2>

      <div className="hero  ">
        <div className="card  w-full max-w-sm shadow-2xl bg-primary">
          <div className="card-body">
            <form onSubmit={handleAdd}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
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
                  <span className="label-text">Rating</span>
                </label>
                <input
                  ref={ratingRef}
                  type="number"
                  placeholder="1-5"
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

export default AddReview;
