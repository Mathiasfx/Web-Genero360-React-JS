import React, { Fragment, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import imagenPopup from "../images/flyer450.png";

const PopupComp = () => {
  const [open, setOpen] = useState(true);

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <Popup open={open} position="right center">
        <div className="modal2">
          <img src={imagenPopup} alt="Evento Genero 360" width="500px" />
          <a className="close" onClick={closeModal}>
            &times;
          </a>
        </div>
      </Popup>
    </Fragment>
  );
};
export default PopupComp;
