import React, { useState, useEffect, Fragment } from "react";
import { SeccionNovedades } from "../Styles/Main";
import CardPost from "../components/shared/CardPost/CardPost.js";
import Axios from "axios";

const Novedades = () => {
  const [novedades, setNovedades] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Axios({
      url: "https://genero360api.herokuapp.com/api/novedades",
    })
      .then((response) => {
        setNovedades(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert("Ocurrio un error al cargar las novedades");
        setLoading(false);
      });
  }, [setNovedades]);

  return (
    <div className="container">
      {loading ? (
        <div className="loadingspin">
          <div className="spinner-border" role="status">
            <span className="sr-only">cargando...</span>
          </div>
        </div>
      ) : null}

      <SeccionNovedades>
        {novedades.map((nov) => (
          <Fragment key={nov.id}>
            <CardPost
              id={nov.id}
              titulo={nov.titulo}
              descripcionCorta={nov.descripcionCorta}
              fecha={nov.fecha}
              imagenPrincipal={nov.imagenPrincipal}
            ></CardPost>
          </Fragment>
        ))}
      </SeccionNovedades>
    </div>
  );
};
export default Novedades;
