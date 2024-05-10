import React from "react";
import { Route, Routes } from "react-router-dom";
import SidebarCandidate from "./../components/Widgets/Sidebar/SidebarCandidate";
import DashboardCandidate from "./../components/Candidate/Dashboard";
import Job from "./../components/Candidate/Job/Job";
import JobView from "./../components/Candidate/Job/JobView";
import Application from "./../components/Candidate/Application/Application";
import ApplicationView from "./../components/Candidate/Application/ApplicationView";
import Email from "./../components/Common/Email/Email";
import Notes from "./../components/Common/Notes";
import Ticket from "../components/Common/Board/Board";
import ProfileCandidate from "../components/Candidate/Profile/Profile";
import SettingCandidate from "./../components/Candidate/Setting";
import ProfileUpdate from "../components/Candidate/Profile/ProfileUpdate";
import EmailDetails from "../components/Common/Email/EmailDetails";
import { Grid } from "@mui/material";

const CandidateLayout = () => {
  return (
    <Grid container>
      <Grid item xs={"2"}>
        <SidebarCandidate />
      </Grid>
      <Grid item xs={"10"}>
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
          <Route path="email">
            <Route index element={<Email />} />
            <Route path=":id" element={<EmailDetails />} />
          </Route>
          <Route path="notes" element={<Notes />} />
          <Route path="board" element={<Ticket />} />
          <Route path="profile">
            <Route index element={<ProfileCandidate />} />
            <Route path="update/:id" element={<ProfileUpdate />} />
          </Route>
          <Route path="setting" element={<SettingCandidate />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default CandidateLayout;
