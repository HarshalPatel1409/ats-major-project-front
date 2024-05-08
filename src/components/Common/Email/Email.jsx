import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { getMyAllMails, sendMail } from "../../../services/Email/Email.service";
import userLS from "../../../utils/userId";
import { Checkbox, CircularProgress, Grid, Stack } from "@mui/material";
import { FiInbox } from "react-icons/fi";
import { FaRegPaperPlane } from "react-icons/fa";
import { RiDraftLine } from "react-icons/ri";
import { FiTrash2 } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Email = () => {
  let navigate = useNavigate();
  const [emailData, setEmailData] = useState();
  const [showMail, setShowMail] = useState("inbox");
  const [filteredEmails, setFilteredEmails] = useState([]);
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
  const getMyAllMail = async () => {
    const { email } = userLS();
    const response = await getMyAllMails(email);
    const { message, data } = response;
    setEmailData(data);
  };

  const sections = [
    { icon: <FiInbox />, label: "Inbox", action: () => setShowMail("inbox") },
    {
      icon: <FaRegPaperPlane />,
      label: "Sent",
      action: () => setShowMail("sent"),
    },
    { icon: <FaRegStar />, label: "Star", action: () => setShowMail("star") },
    {
      icon: <RiDraftLine />,
      label: "Draft",
      action: () => setShowMail("draft"),
    },
    { icon: <FiTrash2 />, label: "Trash", action: () => setShowMail("trash") },
  ];

  //! Filter Email
  const filterEmails = () => {
    const { email } = userLS();
    if (emailData) {
      if (showMail === "inbox") {
        const filtered = emailData.filter((data) => data.to === email);
        setFilteredEmails(filtered);
      } else if (showMail === "sent") {
        const filtered = emailData.filter((data) => data.from === email);
        setFilteredEmails(filtered);
      } else if (showMail === "star") {
        const filtered = emailData.filter(
          (data) =>
            (data.from === email && data.starSender === true) ||
            (data.to === email && data.starReceiver === true)
        );
        setFilteredEmails(filtered);
      } else if (showMail === "draft") {
        const filtered = emailData.filter(
          (data) => data.from === email && data.isDraft === true
        );
        setFilteredEmails(filtered);
      } else if (showMail === "trash") {
        const filtered = emailData.filter(
          (data) =>
            (data.from === email && data.deleteSender === true) ||
            (data.to === email && data.deleteReceiver === true)
        );
        setFilteredEmails(filtered);
      }
    }
  };

  const handleEmailView = async (id) => {
    const path = `/employer/email/${id}`;
    navigate(path);
  };

  //! function to handle submit
  const handleSendEmail = async (event) => {
    event.preventDefault();
    try {
      const { email, name } = userLS();
      let newData = { name, from: email, to, subject, html: description };
      const response = await sendMail(newData);
      const { message, data } = response;
      alert(message);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMyAllMail();
  }, []);

  useEffect(() => {
    filterEmails();
  }, [emailData, showMail]);

  return (
    <div className="container">
      <div className="page-header">
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <div className="top-heading">Email</div>
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

      <div className="page-body">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="email-side-content">
              <button
                className="common-button"
                onClick={() => {
                  handleShow();
                }}
                style={{
                  width: "80%",
                  height: "3rem",
                  fontWeight: "700",
                  marginBottom: "2rem",
                }}
              >
                Compose
              </button>
              {sections.map((section, index) => (
                <div className="section" key={index} onClick={section.action}>
                  {section.icon}
                  <span>{section.label}</span>
                </div>
              ))}
            </div>
          </Grid>
          <Grid item xs={9}>
            <div className="email-main-content">
              <div className="search-bar">
                <FaSearch />
                <span>Search</span>
              </div>
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                {filteredEmails
                  ? filteredEmails.map((item, index) => (
                      <Grid
                        container
                        className="email-section"
                        justifyContent="center"
                        alignItems="center"
                        key={index}
                        onClick={() => handleEmailView(item._id)}
                      >
                        <Grid item xs={3} justifyContent="flex-start">
                          <Checkbox></Checkbox>
                          <span className="the-name">{item.name}</span>
                        </Grid>
                        <Grid item xs={6}>
                          <span className="subject">{item.subject}</span>
                        </Grid>
                        <Grid item xs={3}>
                          <span className="tag">Social</span>
                          May 2
                        </Grid>
                      </Grid>
                    ))
                  : "no emails"}
              </Stack>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Email;

//! Mongo Email Structure
// from : write the user entering email
// to : sender email
// name : sender name
// subject : what is this email about?
// message : content of the email
// isDraft : email is still in draft section from sender
// isRead : email is read by the receiver
// starSemder: important email from the sender
// starReceiver: important email from the receiver
// deleteSender : delete/not to show the email to sender and stored in Trash
// deleteReceiver : delete/not to show the email to receiver and stored in Trash
// createdAT
