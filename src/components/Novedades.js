import React, { useState, useEffect } from "react";
import { SeccionNovedades } from "../Styles/Main";
import CardPost from "../components/shared/CardPost/CardPost.js";
import Axios from "axios";

const Novedades = () => {
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    Axios({
      url: "https://genero360api.herokuapp.com/api/novedades",
    })
      .then((response) => {
        setNovedades(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setNovedades]);

  return (
    <div className="container">
      <SeccionNovedades>
        {novedades.map((nov) => (
          <CardPost
            id={nov.id}
            titulo={nov.titulo}
            descripcionCorta={nov.descripcionCorta}
            fecha={nov.fecha}
            imagenPrincipal={nov.imagenPrincipal}
          ></CardPost>
        ))}
      </SeccionNovedades>
    </div>
  );
};
export default Novedades;
