import { Stack } from "@mui/material";
import React from "react";

const ProfileEmployer = () => {
  return (
    <div className="container">
      <div className="page-header">
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <div className="top-heading">Profile</div>
        </Stack>
      </div>
      <div className="page-body"></div>
    </div>
  );
};

export default ProfileEmployer;
