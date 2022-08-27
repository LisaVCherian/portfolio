import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import AllProjects from './pages/AllProjects/AllProjects';
import Contact from './pages/Contact/Contact';

function App() {
  return (

    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/projects">
            <AllProjects />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div >
    </Router>

  );
}

export default App;
