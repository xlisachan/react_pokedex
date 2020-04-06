import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { Home, NotFound } from './pages';
import Results from './pages/Results';

const routes = (getParams) => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/pokemon" render={({ location, history }) => {
        const { query } = getParams(location);
        return <Results query={query} history={history} />;
      }} />

      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default routes;