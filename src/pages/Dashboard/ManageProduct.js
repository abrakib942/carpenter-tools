import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import ProductRow from "./ProductRow";

const ManageProduct = () => {
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    fetch("http://localhost:5000/tool").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-2xl text-white  font-bold text-center mb-3">
        Manage Products
      </h2>

      <div class="overflow-x-auto">
        <table class="table table-zebra  w-full">
          <thead>
            <tr>
              <th></th>
              <th>Tool</th>
              <th>Minimum Order Quantity</th>
              <th>Available Quantity</th>
              <th>Price (USD)</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tools?.map((tool, index) => (
              <ProductRow
                key={tool._id}
                index={index}
                tool={tool}
                refetch={refetch}
              ></ProductRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;
