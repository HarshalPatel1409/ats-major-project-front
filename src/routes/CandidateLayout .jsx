import React from "react";
import { Route, Routes } from "react-router-dom";
import SidebarCandidate from "./../components/Widgets/Sidebar/SidebarCandidate";
import DashboardCandidate from "./../components/Candidate/Dashboard";
import Job from "./../components/Candidate/Job/Job";
import JobView from "./../components/Candidate/Job/JobView";
import Application from "./../components/Candidate/Application/Application";
import ApplicationView from "./../components/Candidate/Application/ApplicationView";
import Email from "./../components/Common/Email";
import Notes from "./../components/Common/Notes";
import Ticket from "./../components/Common/Board";
import ProfileCandidate from "./../components/Candidate/Profile";
import SettingCandidate from "./../components/Candidate/Setting";

const CandidateLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <SidebarCandidate />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route index element={<DashboardCandidate />} />
          <Route path="job">
            <Route index element={<Job />} />
            <Route path="jobView/:id" element={<JobView />} />
          </Route>
          <Route path="application">
            <Route index element={<Application />} />
            <Route path="applicationView/:id" element={<ApplicationView />} />
          </Route>
          <Route path="email" element={<Email />} />
          <Route path="notes" element={<Notes />} />
          <Route path="board" element={<Ticket />} />
          <Route path="profile" element={<ProfileCandidate />} />
          <Route path="setting" element={<SettingCandidate />} />
        </Routes>
      </div>
    </div>
  );
};

export default CandidateLayout;
