import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const RequireAuth = ({ children }) => {
  let { user } = React.useContext(AuthContext);
  let location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};
export default RequireAuth;
