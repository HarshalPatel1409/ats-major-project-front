import React, { useEffect, useState } from "react";
import { getAllJobs } from "../../../services/Job/Job.service";
import JobCard from "../../Widgets/Card/JobCard";
import { useNavigate } from "react-router-dom";

const Job = () => {
  let navigate = useNavigate();
  const [jobs, setJobs] = useState();

  const shoot = async (job) => {
    console.log(job);
  };

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
    <div>
      <button onClick={newJob}>Create Job</button>
      <h1>Jobs</h1>
      {jobs ? (
        jobs.map((item, index) => (
          <JobCard key={index} item={item} onClick={() => shoot(item)} />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Job;
