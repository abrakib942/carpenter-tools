import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import AllOrderRow from "./AllOrderRow";

const ManageOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://rocky-lowlands-40582.herokuapp.com/all-order").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-2xl text-center font-bold text-white mb-3">
        Manage Orders
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra  w-full">
          <thead>
            <tr>
              <th></th>
              <th>Tool</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Order Quantity</th>
              <th>Price (USD)</th>
              <th>Payments</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <AllOrderRow
                key={order._id}
                order={order}
                index={index}
              ></AllOrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
