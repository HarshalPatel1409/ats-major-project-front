import React from "react";
import { Link } from "react-router-dom";

const SidebarCandidate = () => {
  const pages = [
    { path: "/candidate/dashboard", label: "Dashboard" },
    { path: "/candidate/job", label: "Job" },
    { path: "/candidate/application", label: "Application" },
    { path: "/candidate/email", label: "Email" },
    { path: "/candidate/notes", label: "Notes" },
    { path: "/candidate/board", label: "Board" },
    { path: "/candidate/profile", label: "Profile" },
    { path: "/candidate/setting", label: "Setting" },
  ];
  return (
    <div className="sidebar">
      <ul>
        {pages.map((page, index) => (
          <li key={index}>
            <Link to={page.path}>{page.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarCandidate;
