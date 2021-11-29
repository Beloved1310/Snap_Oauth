import { Route, Redirect } from 'react-router-dom';
import React from 'react';



const PrivateRoute = ({ children, ...rest }) => {
    const isAuthenticated = localStorage.getItem('snap-connect-bitmoji-sdk-access-token');

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

export default PrivateRoute;
