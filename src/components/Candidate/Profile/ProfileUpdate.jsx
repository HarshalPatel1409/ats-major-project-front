import React, { useEffect, useState } from "react";
import {
  getProfileById,
  updateProfile,
} from "../../../services/Candidate/Candidate.service";
import userLS from "../../../utils/userId";
import { Stack } from "@mui/material";
import { RxCross2 } from "react-icons/rx";

const ProfileUpdate = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [location, setLocation] = useState();
  const [skills, setSkills] = useState([]);
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);

  //!  Skills
  const handleAddSkill = (e) => {
    e.preventDefault();
    const newSkill = e.target.skill.value;
    if (newSkill) {
      setSkills([...skills, newSkill]);
      e.target.reset();
    }
  };
  const handleRemoveSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  //!  Education
  const handleAddEducation = () => {
    setEducations([
      ...educations,
      { degree: "", university: "", educationYear: "" },
    ]);
  };

  const handleEducationChange = (index, event) => {
    const updatedEducations = [...educations];
    updatedEducations[index][event.target.name] = event.target.value;
    setEducations(updatedEducations);
  };

  const handleRemoveEducation = (index) => {
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
  };

  //!  Experience
  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        position: "",
        company: "",
        description: "",
        from: { month: "", year: "" },
        to: { month: "", year: "" },
      },
    ]);
  };

  const handleExperienceChange = (index, event) => {
    const updatedExperiences = [...experiences];
    const targetProperty = event.target.name.split("."); // Handle nested properties (e.g., 'from.month')
    if (targetProperty.length === 2) {
      updatedExperiences[index][targetProperty[0]][targetProperty[1]] =
        event.target.value;
    } else {
      updatedExperiences[index][event.target.name] = event.target.value;
    }
    setExperiences(updatedExperiences);
  };

  const handleRemoveExperience = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  //! Submit -----------------------------------------------------------------------------------------------
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const { _id } = userLS();
      let data = {
        _id,
        name,
        phone,
        location,
        skills,
        educations,
        experiences,
      };
      const response = await updateProfile(data);
      alert(response.message);
    } catch (error) {
      console.log(error);
    }
  };

  const getProfile = async () => {
    const { _id } = userLS();
    const response = await getProfileById(_id);

    const resData = response.data[0];
    if (response.message === "Profile fetched successfully") {
      setName(resData.name);
      setEmail(resData.email);
      setPhone(resData.phone);
      setLocation(resData.location);
      setSkills(resData.skills);
      setEducations(resData.educations);
      setExperiences(resData.experiences);
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
        <div className="profile-section">
          <h3>Baisc Details</h3>
          <div className="field-container">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="field-container">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled
            />
          </div>
          <div className="field-container">
            <label>Phone:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="field-container">
            <label>Location:</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <div className="profile-section">
          <div className="field-container">
            <label>Skills:</label>
            <form onSubmit={handleAddSkill} style={{ width: "100%" }}>
              <input type="text" name="skill" style={{ width: "70%" }} />
              <button className="simple-button" type="submit">
                Add Skill
              </button>
            </form>
            <div className="tag-container">
              {skills
                ? skills.map((skill, index) => (
                    <span className="tag" key={index}>
                      {skill}
                      <button onClick={() => handleRemoveSkill(index)}>
                        X
                      </button>
                    </span>
                  ))
                : ""}
            </div>
          </div>
        </div>
        {/* //! Education */}
        <div className="profile-section">
          <h3>Education</h3>
          {educations
            ? educations.map((education, index) => (
                <div key={index} className="field-container">
                  <label htmlFor={`degree-${index}`}>Degree:</label>
                  <input
                    type="text"
                    id={`degree-${index}`}
                    name="degree"
                    value={education.degree}
                    onChange={(event) => handleEducationChange(index, event)}
                  />
                  <br />

                  <label htmlFor={`university-${index}`}>University:</label>
                  <input
                    type="text"
                    id={`university-${index}`}
                    name="university"
                    value={education.university}
                    onChange={(event) => handleEducationChange(index, event)}
                  />
                  <br />

                  <label htmlFor={`educationYear-${index}`}>
                    Education Year:
                  </label>
                  <input
                    type="text"
                    id={`educationYear-${index}`}
                    name="educationYear"
                    value={education.educationYear}
                    onChange={(event) => handleEducationChange(index, event)}
                  />
                  <br />

                  {index > -1 && (
                    <button
                      className="delete-button"
                      onClick={() => handleRemoveEducation(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))
            : ""}
          <button className="simple-button" onClick={handleAddEducation}>
            Add Education
          </button>
        </div>

        {/* //! Experience */}
        <div className="profile-section">
          <h3>Experience</h3>
          {experiences.length > 0 &&
            experiences.map((experience, index) => (
              <div key={index} className="field-container">
                <label htmlFor={`position-${index}`}>Position:</label>
                <input
                  type="text"
                  id={`position-${index}`}
                  name="position"
                  value={experience.position}
                  onChange={(event) => handleExperienceChange(index, event)}
                />

                <label htmlFor={`company-${index}`}>Company:</label>
                <input
                  type="text"
                  id={`company-${index}`}
                  name="company"
                  value={experience.company}
                  onChange={(event) => handleExperienceChange(index, event)}
                />

                <label htmlFor={`description-${index}`}>Description:</label>
                <textarea
                  id={`description-${index}`}
                  name="description"
                  value={experience.description}
                  onChange={(event) => handleExperienceChange(index, event)}
                />

                <label htmlFor={`from-month-${index}`}>Start Month:</label>
                <input
                  type="text"
                  id={`from-month-${index}`}
                  name="from.month"
                  value={experience.from.month}
                  onChange={(event) => handleExperienceChange(index, event)}
                />

                <label htmlFor={`from-year-${index}`}>Start Year:</label>
                <input
                  type="text"
                  id={`from-year-${index}`}
                  name="from.year"
                  value={experience.from.year}
                  onChange={(event) => handleExperienceChange(index, event)}
                />

                <label htmlFor={`to-month-${index}`}>End Month:</label>
                <input
                  type="text"
                  id={`to-month-${index}`}
                  name="to.month"
                  value={experience.to.month}
                  onChange={(event) => handleExperienceChange(index, event)}
                />

                <label htmlFor={`to-year-${index}`}>End Year:</label>
                <input
                  type="text"
                  id={`to-year-${index}`}
                  name="to.year"
                  value={experience.to.year}
                  onChange={(event) => handleExperienceChange(index, event)}
                />

                {index > -1 && (
                  <button
                    className="delete-button"
                    onClick={() => handleRemoveExperience(index)}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          <button className="simple-button" onClick={handleAddExperience}>
            Add Experience
          </button>
        </div>

        <button className="common-button" onClick={handleUpdateProfile}>
          Update
        </button>
      </div>
    </div>
  );
};

export default ProfileUpdate;
