import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllApplications,
  getApplicationByJobId,
} from "../../../services/Application/Application.service";
import ApplicationCard from "../../Widgets/Card/ApplicationCard";

const Applications = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [applications, setApplications] = useState();

  const shoot = async (job) => {
    console.log(job);
    const path = `applicationView/${job}`;
    navigate(path);
  };

  //! get All application
  const getMyAllApplication = async (id) => {
    console.log("id => ", id);
    try {
      const response = await getApplicationByJobId(id);
      console.log(response);
      setApplications(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyAllApplication(id);
  }, []);
  return (
    <div>
      <h1>All Application</h1>
      {applications ? (
        applications.map((item, index) => (
          <ApplicationCard
            key={index}
            item={item}
            onClick={() => shoot(item._id)}
          />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Applications;
