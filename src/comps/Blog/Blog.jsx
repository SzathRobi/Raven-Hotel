import React, { useEffect } from "react";
import Landing from "../Landing/Landing";
import blogBg from "./blogBg.jpg";
import Blogs from "./Blogs/Blogs";
import SideBlog from "./SideBlog/SideBlog";
import Contact from "../Contact/Contact";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: "relative",
    top: "3.5rem",
    marginBottom: "4rem"
  }
});

const Blog = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.root}>
      <Landing img={blogBg} subtitle="Blog" title="Our Blog" />
      <Blogs />
      <SideBlog />
      <Contact />
    </div>
  );
};

export default Blog;
