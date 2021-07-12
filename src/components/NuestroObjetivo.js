import React from "react";
import { SectionNuestroObjetivo } from "../Styles/Main";
import TituloObjetivo from "../images/nuestroobjetivo.png";

const NuestroObjetivo = () => {
  return (
    <SectionNuestroObjetivo id="nuestroobjetivo">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xs-12"></div>
          <div className="col-lg-6 col-xs-12">
            <img
              className="tituloimg"
              src={TituloObjetivo}
              alt="Titulo Objetivo"
              width="240px"
            />
            <p>
              Trabajar en toda América Latina desarrollando programas de
              empoderamiento de niñas y adolescentes con perspectivas de género,
              <strong> Inclusivos e innovadores.</strong>
            </p>
          </div>
        </div>
      </div>
    </SectionNuestroObjetivo>
  );
};

export default NuestroObjetivo;
