import React from "react";
import "./App.css";
import Nav from "./components/Nav";

import Footer from "./components/Footer";

import {
  HashRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Concurso from "./components/Concurso";
import Inicio from "./components/Inicio";
import Novedades from "./components/Novedades";
import { Error404 } from "./components/Error404";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          {/* <Route path="/concurso360" element={<Concurso />} /> */}
          <Route path="/novedades" element={<Novedades />} />
          <Route path="/novedades/:id" element={<Novedades />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
