import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

const FloatingActionButtons = () => {
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
      }}
    >
      <Fab color="primary" aria-label="add" sx={{ boxShadow: 0 }}>
        <AddIcon />
      </Fab>
    </Box>
  );
};

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
