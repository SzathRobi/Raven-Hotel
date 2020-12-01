import React from "react";
import {
  Checkbox,
  FormControlLabel,
  makeStyles,
  Typography
} from "@material-ui/core";
import BathtubOutlinedIcon from "@material-ui/icons/BathtubOutlined";
import BathtubIcon from "@material-ui/icons/Bathtub";
import PetsIcon from "@material-ui/icons/Pets";
import WavesRoundedIcon from "@material-ui/icons/WavesRounded";
import KingBedOutlinedIcon from "@material-ui/icons/KingBedOutlined";
import KingBedRoundedIcon from "@material-ui/icons/KingBedRounded";

const useStyles = makeStyles({
  root: {
    marginBottom: "6rem",
    padding: "4rem 2rem",
    backgroundColor: "#e0f7fa",
    boxShadow: "2px 2px 8px #006064",
    borderRadius: 8
  },
  title: {
    position: "relative",
    top: -30
  },
  label: {
    margin: "1rem"
  }
});

const Preferences = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} data-aos="fade-up">
      <div>
        <Typography className={classes.title} variant="h4">
          Choose Any Preference
        </Typography>
      </div>
      <div>
        <FormControlLabel
          className={classes.label}
          control={
            <Checkbox
              icon={<BathtubOutlinedIcon />}
              checkedIcon={<BathtubIcon />}
              color="primary"
            />
          }
          label="Huge Bath"
        />
        <FormControlLabel
          className={classes.label}
          control={
            <Checkbox
              icon={<PetsIcon />}
              checkedIcon={<PetsIcon />}
              name="checkedH"
              color="primary"
            />
          }
          label="Pets Allowed"
        />
        <FormControlLabel
          className={classes.label}
          control={
            <Checkbox
              icon={<WavesRoundedIcon />}
              checkedIcon={<WavesRoundedIcon />}
              name="checkedH"
              color="primary"
            />
          }
          label="Sea View"
        />
        <FormControlLabel
          className={classes.label}
          control={
            <Checkbox
              icon={<KingBedOutlinedIcon />}
              checkedIcon={<KingBedRoundedIcon />}
              name="checkedH"
              color="primary"
            />
          }
          label="King Beds"
        />
      </div>
    </div>
  );
};

export default Preferences;
