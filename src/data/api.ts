import axios from "axios";

export const resumeApi = axios.create({
  // baseURL: "https://resume-api.adaptable.app",
  baseURL: "http://localhost:3001",
});

export const updateUser = async (userId: string, payload: Object) => {
  const response = await resumeApi.put(`/users/${userId}`, payload);
  return response.data;
};

export const createUser = async (payload: Object) => {
  const response = await resumeApi.post(`/users`, payload);
  return response.data;
};
