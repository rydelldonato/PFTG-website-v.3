import "./App.css";
import Home from "./components/home/home";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Menu from "./components/menu/menu";
import Services from "./components/services/services";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import ScrollToTop from "./components/scrollToTop/scrollToTop";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/services" element={<Services/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
