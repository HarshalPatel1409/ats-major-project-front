import axios from "axios";

//! createNote
export const createNote = async (data) => {
  console.log("Data => ", data);
  try {
    const response = await axios.post(
      "http://localhost:5000/api/note/createNote",
      data,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Note:", error);
    throw error;
  }
};

//! getAllNotes
export const getAllNotes = async () => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/note/getNotes",
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

//! getMyNotes
export const getMyNotes = async (id) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/note/getMyNotes",
      { id },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

//! updateNote
export const updateNote = async (updatedData) => {
  try {
    console.log("updatedData => ", updatedData);
    const response = await axios.post(
      `http://localhost:5000/api/note/updateNote`,
      updatedData,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

//! deleteNote
export const deleteNote = async (id) => {
  try {
    console.log("id => ", id);
    const response = await axios.post(
      `http://localhost:5000/api/note/deleteNote`,
      { _id: id },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};
