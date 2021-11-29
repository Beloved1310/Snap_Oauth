import {  Route,  Redirect } from "react-router-dom";
import React from 'react'

 const PrivateRoute = ({ children, ...rest }) => {
    
    const isAuthenticated = window.sessionStorage.getItem('externalId');
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  };
  

  export default PrivateRoute