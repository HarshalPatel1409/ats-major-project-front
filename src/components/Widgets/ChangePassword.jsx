import { Stack } from "@mui/material";
import React, { useState } from "react";
import userLS from "./../../utils/userId";
import { changePassword } from "../../services/Login/Login.service";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [cnewPassword, setCNewPassword] = useState("");

  const handlePassword = async () => {
    const { _id, authorize } = userLS();
    if (
      oldPassword.length === 0 ||
      newPassword.length === 0 ||
      cnewPassword.length === 0
    ) {
      alert("Please fill all fields");
    } else if (newPassword !== cnewPassword) {
      alert("Passwords do not match!");
    } else {
      let changedData = {
        id: _id,
        oldPassword,
        newPassword,
        authorize,
      };
      const response = await changePassword(changedData);
      const { message, data } = response;
      alert(message);
    }
  };

  return (
    <div className="profile-section">
      <Stack
        direction="column"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <label className="heading">Change Password</label>
        <div className="field-container">
          <label>Old Password:</label>
          <input
            type="text"
            placeholder="Password"
            value={oldPassword}
            style={{ width: "100%" }}
            onChange={(e) => setOldPassword(e.target.value)}
            autoFocus
          />
        </div>
        <div className="field-container">
          <label>New Password:</label>
          <input
            type="text"
            placeholder="Password"
            value={newPassword}
            style={{ width: "100%" }}
            onChange={(e) => setNewPassword(e.target.value)}
            autoFocus
          />
        </div>
        <div className="field-container">
          <label>Confirm New Password:</label>
          <input
            type="text"
            placeholder="Password"
            value={cnewPassword}
            style={{ width: "100%" }}
            onChange={(e) => setCNewPassword(e.target.value)}
            autoFocus
          />
        </div>
        <button className="common-button" onClick={() => handlePassword()}>
          Change Password
        </button>
      </Stack>
    </div>
  );
};

export default ChangePassword;
