import "./App.css";
import Home from "./components/home/home";
import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/menu/menu";




function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
