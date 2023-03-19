import React from "react";
import './StarField.scss'
function StarRating({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    let starClass = "star";
    if (i <= rating) {
      starClass += " filled";
    }
    stars.push(
      <span className= {starClass} key={i}>
        &#9733;
      </span>
    );
  }

  return <div className="star-rating">{stars}</div>;
}

export default StarRating;
