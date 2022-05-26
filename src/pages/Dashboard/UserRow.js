import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`https://rocky-lowlands-40582.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Successfully made an admin");
        }
      });
  };

  return (
    <tr className="hover">
      <th> {index + 1} </th>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <button onClick={makeAdmin} className="btn btn-accent btn-xs">
            Make Admin
          </button>
        ) : (
          <p className="text-orange-500 font-bold">Admin</p>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
