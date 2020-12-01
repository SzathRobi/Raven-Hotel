import React from "react";

import ServiceCard from "./ServiceCard/ServiceCard";

import RestaurantIcon from "@material-ui/icons/Restaurant";
import PoolIcon from "@material-ui/icons/Pool";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import WifiRoundedIcon from "@material-ui/icons/WifiRounded";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "6rem 1rem 2rem 0"
  },
  header: {
    width: "15rem",
    margin: "12rem 1rem 2rem",
    fontSize: "2rem",
    "@media (min-width: 1024px)": {
      width: "24rem",
      margin: "12rem 5rem 6rem"
    }
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
    "@media (min-width: 1376px)": {
      width: "70%",
      marginLeft: "15%"
    }
  },
  iconStyle: {
    fontSize: "3rem"
  },
  guestbookReview: {
    width: "95%",
    margin: "1rem auto 0.5rem",
    padding: "1rem",
    backgroundColor: "#006064",
    color: "#f1f1f1",
    boxShadow: "0 0 4rem"
  },
  guestbookTitle: {
    margin: "4rem 0"
  }
});

const Services = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <h1 className={classes.header} data-aos="fade-left">Our Services Includes:</h1>
      <div className={classes.cards}>
        <ServiceCard
          icon={<WifiRoundedIcon className={classes.iconStyle} />}
          title="Strong Free Wifi"
          text="The massive investment in a hotel or resort requires constant reviews and control in order to make it a successful investment."
        />
        <ServiceCard
          icon={<PoolIcon className={classes.iconStyle} />}
          title="4 Pools"
          text="Choose from 4 unique ready made concepts to extend your holiday."
        />
        <ServiceCard
          icon={<LiveTvIcon className={classes.iconStyle} />}
          title="Best TV-s In Your Rooms"
          text="Every Room has a HD smart TV to maximize the experience when you stay in Your room."
        />
        <ServiceCard
          icon={<RestaurantIcon className={classes.iconStyle} />}
          title="2 Steps From The Restaurant"
          text="Feel free to try our cooks best dishes in creatively designed restaurant."
        />
        <ServiceCard
          icon={<LocalBarIcon className={classes.iconStyle} />}
          title="Homemade Coctails"
          text="Craft beers, coctails, strong or alcohol-free doesn't matter, You will find everything what you need."
        />
        <ServiceCard
          icon={<BeachAccessIcon className={classes.iconStyle} />}
          title="Private Beach"
          text="Our hotel owns a small part of the beach, in case if you don't want to go far to see the beautiful sea."
        />
      </div>
    </section>
  );
};

export default Services;
