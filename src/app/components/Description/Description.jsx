"use client";
import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export const Description = ({ text, image, direction = "left" }) => {

  return (
    <div style={styles.root}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6} style={styles.imageContainer}>
          <img src={image} alt="Description" style={styles.image} />
        </Grid>
        <Grid item xs={12} md={6} style={styles.textContainer}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="100%"
          >
            <Typography variant="h5">{text}</Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

const styles = {
    root: {
      flexGrow: 1,
      margin: 16,
    },
    textContainer: {
      padding: 16,
      color: "black",
      textAlign: "left",
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row-reverse"
    },
    image: {
      maxWidth: "100%",
      maxHeight: "400px",
      objectFit: "cover",
    },
    left: {
      flexDirection: "row-reverse",
    },
  };

export default Description;
