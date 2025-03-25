import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../config/axios.config';
import './index.css';
import { showSuccessToast, showErrorToast } from "../../utils/toastUtils";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', formData);
      const token = response.data.data.token;
      localStorage.setItem('token', token);

      if (rememberMe) {
        localStorage.setItem('token', token); // Store permanently
      } else {
        sessionStorage.setItem('token', token); // Remove on tab close
      }
      showSuccessToast("Login successful!");
      navigate('/dashboard');
    } catch (error: any) {
      showErrorToast(error.response?.data?.error || 'Login failed');
    }
  };

  return (
    <main className="login-container">
      <div className="login-wrapper">
        <div className="login-left-section">
          <div id="particles-js"></div>
          <div className="login-logo">
            <span style={{ color: 'aqua' }}>$</span>killSync
          </div>
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
          <div className="hero-side login">
            <p>
              Join us in shaping the future through learning, collaboration, and <br />
              innovation. Together, we can achieve remarkable accomplishments,<br />
              create lasting impact, and drive positive change in the world.
            </p>
          </div>
        </div>
        <div className="login-right-section">
          <div className="login-form">
            <h2>Welcome Back!</h2>
            <p>Please sign in to your account</p>
            <div className="login-social-buttons">
              <a href="#" className="login-icon"><img src="/assets/google.png" alt="" /></a>
              <a href="#" className="login-icon"><img src="/assets/github.png" alt="" /></a>
              <a href="#" className="login-icon"><img src="/assets/linkedin.png" alt="" /></a>
            </div>
            <div className="login-or-continue">
              <p>-----or continue with-----</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="login-input-group">
                <input type="email" id="email" name="email" placeholder='' onChange={handleChange} required />
                <label htmlFor="email" className="login-label">Email</label>
              </div>
              <div className="login-input-group">
                <input type="password" id="password" name="password" placeholder='' onChange={handleChange} required />
                <label htmlFor="password" className="login-label">Password</label>
              </div>
              <div className="login-remember">
                <label htmlFor="remember">
                  <input type="checkbox" id="remember" checked={rememberMe} onChange={handleCheckboxChange}/>Remember me
                </label>
                <Link to="/password/forgot" className="login-forgot-password">Forget your password?</Link>
              </div>
              <button type="submit" className="login-button">Sign in</button>
            </form>
            <div className="login-no-account">
              <p>Don't have an account?</p>
              <Link to="/signup">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;