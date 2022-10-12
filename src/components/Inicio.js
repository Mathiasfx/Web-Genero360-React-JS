import React, { Fragment } from "react";
import Contacto from "./Contacto";
import Frase from "./Frase";
import Futbolalapar from "./FutbolalaPar";
import FutbolParDes from "./FutbolParDes";
import IntroGenero from "./IntroGenero";
import NinasTec from "./NinasTec";
import NuestroObjetivo from "./NuestroObjetivo";
import NuestroProposito from "./NuestroProposito";
import NuestrosProgramas from "./NuestrosProgramas";

import PopupComp from "./PopupComp";
import QueHacemos from "./QueHacemos";

const Inicio = () => {
  return (
    <Fragment>
      <div className="containter">
        <PopupComp />
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
      </div>
    </Fragment>
  );
};

export default Inicio;
