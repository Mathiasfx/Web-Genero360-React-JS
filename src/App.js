import "./App.css";
import Nav from "./components/Nav";
import IntroGenero from "./components/IntroGenero";
import NuestroProposito from "./components/NuestroProposito";
import NuestroObjetivo from "./components/NuestroObjetivo";
import QueHacemos from "./components/QueHacemos";
import NuestrosProgramas from "./components/NuestrosProgramas";
import Futbolalapar from "./components/FutbolalaPar";
import FutbolParDes from "./components/FutbolParDes";

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
    </div>
  );
}

export default App;
