import React, { useEffect } from "react";
import Landing from "../Landing/Landing";
import roomsBg from "./roomsBg.jpg";
import RoomTypes from "./RoomTypes/RoomTypes";
import Contact from "../Contact/Contact";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginBottom: "1rem"
  }
});

const Rooms = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container col={12} className={classes.root}>
      <Landing img={roomsBg} subtitle="Rooms" title="Our Rooms" />
      <RoomTypes />
      <Contact />
    </Grid>
  );
};

export default Rooms;
