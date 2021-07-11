import React from "react";
import Landing from "../Landing/Landing";
import Form from "./Form/Form";
import Preferences from "./Preferences/Preferences";
import AvaibleRooms from "./AvaibleRooms/AvaibleRooms";
import Contact from "../Contact/Contact";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import bookBg from "./bookBg.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2rem 0 0",
    padding: "1rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  content: {
    padding: "1rem 1rem 3rem",
    marginBottom: "5rem",
  },
}));

export default function Book() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Landing img={bookBg} subtitle="Book" title="Book A Room Now!" />
      <div className={classes.content}>
        <Form />
        <Preferences />
        <AvaibleRooms />
      </div>
      <Contact />
    </div>
  );
}
