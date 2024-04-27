import { Stack } from "@mui/material";
import React from "react";

const Review = () => {
  const reviewData = [
    {
      id: 1,
      name: "John Doe",
      jobTitle: "Founder",
      company: "Google",
      rating: 5,
      comment:
        "Great ATS platform! It has streamlined our recruitment process and made it much more efficient. Highly recommended.",
    },
    {
      id: 2,
      name: "Jane Smith",
      jobTitle: "Founder",
      company: "Facebook",
      rating: 4,
      comment:
        "Very user-friendly interface and excellent customer support. It has helped us find quality candidates quickly.",
    },
    {
      id: 3,
      name: "David Johnson",
      jobTitle: "Founder",
      company: "Apple",
      rating: 5,
      comment:
        "ATS has made our hiring process more organized and collaborative. The reporting features are also very useful.",
    },
  ];
  return (
    <div className="reviews-container">
      <div className="body-content">
        <span className="heading-text">What Our Users Say</span>
        <span className="subheading-text">
          Discover the Experiences of Our Valued Customers
        </span>
        <Stack direction="row" className="review-cards-container">
          {reviewData.map((review, index) => (
            <SingleReview key={index} review={review} />
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default Review;

const SingleReview = ({ review }) => {
  return (
    <div className="singleReview">
      <div className="comment">"{review.comment}"</div>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <label>{review.name}</label>
        <span>
          {review.jobTitle}@{review.company}
        </span>
      </Stack>
    </div>
  );
};
