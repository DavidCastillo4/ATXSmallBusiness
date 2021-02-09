//context.js
import { useState, createContext, useReducer } from "react";
import { initState } from './initState';
import cookie from 'cookie';
import { reducer } from './reducer';

export let Context = createContext();

let seconds = 300;

export let StoreProvider = ({ children }) => {
 let [authenticated, setAuthenticated] = useState(false);
 let [state, dispatch] = useReducer(reducer, initState);

 let setAuth = () => {
  let loggedIn = cookie.parse(document.cookie)['loggedIn'];
  setAuthenticated(loggedIn === 'true' ? true : false);
 };

 let logIn = () => {
  document.cookie = `loggedIn=true;max-age=${seconds}*1000`;
  setAuth();
 };

 let logInOut = () => {
  if (authenticated) {
   document.cookie = 'loggedIn=;expires=' + new Date(1970, 0, 1).toUTCString();
   setAuth();
   return 0
  }
  else return 1
 };

 return (
  <Context.Provider value={{ authenticated, logIn, logInOut, state, dispatch }}>
   {children}
  </Context.Provider>
 )
};
