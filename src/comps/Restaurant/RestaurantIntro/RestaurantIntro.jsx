import React from "react";
import restaurantImg from "./restaurantImg.jpg";

import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "1rem 1rem 10rem",
    margin: "5%",
    position: "relative"
  },
  img: {
    height: 150,
    width: 250,
    position: "absolute",
    bottom: "2rem",
    right: "2rem",
    borderRadius: 4,
    "@media (min-width: 1024px)": {
      width: 400,
      height: 450,
      top: "1rem",
      right: "10rem"
    }
  },
  headerText: {
    margin: "1rem 0 4rem"
  },
  text: {
    margin: "1rem 0",
    "@media (min-width: 1024px)": {
      width: "50%"
    }
  },
  btn: {
    backgroundColor: "#0097a7",
    color: "#fff",
    margin: "1rem 1rem 3rem",
    "&:hover": {
      backgroundColor: "#00707c",
      fontWeight: 600
    }
  }
});

const RestaurantIntro = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.img} image={restaurantImg} data-aos="fade-left"/>
      <CardContent>
        <Typography className={classes.headerText} variant="h4" data-aos="fade-up">
          Raven Hotel Restaurant
        </Typography>
        <Typography className={classes.text} variant="body1" data-aos="fade-up">
          Magnam ratione culpa eos nemo pariatur ad eum architectoLorem ipsum
          dolor sit amet consectetur, adipisicing elit. Tempora nam voluptatum
          magnam ratione culpa eos nemo pariatur ad eum architecto?
        </Typography>
        <Typography className={classes.text} variant="body1" data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora nam
          voluptatum magnam ratione culpa eos nemo pariatur ad eum architecto?
        </Typography>
      </CardContent>
      <Button className={classes.btn} variant="contained" data-aos="fade-up">
        more info
      </Button>
    </Card>
  );
};

export default RestaurantIntro;
