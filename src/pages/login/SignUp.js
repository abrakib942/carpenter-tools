import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const [token] = useToken(user || gUser);

  if (loading || gLoading) {
    return <Loading />;
  }

  if (token) {
    navigate("/");
  }

  let signInError;

  if (error || gError) {
    signInError = (
      <p className="text-red-500"> {error?.message || gError?.message} </p>
    );
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);

    reset();
  };

  return (
    <div className="bg-primary">
      <div className=" w-96 mx-auto py-16">
        <div className=" shadow-2xl card-body bg-accent rounded-lg">
          <h2 className="text-2xl font-bold text-center text-white">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },

                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              {errors.password?.type === "required" && (
                <span className="text-red-500">
                  {" "}
                  {errors.password.message}{" "}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-500">
                  {" "}
                  {errors.password.message}{" "}
                </span>
              )}
            </div>
            {signInError}
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-primary  text-lg font-bold "
              />
            </div>
          </form>

          <p className="text-center text-sm text-white">
            Already have an account?{" "}
            <Link className="text-primary" to="/login">
              {" "}
              Login{" "}
            </Link>
          </p>

          <div className="divider text-white">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-primary"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
