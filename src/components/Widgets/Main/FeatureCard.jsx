import { Stack } from "@mui/material";
import React from "react";

const FeatureCard = (item) => {
  return (
    <div className="feature-card">
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <div className="icon">{item.item.icon}</div>
        <span className="title">{item.item.title}</span>
        <span className="descrition">{item.item.description}</span>
      </Stack>
    </div>
  );
};

export default FeatureCard;
