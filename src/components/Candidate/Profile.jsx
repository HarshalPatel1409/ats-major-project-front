import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getProfileById } from "../../services/Candidate/Candidate.service";
import userLS from "../../utils/userId";

const ProfileCandidate = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    skills: "",
    experience: "",
  });
  const getProfile = async () => {
    const { _id } = userLS();
    const response = await getProfileById(_id);
    const resData = response.data[0];
    console.log("resData => ", resData);
    if (response) {
      setProfile({
        name: resData.name,
        email: resData.email,
        phone: resData.phone,
        location: resData.location,
        skills: resData.skills,
        experience: resData.experience,
      });
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="container">
      <div className="page-header">
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <div className="top-heading">Profile</div>
          <button className="add-button">Edit </button>
        </Stack>
      </div>

      <div className="page-body">
        <div className="profile-section">
          <Stack
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <label className="heading">Basic Details</label>
            <span>{profile.name}</span>
            <span>{profile.email}</span>
            <span>{profile.phone}</span>
          </Stack>
        </div>
        <div className="profile-section">
          <Stack
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <label className="heading">Other Details</label>
            <div className="skills">
              <span>Java</span>
              <span>C++</span>
              <span>B.A.</span>
              <span>React</span>
              <span>Node Js</span>
            </div>
          </Stack>
        </div>
        <div className="profile-section">
          <Stack
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <label className="heading">Education</label>
            <div className="education">
              <span className="program">B.Tech CSE</span>
              <span className="university">IIT Dholakpur</span>
              <span className="graduationDate">26 March 2024</span>
            </div>
          </Stack>
        </div>
        <div className="profile-section">
          <Stack
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <label className="heading">Experience</label>
            <div className="education">
              <div className="job">
                <span className="program">Full Stack Developer</span>
                <span className="university">Google </span>
                <span className="graduationDate">
                  Developed web applications using modern technologies.
                </span>
                <span className="graduationDate">March 2022 - March 2024</span>
              </div>
              <div className="job">
                <span className="program">Full Stack Developer</span>
                <span className="university">Google </span>
                <span className="graduationDate">
                  Developed web applications using modern technologies.
                </span>
                <span className="graduationDate">March 2022 - March 2024</span>
              </div>
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default ProfileCandidate;
