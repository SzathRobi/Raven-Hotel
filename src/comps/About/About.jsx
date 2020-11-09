import React, { useEffect } from "react";
import Landing from "../Landing/Landing";
import aboutBg from "./aboutBg.jpg";
import AboutMain from "./AboutMain/AboutMain";
import AboutCounter from "./AboutCounter/AboutCounter";
import AboutPictures from "./AboutPictures/AboutPictures";
import Contact from "../Contact/Contact";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginBottom: "1rem"
  }
});

const About = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container col={12} className={classes.root}>
      <Landing img={aboutBg} subtitle="About" title="About Us" />
      <AboutMain />
      <AboutCounter />
      <AboutPictures />
      <Contact />
    </Grid>
  );
};

export default About;
