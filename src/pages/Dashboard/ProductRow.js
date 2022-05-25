import React from "react";

const ProductRow = ({ tool, index, setDeleteTool }) => {
  const { name, minOrderQuantity, availableQuantity, price } = tool;

  return (
    <tr className="hover">
      <th> {index + 1} </th>
      <td>{name}</td>
      <td>{minOrderQuantity}</td>
      <td>{availableQuantity}</td>
      <td>{price}</td>
      <td>
        {" "}
        <label
          for="delete-modal"
          onClick={() => setDeleteTool(tool)}
          className="btn btn-xs btn-accent"
        >
          Delete
        </label>{" "}
      </td>
    </tr>
  );
};

export default ProductRow;
