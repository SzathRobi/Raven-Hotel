import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "5rem 1rem 4rem",
    backgroundColor: "#e0f7fa",
    boxShadow: "2px 2px 8px #006064",
    borderRadius: 8,
    margin: "1rem 0 6rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    "@media (min-width: 1024px)": {
      flexDirection: "row",
    },
  },
  title: {
    position: "absolute",
    top: "2rem",
    left: "1rem",
  },
  container: {
    width: 200,
    display: "flex",
    flexWrap: "wrap",
    margin: "2rem auto 0",
  },
  textField: {
    margin: "2rem 0",
    width: 300,
  },
}));

const Form = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} data-aos="fade-up">
      <Typography className={classes.title} variant="h4">
        Check Avaibleity
      </Typography>
      <Grid className={classes.container}>
        <TextField
          id="date"
          label="Check-In Date"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="date"
          label="Check-Out Date"
          type="date"
          defaultValue="2020-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid className={classes.container}>
        <TextField
          type="number"
          value={1}
          className={classes.textField}
          id="standard-basic"
          label="Adults:"
        />
        <TextField
          type="number"
          value={0}
          className={classes.textField}
          id="standard-basic"
          label="Children:"
        />
      </Grid>
    </Grid>
  );
};

export default Form;
