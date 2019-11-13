import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Index from "./views/Index";
import About from "./views/About";
import Projects from "./views/Projects";
import Resume from "./views/Resume";
import Stats from "./views/Stats";
import Links from "./views/Links";
import Contact from "./views/Contact";

import NotFound from "./views/NotFound";

// All of my CSS
import "./static/css/main.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/stats" component={Stats} />
        <Route path="/contact" component={Contact} />
        <Route path="/links" component={Links} />
        <Route path="/resume" component={Resume} />
        {/* Only useful in development mode */}
        <Route component={NotFound} status={404} />
      </Switch>
    </Router>
  );
}

export default App;
