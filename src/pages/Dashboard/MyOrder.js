import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import CancelModal from "./CancelModal";
import OrderRow from "./OrderRow";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [cancelOrder, setCancelOrder] = useState(null);

  const email = user?.email;
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`http://localhost:5000/order?email=${email}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

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
              <th>Pay/Cancel</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <OrderRow
                key={order._id}
                index={index}
                order={order}
                setCancelOrder={setCancelOrder}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
      {cancelOrder && (
        <CancelModal
          cancelOrder={cancelOrder}
          setCancelOrder={setCancelOrder}
          refetch={refetch}
        ></CancelModal>
      )}
    </div>
  );
};

export default MyOrder;
