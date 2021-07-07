import React from "react";
import { SeccionFutbolDes } from "../Styles/Main";
import LogoFap from "../images/logoFAP.png";

const FutbolParDes = () => {
  return (
    <SeccionFutbolDes>
      <div className="container w-100">
        <div className="row justify-content-start align-content-center h-100">
          <div className="col-md-4 text-center">
            <img src={LogoFap} alt="Logo FAP Futbol a la Par" width="180px" />
          </div>
          <div className="col-md-4">
            <p>
              Considerando los principios de ONU Mujeres, FIFA y Conmebol, el
              deporte y particularmente el fútbol, juegan un rol importante en
              el empoderamiento de niñas y adolescentes.
            </p>

            <p>
              El fútbol funciona como una gran usina generadora de líderes, por
              ello FAP propone un diseño "a medida" para incentivar la
              participación de niñas y adolescentes en los espacios de decisión.
            </p>
          </div>
          <div className="col-md-4">
            <p>
              El programa elabora planes de acción y desarrolla iniciativas
              innovadoras que permiten lograr experiencias integrales con
              perspectiva de género
            </p>
            <button className="btn btngenero">
              Solicitar Informacion<div className="iconbtn">+</div>
            </button>
          </div>
        </div>
      </div>
    </SeccionFutbolDes>
  );
};

export default FutbolParDes;
