import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import getRoutes from "helpers/getRoutes";
import routes from "routes/allRoutes";
import Dashboard from "containers/layout";
import store from "store";
import ErrorBoundary from "components/ErrorBoundary";
import { useSelector } from "react-redux";
import NotFound from "pages/not-found";

const { protectedRoutes, unprotectedRoutes } = getRoutes(routes);
const Routes = () => {
  const isAuthenticated = store.get("token") || false;
  let userRole = useSelector(
    ({
      auth: {
        profile: {
          data: {
            role: { name = "" },
          },
        },
      },
    }) => name
  );
  return (
    <ErrorBoundary fullHeight>
      <Router>
        <Switch>
          {unprotectedRoutes.map((route) => (
            <Route
              key={route.name}
              exact
              path={route.path}
              component={route.component}
            />
          ))}
          {!isAuthenticated && <Redirect to="/login" />}
          <Dashboard>
          <ErrorBoundary>
            <Switch>
            {protectedRoutes.map(({
              name,
              path,
              unSubscribed,
              access,
              component: Component
            }) => (
              <Route
                key={name}
                exact
                path={path}
              />
            ))}
            <Route 
              path="*"
              component={NotFound}
              exact
             />
            </Switch>
            </ErrorBoundary>
          </Dashboard>
        </Switch>
      </Router>
      </ErrorBoundary>
  );
};

export default Routes;
