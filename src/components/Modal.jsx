// Project by:  David Turner
// Date Written: 	August 13, 2022
// File Name: 		David_Turner_Final_Sprint_Portfolio.zip
// GitHub URL: 	https://github.com/DeToxFox/Software-Development-S-22-5-Final-Sprint.git

import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Contact Me
      </Button>

      <Modal className="overallModal" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Contact David Turner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address: </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@email.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="shortMsg">Short Message: </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <h4 id="close-modal">
          Hit "Close" or "Sent Message" to close this message box
        </h4>
        <Modal.Footer className="footerModal">
          <Button
            className="closeModal"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button className="sendModal" onClick={handleClose}>
            Sent Message
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
