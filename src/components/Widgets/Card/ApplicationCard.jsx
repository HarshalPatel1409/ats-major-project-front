import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";

const ApplicationCard = ({ item, onClick }) => {
  return (
    <Card className="main-card">
      <CardActionArea>
        <CardContent>
          <div className="applicant-card" onClick={onClick}>
            <h3 className="title">{item.candidate[0].name}</h3>
            <p className="location"> {item.status}</p>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ApplicationCard;
