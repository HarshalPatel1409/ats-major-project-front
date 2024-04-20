import { Stack } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const ModBlog = () => {
  const { id } = useParams();


  return (
    <>
      <div className="page-header">
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <div className="top-heading">Blog</div>
        </Stack>
      </div>
      <div className="page-body"></div>
    </>
  );
};

export default ModBlog;
