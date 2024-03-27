import React from "react";

const JobModal = ({ isOpen, onClose, job }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{job.title}</h2>
        <p>Description: {job.description}</p>
        <p>Requirements: {job.requirements}</p>
        <p>Responsibilities: {job.responsibilities}</p>
        <p>Location: {job.location}</p>
        <p>Type: {job.type}</p>
        <p>Salary: {job.salary}</p>
        <p>Company: {job.company}</p>
        <div className="modal-buttons">
          <button onClick={onClose}>Close</button>
          <button onClick={() => handleEdit(job)}>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default JobModal;
