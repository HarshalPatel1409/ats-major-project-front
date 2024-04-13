import React, { useEffect, useState } from "react";
import { getJobById } from "./../../../services/Job/Job.service"; // Import the function to create a job from your service
import userLS from "./../../../utils/userId";
import { useNavigate, useParams } from "react-router-dom";
import { createApplication } from "../../../services/Application/Application.service";

const JobView = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    jobId: "",
    title: "",
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
    <div>
      <h2>Job Detail</h2>
      <p>
        <h4>Title:</h4> {formData.title}
      </p>
      <p>
        <h4>Description:</h4> {formData.description}
      </p>
      <p>
        <h4>Requirements:</h4> {formData.requirements}
      </p>
      <p>
        <h4>Responsibilities:</h4> {formData.responsibilities}
      </p>
      <p>
        <h4>Location:</h4> {formData.location}
      </p>
      <p>
        <h4>Type:</h4> {formData.type}
      </p>
      <p>
        <h4>Salary:</h4> {formData.salary}
      </p>

      <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default JobView;
