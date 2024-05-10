import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import userLS from "./../../utils/userId";
const DashboardEmployer = () => {
  const { _id, name } = userLS();
  return (
    <div className="container">
      <div className="page-header">
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <div className="top-heading">
            Welcome <span>{name}</span>
          </div>
        </Stack>
      </div>

      <div className="page-body"></div>
    </div>
  );
};

export default DashboardEmployer;
