import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  image: {
    maxWidth: "100%",
    maxHeight: "400px",
    objectFit: "contain",
  },
}));

const Gallery = ({ images }) => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={2}>
            <Button variant="contained" onClick={handlePrev}>
              Prev
            </Button>
          </Grid>
          <Grid item xs={8}>
            <img
              src={images[index]}
              alt={`Image ${index + 1}`}
              className={classes.image}
            />
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={handleNext}>
              Next
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Gallery;
