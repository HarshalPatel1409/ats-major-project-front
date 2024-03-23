// Column.js
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Ticket from "./Ticket";

const Column = ({ column, index }) => {
  return (
    <div className="column">
      <h3>{column.title}</h3>
      <Droppable droppableId={column.id} type="ticket">
        {(provided) => (
          <div
            className="ticket-container"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {column.ticketIds &&
              column.ticketIds.map((ticketId, index) => (
                <Ticket
                  key={ticketId}
                  ticket={column.tickets[ticketId]}
                  index={index}
                />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
