import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home/home'
import Login from './pages/Login/login'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
    </Router>
  );
}

export default App;
