import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LocalStorageUtil from "../../utils/LocalStorageService";
import "./DashboardNavbar.css";

const DashboardNavbar: React.FC = () => {
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // Get user info from Local Storage
  const user = JSON.parse(LocalStorageUtil.get("user") || "{}");
  const userName = user?.name || "User";

  // Extract initials (e.g., "Abhishek Kumar" → "AK")
  const getInitials = (name: string) => {
    const words = name.split(" ");
    return words.map((word) => word.charAt(0)).join("").toUpperCase();
  };

  useEffect(() => {
    // Load profile pic from local storage
    const storedProfilePic = LocalStorageUtil.get("profilePic");
    if (storedProfilePic) {
      setProfilePic(storedProfilePic);
    }
  }, []);

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        setProfilePic(base64);
        LocalStorageUtil.set("profilePic", base64); // Save to local storage
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <nav className="dashboard-navbar">

      <div className="dashboard-profile" onClick={handleProfileClick}>
        {profilePic ? (
          <img src={profilePic} alt="Profile" className="profile-img" />
        ) : (
          <div className="profile-initials">{getInitials(userName)}</div>
        )}
      </div>

      {showDropdown && (
        <div className="profile-dropdown">
          <label htmlFor="profile-upload" className="upload-label">
            Upload Picture
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
          <Link to="/dashboard/profile">Profile</Link>
        </div>
      )}
    </nav>
  );
};

export default DashboardNavbar;
