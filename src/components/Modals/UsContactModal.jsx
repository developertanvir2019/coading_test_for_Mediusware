import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const UsContactModal = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <Button>All Contacts</Button>
            <Button className="mx-3">Us Contacts</Button>
            <Button onClick={handleClose}> Close</Button>
          </div>
          <h2>Us contact modal</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UsContactModal;
