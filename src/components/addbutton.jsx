import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

const Addbutton = () => {
  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={{ position: "fixed", bottom: 72, right: 24 }}
    >
      <AddIcon />
    </Fab>
  );
};

export default Addbutton;
