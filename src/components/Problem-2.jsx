import React, { useState } from "react";
import AllContactModal from "./Modals/AllContactModal";
import UsContactModal from "./Modals/usContactModal";
import Design from "./Modals/Design";

const Problem2 = () => {
  const [showAllContact, setShowAllContact] = useState(false);
  const handleShowAllContact = () => setShowAllContact(true);

  const [showUsContact, setShowUsContact] = useState(false);
  const handleShowUsContact = () => setShowUsContact(true);
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
        {/* <Design /> */}

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={handleShowAllContact}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={handleShowUsContact}
          >
            US Contacts
          </button>
        </div>
        <AllContactModal
          handleShowAllContact={handleShowAllContact}
          handleShowUsContact={handleShowUsContact}
          show={showAllContact}
          setShow={setShowAllContact}
        />
        <UsContactModal
          handleShowAllContact={handleShowAllContact}
          handleShowUsContact={handleShowUsContact}
          show={showUsContact}
          setShow={setShowUsContact}
        />
      </div>
    </div>
  );
};

export default Problem2;
