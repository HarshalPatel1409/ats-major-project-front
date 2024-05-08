import React from "react";
import { Grid } from "@mui/material";

const ApplicationCard = ({ item, onClick }) => {
  return (
    <Grid container onClick={onClick} className="single-candidate-row">
      <Grid item xs>
        {item.candidate[0].name}
      </Grid>
      <Grid item xs>
        <span className={`status ${item.status}`}>{item.status}</span>
      </Grid>
      <Grid item xs>
        {item.jobTitle}
      </Grid>
    </Grid>
  );
};

export default ApplicationCard;
