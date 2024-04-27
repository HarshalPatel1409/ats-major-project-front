import React, { useEffect, useState } from "react";
import { getJobById, updateJob } from "./../../../services/Job/Job.service"; // Import the function to create a job from your service
import { useNavigate, useParams } from "react-router-dom";
import { FormControl, Stack } from "@mui/material";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const UpdateJob = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    _id: "",
    title: "",
    company: "",
    description: "",
    requirements: "",
    responsibilities: "",
    location: "",
    type: "",
    salary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateJob(formData);
      const { message, data } = response;
      if (response) {
        setFormData({
          _id: "",
          title: "",
          company: "",
          description: "",
          requirements: "",
          responsibilities: "",
          location: "",
          type: "",
          salary: "",
        });
        navigate(-1);
      }
    } catch (error) {
      console.error("Error creating job:", error);
      alert("Failed to create job. Please try again.");
    }
  };

  const getJobDetails = async (id) => {
    const response = await getJobById(id);
    const resData = response.data[0];
    setFormData({
      _id: resData._id,
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
          <div className="top-heading">Update Job</div>
        </Stack>
      </div>
      <div className="page-body">
        <Stack>
          <FormControl>
            <form onSubmit={handleSubmit}>
              <div className="small-fields">
                <div className="field-container">
                  <label>Title:</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field-container">
                  <label>Location:</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field-container">
                  <label>Type:</label>
                  <input
                    type="text"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field-container">
                  <label>Salary:</label>
                  <input
                    type="number"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="field-container">
                <label>Company:</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field-container">
                <label>Description:</label>{" "}
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
                {/* <ReactQuill
                theme="snow"
                name="description"
                value={formData.description}
                onChange={handleChange}
              /> */}
              </div>
              <div className="field-container">
                <label>Requirements:</label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field-container">
                <label>Responsibilities:</label>
                <textarea
                  name="responsibilities"
                  value={formData.responsibilities}
                  onChange={handleChange}
                  required
                />
              </div>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <button className="delete-button">Delete Job</button>
                <button className="common-button" type="submit">
                  Update Job
                </button>
              </Stack>
            </form>
          </FormControl>
        </Stack>
      </div>
    </div>
  );
};

export default UpdateJob;
