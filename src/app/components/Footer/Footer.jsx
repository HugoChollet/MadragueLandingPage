import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(2),
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
}));

const Footer = ({ email }) => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Typography variant="subtitle1">
        Nous contacter : <a href={`mailto:${email}`}>{email}</a>
      </Typography>
    </Box>
  );
};

export default Footer;
