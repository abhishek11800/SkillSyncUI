import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import DashboardLayout from "./layout/DashboardLayout";
import ForgotPassword from "./pages/Forgot_Password";
import ResetPassword from "./pages/Reset_Password";
import ProtectedRoute from "./guard/ProtectedRoute";
import PublicRoute from "./guard/PublicRoute";

import Courses from "./pages/dashboard/Courses/Courses";
import Projects from "./pages/dashboard/Projects/Projects";
import Discussions from "./pages/dashboard/Discussions/Discussions";
import Mentors from "./pages/dashboard/Mentors/Mentors";
import Integrations from "./pages/dashboard/Integrations/Integrations";
import Profile from "./pages/dashboard/Profile/Profile";

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};

// Show Navbar ONLY for Home, Signup, About, and Contact
const MainLayout: React.FC = () => {
  const location = useLocation();
  
  //Navbar is visible ONLY on these pages
  const showNavbarRoutes = ["/", "/signup", "/about", "/contact"];

  return (
    <>
      {showNavbarRoutes.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset" element={<ResetPassword />} />
        </Route>

        {/* Protected Routes (Only for logged-in users) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard/*" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="courses" element={<Courses />} />
            <Route path="projects" element={<Projects />} />
            <Route path="discussions" element={<Discussions />} />
            <Route path="mentors" element={<Mentors />} />
            <Route path="integrations" element={<Integrations />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>  
      </Routes>
    </>
  );
};

export default App;
