import axios from "axios";

//! createApplication
export const createApplication = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/application/createApplication",
      data,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Note:", error);
    throw error;
  }
};

//! getAllApplications
export const getAllApplications = async () => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/application/getApplications",
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

//! getMyApplication
export const getMyApplication = async (id) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/application/getMyApplication",
      { id },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

//! getApplicationByJobId
export const getApplicationByJobId = async (id) => {
  console.log("service id => ", id);
  try {
    const response = await axios.post(
      "http://localhost:5000/api/application/getApplicationByJobId",
      { id },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

//! updateApplication
export const updateApplication = async (updatedData) => {
  try {
    console.log("updatedData => ", updatedData);
    const response = await axios.post(
      `http://localhost:5000/api/application/updateApplication`,
      updatedData,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

//! deleteApplication
export const deleteApplication = async (id) => {
  try {
    console.log("id => ", id);
    const response = await axios.post(
      `http://localhost:5000/api/application/deleteApplication`,
      { _id: id },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};
