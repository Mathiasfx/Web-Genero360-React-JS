import React from "react";
import "./CardPost.css";

const CardPost = (props) => {
  const { titulo, descripcionCorta, imagenPrincipal, fecha } = props;

  return (
    <div className="cardPost">
      <img
        src={`../src/images/${imagenPrincipal}`}
        alt="Novedades Fundacion Genero 360"
      />
      <h5>{titulo}</h5>
      <p>{descripcionCorta}....</p>
      <p>
        <small>{fecha}</small>
      </p>
      <button className="btn  btn-360">Ver más</button>
    </div>
  );
};

export default CardPost;
