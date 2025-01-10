import axios from "axios";
import config from "./config";
import React from "react";
import { root } from "../main";
import { BrowserRouter as Router } from "react-router-dom";
import SessionExpired from "../components/includes/sessionExpired";

const AdminBaseURL = () => {
  return config.AdminBackendURL;
};

const ClientBaseURL = () => {
  return config.ClientBackendURL;
};

// Create axios instance with the determined baseURL
const axiosInstance = axios.create({
  baseURL: AdminBaseURL(),
});

const clientaxiosInstance = axios.create({
  baseURL: ClientBaseURL(),
});

const showSessionExpired = () => {
  root.render(
    <Router>
      <SessionExpired />
    </Router>
  );
};

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accesstoken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    showSessionExpired();
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(
  (config) => {
    if (!navigator.onLine) {
      return Promise.reject(new Error("No internet connection"));
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // If the refresh token request fails, prevent infinite loop
    if (originalRequest.url.includes("/refresh/refreshtoken")) {
      showSessionExpired();
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshtoken");
      try {
        const response = await axiosInstance.post("/refresh/refreshtoken", {
          refreshToken: refreshToken,
        });

        localStorage.setItem("accesstoken", response.data.data.accesstoken);
        localStorage.setItem("refreshtoken", response.data.data.refreshtoken);

        originalRequest.headers.Authorization = `Bearer ${response.data.accesstoken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        showSessionExpired();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export { axiosInstance, clientaxiosInstance };
