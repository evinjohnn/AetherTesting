export const isAuthenticated = () => {
  const token = localStorage.getItem("refreshtoken");
  return !!token; // Returns true if token exists, otherwise false
};
