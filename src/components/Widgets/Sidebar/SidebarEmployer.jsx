import React from "react";
import { Link } from "react-router-dom";

const SidebarEmployer = () => {
  const pages = [
    { path: "/employer/dashboard", label: "Dashboard" },
    { path: "/employer/job", label: "Job" },
    { path: "/employer/email", label: "Email" },
    { path: "/employer/notes", label: "Notes" },
    { path: "/employer/resource", label: "Resource" },
    { path: "/employer/board", label: "Board" },
    { path: "/employer/profile", label: "Profile" },
    { path: "/employer/setting", label: "Setting" },
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

export default SidebarEmployer;
