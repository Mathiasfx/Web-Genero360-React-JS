import React from "react";
import "./App.css";
import Nav from "./components/Nav";

import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Concurso from "./components/Concurso";
import Inicio from "./components/Inicio";
import Novedades from "./components/Novedades";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/concurso360" element={<Concurso />} />
          <Route path="/novedades" element={<Novedades />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
