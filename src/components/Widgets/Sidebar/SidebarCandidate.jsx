import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarCandidate = () => {
  let navigate = useNavigate();
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

export default SidebarCandidate;
