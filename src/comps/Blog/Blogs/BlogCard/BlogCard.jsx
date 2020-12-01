import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  IconButton
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

import { Button, CardActionArea } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 320,
    padding: "1rem 1.5rem",
    margin: "3rem auto",
    position: "relative",
    "@media (min-width: 1024px)": {
      width: 380
    }
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  badge: {
    position: "absolute",
    top: 10,
    right: 15,
    backgroundColor: "#0097a7",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: 4
  },
  date: {
    width: "4rem",
    padding: "10px 5px",
    backgroundColor: "#0097a7",
    color: "#fff",
    borderRadius: 4,
    textAlign: "center",
    position: "absolute",
    top: "7rem",
    left: 10
  },
  button: {
    backgroundColor: "#0097a7",
    color: "#fff",
    margin: "0 0 0 auto"
  }
}));

export default function BlogCard({ img, title, category, timeStamp }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} data-aos="fade-up">
      <div className={classes.badge}>
        <p>{category}</p>
      </div>
      <CardMedia className={classes.media} image={img} title="Paella dish" />
      <div className={classes.date}>
        <h3>{timeStamp}</h3>
      </div>
      <CardActionArea>
        <CardHeader
          title={title}
          subheader="Lorem ipsum dolor sit amet conqueour adespicio m dolor s amet conqueour ad amet conqur ad conqueour adespicio m dolor s amet"
        />
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button
          variant="contained"
          color="inherit"
          className={classes.button}
          // startIcon={<TextsmsRoundedIcon />}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
