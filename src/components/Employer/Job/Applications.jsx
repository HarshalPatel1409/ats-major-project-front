import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getApplicationByJobId } from "../../../services/Application/Application.service";
import { CircularProgress, Grid, Stack } from "@mui/material";
import ApplicationCard from "../../Widgets/Card/ApplicationCard";

const Applications = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [applications, setApplications] = useState([]);

  const shoot = async (job) => {
    const path = `/employer/job/applicant/${job}`;
    navigate(path);
  };

  //! get All application
  const getMyAllApplication = async (id) => {
    try {
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
        {/* <label>Search bar</label> */}
        <div className="applicants-list">
          <Grid container className="heading">
            <Grid item xs>
              Name
            </Grid>
            <Grid item xs>
              Status
            </Grid>
            <Grid item xs>
              Match
            </Grid>
          </Grid>
          <div className="main-list-container">
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
    </div>
  );
};

export default Applications;
