import React from "react";

import blogImg1 from "./blogImg1.jpg";
import blogImg2 from "./blogImg2.jpg";
import blogImg3 from "./blogImg3.jpg";
import blogImg4 from "./blogImg4.jpg";
import blogImg5 from "./blogImg5.jpg";
import blogImg6 from "./blogImg6.jpg";

import BlogCard from "./BlogCard/BlogCard";
import { makeStyles } from "@material-ui/core/styles";

import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "1rem auto 3rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
    "@media (min-width: 1024px)": {
      width: "70%",
      margin: "1rem auto 3rem 0"
    }
  },
  pegi: {
    width: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    "@media (min-width: 678px)": {
      width: "200%"
    },
    "@media (min-width: 1475px)": {
      width: "300%"
    }
  }
});

const Blogs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BlogCard
        img={blogImg1}
        title="Top 10 Thing You Should Bring"
        category="Tips&Tricks"
        timeStamp=" 14 July"
      />
      <BlogCard
        img={blogImg2}
        title="1500m From The Hotel!"
        category="Best Places"
        timeStamp=" 20 Aug"
      />
      <BlogCard
        img={blogImg3}
        title="Tips For The Hottest Days"
        category="Relax"
        timeStamp=" 22 Aug"
      />
      <BlogCard
        img={blogImg4}
        title="Oppurtunity You Never Forget"
        category="Events"
        timeStamp=" 29 Aug"
      />
      <BlogCard
        img={blogImg5}
        title="New Gests Arrived"
        category="Nature"
        timeStamp="01 Sept"
      />
      <BlogCard
        img={blogImg6}
        title="5 Must See Buildings"
        category="City"
        timeStamp=" 14 Sept"
      />
      <BlogCard
        img={blogImg1}
        title="Top 10 Thing You Should Bring"
        category="Tips&Tricks"
        timeStamp=" 24 Sept"
      />
      <BlogCard
        img={blogImg2}
        title="1500m From The Hotel!"
        category="Best Places"
        timeStamp="09 Okt"
      />
      <BlogCard
        img={blogImg3}
        title="Tips For The Hottest Days"
        category="Relax"
        timeStamp=" 18 Okt"
      />
      <BlogCard
        img={blogImg4}
        title="Oppurtunity You Never Forget"
        category="Events"
        timeStamp=" 20 Okt"
      />
      <BlogCard
        img={blogImg5}
        title="New Gests Arrived"
        category="Nature"
        timeStamp="27 Okt"
      />
      <BlogCard
        img={blogImg6}
        title="5 Must See Buildings"
        category="City"
        timeStamp=" Nov 17"
      />
      <Pagination className={classes.pegi} count={5} />
    </div>
  );
};

export default Blogs;
