import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";

import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Mine from "./pages/mine/mine";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#1a8cff",
    },
    secondary: {
      main: "#1aff55",
    },
  },
  shape: {
    borderRadius: 16,
  },
});

const SimpleBottomNavigation = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="首页" icon={<HomeIcon />} />
        <BottomNavigationAction label="search" icon={<SearchIcon />} />
        <BottomNavigationAction label="我的" icon={<PersonIcon />} />
      </BottomNavigation>
    </Box>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/mine" element={<Mine />} />
        </Routes>
      </Router>
      <SimpleBottomNavigation></SimpleBottomNavigation>
    </ThemeProvider>
  );
};

export default App;
