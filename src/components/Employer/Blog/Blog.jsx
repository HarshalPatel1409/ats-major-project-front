import { Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  let navigate = useNavigate();
  const newBlog = () => {
    let path = "mod/000";
    navigate(path);
  };

  return (
    <>
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
      <div className="page-body"></div>
    </>
  );
};

export default Blog;
