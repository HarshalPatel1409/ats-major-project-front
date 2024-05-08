import React from "react";
import { Route, Routes } from "react-router-dom";
import SidebarEmployer from "./../components/Widgets/Sidebar/SidebarEmployer";
import Drawer from "./../components/Widgets/Sidebar/Drawer";
import DashboardEmployer from "./../components/Employer/Dashboard";
import Email from "./../components/Common/Email/Email";
import EmailDetails from "../components/Common/Email/EmailDetails";
import JobEmployer from "./../components/Employer/Job/Job";
import CreateJob from "../components/Employer/Job/CreateJob";
import Notes from "./../components/Common/Notes";
import Ticket from "./../components/Common/Board/Board";
import BlogEmployer from "./../components/Employer/Blog/Blog";
import BlogMod from "./../components/Employer/Blog/ModBlog";
import ProfileEmployer from "./../components/Employer/Profile";
import SettingEmployer from "./../components/Employer/Setting";
import UpdateJob from "../components/Employer/Job/UpdateJob";
import Applications from "../components/Employer//Job/Applications";
import Applicant from "../components/Employer/Job/Applicant";

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
            <Route path="applicant/:id" element={<Applicant />} />
          </Route>
          <Route path="email">
            <Route index element={<Email />} />
            <Route path=":id" element={<EmailDetails />} />
          </Route>
          <Route path="notes" element={<Notes />} />
          <Route path="blog">
            <Route index element={<BlogEmployer />} />
            <Route path="mod/:id" element={<BlogMod />} />
          </Route>
          <Route path="board" element={<Ticket />} />
          <Route path="drawer" element={<Drawer />} />
          <Route path="profile" element={<ProfileEmployer />} />
          <Route path="setting" element={<SettingEmployer />} />
        </Routes>
      </div>
    </div>
  );
};

export default EmployerLayout;
