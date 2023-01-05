import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import DeleteToolModal from "./DeleteToolModal";
import ProductRow from "./ProductRow";

const ManageProduct = () => {
  const [deleteTool, setDeleteTool] = useState(null);
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    fetch("https://carpenter-tools.onrender.com/tool").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-2xl text-white  font-bold text-center mb-3">
        Manage Products
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra  w-full">
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
                setDeleteTool={setDeleteTool}
              ></ProductRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleteTool && (
        <DeleteToolModal
          setDeleteTool={setDeleteTool}
          deleteTool={deleteTool}
          refetch={refetch}
        ></DeleteToolModal>
      )}
    </div>
  );
};

export default ManageProduct;
