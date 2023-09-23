import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";

const AllContactModal = ({
  show,
  setShow,
  handleShowAllContact,
  handleShowUsContact,
}) => {
  const handleClose = () => setShow(false);
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <div className="d-flex justify-content-center">
            <Button
              onClick={handleShowAllContact}
              style={{ backgroundColor: "#46139f" }}
            >
              All Contacts
            </Button>
            <Button
              onClick={() => {
                handleShowUsContact(), handleClose();
              }}
              style={{ backgroundColor: "#ff7f50" }}
              className="mx-3"
            >
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
            <div class="input-group mb-2">
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
                {allContact.length ? (
                  allContact?.map((contact) => (
                    <tr key={contact?.id}>
                      <td>{contact?.id}</td>
                      <td>{contact?.phone}</td>
                      <td>{contact?.country?.name}</td>
                    </tr>
                  ))
                ) : (
                  <h3 className="m-5">No data found</h3>
                )}
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

export default AllContactModal;
