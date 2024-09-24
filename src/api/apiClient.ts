// src/services/apiClient.ts
import axios from 'axios';

// Access environment variable
const apiBaseURL = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
  baseURL: apiBaseURL, // Use the environment variable
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
