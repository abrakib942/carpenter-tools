import React from "react";

const OrderRow = ({ order, index }) => {
  const { name, email, tool, address, orderQuantity, totalPrice } = order;
  return (
    <tr>
      <th> {index + 1} </th>
      <td>{tool}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>{orderQuantity}</td>
      <td>{totalPrice}</td>
    </tr>
  );
};

export default OrderRow;
