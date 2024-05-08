import axios from "axios";

//! Login
export const authenticate = async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/authentication/login`,
      data,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Employer:", error);
    throw error;
  }
};

//! Change Password
export const changePassword = async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/authentication/changePassword`,
      data,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Employer:", error);
    throw error;
  }
};
