import { FormControl, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userLS from "../../../utils/userId";

import {
  createBlog,
  deleteBlog,
  getBlogById,
  updateBlog,
} from "./../../../services/Blog/Blog.service";

const ModBlog = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [isCreating, setIsCreating] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const isMod = async () => {
    if (id == "000") {
      setIsCreating(true);
    } else {
      setIsCreating(false);
      const response = await getBlogById(id);
      const { message, data } = response;
      let newData = data[0];
      setTitle(newData.title);
      setCategory(newData.category);
      setContent(newData.content);
      setAuthor(newData.author);
    }
  };

  const redButton = () => {
    navigate(-1);
    setTitle(null);
    setCategory(null);
    setContent(null);
    setAuthor(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { _id } = userLS();
      let blogData = { id, title, category, content, author, userId: _id };
      if (isCreating) {
        const response = await createBlog(blogData);
        const { message, data } = response;
        redButton();
      } else {
        blogData._id = id;
        const response = await updateBlog(blogData);
        const { message, data } = response;
        if (message === "Blogs updated successfully") redButton();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBlogButton = async (event) => {
    event.preventDefault();
    try {
      const response = await deleteBlog(id);
      const { message, data } = response;
    } catch (error) {
      console.log(error);
    }
    redButton();
  };

  useEffect(() => {
    isMod();
  }, []);
  return (
    <div className="container">
      <div className="page-header">
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <div className="top-heading">
            {isCreating ? "Create " : "Update "}Blog
          </div>
        </Stack>
      </div>
      <div className="page-body">
        <Stack>
          <FormControl>
            <form onSubmit={handleSubmit}>
              <div className="small-fields">
                <div className="field-container">
                  <label>Title:</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="field-container">
                  <label>Category:</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="none">-- Select --</option>
                    <option value="general">General</option>
                    <option value="technology">Technology</option>
                    <option value="political">Political</option>
                  </select>
                </div>
                <div className="field-container">
                  <label>Author:</label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="field-container">
                <label>Content:</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                {isCreating ? (
                  <button className="delete-button" onClick={() => redButton()}>
                    Cancel
                  </button>
                ) : (
                  <button className="delete-button" onClick={deleteBlogButton}>
                    Delete Blog
                  </button>
                )}

                <button className="common-button" type="submit">
                  {isCreating ? "Launch " : "Modify "} Blog
                </button>
              </Stack>
            </form>
          </FormControl>
        </Stack>
      </div>
    </div>
  );
};

export default ModBlog;
