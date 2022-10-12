import React from "react";
import { SectionConcurso } from "../Styles/Main";
import flyer from "../images/concurso.png";

const Concurso = () => {
  return (
    <SectionConcurso>
      <div className="containter">
        <img
          src={flyer}
          alt="Imagen Concurso"
          className="imgConcurso img-fluid"
        />
        <p>*Base y condiciones disponibles a partir del 12 de Octubre</p>
      </div>
    </SectionConcurso>
  );
};

export default Concurso;
