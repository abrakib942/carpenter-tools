import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import OrderRow from "./OrderRow";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const email = user?.email;
    fetch(`http://localhost:5000/order?email=${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-accent mb-2">
        My Orders
      </h2>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Tool</th>
              <th>Email</th>
              <th>Address</th>
              <th>Quantity</th>
              <th>Price (USD)</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrderRow key={order._id} index={index} order={order}></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
