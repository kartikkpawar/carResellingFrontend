import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import { PageRoutes } from "./Routes/routes";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <Switch>
        {PageRoutes.map((route, idx) => (
          <Route
            exact
            path={route.path}
            component={route.component}
            key={idx}
          />
        ))}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
