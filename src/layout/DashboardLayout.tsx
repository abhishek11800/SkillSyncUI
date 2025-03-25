// import React from "react";
// import { Outlet } from "react-router-dom";
// import VerticalNavbar from "../components/VerticalNavbar"; // Import the sidebar

// const DashboardLayout: React.FC = () => {
//   return (
//     <div className="dashboard-container">
//       <VerticalNavbar />
//       <div className="dashboard-content">
//         <Outlet /> {/* This will load different dashboard pages */}
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
import React from "react";
import { Outlet } from "react-router-dom";
import VerticalNavbar from "../components/VerticalNavbar"; // Sidebar
import DashboardNavbar from "../components/DashboardNavbar/DashboardNavbar";// Horizontal Navbar
import "./DashboardLayout.css"; // Add styles
// import Dashboard from "../pages/dashboard";

const DashboardLayout: React.FC = () => {
  return (
    <>
    <div className="Container">
      <div className="LeftContainer">
        <VerticalNavbar/>
      </div>
      <div className="RightContainer">
        <div className="TopNavbar">
          <DashboardNavbar/>
        </div>
        <div className="BottomNavbar">
          <Outlet/>
          {/* <Dashboard/> */}
        </div>
      </div>
    </div>
    </>
  );
};

export default DashboardLayout;

