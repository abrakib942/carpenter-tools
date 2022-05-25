import React from "react";
import { toast } from "react-toastify";

const CancelModal = ({ cancelOrder, refetch, setCancelOrder }) => {
  const { tool, email } = cancelOrder;

  const handleDelete = () => {
    fetch(`http://localhost:5000/order/${email}`, {
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
      <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-orange-500">
            Are You sure you want to delete {tool}?
          </h3>

          <div class="modal-action">
            <button
              onClick={() => handleDelete()}
              className="btn btn-xs btn-primary"
            >
              Delete
            </button>
            <label for="delete-modal" class="btn btn-accent btn-xs">
              Not Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelModal;
