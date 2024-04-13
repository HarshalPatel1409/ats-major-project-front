import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {
  createNote,
  deleteNote,
  getMyNotes,
  updateNote,
} from "./../../services/Note/Note.service";
import NoteCard from "../Widgets/Card/NoteCard";
import userLS from "./../../utils/userId";

const Notes = () => {
  const [notes, setNotes] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [creatingNote, setCreatingNote] = useState(false);
  const handleShow = () => setModalShow(true);
  const handleClose = () => {
    setModalShow(false);
    setId("");
    setTitle("");
    setDescription("");
  };

  //! function to get the notes of the user
  const getNotes = async () => {
    const { _id } = userLS();
    const response = await getMyNotes(_id);
    const { message, data } = response;

    if (message === "Note fetched successfully" && data && data.length > 0) {
      setNotes(data);
    }
  };

  //! function to open modal from Card
  const handleOpenViewModal = (note) => {
    setId(note._id);
    setTitle(note.title);
    setDescription(note.description);
    setCreatingNote(false);
    handleShow();
  };

  //! function to handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { _id } = userLS();
      let noteData = { title, description, userId: _id };
      if (creatingNote) {
        const response = await createNote(noteData);
        const { message, data } = response;
      } else {
        noteData._id = id;
        const response = await updateNote(noteData);
        const { message, data } = response;
      }
    } catch (error) {
      console.log(error);
    }
    handleClose();
    getNotes();
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const response = await deleteNote(id);
      const { message, data } = response;
    } catch (error) {
      console.log(error);
    }
    handleClose();
    getNotes();
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="container">
      <h1>Notes</h1>
      <button
        onClick={() => {
          setCreatingNote(true);
          handleShow();
        }}
      >
        Create New Note
      </button>
      {/* //! Modal */}
      <Modal size="lg" show={modalShow} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {creatingNote ? "Create New Note" : "Edit Note"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Form.Group className="mb-3" controlId="noteTitle">
              <Form.Label>Title</Form.Label>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
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
          {creatingNote ? (
            ""
          ) : (
            <button variant="secondary" onClick={handleDelete}>
              Delete
            </button>
          )}
          <button variant="primary" type="submit" onClick={handleSubmit}>
            {creatingNote ? "Create" : "Save Changes"}
          </button>
        </Modal.Footer>
      </Modal>

      {notes ? (
        notes.map((item, index) => (
          <NoteCard
            key={index}
            item={item}
            onClick={() => handleOpenViewModal(item)}
          />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Notes;
