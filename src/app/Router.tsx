import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from 'containers/Layouts';
import Loader from 'containers/Loader';
import Login from 'containers/Login';
import Home from 'containers/Home';
import routes from './routes';
import PrivateRoute from './PrivateRoute';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path={routes.login.path}
        exact={routes.login.exact}
        component={Login}
      />
      <Layout>
        <PrivateRoute
          path={routes.home.path}
          exact={routes.home.exact}
          component={Home}
        />
      </Layout>
    </Switch>
    <Loader />
    <ToastContainer />
  </BrowserRouter>
);

export default Router;
