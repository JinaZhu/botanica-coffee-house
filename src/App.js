import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contacto" component={Contact} />
          <Route exact path="/nosotrxs" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
