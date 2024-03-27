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

//! updateJob
export const updateJob = async (id, updatedData) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/job/getJobs/${id}`,
      updatedData
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
      `http://localhost:5000/api/job/getJobs/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};
