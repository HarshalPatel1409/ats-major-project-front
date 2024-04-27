import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
const DashboardEmployer = () => {
  return (
    <div className="container">
      <div className="page-header">
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <div className="top-heading">Dashboard</div>
        </Stack>
      </div>

      <div className="page-body"></div>
    </div>
  );
};

export default DashboardEmployer;
