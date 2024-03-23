// Ticket.js
import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Ticket = ({ ticket, index }) => {
  return (
    <Draggable draggableId={ticket.id} index={index}>
      {(provided) => (
        <div
          className="ticket"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h4>{ticket.title}</h4>
          <p>{ticket.description}</p>
          {/* Render additional ticket details */}
        </div>
      )}
    </Draggable>
  );
};

export default Ticket;
