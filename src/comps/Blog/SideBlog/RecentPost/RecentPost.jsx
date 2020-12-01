import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

import { Chip, CardActionArea } from "@material-ui/core";

import QueryBuilderRoundedIcon from "@material-ui/icons/QueryBuilderRounded";

import blogBg from "../../blogBg.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: 310,
    height: 80,
    margin: "1rem auto"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto",
    justifyContent: "center",
    alignItems: "center"
  },
  cover: {
    width: 120
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}));

export default function RecentPost({ img, title, date }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root} data-aos="fade-left">
      <CardMedia
        className={classes.cover}
        image={img}
        title="Live from space album cover"
      />
      <CardActionArea>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="h6">Live From Space</Typography>
            <Chip
              icon={<QueryBuilderRoundedIcon />}
              size="small"
              disabled
              label="August 18. 2020"
            />
          </CardContent>
          <div className={classes.controls}></div>
        </div>
      </CardActionArea>
    </Card>
  );
}
