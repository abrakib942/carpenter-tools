import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const { pathname } = useLocation();

  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");

    navigate("/");
  };

  const menuItems = (
    <>
      <li>
        <NavLink className="mr-1" to="/">
          Home
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink className="mr-1" to="/dashboard">
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        {user ? (
          <>
            <button onClick={logOut} className="btn btn-ghost">
              Log Out
            </button>
            <p className="text-orange-500 font-bold">{user.displayName}</p>
          </>
        ) : (
          <NavLink className="mr-1" to="/login">
            Login
          </NavLink>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-20 text-white bg-[#302718] lg:px-12 md:px-12 flex justify-between ">
      {/* sidebar */}

      {pathname.includes("/dashboard") && (
        <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      )}

      <Link
        to="/"
        className="btn btn-ghost normal-case text-xl text-primary  font-bold"
      >
        CARPENCO
      </Link>
      <div className="navbar-end">
        {/* menubar */}
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className=" btn btn-ghost lg:hidden">
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            {menuItems}
          </ul>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
