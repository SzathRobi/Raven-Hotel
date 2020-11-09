import React from "react";
import Room from "./Room/Room";
import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    marginTop: "3rem",
    padding: "1rem"
  }
});

const RoomTypes = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Room />
      <Room />
      <Room />
      <Room />
    </Grid>
  );
};

export default RoomTypes;
