import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {
  getMyComposeMail,
  getMyInbox,
  sendMail,
} from "../../services/Email/Email.service";
import userLS from "./../../utils/userId";
import { CircularProgress, Stack } from "@mui/material";

const Email = () => {
  const [composeEmail, setComposeEmail] = useState("");
  const [inboxEmail, setInboxEmail] = useState("");
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const handleShow = () => setModalShow(true);
  const handleClose = () => {
    setModalShow(false);
    setTo("");
    setSubject("");
    setDescription("");
  };

  //! Inbox Email
  const getInboxMail = async () => {
    let email = "harshalpatel6244@gmail.com";
    const response = await getMyInbox(email);
    const { message, data } = response;
    setInboxEmail(data);
  };

  //! Compose Email
  const getComposeMail = async () => {
    let email = "inspiredreamtherealchaser@gmail.com";
    const response = await getMyComposeMail(email);
    const { message, data } = response;
    setComposeEmail(data);
  };

  //! function to handle submit
  const handleSendEmail = async (event) => {
    event.preventDefault();
    try {
      let newData = { to, subject, html: description };
      const response = await sendMail(newData);
      const { message, data } = response;
      alert(message);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getComposeMail();
    getInboxMail();
  }, []);

  return (
    <div className="container">
      <div className="page-header">
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <div className="top-heading">Email</div>
          <button
            className="add-button"
            onClick={() => {
              handleShow();
            }}
          >
            Create New Email
          </button>
        </Stack>
      </div>
      {/* //! Modal */}
      <Modal size="lg" show={modalShow} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Send Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Form.Group className="mb-3" controlId="noteTitle">
              <Form.Label>To :</Form.Label>
              <input
                type="email"
                id="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="noteTitle">
              <Form.Label>Subject :</Form.Label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="noteDescription">
              <Form.Label>Description</Form.Label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button variant="primary" type="submit" onClick={handleSendEmail}>
            {"Send Email"}
          </button>
        </Modal.Footer>
      </Modal>

      <h3>Compose Email</h3>
      {composeEmail ? (
        composeEmail.map((item, index) => (
          <div key={index}>
            {item.to}
            {item.subject}
          </div>
        ))
      ) : (
        <CircularProgress />
      )}

      <h3>Inbox Email</h3>
      {inboxEmail ? (
        inboxEmail.map((item, index) => (
          <div key={index}>
            {item.from}
            {item.subject}
          </div>
        ))
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Email;
