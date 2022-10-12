import "./App.css";
import Nav from "./components/Nav";
import IntroGenero from "./components/IntroGenero";
import NuestroProposito from "./components/NuestroProposito";
import NuestroObjetivo from "./components/NuestroObjetivo";
import QueHacemos from "./components/QueHacemos";
import NuestrosProgramas from "./components/NuestrosProgramas";
import Futbolalapar from "./components/FutbolalaPar";
import FutbolParDes from "./components/FutbolParDes";
import NinasTec from "./components/NinasTec";
import Frase from "./components/Frase";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import PopupComp from "./components/PopupComp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Concurso from "./components/Concurso";
import Inicio from "./components/Inicio";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/concurso360" element={<Concurso />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
