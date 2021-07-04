import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Navigation from "./Navigation/Navigation";
import Home from "./Home/Home";
import SignIn from "./SignIn/SignIn";
import Checkout from "./Checkout/Checkout";

function App() {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route path="/signIn">
          <SignIn />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
