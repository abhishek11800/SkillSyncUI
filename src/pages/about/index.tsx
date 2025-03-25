import React from 'react';
import './index.css'; // Ensure this path is correct relative to your project structure

const About: React.FC = () => {
  return (
    <main className="about-page">
        <div className="about-content">
            <div id="particles-js"></div>
            <h2>About Us</h2>
            <p>
              Welcome to Skill$ync! We are dedicated to helping you learn, innovate, and collaborate. Our platform is designed to provide you with the tools and resources you need to achieve your goals and make a positive impact in the world.
            </p>
            <p>
              Join us on this journey to enhance your skills, connect with like-minded individuals, and drive positive change.
            </p>
        </div>
    </main>
  );
};

export default About;