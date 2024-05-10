import React from "react";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";

const SomeCards = () => {
  return (
    <div className="hover-card-section">
      <div className="hero-container">
        <h2 className="hero-title">
          Grow faster with our <br />
          <span className="text-slate-400"> all in one solution</span>
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="learn-more-button"
        >
          Learn more
        </motion.button>
      </div>
      <Grid container>
        <Grid item xs={4}>
          <BounceCard className="bounce-card ">
            <CardTitle>Applicant Tracking</CardTitle>
            <div className="card-overlay one">
              <span>
                Effortlessly manage job postings, applications, and candidate communication
              </span>
            </div>
          </BounceCard>
        </Grid>

        <Grid item xs={8}>
          <BounceCard className="bounce-card ">
            <CardTitle>Interview Scheduling</CardTitle>
            <div className="card-overlay two">
              <span>
                Streamline the interview process with automated scheduling and
                reminders.
              </span>
            </div>
          </BounceCard>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={8}>
          <BounceCard className="bounce-card">
            <CardTitle>Onboarding Tools</CardTitle>
            <div className="card-overlay three">
              <span>
                Simplify new hire paperwork, training, and orientation
                processes.
              </span>
            </div>
          </BounceCard>
        </Grid>
        <Grid item xs={4}>
          <BounceCard className="bounce-card ">
            <CardTitle>Employee Database</CardTitle>
            <div className="card-overlay four">
              <span>
                Maintain a centralized database of employee information, job
                history, and performance evaluations.
              </span>
            </div>
          </BounceCard>
        </Grid>
      </Grid>
    </div>
  );
};

export default SomeCards;

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`bounce-card-bottom ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return <h3 className="card-title">{children}</h3>;
};
