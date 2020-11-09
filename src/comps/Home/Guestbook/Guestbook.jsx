import React, { useState, useEffect } from "react";

import avatar1 from "./imgs/avatar1.jpg";
import avatar2 from "./imgs/avatar2.jpg";
import avatar3 from "./imgs/avatar3.jpg";

import {
  Paper,
  Avatar,
  IconButton,
  Typography,
  Slide
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "1rem",
    margin: "2rem 0 0",
    backgroundColor: "#0097a7",
    color: "#fff",
    position: "relative",
    overflow: "hidden",
    "@media (min-width: 1024px)": {
      fontSize: "140%",
      padding: "1rem 2rem"
    }
  },
  corner: {
    width: "100%",
    height: "8rem",
    backgroundColor: "#fff",
    position: "absolute",
    top: "2rem",
    right: "-3rem",
    transformOrigin: "right",
    transform: "rotate(45deg)"
  },
  guestBookContainer: {
    width: "95%",
    position: "relative",
    "@media (min-width: 1024px)": {
      width: "70%",
      margin: "0 auto"
    }
  },
  review: {
    width: "100%",
    minHeight: "12rem",
    margin: "1rem auto 0.5rem",
    padding: "1rem",
    backgroundColor: "#006064",
    color: "#f1f1f1",
    boxShadow: "0 0 4rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  guestbookTitle: {
    margin: "4rem 0"
  },
  avatar: {
    width: "3.5rem",
    height: "3.5rem"
  }
});

const Guestbook = () => {
  const classes = useStyles();

  const guestReviews = {
    guest1: {
      img: avatar1,
      name: "John Smith",
      feeling: "Loved It",
      review:
        "lorem ipsum dolor sit amet,is-cing elit. Mauris tincidunt consectetur turpis, eget consequat",
      time: "04/20/2019"
    },
    guest2: {
      img: avatar2,
      name: "Jane Smith",
      feeling: "Enjoyed",
      review:
        "lorem ipsum dolor sit amet, consectetur adipis-cing elit. Mauris tincidunt consectetur turpis, eget consequat",
      time: "08/13/2019"
    },
    guest3: {
      img: avatar3,
      name: "Olivia Bone",
      feeling: "Excellent",
      review:
        "lorem ipsum dolor sit amet, consectetur adip consectetur adip consectetur adipis-cing elit. Mauris tincidunt consectetur turpis, eget consequat",
      time: "01/26/2020"
    }
  };

  const [actualReview, setActualReview] = useState(1);
  const updateActualReview = (event) => {
    if (event.target.src === avatar1) {
      setActualReview(1);
      updateReview();
    } else if (event.target.src === avatar2) {
      setActualReview(2);
      updateReview();
    } else {
      setActualReview(3);
      updateReview();
    }
  };

  const [review, setReview] = useState({
    date: guestReviews.guest1.time,
    title: guestReviews.guest1.feeling,
    text: guestReviews.guest1.review
  });

  const updateReview = () => {
    if (actualReview === 1) {
      setReview({
        date: guestReviews.guest1.time,
        title: guestReviews.guest1.feeling,
        text: guestReviews.guest1.review
      });
    } else if (actualReview === 2) {
      setReview({
        date: guestReviews.guest2.time,
        title: guestReviews.guest2.feeling,
        text: guestReviews.guest2.review
      });
    } else {
      setReview({
        date: guestReviews.guest3.time,
        title: guestReviews.guest3.feeling,
        text: guestReviews.guest3.review
      });
    }
  };

  const [fadeToggler, setFadeToggler] = useState(true);
  useEffect(() => {
    setFadeToggler(false);
    setTimeout(() => {
      setFadeToggler(true);
    }, 400);
  }, [review]);

  const starColor = {
    color: "yellow",
    filter: "drop-shadow(0 0 2px yellow)"
  };

  return (
    <section className={classes.root}>
      <div className={classes.corner}></div>
      <Typography variant="h2" className={classes.guestbookTitle}>
        Guestbook
      </Typography>
      <div className={classes.guestBookContainer}>
        <Slide direction="left" in={fadeToggler} timeout={300}>
          <Paper className={classes.review}>
            <h6>{review.date}</h6>
            <div className="stars">
              <StarRoundedIcon style={starColor} />
              <StarRoundedIcon style={starColor} />
              <StarRoundedIcon style={starColor} />
              <StarRoundedIcon style={starColor} />
              {actualReview === 3 ? (
                <StarBorderRoundedIcon style={starColor} />
              ) : (
                <StarRoundedIcon style={starColor} />
              )}
            </div>
            <h4>{review.title}</h4>
            <p>{review.text}</p>
          </Paper>
        </Slide>
        <div className="avatars">
          <IconButton onClick={updateActualReview}>
            <Avatar
              alt={guestReviews.guest1.name}
              src={guestReviews.guest1.img}
              className={classes.avatar}
            />
          </IconButton>
          <IconButton onClick={updateActualReview}>
            <Avatar
              alt={guestReviews.guest2.name}
              src={guestReviews.guest2.img}
              className={classes.avatar}
            />
          </IconButton>
          <IconButton onClick={updateActualReview}>
            <Avatar
              alt={guestReviews.guest3.name}
              src={guestReviews.guest3.img}
              className={classes.avatar}
            />
          </IconButton>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;
