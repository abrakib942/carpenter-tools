import { useState } from "react";
import { useQuery } from "react-query";

import Loading from "../../components/Loading";
import DeleteReviewModal from "./DeleteReviewModal";

import ReviewRow from "./ReviewRow";

const ManageReviews = () => {
  const [deleteReview, setDeleteReview] = useState(null);
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("reviews", () =>
    fetch("https://carpenter-tools.onrender.com/review").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-2xl text-white  font-bold text-center mb-3">
        Manage Reviews
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra  w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Ratings</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews?.map((review, index) => (
              <ReviewRow
                key={review._id}
                index={index}
                review={review}
                setDeleteReview={setDeleteReview}
              ></ReviewRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleteReview && (
        <DeleteReviewModal
          deleteReview={deleteReview}
          setDeleteReview={setDeleteReview}
          refetch={refetch}
        ></DeleteReviewModal>
      )}
    </div>
  );
};

export default ManageReviews;
