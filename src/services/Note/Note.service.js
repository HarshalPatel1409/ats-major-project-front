import axios from "axios";

//! createNote
export const createNote = async () => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/note/createNote"
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
      "http://localhost:5000/api/note/getNotes"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

//! getMyNotes
export const getMyNotes = async () => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/note/getMyNotes"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

//! updateNote
export const updateNote = async (id, updatedData) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/note/getNotes/${id}`,
      updatedData
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
    const response = await axios.post(
      `http://localhost:5000/api/note/deleteNote/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};
