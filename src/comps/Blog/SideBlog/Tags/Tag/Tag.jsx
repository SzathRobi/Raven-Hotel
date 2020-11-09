import React from "react";
import { IconButton, Typography } from "@material-ui/core";

function Tag({ tag }) {
  const margin = {
    margin: "5px"
  };
  const iconButton = {
    borderRadius: 4,
    backgroundColor: "#f9f9f9"
  };

  return (
    <div style={margin}>
      <IconButton style={iconButton}>
        <Typography variant="subtitle2">{tag}</Typography>
      </IconButton>
    </div>
  );
}

export default Tag;
