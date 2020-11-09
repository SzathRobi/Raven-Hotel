import React from "react";
import { Typography, Button } from "@material-ui/core";
import aboutBg from "../aboutBg.jpg";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: "relative",
    top: "3rem",
    padding: "1rem",
    marginBottom: "15rem",
    "@media (min-width: 1024px)": {
      padding: "1rem 1rem 1rem 5rem"
    }
  },
  mainText: {
    margin: "4rem 0",
    "@media (min-width: 1024px)": {
      width: "50%"
    }
  },
  img1: {
    width: 250,
    height: 230,
    padding: 10,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: -240,
    right: 15,
    boxShadow: "0 0 1px #000",
    "@media (min-width: 1024px)": {
      width: 360,
      height: 350,
      top: "1rem",
      right: "2rem"
    }
  },
  img2: {
    width: 220,
    height: 210,
    padding: 10,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: -200,
    right: "9rem",
    boxShadow: "0 0 1px #000",
    "@media (min-width: 1024px)": {
      width: 350,
      height: 280,
      top: "3rem",
      right: "15rem"
    }
  },
  btn: {
    marginBottom: "2rem",
    color: "#0097a7",
    borderColor: "#0097a7"
  }
});

const AboutMain = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Typography variant="h4">A Luxuries Hotel with Nature</Typography>
      <Typography className={classes.mainText} variant="h6">
        Suscipit libero pretium nullam potenti. Interdum, blandit phasellus
        consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus
        sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim.
        Dapibus lorem feugiat facilisi faucibus et. Rhoncus.
      </Typography>
      <Button variant="outlined" className={classes.btn}>
        Learn More
      </Button>
      <img className={classes.img1} src={pic1} alt="" />
      <img className={classes.img2} src={pic2} alt="" />
    </main>
  );
};

export default AboutMain;
