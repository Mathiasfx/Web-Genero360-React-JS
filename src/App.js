import "./App.css";
import Nav from "./components/Nav";
import IntroGenero from "./components/IntroGenero";
import NuestroProposito from "./components/NuestroProposito";
import NuestroObjetivo from "./components/NuestroObjetivo";
import QueHacemos from "./components/QueHacemos";

function App() {
  return (
    <div className="App">
      <Nav />
      <IntroGenero />
      <NuestroProposito />
      <NuestroObjetivo />
      <QueHacemos />
    </div>
  );
}

export default App;
