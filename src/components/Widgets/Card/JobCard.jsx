import React from "react";

const JobCard = ({ item, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3 className="title">{item.title}</h3>
      <p className="location">Location: {item.location}</p>
      <p className="company">Company: {item.company}</p>
    </div>
  );
};

export default JobCard;
