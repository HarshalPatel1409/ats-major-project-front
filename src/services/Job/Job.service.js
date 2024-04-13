import axios from "axios";

//! createJob
export const createJob = async () => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/job/createJob"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

//! getAllJobs
export const getAllJobs = async () => {
  try {
    const response = await axios.post("http://localhost:5000/api/job/getJobs");
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

//! getJobById
export const getJobById = async (id) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/job/getJob",
      { id },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

//! updateJob
export const updateJob = async (updatedData) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/job/updateJob`,
      updatedData,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

//! deleteJob
export const deleteJob = async (id) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/job/deleteJob/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};
