import React from "react";

const AllOrderRow = ({ order, index, refetch }) => {
  const { tool, name, email, address, orderQuantity, totalPrice } = order;
  return (
    <tr className="hover">
      <th> {index + 1} </th>
      <td>{tool}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>{orderQuantity}</td>
      <td>{totalPrice}</td>
      <td>
        {" "}
        <button className="btn btn-xs btn-accent">Cancel</button>{" "}
      </td>
    </tr>
  );
};

export default AllOrderRow;
