import React, { useEffect, useState } from "react";
import { getAllJobs } from "../../../services/Job/Job.service";
import { useNavigate } from "react-router-dom";
import JobCardEmployer from "../../Widgets/Card/JobCardEmployer";
import { CircularProgress, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";

const Job = () => {
  let navigate = useNavigate();
  const [jobs, setJobs] = useState();

  const newJob = () => {
    let path = "create";
    navigate(path);
  };

  const getJobs = async () => {
    let response = await getAllJobs();
    setJobs(response.data);
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="container">
      <div className="page-header">
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <div className="top-heading">Jobs</div>
          <button className="add-button" onClick={newJob}>
            Create Job
          </button>
        </Stack>
      </div>

      <div className="page-body">
        <div className="card-body">
          {jobs ? (
            jobs.map((item, index) => (
              <JobCardEmployer key={index} item={item} />
            ))
          ) : (
            <CircularProgress />
          )}
        </div>
      </div>
    </div>
  );
};

export default Job;
