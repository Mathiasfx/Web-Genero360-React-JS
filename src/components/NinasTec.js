import React from "react";
import { SeccionNinasTect } from "../Styles/Main";
import personinas from "../images/personinas-05.png";
import LogoNinass from "../images/LogoNinas.png";

const NinasTec = () => {
  return (
    <SeccionNinasTect>
      <div className="bgninas">
        <div className="container">
          <div className="col-md-6 col-sm-12">
            <img src={LogoNinass} alt="logo ninas Tecnologicas" width="100%" />
          </div>
          <div className="col-md-6 col-sm-12"></div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-start text-center w-100">
          <div className="col-md-4 col-sm-12 text-left mt-4">
            <p>
              A través del desarrollo de habilidades tecnológicas, de innovación
              y liderazgo, las participantes podrán incorporar herramientas para
              adquirir nuevas formas de liderar en espacios de tecnología.
            </p>
            <p>
              Fomentando así, la igualdad de oportunidades y la creación de
              emprendimientos que impacten en sus realidades socioeconómicas,
              educativas y culturales.
            </p>
          </div>
          <div className="col-md-8 col-sm-12">
            <img
              className="imgninas"
              src={personinas}
              alt="person ninas"
              width="480px"
            />
          </div>
        </div>
      </div>
    </SeccionNinasTect>
  );
};

export default NinasTec;
