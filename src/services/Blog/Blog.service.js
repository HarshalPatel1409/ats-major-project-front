import axios from "axios";

//! createBlog
export const createBlog = async (data) => {
  console.log("Data => ", data);
  try {
    const response = await axios.post(
      "http://localhost:5000/api/blog/createBlog",
      data,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Note:", error);
    throw error;
  }
};

//! getAllBlogs
export const getAllBlogs = async () => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/blog/getBlogs",
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

//! getMyBlogs
export const getMyBlogs = async (id) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/blog/getMyBlogs",
      { id },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

//! getBlogById
export const getBlogById = async (id) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/blog/getBlog",
      { id },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching application:", error);
    throw error;
  }
};

//! updateBlog
export const updateBlog = async (updatedData) => {
  try {
    console.log("updatedData => ", updatedData);
    const response = await axios.post(
      `http://localhost:5000/api/blog/updateBlog`,
      updatedData,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

//! deleteBlog
export const deleteBlog = async (id) => {
  try {
    console.log("id => ", id);
    const response = await axios.post(
      `http://localhost:5000/api/blog/deleteBlog`,
      { _id: id },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};
