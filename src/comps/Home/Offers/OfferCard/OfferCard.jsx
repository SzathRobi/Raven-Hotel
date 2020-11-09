import React from "react";
import {
  Card,
  CardActions,
  Typography,
  CardContent,
  CardMedia,
  Button,
  List,
  ListItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    width: "80%",
    margin: "1rem auto",
    paddingBottom: "2rem",
    "@media (min-width: 1024px)": {
      width: "30%",
      margin: "1rem 2rem"
    }
  },
  media: {
    height: 220
  },
  title: {
    position: "relative",
    right: 15
  },
  content: {
    padding: "1rem 1.5rem"
  },
  button: {
    width: "100%"
  }
});

const OfferCard = ({ img }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={img}
        title="Club Room Details"
      />
      <CardContent className={classes.content}>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          Up to 35% savings on Club rooms
        </Typography>
        <Typography component="h6" variant="body1" color="textSecondary">
          <List>
            <ListItem>
              <Typography component="h6" variant="body2">
                Luxaries condition
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component="h6" variant="body2">
                3 Adults & 2 Children size
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component="h6" variant="body2">
                Sea view side
              </Typography>
            </ListItem>
          </List>
        </Typography>
      </CardContent>

      <CardActions>
        <Button className={classes.button} color="primary" variant="outlined">
          BOOK NOW
        </Button>
      </CardActions>
    </Card>
  );
};

export default OfferCard;
