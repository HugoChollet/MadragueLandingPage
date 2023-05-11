"use client";
import React from "react";
import { Typography, Box } from "@mui/material";

export const Footer = ({ email }) => {

  return (
    <Box style={styles.footer}>
      <Typography variant="subtitle1">
        Nous contacter : <a href={`mailto:${email}`}>{email}</a>
      </Typography>
    </Box>
  );
};

const styles = {
  footer: {
    backgroundColor: "grey",
    color: "white",
    padding: 16,
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
};

export default Footer;
