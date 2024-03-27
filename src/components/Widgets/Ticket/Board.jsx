// Board.js
import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./Column";
import initialData from "./initialData";

const Board = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { source, destination, draggableId, type } = result;

    // If the draggable item is dropped outside of a droppable area
    if (!destination) {
      return;
    }

    // If the draggable item is dropped at the same position
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // If the draggable item is dropped in the same column
    if (type === "ticket") {
      const column = data.columns[source.droppableId];
      const newTicketIds = Array.from(column.ticketIds);
      newTicketIds.splice(source.index, 1);
      newTicketIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...column,
        ticketIds: newTicketIds,
      };

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };

      setData(newData);
    }

    // If the draggable item is moved to a different column
    if (type === "column") {
      const newColumnOrder = Array.from(data.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newData = {
        ...data,
        columnOrder: newColumnOrder,
      };

      setData(newData);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {data.columnOrder.map((columnId, index) => (
              <Column
                key={columnId}
                column={data.columns[columnId]}
                index={index}
              />
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
