import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getApplicantBio,
  updateApplication,
} from "../../../services/Application/Application.service";
import { CircularProgress, Stack } from "@mui/material";

const Applicant = () => {
  const { id } = useParams();
  const [applicant, setApplicant] = useState();
  const [status, setStatus] = useState();

  const getApplicantDetails = async (someId) => {
    try {
      const response = await getApplicantBio(someId);
      setApplicant(response.data[0]);
      setStatus(response.data[0].status);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      let updatedData = { _id: id, status };
      const response = await updateApplication(updatedData);
      const { message, data } = response;
      alert(message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApplicantDetails(id);
  }, []);
  return (
    <>
      <div className="page-header">
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <div className="top-heading">Applicant</div>
        </Stack>
      </div>
      <div className="page-body">
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          {applicant ? (
            <div className="applicant-details">
              <div className="specific-details">
                <h3>Personal Detail</h3>
                <div className="applicant-field">
                  <label>Name : </label>
                  <span> {applicant.candidates.name}</span>
                </div>
                <div className="applicant-field">
                  <label>Email : </label>
                  <span> {applicant.candidates.email}</span>
                </div>
              </div>
              <div>
                <div className="specific-details">
                  <h3>Job Detail</h3>
                  <div className="applicant-field">
                    <label>Title : </label>
                    <span> {applicant.jobs.title}</span>
                  </div>
                  <div className="applicant-field">
                    <label>Description : </label>
                    <span> {applicant.jobs.description}</span>
                  </div>
                  <div className="applicant-field">
                    <label>Type : </label>
                    <span> {applicant.jobs.type}</span>
                  </div>
                  <div className="applicant-field">
                    <label>Status : </label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      {/* applied, review, interview, hired, rejected */}
                      <option value="applied">Applied</option>
                      <option value="review">Review</option>
                      <option value="interview">Interview</option>
                      <option value="process">In Process</option>
                      <option value="hired">Hired</option>
                      <option value="reject">Rejected</option>
                    </select>
                  </div>
                  <button className="common-button" onClick={handleUpdate}>
                    Update Status
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <CircularProgress />
          )}
        </Stack>
      </div>
    </>
  );
};

export default Applicant;
