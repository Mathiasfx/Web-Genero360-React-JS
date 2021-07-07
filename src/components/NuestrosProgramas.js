import React from "react";
import { SeccionNuestrosProgramas } from "../Styles/Main";
import logoFAP from "../images/logoFAP.png";
import logoNinas from "../images/LogoNinas.png";
import TituloNuestro from "../images/nuestrosprogramas.png";

const NuestrosProgramas = () => {
  return (
    <SeccionNuestrosProgramas>
      <div className="container">
        <div className="row justify-content-start text-center w-100">
          <div className="col-md-4 col-sm-12  text-left  d-flex flex-column align-items-start justify-content-center">
            <div className="tituloPrograma">
              <img
                src={TituloNuestro}
                alt="Titulo Programas Fundacion "
                width="280px"
              />
            </div>
            <p className="textoprograma">
              Cada uno de estos programas incorpora herramientas imprescindibles
              que
              <strong>
                promueven el liderazgo de las niñas y las adolescentes en todos
                los ámbitos donde se desarrollen.
              </strong>
            </p>
          </div>
          <div className="col-md-4 col-sm-12 text-left  d-flex flex-column align-items-start justify-content-center">
            <div className="imglogo">
              <img src={logoFAP} alt="Logo FAP" width="180px" />
            </div>

            <p>
              Orientado a niñas y adolescentes. Promueve la
              <strong> transformación de sus realidades</strong> a través de la
              práctica del fútbol. Está basado en tres ejes de acción: gestión,
              formación y acción.
            </p>
          </div>
          <div className="col-md-4 col-sm-12 text-left  d-flex flex-column align-items-start justify-content-center">
            <div className="imglogo">
              <img src={logoNinas} alt="Logo Ninas" width="180px" />
            </div>

            <p>
              Dirigido a niñas y adolescentes. Tiene por propósito que
              <strong>
                desarrollen habilidades en el campo de la ciencia y la
                tecnología.
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div className="re"></div>
    </SeccionNuestrosProgramas>
  );
};

export default NuestrosProgramas;
