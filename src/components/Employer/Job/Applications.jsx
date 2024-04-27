import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getApplicationByJobId } from "../../../services/Application/Application.service";
import ApplicationCard from "../../Widgets/Card/ApplicationCard";
import { CircularProgress, Stack } from "@mui/material";

const Applications = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [applications, setApplications] = useState();

  const shoot = async (job) => {
    console.log(job);
    const path = `/employer/job/applicant/${job}`;
    navigate(path);
  };

  //! get All application
  const getMyAllApplication = async (id) => {
    try {
      console.log("id => ", id);
      const response = await getApplicationByJobId(id);
      setApplications(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyAllApplication(id);
  }, []);
  return (
    <div className="container">
      <div className="page-header">
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <div className="top-heading">Applications</div>
        </Stack>
      </div>
      <div className="page-body">
        <div className="card-body">
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
      </div>
    </div>
  );
};

export default Applications;
