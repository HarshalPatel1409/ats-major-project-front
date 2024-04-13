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

//! getMyComposeMail
export const getMyComposeMail = async (email) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/service/getMyComposeMail",
      { email },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

//! getMyInbox
export const getMyInbox = async (email) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/service/getMyInbox",
      { email },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};
