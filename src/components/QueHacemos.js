import React, { Fragment } from "react";
import QueHacemosimg from "../images/quehacemos-01.png";
import { SeccionQueHacemos } from "../Styles/Main";

const QueHacemos = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center align-content-center flex-column mb-2">
          <img src={QueHacemosimg} alt="Que Hacemos Genero 360" width="280px" />
          <img src={QueHacemosimg} alt="Que Hacemos Genero 360" width="40px" />
        </div>
      </div>
      <SeccionQueHacemos>
        <div className="row w-100">
          <div className="col-md-4 col-sm-12 p-4 d-flex text-left separador">
            <p>Diseñamos proyectos con  enfoque de género.</p>
        </div>
          <div className="col-md-4 col-sm-12 p-4 d-flex justify-content-center text-left separador">
            <p>Creamos soluciones integrales e innovadoras para acompañar a niñas y adolescentes en el aprendizaje del ejercicio y fortalecimiento del liderazgo.</p></div>
          <div className="col-md-4 col-sm-12 p-4 d-flex justify-content-center text-left ">Generamos alianzas para desarrollar acciones junto a los sectores privado, estatal
          y organismos nacionales e internacionales</div>
          </div>
        
      

      </SeccionQueHacemos>
    </Fragment> 
  );
};

export default QueHacemos;
