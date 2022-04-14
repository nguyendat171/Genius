import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getUserRegister } from 'utils/localStorages';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const user = getUserRegister();
  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
