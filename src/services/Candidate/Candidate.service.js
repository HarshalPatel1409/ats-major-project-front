import axios from "axios";

//! getBlogById
export const getProfileById = async (id) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/candidate/getProfile",
      { id },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching application:", error);
    throw error;
  }
};

//! updateProfile
export const updateProfile = async (updatedData) => {
  try {
    console.log("updatedData => ", updatedData);
    const response = await axios.post(
      `http://localhost:5000/api/candidate/updateProfile`,
      updatedData,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

//! deleteProfile
export const deleteProfile = async (id) => {
  try {
    console.log("id => ", id);
    const response = await axios.post(
      `http://localhost:5000/api/candidate/deleteBlog`,
      { id },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};
