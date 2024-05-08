import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import formatDate from "./../../../utils/dateFormat";

const NoteCard = ({ item, onClick }) => {
  return (
    <Card className={`note-main-card ${item.category}`}>
      <CardActionArea>
        <CardContent>
          <div className="note-card" onClick={onClick}>
            <h6 className="title">{item.title}</h6>
            <span className="time">{formatDate(item.createdAt)}</span>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NoteCard;
