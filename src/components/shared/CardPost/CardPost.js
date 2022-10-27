import React from "react";
import "./CardPost.css";
import { Link as RouterLink, useLocation } from "react-router-dom";

const CardPost = (props) => {
  const { id, titulo, descripcionCorta, imagenPrincipal, fecha } = props;

  return (
    <div className="cardPost">
      <div className="contenedorImgTitle">
        <img
          className="cardPostImg"
          src={require(`../../../images/${imagenPrincipal}`)}
          alt="Novedades Fundacion Genero 360"
        />
        <h5>{titulo}</h5>
      </div>

      <p>{descripcionCorta}....</p>
      <p>
        <small>{fecha}</small>
      </p>
      <RouterLink to={`/novedades/${id}`}>
        <button className="btn  btn-360">Ver más</button>
      </RouterLink>
    </div>
  );
};

export default CardPost;
