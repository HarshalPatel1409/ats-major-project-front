import React, { useState } from "react";
import { createJob } from "./../../../services/Job/Job.service"; // Import the function to create a job from your service

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { Box, Stack, Typography, FormControl } from "@mui/material";
import { useNavigate } from "react-router-dom";
const CreateJob = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    description: "",
    requirements: "",
    responsibilities: "",
    location: "",
    type: "",
    salary: "",
  });
  // const [description, setDescription] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const redButton = () => {
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await createJob(formData);
      const { message, data } = response;
      if (message == "Job created successfully") {
        setFormData({
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

  return (
    <div className="container">
      <div className="page-header">
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <div className="top-heading">Create Job</div>
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
                <label>Description:</label>
                {/* <ReactQuill
                theme="snow"
                name="description"
                value={formData.description}
                onChange={(e)=>setDescription(e.target.value)}
              /> */}
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
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
                <button className="delete-button" onClick={redButton}>
                  Cancel
                </button>
                <button className="common-button" type="submit">
                  Create Job
                </button>
              </Stack>
            </form>
          </FormControl>
        </Stack>
      </div>
    </div>
  );
};

export default CreateJob;
