import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

import Home from "./pages/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Setting from "./pages/home/Mine/setting";
import Launch from "./pages/home/Frontpage/launch";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "rgba(255, 189, 12, 1)",
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
          <Route exact path="/launch" element={<Launch />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
