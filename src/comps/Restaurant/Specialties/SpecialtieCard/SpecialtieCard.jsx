import React from "react";

import restaurantBg from "../../restaurantBg.jpg";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 320,
    margin: "1.5rem auto"
  },
  actionArea: {
    display: "flex",
    padding: "2rem 0",
    width: "100%",
    height: "100%"
  },
  media: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    position: "absolute",
    top: "3rem",
    left: "0.5rem"
  },
  content: {
    width: "65%",
    marginLeft: 70
  },
  price: {
    color: "#0097a7",
    fontWeight: 600,
    margin: "0.5rem 0"
  }
});

export default function SpecialtieCard({ img, title, price }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} data-aos="fade-up">
      <CardActionArea className={classes.actionArea}>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography className={classes.price} variant="h6">
            ${price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            quisquam quibusdam.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
