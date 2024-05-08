import React, { useEffect, useState } from "react";
import { getProfileById } from "../../../services/Candidate/Candidate.service";
import userLS from "../../../utils/userId";
import { Stack } from "@mui/material";
import { RxCross2 } from "react-icons/rx";

const ProfileUpdate = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [location, setLocation] = useState();
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  // const [experience, setExperience] = useState([]);
  // const [education, setEducation] = useState([
  //   { degree: "", university: "", completionYear: "" },
  // ]);

  const handleAddSkill = (e) => {
    e.preventDefault();
    const newSkill = e.target.skill.value;
    if (newSkill) {
      setSkills([...skills, newSkill]);
      e.target.reset();
    }
  };

  const handleAddLanguage = (e) => {
    e.preventDefault();
    const newLanguage = e.target.language.value;
    if (newLanguage) {
      setLanguages([...languages, newLanguage]);
      e.target.reset();
    }
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const handleRemoveLanguage = (index) => {
    const updatedLanguages = languages.filter((_, i) => i !== index);
    setLanguages(updatedLanguages);
  };

  //!  Education
  // const handleAddEducationField = () => {
  //   setEducation([
  //     ...education,
  //     { degree: "", university: "", completionYear: "" },
  //   ]);
  // };
  // const handleRemoveEducationField = (index) => {
  //   const updatedEducation = [...education];
  //   updatedEducation.splice(index, 1);
  //   setEducation(updatedEducation);
  // };

  //! Submit
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // You can perform the update operation here
    console.log("Profile updated successfully!");
  };

  const getProfile = async () => {
    const { _id } = userLS();
    const response = await getProfileById(_id);

    const resData = response.data[0];
    // console.log("resData => ", resData);
    if (response.message === "Profile fetched successfully") {
      setName(resData.name);
      setEmail(resData.email);
      setPhone(resData.phone);
      setLocation(resData.location);
      setSkills(resData.skills);
      setLanguages(resData.languages);
      // setExperience(resData.experience);
      // setEducation(resData.education);
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
          <div className="top-heading">Edit Profile</div>
        </Stack>
      </div>
      <div className="page-body">
        <form onSubmit={handleUpdateProfile}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label>Location:</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div>
            <label>Skills:</label>
            <ul>
              {skills
                ? skills.map((skill, index) => (
                    <li key={index}>
                      {skill}
                      <button onClick={() => handleRemoveSkill(index)}>
                        X
                      </button>
                    </li>
                  ))
                : ""}
            </ul>
            <form onSubmit={handleAddSkill}>
              <input type="text" name="skill" />
              <button type="submit">Add Skill</button>
            </form>
          </div>
          <div>
            <label>Languages:</label>
            <ul>
              {languages
                ? languages.map((language, index) => (
                    <li key={index}>
                      {language}
                      <button onClick={() => handleRemoveLanguage(index)}>
                        X
                      </button>
                    </li>
                  ))
                : ""}
            </ul>
            <form onSubmit={handleAddLanguage}>
              <input type="text" name="language" />
              <button type="submit">Add Language</button>
            </form>
          </div>
          <button className="common-button" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;
