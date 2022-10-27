import React from "react";
import { SeccionNovedades } from "../Styles/Main";
import CardPost from "../components/shared/CardPost/CardPost.js";

const Novedades = () => {
  return (
    <div className="container">
      <SeccionNovedades>
        <CardPost
          id="6"
          titulo="Firma de Convenio marco de Cooperación interinstitucional entre la fundacion Genero 360 y el Rotary Club de Luque Paraguay"
          descripcionCorta="El dia martes se llevo a cabo la firma del convenio marco de cooperacion interinstitucional entre el rotary club Luque, representado por su presidente fany Benitez de giangreco y la fundacion genero 360 representada por su Viceprecidenta Norma Alicia Simonit"
          fecha="20/10/22"
          imagenPrincipal="luque360.jpg"
        ></CardPost>
      </SeccionNovedades>
    </div>
  );
};
export default Novedades;
