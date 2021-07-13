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

function App() {
  return (
    <div className="App">
      <Nav />
      <IntroGenero />
      <NuestroProposito />
      <NuestroObjetivo />
      <QueHacemos />
      <NuestrosProgramas />
      <Futbolalapar />
      <FutbolParDes />
      <NinasTec />
      <Frase />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
