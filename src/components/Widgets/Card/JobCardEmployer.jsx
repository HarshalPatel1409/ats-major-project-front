import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Stack } from "@mui/material";

const JobCardEmployer = ({ item }) => {
  let navigate = useNavigate();
  const goToEdit = async (id) => {
    const path = `update/${id}`;
    navigate(path);
  };

  const goToApplication = async (id) => {
    const path = `application/${id}`;
    navigate(path);
  };

  return (
    <Card className="main-card">
      <CardActionArea>
        <CardContent>
          <div className="job-card">
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <h3 className="title">{item.title}</h3>
            </Stack>
            <p className="company">Company: {item.company}</p>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <button
                className="common-button"
                onClick={() => goToApplication(item._id)}
              >
                Candidate
              </button>
              <button
                className="common-button"
                onClick={() => goToEdit(item._id)}
              >
                Edit
              </button>
            </Stack>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default JobCardEmployer;
