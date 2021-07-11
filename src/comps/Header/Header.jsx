import React, { useState } from "react";

import { Link } from "react-router-dom";

import hotelLogo from "../../imgs/hotelLogo.png";
import {
  AppBar,
  Toolbar,
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import RestaurantRoundedIcon from "@material-ui/icons/RestaurantRounded";
import ApartmentRoundedIcon from "@material-ui/icons/ApartmentRounded";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";

const useStyles = makeStyles({
  header: {
    height: "3.5rem",
    backgroundColor: "#fff",
    position: "fixed",
    top: 0,
    left: 0,
  },
  nav: {
    width: "50%",
    color: "#000",
    display: "none",
    "@media (min-width: 1024px)": {
      display: "flex",
    },
  },
  navList: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    fontSize: "1.3rem",
  },
  listItem: {
    borderRadius: "4px",
    padding: "0.5rem 1rem",
    transition: "300ms",
    cursor: "pointer",
    textDecoration: "none",
    color: "#000",
    "@media (min-width: 1024px)": {
      "&:hover": {
        backgroundColor: "#0097a7",
        color: "#fff",
      },
    },
  },
  hamburgerContainer: {
    "@media (min-width: 1024px)": {
      display: "none",
    },
  },
  hamburger: {
    color: "#000",
  },
  closeIcon: {
    margin: "auto auto auto 0",
  },
});

const Header = () => {
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const updateDRawerOpen = (event) => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div className="Header">
      <AppBar className={classes.header}>
        <Toolbar>
          <img src={hotelLogo} className="hotel-logo" alt="hotelLogo" />
          <nav className={classes.nav}>
            <ul className={classes.navList}>
              <Link className={classes.listItem} to="/raven-hotel">
                Home
              </Link>
              <Link className={classes.listItem} to="/raven-hotel/Book">
                Book
              </Link>
              <Link className={classes.listItem} to="/raven-hotel/About">
                About
              </Link>
              <Link className={classes.listItem} to="/raven-hotel/Restaurant">
                Restaurant
              </Link>
              <Link className={classes.listItem} to="/raven-hotel/Blog">
                Blog
              </Link>
            </ul>
          </nav>
          <IconButton
            onClick={updateDRawerOpen}
            className={classes.hamburgerContainer}
          >
            <MenuRoundedIcon className={classes.hamburger} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="right" open={drawerOpen}>
        <IconButton onClick={closeDrawer}>
          <ArrowForwardRoundedIcon className={classes.closeIcon} />
        </IconButton>
        <Divider />
        <List>
          <ListItem button>
            <Link to="/raven-hotel/">
              <ListItemIcon>
                <LocalLibraryIcon />
              </ListItemIcon>
              <ListItemText onClick={closeDrawer}>Home</ListItemText>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/raven-hotel/Book">
              <ListItemIcon>
                <LocalLibraryIcon />
              </ListItemIcon>
              <ListItemText onClick={closeDrawer}>Book</ListItemText>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/raven-hotel/About">
              <ListItemIcon>
                <ApartmentRoundedIcon />
              </ListItemIcon>
              <ListItemText onClick={closeDrawer}>About Us</ListItemText>
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/raven-hotel/Restaurant">
              <ListItemIcon>
                <RestaurantRoundedIcon />
              </ListItemIcon>
              <ListItemText onClick={closeDrawer}>Restaurant</ListItemText>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link to="/raven-hotel/Blog">
              <ListItemIcon>
                <ListAltRoundedIcon />
              </ListItemIcon>
              <ListItemText onClick={closeDrawer}>Blog</ListItemText>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Header;
