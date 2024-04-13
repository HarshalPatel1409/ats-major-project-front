import React from "react";
import { useParams } from "react-router-dom";

const ApplicationView = () => {
  const { id } = useParams();
  return <div>ApplicationView</div>;
};

export default ApplicationView;
