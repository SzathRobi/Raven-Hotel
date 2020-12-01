import React from "react";
import Tag from "./Tag/Tag";

import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    width: "270px",
    margin: "0 auto 0 1rem",
    display: "flex",
    flexWrap: "wrap"
  }
});

const Tags = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} data-aos="fade-left">
      <Tag tag="hotel" />
      <Tag tag="restaurant" />
      <Tag tag="travel" />
      <Tag tag="guides" />
      <Tag tag="city" />
    </div>
  );
};

export default Tags;
