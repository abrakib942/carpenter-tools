import React from "react";

const ProductRow = ({ tool, index, refetch }) => {
  const { name, minOrderQuantity, availableQuantity, price } = tool;

  const handleDelete = () => {};

  return (
    <tr className="hover">
      <th> {index + 1} </th>
      <td>{name}</td>
      <td>{minOrderQuantity}</td>
      <td>{availableQuantity}</td>
      <td>{price}</td>
      <td>
        {" "}
        <button onClick={handleDelete} className="btn btn-xs btn-accent">
          Delete
        </button>{" "}
      </td>
    </tr>
  );
};

export default ProductRow;
