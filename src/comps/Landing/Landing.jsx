import React from "react";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    marginBottom: "10rem"
  },
  bg: {
    height: "70vh",
    width: "auto",
    filter: "brightness(70%)",
    "@media (min-width:780px)": {
      width: "100%"
    }
  },
  restaurantContent: {
    position: "absolute",
    top: "30vh",
    left: "20%",
    color: "#fff"
  },
  before: {
    width: 0,
    height: 3,
    backgroundColor: "#0097a7",
    marginRight: 10,
    animation: "growRight 1.5s forwards"
  },
  subtitle: {
    display: "flex",
    alignItems: "center"
  },
  subText: {
    opacity: 0,
    animation: "fadeIn 1s 1s forwards"
  },
  mainText: {
    opacity: 0,
    position: "relative",
    left: 0,
    animation: "slideLeft 1s 1s forwards"
  }
});

const Landing = ({ img, subtitle, title }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <img src={img} className={classes.bg} alt="" />
      <div className={classes.restaurantContent}>
        <div className={classes.subtitle}>
          <div className={classes.before}></div>
          <Typography className={classes.subText} variant="body2">
            {subtitle}
          </Typography>
        </div>
        <Typography className={classes.mainText} variant="h4">
          {title}
        </Typography>
      </div>
    </Grid>
  );
};

export default Landing;
