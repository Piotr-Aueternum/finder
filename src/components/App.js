import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './Not-found';
import Search from './Search';

export default () => (
  <main>
    <Switch>
      <Route path="/" component={Search} />
      <Route component={NotFound} />
    </Switch>
  </main>
);
