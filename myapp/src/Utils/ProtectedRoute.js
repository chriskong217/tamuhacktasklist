import React from 'react';
import { Route, useNavigate, useLocation } from 'react-router-dom';
import { getUser } from './Common';

function ProtectedRoute({ component: Component, ...rest }) {

  const navigate = useNavigate();

  return (
    <Route
      {...rest}
      render={(props) => true ? 
          <Component {...props} /> : 
          navigate('/login')
      }
    />
  );
}

export default ProtectedRoute;

