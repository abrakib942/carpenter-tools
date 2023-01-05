import React from "react";
import { toast } from "react-toastify";

const DeleteReviewModal = ({ deleteReview, setDeleteReview, refetch }) => {
  const { _id, name } = deleteReview;

  const handleDelete = () => {
    fetch(`https://carpenter-tools.onrender.com/review/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast(`${name}'s review is deleted`);
          setDeleteReview(null);
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
            Are You sure you want to delete {name}'s review?
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

export default DeleteReviewModal;
