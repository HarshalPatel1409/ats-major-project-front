import React from "react";

const ApplicationCard = ({ item, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3 className="title">{item.jobTitle}</h3>
      <p className="location">Status: {item.status}</p>
    </div>
  );
};

export default ApplicationCard;
