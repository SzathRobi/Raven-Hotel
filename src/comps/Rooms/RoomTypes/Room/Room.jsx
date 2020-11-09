import React from "react";
import Carousel from "./Carousel/Carousel";

import { Card, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "4rem 0 2rem"
  },
  roomName: {
    margin: "1rem 0 2rem"
  },
  priceContainer: {
    margin: "1rem 0 2rem"
  },
  price: {
    color: "#0097a7"
  },
  details: {
    margin: "1rem 0"
  },
  detail: {
    width: 140,
    marginLeft: "1rem"
  },
  btn: {
    color: "#0097a7",
    borderBottom: "1px solid #0097a7",
    margin: "1rem 0",
    "&:hover": {
      backgroundColor: "#0097a7",
      color: "#fff",
      fontWeight: 600
    }
  }
});

const Room = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Carousel />
      <Typography className={classes.roomName} variant="h5">
        Premium King Room
      </Typography>
      <Grid container className={classes.priceContainer} item col={12}>
        <Grid item col={6}>
          <Typography className={classes.price} variant="h4">
            99$ /
          </Typography>
        </Grid>
        <Grid item col={6}>
          <Typography variant="h6">day </Typography>
        </Grid>
      </Grid>
      <Grid container item className={classes.details} col={12}>
        <Grid item>
          <Typography className={classes.detail} variant="h5">
            Size:
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">30ft</Typography>
        </Grid>
      </Grid>
      <Grid container item className={classes.details} col={12}>
        <Grid item>
          <Typography className={classes.detail} variant="h5">
            Capacity:
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">Up To 3</Typography>
        </Grid>
      </Grid>
      <Grid container item className={classes.details} col={12}>
        <Grid item>
          <Typography className={classes.detail} variant="h5">
            Bed:
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">King Size Beds</Typography>
        </Grid>
      </Grid>
      <Grid container item className={classes.details} col={12}>
        <Grid item>
          <Typography className={classes.detail} variant="h5">
            Services
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">Wifi, Smart Tv...</Typography>
        </Grid>
      </Grid>
      <Grid container item className={classes.details} col={12}>
        <Grid item>
          <Typography className={classes.detail} variant="h5">
            View:
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">See View</Typography>
        </Grid>
      </Grid>
      <Button className={classes.btn}>View Details</Button>
    </Card>
  );
};

export default Room;
