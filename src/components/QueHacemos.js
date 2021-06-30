import React, { Fragment } from "react";
import QueHacemosimg from "../images/quehacemos-01.png";
import { SeccionQueHacemos } from "../Styles/Main";

const QueHacemos = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center align-content-center mb-2">
          <img src={QueHacemosimg} alt="Que Hacemos Genero 360" width="280px" />
        </div>
      </div>
      <SeccionQueHacemos></SeccionQueHacemos>
    </Fragment>
  );
};

export default QueHacemos;
