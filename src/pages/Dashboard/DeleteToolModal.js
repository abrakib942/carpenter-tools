import React from "react";
import { toast } from "react-toastify";

const DeleteToolModal = ({ deleteTool, setDeleteTool, refetch }) => {
  const { _id, name } = deleteTool;

  const handleDelete = () => {
    fetch(`http://localhost:5000/tool/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast(` ${name} is deleted `);
          setDeleteTool(null);
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
            Are You sure you want to delete {name}?
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

export default DeleteToolModal;
