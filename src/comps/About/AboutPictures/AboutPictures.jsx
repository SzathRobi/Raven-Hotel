import React from "react";
import room1 from "./room1.jpg";
import room2 from "./room2.jpg";
import room3 from "./room3.jpg";
import room4 from "./room4.jpg";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginBottom: "5rem",
    position: "relative",
    bottom: "5rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))"
  },
  img: {
    width: "95%",
    height: 230,
    margin: "5px auto",
    borderRadius: 4
  }
});

const AboutPictures = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <img src={room1} className={classes.img} alt="raven hotel room" data-aos="fade-right" />
      <img src={room2} className={classes.img} alt="raven hotel room" data-aos="fade-right" data-aos-delay="150"/>
      <img src={room3} className={classes.img} alt="raven hotel room" data-aos="fade-right" data-aos-delay="300"/>
      <img src={room4} className={classes.img} alt="raven hotel room" data-aos="fade-right" data-aos-delay="450"/>
    </Grid>
  );
};

export default AboutPictures;
