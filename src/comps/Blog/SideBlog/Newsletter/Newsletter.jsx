import React from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "300px",
    margin: "4rem auto 0rem",
    display: "flex",
    flexDirection: "column"
  },
  input: {
    margin: "1rem 0"
  },
  btn: {
    color: "#0097a7",
    borderColor: "#0097a7"
  }
});

const Newsletter = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} data-aos="fade-left">
      <Typography variant="h5">Newsletter</Typography>
      <TextField
        className={classes.input}
        variant="standard"
        type="email"
        label="Enter email"
      />
      <Button className={classes.btn} variant="outlined">
        Subscribe
      </Button>
    </div>
  );
};

export default Newsletter;
