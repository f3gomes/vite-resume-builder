import axios from "axios";

export const resumeApi = axios.create({
  // baseURL: "https://resume-api.adaptable.app",
  baseURL: "http://localhost:3001",
});
