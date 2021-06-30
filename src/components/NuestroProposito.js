import React from "react";
import Corriendo from "../images/corriendo-02.png";
import Letras from "../images/nuestroproposito.png";
import { SectionNuestroProposito } from "../Styles/Main";

const NuestroProposito = () => {
  return (
    <SectionNuestroProposito>
      <div className="container">
        <div className="row">
          <div class="col-md-4 col-sm-12 d-flex align-items-center letra">
            <img
              src={Letras}
              alt="Nuestro Proposito Fundacion Genero 360"
              width="240px"
            />
          </div>
          <div class="col-md-4 col-sm-12 d-flex align-items-center">
            <p>
              Nuestro propósito es fortalecer y desarrollar el liderazgo de
              niñas y adolescentes a través de programas innovadores que
              promuevan el aprendizaje y la incorporación de herramientas para
              construir una <strong>sociedad más justa y equitativa.</strong>
            </p>
          </div>
          <div class="col-md-4 col-sm-12 proposito">
            <img src={Corriendo} alt="personas corriendo" />
          </div>
        </div>
      </div>
    </SectionNuestroProposito>
  );
};

export default NuestroProposito;
