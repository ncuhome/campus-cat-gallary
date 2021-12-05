import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#cccccc',
    },
    secondary: {
      main: '#c51162',
      
    },
  },
  shape: {
    borderRadius: 16,}
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
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
