import React from "react";
import { Route, Routes } from "react-router-dom";
import SidebarCandidate from "./../components/Widgets/Sidebar/SidebarCandidate";
import DashboardCandidate from "./../components/Candidate/Dashboard";
import ProfileCandidate from "./../components/Candidate/Profile";
import SettingCandidate from "./../components/Candidate/Setting";

const CandidateLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <SidebarCandidate />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route index element={<DashboardCandidate />} />
          <Route path="profile" element={<ProfileCandidate />} />
          <Route path="setting" element={<SettingCandidate />} />
        </Routes>
      </div>
    </div>
  );
};

export default CandidateLayout;
