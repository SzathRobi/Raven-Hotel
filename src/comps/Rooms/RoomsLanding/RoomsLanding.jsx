import React from "react";

import roomsBg from "./roomsBg.jpg";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
  bg: {
    height: "90vh",
    minWidth: "100%",
    filter: "brightness(80%)"
  },
  roomsContent: {
    position: "absolute",
    top: "30vh",
    left: "20%",
    color: "#fff"
  },
  before: {
    width: "3rem",
    height: 3,
    backgroundColor: "#0097a7",
    marginRight: 10
  },
  subtitle: {
    display: "flex",
    alignItems: "center"
  }
});

const RoomsLanding = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <img src={roomsBg} className={classes.bg} alt="" />
      <div className={classes.roomsContent}>
        <div className={classes.subtitle}>
          <div className={classes.before}></div>
          <Typography variant="body2">About</Typography>
        </div>
        <Typography variant="h4">About us</Typography>
      </div>
    </Grid>
  );
};

export default RoomsLanding;
