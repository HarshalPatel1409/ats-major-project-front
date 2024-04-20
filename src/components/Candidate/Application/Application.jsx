import React, { useEffect, useState } from "react";
import userLS from "./../../../utils/userId";
import { useNavigate } from "react-router-dom";
import { getMyApplication } from "../../../services/Application/Application.service";
import ApplicationCard from "../../Widgets/Card/ApplicationCard";

import CircularProgress from "@mui/material/CircularProgress";

const Application = () => {
  let navigate = useNavigate();
  const [applications, setApplications] = useState();

  const shoot = async (job) => {
    console.log(job);
    const path = `applicationView/${job}`;
    navigate(path);
  };

  const getMyAllApplication = async () => {
    try {
      const { _id } = userLS();
      const response = await getMyApplication(_id);
      setApplications(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyAllApplication();
  }, []);
  return (
    <div>
      <h1>My Application</h1>
      {applications ? (
        applications.map((item, index) => (
          <ApplicationCard
            key={index}
            item={item}
            onClick={() => shoot(item._id)}
          />
        ))
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Application;
