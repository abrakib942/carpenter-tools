import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);

  const eduRef = useRef();
  const locRef = useRef();
  const phoneRef = useRef();
  const linkRef = useRef();

  const handleAdd = (event) => {
    event.preventDefault();

    const education = eduRef.current.value;
    const location = locRef.current.value;
    const phone = phoneRef.current.value;
    const link = linkRef.current.value;

    console.log(education, location, phone, link);

    event.target.reset();
  };

  return (
    <div>
      <h2 className="text-2xl text-center text-white font-bold mb-3">
        My Profile
      </h2>

      <div className="card lg:w-96 md:w-96 mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <p>
            Name: <span className="font-bold">{user.displayName}</span>
          </p>
          <p>
            Email: <span className="font-bold"> {user.email}</span>
          </p>
        </div>
      </div>

      <div className="hero  my-6">
        <div className="card  w-full max-w-sm shadow-2xl bg-primary">
          <div className="card-body">
            <form onSubmit={handleAdd}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Education</span>
                </label>
                <textarea
                  ref={eduRef}
                  type="text"
                  placeholder="education"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  ref={locRef}
                  type="text"
                  placeholder="city/district"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  ref={phoneRef}
                  type="number"
                  placeholder="phone no"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">LinkedIn Profile</span>
                </label>
                <input
                  ref={linkRef}
                  type="text"
                  placeholder="link"
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

export default MyProfile;
