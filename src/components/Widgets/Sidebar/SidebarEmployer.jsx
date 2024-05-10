import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarEmployer = () => {
  let navigate = useNavigate();
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
  const handleLocation = (path) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <div className="path-container">
        {pages.map((page, index) => (
          <div
            className="apath"
            key={index}
            onClick={() => handleLocation(page.path)}
          >
            {page.label}
          </div>
        ))}
      </div>
      <button className="delete-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default SidebarEmployer;
