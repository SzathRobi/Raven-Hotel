import React from "react";
import { Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: "80%",
    margin: "3rem auto 1rem",
    backgroundColor: "#f7f7f7",
    padding: "1rem"
  },
  title: {
    margin: "0.5rem 0",
    fontWeight: 600
  }
});

const ServiceCard = ({ icon, title, text }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {icon}
      <Typography variant="h6" className={classes.title}>
        {title}
      </Typography>
      <Typography>{text}</Typography>
    </Card>
  );
};

export default ServiceCard;
