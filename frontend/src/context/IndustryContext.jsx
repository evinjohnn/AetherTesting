import React, { createContext, useContext, useEffect, useState } from "react";
import { axiosInstance } from "../utils/baseurl"; // Assuming axiosInstance is properly set up

// Create IndustryContext
const IndustryContext = createContext();

// Custom hook for accessing IndustryContext
export const useIndustry = () => useContext(IndustryContext);

const IndustryProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [industryData, setIndustryData] = useState(null);

  // Fetch industry data from the API
  const fetchIndustryData = async () => {
    setLoading(true);
    try {
      // Fetch industry data from the backend
      const response = await axiosInstance.get("/industries", {
        params: {
          isNeedFull: true,
        },
      }); // API call to fetch industry data
      console.log("data", response.data.data);
      setIndustryData(response.data.data);
    } catch (error) {
      console.error("Error fetching industrys:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <IndustryContext.Provider
      value={{
        industryData,
        loading,
        fetchIndustryData,
      }}
    >
      {children}
    </IndustryContext.Provider>
  );
};

export default IndustryProvider;
