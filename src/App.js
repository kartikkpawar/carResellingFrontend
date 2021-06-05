import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { PageRoutes } from "./Routes/routes";

const App = () => {
  return (
    <Router>
      <Switch>
        {PageRoutes.map((route, idx) => (
          <Route path={route.path} component={route.component} key={idx} />
        ))}
        <Route component={NotFound} />
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
