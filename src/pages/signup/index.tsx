import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import api from "../../config/axios.config";
import { showSuccessToast, showErrorToast } from "../../utils/toastUtils";
import "./index.css";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/signup", formData);
      // showSuccessToast(response.data.message || "Signup successful!");
      if (response.data?.error) {
        throw new Error(response.data.error);
      }
      showSuccessToast("Signup successful!");
      // window.location.href = "/login";
      navigate('/login');
    } catch (error: any) {
      showErrorToast(error.response?.data?.error || error.message || "Signup failed");
      // showErrorToast("Signup failed");
    }
  };

  return (
    <main className="signup-page">
      <div className="signup-form">
        <h2>Sign up to continue...</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" name="name" id="name" placeholder="" onChange={handleChange} required />
            <label htmlFor="name" className="login-label">Name</label>
          </div>
          <div className="input-group">
            <input type="email" name="email" id="email" placeholder="" onChange={handleChange} required />
            <label htmlFor="email" className="login-label">Email</label>
          </div>
          <div className="input-group">
            <input type="password" name="password" id="password" placeholder="" onChange={handleChange} required />
            <label htmlFor="password" className="login-label">Password</label>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <div className="already-account">
        <p>Already have an account? </p>
        <Link to="/login">Sign in</Link>
        </div>
      </div>
    </main>
  );
};

export default Signup;
