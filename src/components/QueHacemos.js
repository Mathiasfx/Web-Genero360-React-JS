import React, { Fragment } from "react";
import QueHacemosimg from "../images/quehacemos-01.png";
import { SeccionQueHacemos } from "../Styles/Main";
import Logo1 from "../images/icono1.png";
import Logo2 from "../images/icono2.png";
import Logo3 from "../images/icono3.png";
import Arrow from "../images/arrowdown.png";

const QueHacemos = () => {
  return (
    <Fragment>
      <div className="container" id="quehacemos">
        <div className="row justify-content-center align-items-center flex-column text-center mb-2">
          <img src={QueHacemosimg} alt="Que Hacemos Genero 360" width="280px" />
          <img src={Arrow} alt="Que Hacemos Genero 360" width="100px" />
        </div>
      </div>
      <SeccionQueHacemos>
        <div className="container">
          <div className="row justify-content-center align-items-center text-center mb-1">
            <div className="col-lg-4 col-sm-12  d-flex flex-column align-items-start text-left h-100">
              <img
                className="align-self-center m-2"
                src={Logo1}
                alt="Logo 1"
                width="95px"
              />
              <div className="separador">
                <p>Diseñamos proyectos con enfoque de género.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12  d-flex  flex-column  align-items-startd text-left h-100">
              <img
                className="align-self-center m-2"
                src={Logo2}
                alt="Logo 1"
                width="95px"
              />
              <div className="separador">
                <p>
                  Creamos soluciones integrales e innovadoras para acompañar a
                  niñas y adolescentes en el aprendizaje del ejercicio y
                  fortalecimiento del liderazgo.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12  d-flex  flex-column  align-items-start text-left h-100  ">
              <img
                className="align-self-center m-2"
                src={Logo3}
                alt="Logo 1"
                width="95px"
              />
              <div>
                <p className="separadorsin">
                  Generamos alianzas para desarrollar acciones junto a los
                  sectores privado, estatal y organismos nacionales e
                  internacionales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SeccionQueHacemos>
    </Fragment>
  );
};

export default QueHacemos;
