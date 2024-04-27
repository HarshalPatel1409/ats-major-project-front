import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ item }) => {
  let navigate = useNavigate();
  const handleMod = async (id) => {
    const path = `mod/${id}`;
    navigate(path);
  };
  return (
    <Card className="blog-main-card">
      <CardActionArea>
        <CardContent>
          <div className="blog-card">
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <h3 className="title">{item.title}</h3>
            </Stack>
            <Stack
              direction="column"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <p className="category"> {item.category}</p>
              <button
                className="common-button"
                onClick={() => handleMod(item._id)}
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

export default BlogCard;
