import React from "react";
import blogBg from "../../blogBg.jpg";
import instaImg1 from "./instaImg1.jpg";
import instaImg2 from "./instaImg2.jpg";
import instaImg3 from "./instaImg3.jpg";
import instaImg4 from "./instaImg4.jpg";
import instaImg5 from "./instaImg5.jpg";
import instaImg6 from "./instaImg6.jpg";
import instaImg7 from "./instaImg7.jpg";
import instaImg8 from "./instaImg8.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "1rem auto"
  },
  title: {
    margin: "3rem 0"
  },
  imgs: {
    width: "85%",
    margin: "1rem 0",
    display: "grid",
    gridGap: "15px 5px",
    gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))"
  },
  img: {
    width: "100%",
    borderRadius: "4px",
    cursor: "pointer"
  }
});

const InstaFeeds = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3 className={classes.title}>Instagram Feeds</h3>
      <div className={classes.imgs}>
        <Card>
          <CardActionArea>
            <img className={classes.img} src={instaImg1} alt="mittomÃ©n" />
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <img className={classes.img} src={instaImg2} alt="mittomÃ©n" />
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <img className={classes.img} src={instaImg3} alt="mittomÃ©n" />
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <img className={classes.img} src={instaImg4} alt="mittomÃ©n" />
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <img className={classes.img} src={instaImg5} alt="mittomÃ©n" />
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <img className={classes.img} src={instaImg6} alt="mittomÃ©n" />
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <img className={classes.img} src={instaImg7} alt="mittomÃ©n" />
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <img className={classes.img} src={instaImg8} alt="mittomÃ©n" />
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default InstaFeeds;
