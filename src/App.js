//App.js
import React from 'react';
import { StoreProvider } from './Context/context';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './Components/Navigation';
import { Router } from './Components/Router';

export let App = () => {
 return (
  <StoreProvider>
   <BrowserRouter>
    <Navigation />
    <Router />
   </BrowserRouter>
  </StoreProvider>
 );
};