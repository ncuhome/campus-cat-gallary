import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

import Home from "./pages/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Setting from "./pages/home/Mine/setting";

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
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/setting" element={<Setting />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
