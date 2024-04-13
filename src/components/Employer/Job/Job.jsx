import React, { useEffect, useState } from "react";
import { getAllJobs } from "../../../services/Job/Job.service";
import { useNavigate } from "react-router-dom";
import JobCardEmployer from "../../Widgets/Card/JobCardEmployer";

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
    <div>
      <button onClick={newJob}>Create Job</button>
      <h1>Jobs</h1>
      {jobs ? (
        jobs.map((item, index) => <JobCardEmployer key={index} item={item} />)
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Job;
