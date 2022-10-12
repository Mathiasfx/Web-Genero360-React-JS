import React, { Fragment, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import imagenPopup from "../images/concurso.png";
import { Link as RouterLink } from "react-router-dom";

const PopupComp = () => {
  const [open, setOpen] = useState(true);

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <Popup open={open} position="right center">
        <div className="modal2">
          <RouterLink to="/concurso360" className="link60">
            <img src={imagenPopup} alt="Concurso Genero 360" width="400px" />
          </RouterLink>
          <a className="close" onClick={closeModal}>
            &times;
          </a>
        </div>
      </Popup>
    </Fragment>
  );
};
export default PopupComp;
