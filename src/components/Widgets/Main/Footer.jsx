import { Container, Stack } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="column">
          <h3>DALAL</h3>
          <span>Stay Connected with Us</span>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Stack direction="column">
            <label>UseFul Links</label>
            <span>Blogs</span>
            <span>Pricing</span>
            <span>About</span>
          </Stack>
          <Stack direction="column">
            <label>Terms</label>
            <span>TOS</span>
            <span>Privacy Policy</span>
            <span>Refund Policy</span>
          </Stack>
          <Stack direction="column">
            <label>Support & Help</label>
            <span>Open Support Ticket</span>
            <span>Terms of Use</span>
            <span>About</span>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default Footer;
