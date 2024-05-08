import { Stack } from "@mui/material";
import React, { useState } from "react";
import { FiTrash } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import Column from "./Column";

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);
  return (
    <div className="container">
      <div className="page-header">
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <div className="top-heading">Board</div>
        </Stack>
      </div>
      <div className="page-body">
        <div className="kanban-board">
          <Column
            title="Backlog"
            column="backlog"
            headingColor="#f55376"
            cards={cards}
            setCards={setCards}
          />
          <Column
            title="TODO"
            column="todo"
            headingColor="#F5BC00"
            cards={cards}
            setCards={setCards}
          />
          <Column
            title="Progress"
            column="doing"
            headingColor="#49BEFF"
            cards={cards}
            setCards={setCards}
          />
          <Column
            title="Complete"
            column="done"
            headingColor="#2ccf73"
            cards={cards}
            setCards={setCards}
          />
        </div>
        <BurnBarrel setCards={setCards} />
      </div>
    </div>
  );
};

export default Board;

//! BurnBarrel
const BurnBarrel = ({ setCards }) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");

    setCards((pv) => pv.filter((c) => c.id !== cardId));

    setActive(false);
  };

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`BurnBarrel  ${active ? "active" : ""}`}
    >
      {active ? <FaFire /> : <FiTrash />}
    </div>
  );
};

//! Default Cards
const DEFAULT_CARDS = [
  // BACKLOG
  { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
  { title: "SOX compliance checklist", id: "2", column: "backlog" },
  { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
  { title: "Document Notifications service", id: "4", column: "backlog" },
  // TODO
  {
    title: "Research DB options for new microservice",
    id: "5",
    column: "todo",
  },
  { title: "Postmortem for outage", id: "6", column: "todo" },
  { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },

  // DOING
  {
    title: "Refactor context providers to use Zustand",
    id: "8",
    column: "doing",
  },
  { title: "Add logging to daily CRON", id: "9", column: "doing" },
  // DONE
  {
    title: "Set up DD dashboards for Lambda listener",
    id: "10",
    column: "done",
  },
];
