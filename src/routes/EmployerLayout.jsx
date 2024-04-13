import React from "react";
import { Route, Routes } from "react-router-dom";
import SidebarEmployer from "./../components/Widgets/Sidebar/SidebarEmployer";
import DashboardEmployer from "./../components/Employer/Dashboard";
import Email from "./../components/Common/Email";
import JobEmployer from "./../components/Employer/Job/Job";
import CreateJob from "../components/Employer/Job/CreateJob";
import Notes from "./../components/Common/Notes";
import Ticket from "./../components/Common/Board";
import ResourceEmployer from "./../components/Employer/Resource";
import ProfileEmployer from "./../components/Employer/Profile";
import SettingEmployer from "./../components/Employer/Setting";
import UpdateJob from "../components/Employer/Job/UpdateJob";
import Applications from "../components/Employer//Job/Applications";

const EmployerLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <SidebarEmployer />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route index element={<DashboardEmployer />} />
          <Route path="job">
            <Route index element={<JobEmployer />} />
            <Route path="create" element={<CreateJob />} />
            <Route path="update/:id" element={<UpdateJob />} />
            <Route path="application/:id" element={<Applications />} />
          </Route>
          <Route path="email" element={<Email />} />
          <Route path="notes" element={<Notes />} />
          <Route path="resource" element={<ResourceEmployer />} />
          <Route path="board" element={<Ticket />} />
          <Route path="profile" element={<ProfileEmployer />} />
          <Route path="setting" element={<SettingEmployer />} />
        </Routes>
      </div>
    </div>
  );
};

export default EmployerLayout;
