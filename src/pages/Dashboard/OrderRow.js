import React from "react";
import { Link } from "react-router-dom";

const OrderRow = ({ order, index, setCancelOrder }) => {
  const { _id, email, tool, address, orderQuantity, totalPrice } = order;

  return (
    <tr>
      <th> {index + 1} </th>
      <td>{tool}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>{orderQuantity}</td>
      <td>{totalPrice}</td>
      <td>
        {totalPrice && !order.paid && (
          <>
            <Link
              to={`/dashboard/payment/${_id}`}
              className=" btn btn-success btn-xs mr-2"
            >
              Pay
            </Link>
            <label
              for="delete-modal"
              onClick={() => setCancelOrder(order)}
              className=" btn btn-error btn-xs"
            >
              Cancel
            </label>
          </>
        )}
        {!totalPrice && !order.paid && (
          <>
            <label
              for="delete-modal"
              onClick={() => setCancelOrder(order)}
              className=" btn btn-error btn-xs"
            >
              Cancel
            </label>
          </>
        )}
        {totalPrice && order.paid && (
          <div>
            <p>
              <span className="text-success">Paid</span>
            </p>
            <p>
              Transaction Id:{" "}
              <span className="text-success">{order.transactionId}</span>
            </p>
          </div>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
