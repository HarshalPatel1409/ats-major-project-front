import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, id, column, handleDragStart }) => {
  return (
    <div className="kanban-card">
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="card-motion"
      >
        <p className="card-title">{title}</p>
      </motion.div>
    </div>
  );
};

export default Card;

const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="card-dropindicator"
    />
  );
};
