import React from "react";
import OfferCard from "./OfferCard/OfferCard";
import roomOffer1 from "../../../imgs/roomOffer1.jpg";
import roomOffer2 from "../../../imgs/roomOffer2.jpg";
import roomOffer3 from "../../../imgs/roomOffer3.jpg";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "10rem 0 5rem",
    "@media (min-width: 1024px)": {
      padding: "0 1rem"
    }
  },
  offercards: {
    display: "flex",
    flexDirection: "column",
    "@media (min-width: 1024px)": {
      flexDirection: "row"
    }
  },
  title: {
    width: "100%",
    textAlign: "center",
    margin: "6rem 0",
    fontWeight: 600
  }
});

const Offers = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Ongoing Offers
      </Typography>
      <div className={classes.offercards}>
        <OfferCard img={roomOffer1} />
        <OfferCard img={roomOffer2} />
        <OfferCard img={roomOffer3} />
      </div>
    </div>
  );
};

export default Offers;
