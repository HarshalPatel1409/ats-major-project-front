import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import {
  createNote,
  deleteNote,
  getMyNotes,
  updateNote,
} from "./../../services/Note/Note.service";
import NoteCard from "../Widgets/Card/NoteCard";
import userLS from "./../../utils/userId";
import { CircularProgress, Stack } from "@mui/material";
import {
  FaFingerprint,
  FaListUl,
  FaRegStar,
  FaRegStickyNote,
} from "react-icons/fa";

const Notes = () => {
  const [notes, setNotes] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("all");
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [creatingNote, setCreatingNote] = useState(false);
  const handleShow = () => setModalShow(true);
  const handleClose = () => {
    setModalShow(false);
    setId("");
    setTitle("");
    setDescription("");
    setCategory("");
  };

  const sections = [
    {
      icon: <FaListUl className="icons" />,
      label: "All Notes",
      action: () => setCategory("all"),
    },
    {
      icon: <FaRegStickyNote className="icons" />,
      label: "General",
      action: () => setCategory("general"),
    },
    {
      icon: <FaFingerprint className="icons" />,
      label: "Personal",
      action: () => setCategory("personal"),
    },
    {
      icon: <FaRegStar className="icons" />,
      label: "Important",
      action: () => setCategory("important"),
    },
  ];

  const filterNotes = () => {
    if (notes) {
      if (category === "all") {
        setFilteredNotes(notes);
      } else if (category === "general") {
        let filtered = notes.filter((note) => note.category === "general");
        setFilteredNotes(filtered);
      } else if (category === "personal") {
        let filtered = notes.filter((note) => note.category === "personal");
        setFilteredNotes(filtered);
      } else if (category === "important") {
        let filtered = notes.filter((note) => note.category === "important");
        setFilteredNotes(filtered);
      }
    }
  };

  //! function to get the notes of the user
  const getNotes = async () => {
    const { _id } = userLS();
    console.log(_id);
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
    setCategory(note.category);
    setCreatingNote(false);
    handleShow();
  };

  //! function to handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { _id } = userLS();
      let noteData = { title, description, category, userId: _id };
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
      alert(message);
    } catch (error) {
      console.log(error);
    }
    handleClose();
    getNotes();
  };

  useEffect(() => {
    getNotes();
  }, []);

  useEffect(() => {
    filterNotes();
  }, [[notes], category]);

  return (
    <div className="container">
      <div className="page-header">
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <div className="top-heading">Notes</div>
          <button
            className="add-button"
            onClick={() => {
              setCreatingNote(true);
              handleShow();
            }}
            // style={{ padding: "8% 14%" }}
          >
            Create Note
          </button>
        </Stack>
      </div>
      {/* //! Modal */}
      <Modal size="lg" show={modalShow} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {creatingNote ? "Create New Note" : "Edit Note"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="just-testing">
            <div className="field-container">
              <label>Title:</label>
              <input
                type="text"
                placeholder="Title"
                value={title}
                style={{ width: "100%" }}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
              />
            </div>
            <div className="field-container">
              <label>Content:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ width: "100%" }}
              />
            </div>
            <div className="field-container">
              <label>Status : </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{ width: "100%" }}
              >
                <option value="general">General</option>
                <option value="personal">Personal</option>
                <option value="important">Important</option>
              </select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          {creatingNote ? (
            ""
          ) : (
            <button
              variant="secondary"
              className="delete-button"
              onClick={handleDelete}
            >
              Delete
            </button>
          )}
          <button
            variant="primary"
            className="common-button"
            type="submit"
            onClick={handleSubmit}
          >
            {creatingNote ? "Create" : "Save Changes"}
          </button>
        </Modal.Footer>
      </Modal>

      <div className="page-body">
        <div className="selection-container">
          <div className="types-container">
            {sections.map((button, index) => (
              <button className="types" key={index} onClick={button.action}>
                {button.icon}
                {button.label}
              </button>
            ))}
          </div>
        </div>
        <div className="card-body">
          {filteredNotes ? (
            filteredNotes.map((item, index) => (
              <NoteCard
                key={index}
                item={item}
                onClick={() => handleOpenViewModal(item)}
              />
            ))
          ) : (
            <div className="circular">
              <CircularProgress />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notes;
