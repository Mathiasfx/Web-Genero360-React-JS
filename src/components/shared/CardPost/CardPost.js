import React from "react";
import "./CardPost.css";
import { Link as RouterLink } from "react-router-dom";
import moment from "moment";

const CardPost = (props) => {
  const { id, titulo, descripcionCorta, imagenPrincipal, fecha } = props;

  return (
    <div className="cardPost">
      <div className="contenedorImgTitle">
        {imagenPrincipal ? (
          <img
            className="cardPostImg"
            src={`./images/${imagenPrincipal}`}
            alt="Novedades Fundacion Genero 360"
          />
        ) : null}
        <h5>{titulo}</h5>
      </div>

      <p>{descripcionCorta}....</p>
      <p>
        <small>{moment(fecha).format("L")}</small>
      </p>
      <RouterLink to={`/novedades/${id}`}>
        <button className="btn  btn-360">Ver más</button>
      </RouterLink>
    </div>
  );
};

export default CardPost;
