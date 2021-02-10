//Home.js
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../Context/context';
import { Table } from 'react-bootstrap';
import { BsFillTrashFill } from 'react-icons/bs';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../CSS/home.css';
import { Search } from './Search';
/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/

export let Home = () => {
 let { state, authenticated, dispatch } = useContext(Context);
 let [modalShow, setModalShow] = useState(false);
 let [modalAdd, setModalAdd] = useState(false);
 let [company, setCompany] = useState({});
 let toggleVis = () => { return { display: authenticated ? 'table-cell' : 'none' } };
 let [isDisplay, setisDisplay] = useState(toggleVis());

 useEffect(() => { setisDisplay(toggleVis()) }, [authenticated]);

 let Company = (props) => {
  return (
   <Modal {...props} size="lg" centered>
    <Modal.Header closeButton><h3>{company.name}</h3></Modal.Header>
    <Modal.Body>
     <p><b>Id:</b> {company.id}</p>
     <p><b>Address:</b> {company.address}</p>
     <p><b>Latitude:</b> {company.lat}</p>
     <p><b>Longitude:</b> {company.lng}</p>
    </Modal.Body>
   </Modal>
  );
 };

 let AddCompany = (props) => {
  return (
   <Modal {...props} size="xl" centered>
    <Modal.Header closeButton><h3>Add Company</h3></Modal.Header>
    <Modal.Body>
     <Search />
    </Modal.Body>
    <Modal.Footer>
     <Button variant='dark' onClick={() => submit()}>Submit</Button>
    </Modal.Footer>
   </Modal>
  );
 };

 let showCompany = (company) => {
  setCompany(company);
  setModalShow(true);
 };

 let showModalAdd = () => {
  setModalAdd(true);
 };

 let submit = () => {
  dispatch({ type: 'add' })
  setModalAdd(false);
 };

 return (
  <div>
   <Table id='tbl' striped bordered hover >
    <thead>
     <tr>
      <th>#</th>
      <th>Company</th>
      <th>Latitude</th>
      <th>Logitude</th>
      <th style={isDisplay}>Delete</th>
     </tr>
    </thead>
    <tbody id='list'>
     {state.companies.map(company => (
      <tr key={company.id}>
       <td onClick={() => showCompany(company)}>{company.id}</td>
       <td onClick={() => showCompany(company)}>{company.name}</td>
       <td onClick={() => showCompany(company)}>{company.lat}</td>
       <td onClick={() => showCompany(company)}>{company.lng}</td>
       <td id='deleteCol' style={isDisplay} >
        <BsFillTrashFill onClick={() => dispatch({ type: 'delete', payload: company.id })} /></td>
      </tr>
     ))}
    </tbody>
   </Table>

   <Company show={modalShow} onHide={() => setModalShow(false)} />
   <AddCompany show={modalAdd} onHide={() => setModalAdd(false)} />
   <Button id='addBtn' style={isDisplay} onClick={() => showModalAdd()} variant='dark'>Add Company</Button>
  </div>
 );
};
