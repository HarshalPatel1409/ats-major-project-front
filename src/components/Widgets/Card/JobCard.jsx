import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const JobCard = ({ item, onClick }) => {
  return (
    <Card className="main-card">
      <CardActionArea>
        <CardContent>
          <div className="job-card" onClick={onClick}>
            <h3 className="title">{item.title} hello</h3>
            <p className="location">Location: {item.location}</p>
            <p className="company">Company: {item.company}</p>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default JobCard;
