import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import RestaurantIntro from "./RestaurantIntro/RestaurantIntro";
import Contact from "../Contact/Contact";
import restaurantBg from "./restaurantBg.jpg";
import Landing from "../Landing/Landing";
import { makeStyles } from "@material-ui/core/styles";
import Specialties from "./Specialties/Specialties";

const useStyles = makeStyles({
  root: {
    marginBottom: "2rem",
    position: "relative"
  }
});

const Restaurant = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Grid className={classes.root}>
      <Landing
        img={restaurantBg}
        subtitle="Restaurant"
        title="Our Restaurant"
      />
      <RestaurantIntro />
      <Specialties />
      <Contact />
    </Grid>
  );
};

export default Restaurant;
