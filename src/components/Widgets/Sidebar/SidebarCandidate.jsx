import React from "react";
import { Link } from "react-router-dom";

const SidebarCandidate = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/candidate/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/candidate/profile">Profile</Link>
        </li>
        <li>
          <Link to="/candidate/setting">Setting</Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarCandidate;
