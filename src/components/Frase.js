import React from "react";
import { SeccionFrase } from "../Styles/Main";
import Ninos from "../images/ninos-06.png";
import Fraseimg from "../images/frase-06.png";

const Frase = () => {
  return (
    <SeccionFrase>
      <div className="container d-flex flex-column">
        <img src={Ninos} alt="ninos" width="100%" />
        <div className="d-flex justify-content-center align-items-center">
          <img className="imgfrase" src={Fraseimg} alt="frase" />
        </div>

        <div className="piedefoto"></div>
      </div>
    </SeccionFrase>
  );
};

export default Frase;
