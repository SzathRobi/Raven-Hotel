import React from "react";
import Room from "./Room/Room";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    padding: "1rem"
  },
  title: {
    marginBottom: "5rem"
  },
  rooms: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
  }
});

const AvaibleRooms = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Typography className={classes.title} variant="h4" data-aos="fade-right">
        Avaible Rooms
      </Typography>
      <Grid className={classes.rooms}>
        <Room delay="0"/>
        <Room delay="150"/>
        <Room delay="300"/>
      </Grid>
    </Grid>
  );
};

export default AvaibleRooms;
