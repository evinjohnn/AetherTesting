import React from "react";
import toast, { Toaster } from "react-hot-toast";

// Success notification
export const notifySuccess = (message) => {
  toast.success(message, {
    duration: 4000,
    style: {
      background: "#27ab99",
      color: "#fff",
    },
  });
};

// Error notification
export const notifyError = (message) => {
  toast.error(message, {
    duration: 6000,
    style: {
      background: "#f44336",
      color: "#fff",
    },
  });
};

// Toaster component
export const ToasterNotification = () => <Toaster position="top-center" />;
