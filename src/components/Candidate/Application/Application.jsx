import React, { useEffect, useState } from "react";
import userLS from "./../../../utils/userId";
import { useNavigate } from "react-router-dom";
import { getMyApplication } from "../../../services/Application/Application.service";

import CircularProgress from "@mui/material/CircularProgress";
import ApplicationCardCandidate from "../../Widgets/Card/ApplicationCardCandidate";
import { Stack } from "@mui/material";

const Application = () => {
  let navigate = useNavigate();
  const [applications, setApplications] = useState();

  const shoot = async (job) => {
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
    <div className="container">
      <div className="page-header">
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <div className="top-heading">My Application</div>
        </Stack>
      </div>
      <div className="page-body">
        <div className="card-body">
          {applications ? (
            applications.map((item, index) => (
              <ApplicationCardCandidate
                key={index}
                item={item}
                onClick={() => shoot(item._id)}
              />
            ))
          ) : (
            <CircularProgress />
          )}
        </div>
      </div>
    </div>
  );
};

export default Application;
