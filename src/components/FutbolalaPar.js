import React, { Fragment } from "react";
import { SeccionFutbolPar } from "../Styles/Main";
import Flechita from "../images/flechita.png";

const Futbolalapar = () => {
  return (
    <Fragment>
      <SeccionFutbolPar>
        <div className="container w-100">
          <img className="Flecha" src={Flechita} alt="arrow" />
          <div className=" bgchicas h-100 "></div>
        </div>
      </SeccionFutbolPar>
    </Fragment>
  );
};

export default Futbolalapar;
