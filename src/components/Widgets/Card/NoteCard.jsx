import React from "react";

const NoteCard = ({ item, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3 className="title">{item.title}</h3>
      <p className="description"> {item.description}</p>
    </div>
  );
};

export default NoteCard;
