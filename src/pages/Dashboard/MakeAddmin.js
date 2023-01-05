import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import UserRow from "./UserRow";

const MakeAddmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://carpenter-tools.onrender.com/user").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-white text-center mb-2">
        Users: {users.length}{" "}
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>

              <th>Email</th>
              <th>Set Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                key={user._id}
                index={index}
                user={user}
                refetch={refetch}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAddmin;
