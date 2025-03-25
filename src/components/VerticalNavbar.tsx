import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./VerticalNavbar.css";
import LocalStorageUtil from "../utils/LocalStorageService";

const VerticalNavbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    LocalStorageUtil.remove("token");
    navigate("/");
  };
  return (
    <div className="verticalNav-menu">
      <div id="particles-js"></div>
      <div className="verticalNav-logo">
        <span style={{ color: "aqua" }}>$</span>killSync
        <hr className="verticalNav-logo-line" />
      </div>

      <ul className="verticalNav-menu-content">
        <li><Link to="/dashboard/courses"><span className="material-symbols-outlined">school</span><span>Courses</span></Link></li>
        <li><Link to="/dashboard/projects"><span className="material-symbols-outlined">work</span><span>Projects</span></Link></li>
        <li><Link to="/dashboard/discussions"><span className="material-symbols-outlined">forum</span><span>Discussions</span></Link></li>
        <li><Link to="/dashboard/mentors"><span className="material-symbols-outlined">supervisor_account</span><span>Mentors</span></Link></li>
        <li><Link to="/dashboard/integrations"><span className="material-symbols-outlined">extension</span><span>Integrations</span></Link></li>
        <li onClick={handleLogout}><Link to=""><span className="material-symbols-outlined">logout</span><span>Logout</span></Link></li>
      </ul>
    </div>
  );
};

export default VerticalNavbar;
