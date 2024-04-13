import React, { useEffect, useState } from "react";
import { getJobById, updateJob } from "./../../../services/Job/Job.service"; // Import the function to create a job from your service
import { useNavigate, useParams } from "react-router-dom";

const UpdateJob = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    _id: "",
    title: "",
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
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <label>Requirements:</label>
          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            required
          />

          <label>Responsibilities:</label>
          <textarea
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            required
          />

          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <label>Type:</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          />

          <label>Salary:</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />

          <button type="submit">Update Job</button>
        </form>
      </div>
    </>
  );
};

export default UpdateJob;
