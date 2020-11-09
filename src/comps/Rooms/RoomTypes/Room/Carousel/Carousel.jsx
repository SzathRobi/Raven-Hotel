import React from "react";
import roomsBg from "../../../roomsBg.jpg";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { MobileStepper, Paper, Typography, Button } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const roomParts = [
  {
    label: "Living Room",
    imgPath: roomsBg
  },
  {
    label: "Balcony",
    imgPath: roomsBg
  },
  {
    label: "Bathroom",
    imgPath: roomsBg
  },
  {
    label: "Bedroom",
    imgPath: roomsBg
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    position: "relative"
  },
  header: {
    display: "flex",
    alignItems: "center",
    width: 100,
    height: 40,
    position: "absolute",
    left: 0,
    top: 0,
    border: "1px solid #0097a7",
    backgroundColor: "#0097a7",
    borderRadius: 6,
    borderTopLeftRadius: 0
  },
  headerText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff"
  },
  img: {
    height: 255,
    maxWidth: 400,
    // overflow: "hidden",
    display: "block",
    width: "100%"
  },
  stepper: {
    position: "relative",
    bottom: 50,
    backgroundColor: "rgba(0,0,0,0.7)",
    //backgroundColor: "transparent",
    color: "#fff"
  },
  stepperBtn: {
    color: "#fff"
  }
}));

export default function Carousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = roomParts.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography variant="body2" className={classes.headerText}>
          {roomParts[activeStep].label}
        </Typography>
      </Paper>
      <img
        className={classes.img}
        src={roomParts[activeStep].imgPath}
        alt={roomParts[activeStep].label}
      />
      <MobileStepper
        className={classes.stepper}
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            className={classes.stepperBtn}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            className={classes.stepperBtn}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}
