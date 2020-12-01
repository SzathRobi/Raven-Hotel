import React from "react";
import {
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions
} from "@material-ui/core";
import roomsBg from "../../../Rooms/roomsBg.jpg";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    width: 300,
    margin: "2rem auto",
    paddingBottom: 30,
    position: "relative",
    left: -20,
    "@media (min-width: 1024px)": {
      width: 350
    }
  },
  img: {
    height: 200
  },
  content: {
    position: "relative",
    margin: "1rem 0 2rem"
  },
  priceContainer: {
    position: "absolute",
    top: "1rem",
    left: "60%"
  },
  price: {
    color: "#0097a7"
  },
  btn: {
    width: "90%",
    margin: "0 auto",
    color: "#0097a7",
    borderColor: "#0097a7"
  }
});

const Room = ({delay}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} data-aos="fade-left" data-aos-delay={delay}>
      <CardMedia image={roomsBg} className={classes.img} />
      <CardContent className={classes.content}>
        <Typography variant="h5">King Room</Typography>
        <Grid container className={classes.priceContainer} item col={12}>
          <Grid item col={6}>
            <Typography className={classes.price} variant="h5">
              99$ /
            </Typography>
          </Grid>
          <Grid item col={6}>
            <Typography variant="h6">day </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button className={classes.btn} variant="outlined">
          View Details
        </Button>
        <Button className={classes.btn} variant="outlined">
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default Room;
