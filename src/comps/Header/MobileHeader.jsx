import React from "react";
import "./MobileHeader.css";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import HotelRoundedIcon from "@material-ui/icons/HotelRounded";
import ImportContactsRoundedIcon from "@material-ui/icons/ImportContactsRounded";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className="MobileHeader"
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Rooms" icon={<HotelRoundedIcon />} />
      <BottomNavigationAction
        label="Book"
        icon={<ImportContactsRoundedIcon />}
      />
    </BottomNavigation>
  );
}
