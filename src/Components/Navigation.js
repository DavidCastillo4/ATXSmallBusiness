//Navigation.js
import React, { useContext, useState } from 'react';
import { Context } from '../Context/context';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../CSS/navigation.css';

export let Navigation = () => {
 let { authenticated, logInOut, logIn } = useContext(Context);
 let [loginVis, setLoginVis] = useState(false);
 let linkTxt = authenticated ? 'Logout' : 'Login';

 let Login = (props) => {
  return (
   <Modal {...props} size='lg' centered>
    <Modal.Header closeButton><h3>Login</h3></Modal.Header>
    <Modal.Body>
     <Form.Control type='email' placeholder='Email' /><br />
     <Form.Control type='password' placeholder='Password' />
    </Modal.Body>
    <Modal.Footer>
     <Button variant='dark' onClick={() => authenticate()}>Login</Button>
    </Modal.Footer>
   </Modal>
  );
 };

 let toggleLogin = () => {
  let isAuth = logInOut();
  if (isAuth === 1) setLoginVis(true);
 };

 let authenticate = () => {
  setLoginVis(false);
  logIn();
 };

 return (
  <div id='navBar' >
   <h2>Small Business</h2>
   <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
    <li><Link to='/' className='a'>Home</Link></li>
    <li><Link to='/map' className='a'>Map</Link></li>
    <li onClick={() => toggleLogin()}><Link to='#' className='a'>{linkTxt}</Link></li>
   </ul>
   <Login show={loginVis} onHide={() => setLoginVis(false)} />
  </div>
 )
};





