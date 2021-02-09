//Router.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Map } from './Map';

export let Router = () => {
 return (
  <Switch>
   <Route exact path="/" component={Home} />
   <Route path='/map' component={Map} />
  </Switch>
 )
};