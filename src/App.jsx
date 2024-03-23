import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
//! Candidate
import DashboardCandidate from "./components/Candidate/Dashboard";
import ProfileCandidate from "./components/Candidate/Profile";
import SettingCandidate from "./components/Candidate/Setting";
//! Employer
import DashboardEmployer from "./components/Employer/Dashboard";
import EmailEmployer from "./components/Employer/Email";
import JobEmployer from "./components/Employer/Job";
import NotesEmployer from "./components/Employer/Notes";
import ResourceEmployer from "./components/Employer/Resource";
import TicketEmployer from "./components/Employer/Board";
import ProfileEmployer from "./components/Employer/Profile";
import SettingEmployer from "./components/Employer/Setting";
//! Sidebar
import SidebarCandidate from "./components/Widgets/Sidebar/SidebarCandidate";
import SidebarEmployer from "./components/Widgets/Sidebar/SidebarEmployer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/candidate/*"
        element={
          <>
            <SidebarCandidate />
            <Routes>
              <Route index element={<DashboardCandidate />} />
              <Route path="profile" element={<ProfileCandidate />} />
              <Route path="setting" element={<SettingCandidate />} />
            </Routes>
          </>
        }
      />
      <Route
        path="/employer/*"
        element={
          <>
            <SidebarEmployer />
            <Routes>
              <Route index element={<DashboardEmployer />} />
              <Route path="job" element={<JobEmployer />} />
              <Route path="email" element={<EmailEmployer />} />
              <Route path="notes" element={<NotesEmployer />} />
              <Route path="resource" element={<ResourceEmployer />} />
              <Route path="board" element={<TicketEmployer />} />
              <Route path="profile" element={<ProfileEmployer />} />
              <Route path="setting" element={<SettingEmployer />} />
            </Routes>
          </>
        }
      />
    </Routes>
  );
}

export default App;
