"use client";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Gallery = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div style={styles.root}>
      <Paper style={styles.paper}>
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
              style={styles.image}
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

const styles =  {
    root: {
      flexGrow: 1,
      margin: 16,
    },
    paper: {
      padding: 16,
      textAlign: "center",
      color: "black",
    },
    image: {
      maxWidth: "100%",
      maxHeight: "400px",
      objectFit: "contain",
    },
};

export default Gallery;
