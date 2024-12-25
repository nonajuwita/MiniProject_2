import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('access_token'); // Check token in localStorage
  
  if (!token) {
    return <Navigate to="/login" />; // Redirect to login if no token
  }
  
  return <>{children || <Outlet />}</>; // Render children or Outlet if token is present
};

export default ProtectedRoute;
