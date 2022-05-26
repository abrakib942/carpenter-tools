import React from "react";
import { toast } from "react-toastify";

const CancelModal = ({ cancelOrder, refetch, setCancelOrder }) => {
  const { tool, _id } = cancelOrder;

  const handleDelete = () => {
    fetch(`https://rocky-lowlands-40582.herokuapp.com/order/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(` ${tool} is deleted `);
          setCancelOrder(null);
          refetch();
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-orange-500">
            Are You sure you want to delete {tool}?
          </h3>

          <div className="modal-action">
            <button
              onClick={() => handleDelete()}
              className="btn btn-xs btn-primary"
            >
              Delete
            </button>
            <label for="delete-modal" className="btn btn-accent btn-xs">
              Not Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelModal;
