import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';


function Restop({ operate }) {

  console.log(operate); //dispaly the time



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Opening Time
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Opening Times</Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <ListGroup variant="flush">
            <ListGroup.Item>Monday : {operate.Monday}</ListGroup.Item>
            <ListGroup.Item>Tuesday : {operate.Tuesday}</ListGroup.Item>
            <ListGroup.Item>Wednesday : {operate.Wednesday}</ListGroup.Item>
            <ListGroup.Item>Thursday : {operate.Thursday}</ListGroup.Item>
            <ListGroup.Item>Friday : {operate.Friday}</ListGroup.Item>
            <ListGroup.Item>Saturday : {operate.Saturday}</ListGroup.Item>
            <ListGroup.Item>Sunday : {operate.Sunday}</ListGroup.Item>

          </ListGroup>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Restop