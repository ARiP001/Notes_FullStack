import axios from "axios";

// Set base URL (Replace with your VM External IP or domain)
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://34.50.91.203:7000";

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
