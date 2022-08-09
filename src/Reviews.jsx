import React, { useEffect, useState } from "react";
import {Review} from "./Review";

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((reviews) => {
        setReviews(reviews);
        console.log(reviews)
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {reviews?.map(({ profile_photo_url, rating, text, author_name }) => (
        <Review
          key={text}
          name={author_name}
          rating={rating}
          text={text}
          src={profile_photo_url}
        />
      ))}
    </div>
  );
};
