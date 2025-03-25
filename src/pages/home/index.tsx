import React from 'react';
import './index.css';
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
        <section className="hero">
          <div id="particles-js"></div>
          <div className="hero1">
            <div className="hero-content1">
              <div>
                <img src="./assets/profile1.png" alt="Team Collaboration" />
              </div>
              <div>
                <h1>
                  <span className="highlight">L</span>earn
                  <br />
                  <span className="highlight">I</span>nnovate
                  <br />
                  <span className="highlight">C</span>ollaborate
                </h1>
              </div>
            </div>
            <div className="hero-side">
              <p>
                Join us in shaping the future through learning, collaboration, and <br />
                innovation. Together, we can achieve remarkable accomplishments,<br />
                create lasting impact, and drive positive change in the world.
              </p>
              <Link to="/signup">
                  <button className="cta-btn">Join now!</button>
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/assets/group.png" alt="Team Collaboration" />
          </div>
        </section>
  );
};

export default Home;