import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  textContainer: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    textAlign: "left",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "400px",
    objectFit: "cover",
  },
  left: {
    flexDirection: "row-reverse",
  },
}));

const Description = ({ text, image, direction = "left" }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6} className={classes.imageContainer}>
          <img src={image} alt="Description" className={classes.image} />
        </Grid>
        <Grid item xs={12} md={6} className={classes.textContainer}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="100%"
            className={direction === "left" ? "" : classes.left}
          >
            <Typography variant="h5">{text}</Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Description;
