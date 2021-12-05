import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/mine" element={<Mine />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
