import React from "react";

import specialty1 from "./specialty1.jpg";
import specialty2 from "./specialty2.jpg";
import specialty3 from "./specialty3.jpg";
import specialty4 from "./specialty4.jpg";
import specialty5 from "./specialty5.jpg";
import specialty6 from "./specialty6.jpg";
import specialty7 from "./specialty7.jpg";
import specialty8 from "./specialty8.jpg";

import { Grid, Typography } from "@material-ui/core";
import SpecialtieCard from "./SpecialtieCard/SpecialtieCard";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: "10rem 0 0",
    paddingBottom: "15rem"
  },
  header: {
    width: "100%",
    textAlign: "center",
    margin: "3rem 0"
  },
  grid: {
    width: "100",
    marginBottom: 100,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))"
  }
});

const Specialties = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Typography className={classes.header} variant="h4" data-aos="fade-up">
        Our Specialties
      </Typography>
      <div className={classes.grid}>
        <SpecialtieCard
          img={specialty1}
          title="Malajzian Chocholate Cake"
          price="5.99"
        />
        <SpecialtieCard
          img={specialty2}
          title="Beefy Mushroom Plate"
          price="13.45"
        />
        <SpecialtieCard img={specialty3} title="Tiramisu" price="8.99" />
        <SpecialtieCard img={specialty4} title="RAVEN Pizza" price="10.25" />
        <SpecialtieCard
          img={specialty5}
          title="Beef With Grilled Asparagus"
          price="16.00"
        />
        <SpecialtieCard img={specialty6} title="Berry Pencake" price="7.30" />
        <SpecialtieCard
          img={specialty7}
          title="Special Breakfast"
          price="11.99"
        />
        <SpecialtieCard
          img={specialty8}
          title="Salmon Salad With Vegetables"
          price="18.50"
        />
      </div>
      <Typography align="center" variant="h4" data-aos="fade-up">
        And Much More!
      </Typography>
    </Grid>
  );
};

export default Specialties;
