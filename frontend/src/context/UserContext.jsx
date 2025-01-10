import React, { createContext, useContext, useEffect, useState } from "react";
import { axiosInstance } from "../utils/baseurl"; // Assuming axiosInstance is properly set up

// Create UserContext
const UserContext = createContext();

// Custom hook for accessing UserContext
export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  // Fetch user data from the API
  const fetchUserData = async () => {
    setLoading(true);
    try {
      // Fetch user data from the backend
      const response = await axiosInstance.get("/myprofile"); // API call to fetch user data
      console.log("data", response.data.data);
      setUserData(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to clear user data and tokens
  const clearUserData = () => {
    localStorage.clear();
    setUserData(null); // Clear user data as well
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        loading,
        clearUserData,
        fetchUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
