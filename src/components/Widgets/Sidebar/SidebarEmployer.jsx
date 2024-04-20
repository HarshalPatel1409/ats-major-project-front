import React from "react";
import { Link, NavLink } from "react-router-dom";

const SidebarEmployer = () => {
  const pages = [
    { path: "/employer/", label: "Dashboard" },
    { path: "/employer/job", label: "Job" },
    { path: "/employer/email", label: "Email" },
    { path: "/employer/notes", label: "Notes" },
    { path: "/employer/blog", label: "Blog" },
    { path: "/employer/board", label: "Board" },
    { path: "/employer/profile", label: "Profile" },
    { path: "/employer/setting", label: "Setting" },
  ];

  const handleLogout = async () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="sidebar">
      {pages.map((page, index) => (
        <div key={index} className="links">
          <Link to={page.path}>{page.label}</Link>
        </div>
      ))}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default SidebarEmployer;
