import React, { useEffect, useState } from "react";
import { getJobById } from "./../../../services/Job/Job.service"; // Import the function to create a job from your service
import userLS from "./../../../utils/userId";
import { useNavigate, useParams } from "react-router-dom";
import { createApplication } from "../../../services/Application/Application.service";
import { Stack } from "@mui/material";

const JobView = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    jobId: "",
    title: "",
    company: "",
    description: "",
    requirements: "",
    responsibilities: "",
    location: "",
    type: "",
    salary: "",
  });

  const getJobDetails = async (id) => {
    const response = await getJobById(id);
    const resData = response.data[0];
    setFormData({
      jobId: resData._id,
      title: resData.title,
      company: resData.company,
      description: resData.description,
      requirements: resData.requirements,
      responsibilities: resData.responsibilities,
      location: resData.location,
      type: resData.type,
      salary: resData.salary,
    });
  };

  const handleApply = async () => {
    alert("Are you sure to apply?");
    try {
      const { _id } = userLS();
      let newData = {
        jobId: formData.jobId,
        userId: _id,
        jobTitle: formData.title,
        status: "applied",
      };
      const response = await createApplication(newData);
      const { message, data } = response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobDetails(id);
  }, []);
  return (
    <div className="container">
      <div className="page-header">
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <div className="top-heading">Job Details</div>
        </Stack>
      </div>
      <div className="page-body">
        <div className="candidate-job-details">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <label className="title">{formData.title}</label>
              <label>{formData.company}</label>
            </Stack>
            <Stack
              direction="column"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <label>{formData.type}</label>
              <label className="location">{formData.location}</label>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <div className="other-details">
              <label className="heading">Description:</label>
              <span>{formData.description}</span>
            </div>
            <div className="other-details">
              <label className="heading">Requirements:</label>
              <span>{formData.requirements}</span>
            </div>
            <div className="other-details">
              <label className="heading">Responsibilities:</label>
              <span>{formData.responsibilities}</span>
            </div>
            <div className="other-details">
              <label className="heading">Salary:</label>
              <span>{formData.salary}</span>
            </div>
          </Stack>
          <button className="common-button" onClick={handleApply}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobView;
