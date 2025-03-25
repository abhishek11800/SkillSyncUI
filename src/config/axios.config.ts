import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔹 Request Interceptor (Adds Token to Headers)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Get token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Add token to headers
    }
    return config;
  },
  (error) => Promise.reject(error) // Handle request errors
);

// 🔹 Response Interceptor (Handles API Errors)
api.interceptors.response.use(
  (response) => response, // If successful, just return the response
  (error) => {
    if (error.response) {
      console.error("API Error:", error.response.status, error.response.data);

      // 🔹 Auto Logout on Unauthorized (401)
      if (error.response.status === 401) {
        localStorage.removeItem("token"); // Clear token
        window.location.href = "/login"; // Redirect to login
      }
    } else {
      console.error("Network error:", error.message);
    }

    return Promise.reject(error); // Reject the error for further handling
  }
);


export default api;
