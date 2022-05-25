import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <h2 className="text-2xl font-bold text-orange-500 text-center my-8">
            Dashboard
          </h2>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side mt-16">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <NavLink to="/dashboard/profile">My Profile</NavLink>
            </li>
            {admin ? (
              <>
                <li>
                  <NavLink to="/dashboard/manage-order">
                    Manage All Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/add-product">Add a Product</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/make-admin">Make Admin</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manage-product">
                    Manage Products
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/my-order">My Orders</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/review"> Add Review</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
