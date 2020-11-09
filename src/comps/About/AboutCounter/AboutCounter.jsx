import React from "react";
//import CountUp from 'react-countup';

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginBottom: "15rem",
    padding: "0 2rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))"
  },
  counter: {
    margin: "3rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "@media (min-width: 1024px)": {
      alignItems: "center"
    }
  },
  counterNum: {
    color: "#0097a7"
  },
  counterText: {
    margin: "0.2rem 0"
  }
});

const AboutCounter = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.counter}>
        <Typography variant="h3" className={classes.counterNum}>
          25
        </Typography>
        <Typography variant="h4" className={classes.counterText}>
          Luxury Rooms
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          From 399$
        </Typography>
      </div>
      <div className={classes.counter}>
        <Typography variant="h3" className={classes.counterNum}>
          42k
        </Typography>
        <Typography variant="h4" className={classes.counterText}>
          Happy Clients
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          All Year Long
        </Typography>
      </div>
      <div className={classes.counter}>
        <Typography variant="h3" className={classes.counterNum}>
          365
        </Typography>
        <Typography variant="h4" className={classes.counterText}>
          Days / Year
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          From 199$
        </Typography>
      </div>
    </div>
  );
};

export default AboutCounter;
