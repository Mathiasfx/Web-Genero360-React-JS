import React from "react";
import { SectionConcurso } from "../Styles/Main";
import flyer from "../images/concurso.png";
import bases from "../assets/Contale al mundo lo que ves - Bases y condiciones.pdf";
import permisos from "../assets/Autorizacion_genero 360.doc";

const Concurso = () => {
  return (
    <SectionConcurso>
      <div className="containter">
        <img
          src={flyer}
          alt="Imagen Concurso"
          className="imgConcurso img-fluid"
        />
        <div className="contenedorBotonera">
          <p>*Descarga las bases y condiciones del concurso </p>
          <a href={bases}>
            <button className="btn btn-primary">Bases y Condiciones</button>
          </a>
          <a href={permisos}>
            <button className="btn  btn-primary ml-3">Permisos</button>
          </a>
        </div>
      </div>
    </SectionConcurso>
  );
};

export default Concurso;
