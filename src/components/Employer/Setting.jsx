import { Stack } from "@mui/material";
import React from "react";
import ChangePassword from "../Widgets/ChangePassword";

const SettingEmployer = () => {
  return (
    <div className="container">
      <div className="page-header">
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <div className="top-heading">Setting</div>
        </Stack>
      </div>
      <div className="page-body">
        <ChangePassword />
      </div>
    </div>
  );
};

export default SettingEmployer;
