import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import MaxDoctor from '../pages/MaxDoctor';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/maxdoctor" component={MaxDoctor} />
    </Switch>
  );
}
