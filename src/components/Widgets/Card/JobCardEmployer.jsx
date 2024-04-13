import React from "react";
import { useNavigate } from "react-router-dom";

const JobCardEmployer = ({ item }) => {
  let navigate = useNavigate();
  const goToEdit = async (id) => {
    const path = `update/${id}`;
    navigate(path);
  };

  const goToApplication = async (id) => {
    const path = `application/${id}`;
    navigate(path);
  };
  return (
    <div className="card">
      <h3 className="title">{item.title}</h3>
      <p className="location">Location: {item.location}</p>
      <p className="company">Company: {item.company}</p>
      <button onClick={() => goToApplication(item._id)}>Candidate</button>
      <button onClick={() => goToEdit(item._id)}>Edit</button>
    </div>
  );
};
export default JobCardEmployer;
