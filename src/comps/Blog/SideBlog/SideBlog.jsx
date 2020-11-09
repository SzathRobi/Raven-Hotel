import React from "react";

import postImg1 from "./postImg1.jpg";
import postImg2 from "./postImg2.jpg";
import postImg3 from "./postImg3.jpg";
import postImg4 from "./postImg4.jpg";

import { TextField, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import RecentPost from "./RecentPost/RecentPost";
import Tags from "./Tags/Tags";
import InstaFeeds from "./InstaFeeds/InstaFeeds";
import Newsletter from "./Newsletter/Newsletter";

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "1rem 1rem 3rem",
    "@media (min-width: 1024px)": {
      width: "30%",
      position: "absolute",
      right: 0,
      top: "120vh"
    }
  },
  search: {
    width: 320,
    margin: "1rem auto"
  },
  headers: {
    margin: "3rem 0"
  }
});
const SideBlog = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form autoComplete="off" className={classes.search}>
        <TextField size="small" label="Search Keyword" variant="outlined" />
        <Button variant="contained">Search</Button>
      </form>
      <div className="Recent-posts">
        <Typography className={classes.headers} variant="h5">
          Recent Posts
        </Typography>
        <RecentPost img={postImg1} />
        <RecentPost img={postImg2} />
        <RecentPost img={postImg3} />
        <RecentPost img={postImg4} />
      </div>
      <Typography className={classes.headers} variant="h5">
        Categories
      </Typography>
      <Tags />
      <InstaFeeds />
      <Newsletter />
    </div>
  );
};

export default SideBlog;
