import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";

const Design = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [allContact, setAllContact] = useState([]);
  const [filter, setFilter] = useState(false);
  const [searchAll, setSearchAll] = useState("");
  useEffect(() => {
    fetch(`https://contact.mediusware.com/api/contacts/?search=${searchAll}`)
      .then((res) => res.json())
      .then((data) => {
        if (!filter) {
          setAllContact(data?.results);
        } else {
          const filteredData = data?.results.filter(
            (contact) => contact.id % 2 === 0
          );
          setAllContact(filteredData);
        }
      });
  }, [filter, searchAll]);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <div className="d-flex justify-content-center">
            <Button style={{ backgroundColor: "#46139f" }}>All Contacts</Button>
            <Button style={{ backgroundColor: "#ff7f50" }} className="mx-3">
              Us Contacts
            </Button>
            <Button
              style={{ backgroundColor: "#46139f" }}
              onClick={handleClose}
            >
              Close
            </Button>
          </div>
        </Modal.Header>
        <Modal.Body>
          <>
            <div class="input-group">
              <div class="form-outline">
                <input
                  type="search"
                  id="form1"
                  class="form-control"
                  onChange={(e) => setSearchAll(e.target.value)}
                />
              </div>
              <button type="button" class="btn btn-primary">
                search
              </button>
            </div>
            <Table striped="columns">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Phone</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                {allContact?.map((contact) => (
                  <tr key={contact?.id}>
                    <td>{contact?.id}</td>
                    <td>{contact?.phone}</td>
                    <td>{contact?.country?.name}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        </Modal.Body>
        <Modal.Footer className="justify-content-start">
          <Form.Check
            inline
            label="even only"
            name="group1"
            type="checkbox"
            id="1"
            onClick={() => setFilter(!filter)}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Design;
