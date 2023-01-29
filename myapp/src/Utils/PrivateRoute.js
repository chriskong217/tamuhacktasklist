import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getToken } from './Common';
 
// handle the private routes

/*

function PrivateRoute({ component: Component, ...rest }) {
  if (!getToken()) {
    return <Navigate to="/login" state={{ from: props.location }} />
  }
  else {
    return <Component {...props} /> 
  }
}
*/


function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => getToken() ? <Component {...props} /> : <Navigate to="/login" state={{ from: props.location }}  />}
    />
  )
}

export default PrivateRoute;

