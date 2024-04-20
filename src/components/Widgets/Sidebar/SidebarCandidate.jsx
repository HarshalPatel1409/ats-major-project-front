import React from "react";
import { Link } from "react-router-dom";

const SidebarCandidate = () => {
  const pages = [
    { path: "/candidate/", label: "Dashboard" },
    { path: "/candidate/job", label: "Job" },
    { path: "/candidate/application", label: "Application" },
    { path: "/candidate/email", label: "Email" },
    { path: "/candidate/notes", label: "Notes" },
    { path: "/candidate/board", label: "Board" },
    { path: "/candidate/profile", label: "Profile" },
    { path: "/candidate/setting", label: "Setting" },
  ];

  const handleLogout = async () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="sidebar">
      {pages.map((page, index) => (
        <div key={index}>
          <Link to={page.path}>{page.label}</Link>
        </div>
      ))}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default SidebarCandidate;
