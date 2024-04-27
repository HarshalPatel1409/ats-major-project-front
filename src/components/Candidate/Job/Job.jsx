import React, { useEffect, useState } from "react";
import { getAllJobs } from "../../../services/Job/Job.service";
import JobCard from "../../Widgets/Card/JobCard";
import { useNavigate } from "react-router-dom";
import { CircularProgress, Stack } from "@mui/material";

const Job = () => {
  let navigate = useNavigate();
  const [jobs, setJobs] = useState();

  const shoot = async (job) => {
    const path = `jobView/${job}`;
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
        </Stack>
      </div>
      <div className="page-body">
        <div className="card-body">
          {jobs ? (
            jobs.map((item, index) => (
              <JobCard
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

export default Job;
