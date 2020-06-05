import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Docs from "./views/docs";
import Login from "./views/login";
import Dashboard from "./views/dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

const App = () => {
  return (
    <Switch>
      <Route exact path="/admin">
        <Login />
      </Route>
      <ProtectedRoute
        exact
        path="/dashboard"
        component={Dashboard}
        // handleLogout={handleLogout}
      />
      <Route exact path="/">
        <Docs />
      </Route>
    </Switch>
  );
};

export default App;
