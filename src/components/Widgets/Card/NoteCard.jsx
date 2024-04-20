import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
const NoteCard = ({ item, onClick }) => {
  return (
    <Card className="note-main-card">
      <CardActionArea>
        <CardContent>
          <div className="note-card" onClick={onClick}>
            <h3 className="title">{item.title}</h3>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NoteCard;
