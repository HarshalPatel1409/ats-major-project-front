import React, { useEffect, useState } from "react";
import { getAllJobs } from "../../../services/Job/Job.service";
import JobCard from "../../Widgets/Card/JobCard";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

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
    <div>
      <h1>Jobs</h1>
      {jobs ? (
        jobs.map((item, index) => (
          <JobCard key={index} item={item} onClick={() => shoot(item._id)} />
        ))
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Job;
