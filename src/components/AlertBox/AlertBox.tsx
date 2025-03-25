import React from "react";

interface AlertBoxProps {
  message: string;
}

const AlertBox: React.FC<AlertBoxProps> = ({ message }) => {
  const alertBoxStyle: React.CSSProperties = {
    color: "#b91c1c",           // Dark red text (text-red-700)
    padding: "16px",            // Padding (p-4)
    borderRadius: "8px",        // Rounded corners (rounded-lg)
    border: "1px solidrgb(129, 122, 122)",// Border color (border-red-300)
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.51)", // Shadow (shadow-md)
    textAlign: "center",        // Center text
    marginTop: "32px",          // Margin-top (mt-8)
    transition: "background-color 0.3s ease" // Transition effect
  };

  // Hover effect handlers
  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.backgroundColor = "#fecaca"; // Hover bg (hover:bg-red-200)
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.backgroundColor = "#fee2e2"; // Original bg
  };

  return (
    <div
      style={alertBoxStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
    {message}
    </div>
  );
};

export default AlertBox;
