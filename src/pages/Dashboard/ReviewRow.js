import React from "react";

const ReviewRow = ({ review, index, setDeleteReview }) => {
  const { name, date, rating } = review;

  return (
    <tr className="hover">
      <th> {index + 1} </th>
      <td>{name}</td>
      <td>{date}</td>
      <td>{rating}</td>

      <td>
        {!date && (
          <label
            for="delete-modal"
            onClick={() => setDeleteReview(review)}
            className="btn btn-xs btn-accent"
          >
            Delete
          </label>
        )}
      </td>
    </tr>
  );
};

export default ReviewRow;
