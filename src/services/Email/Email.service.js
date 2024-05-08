import axios from "axios";

//! sendMail
export const sendMail = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/service/sendEmail",
      data,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Note:", error);
    throw error;
  }
};

//! getMailById
export const getMailById = async (id) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/service/getMailById",
      { id },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

//! getMyAllMails
export const getMyAllMails = async (email) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/service/getMyAllMails",
      { email },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

//! updateEmail
export const updateEmail = async (updatedData) => {
  try {
    console.log("updatedData => ", updatedData);
    const response = await axios.post(
      `http://localhost:5000/api/blog/updateEmail`,
      updatedData,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};
