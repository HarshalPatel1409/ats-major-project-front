import { CircularProgress, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userLS from "../../../utils/userId";
import { getMyBlogs } from "../../../services/Blog/Blog.service";
import BlogCard from "../../Widgets/Card/BlogCard";

const Blog = () => {
  let navigate = useNavigate();
  const [blogs, setBlogs] = useState();
  const newBlog = () => {
    let path = "mod/000";
    navigate(path);
  };

  const getBlogs = async () => {
    const { _id } = userLS();
    try {
      const response = await getMyBlogs(_id);
      const { message, data } = response;
      if (message === "Blogs fetched successfully" && data && data.length > 0) {
        setBlogs(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <div className="container">
      <div className="page-header">
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <div className="top-heading">Blog</div>
          <button className="add-button" onClick={newBlog}>
            Create Blog
          </button>
        </Stack>
      </div>
      <div className="page-body">
        <div className="card-body">
          {blogs ? (
            blogs.map((item, index) => <BlogCard key={index} item={item} />)
          ) : (
            <CircularProgress />
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
