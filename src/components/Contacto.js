import React from "react";
import { SeccionContacto } from "../Styles/Main";
import emailjs from "emailjs-com";

const Contacto = () => {
  function EnviarEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jfj3zm8",
        "template_5msonjh",
        e.target,
        "user_GSkYhFOr0BzDFtR96DB4F"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensaje Enviado");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <SeccionContacto>
      <div className="container mt-5 mb-5" id="contacto">
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <h3>Contacto</h3>
            <form className="Formulario-contacto" onSubmit={EnviarEmail}>
              <input
                type="text"
                name="nombre"
                className="form-control field"
                placeholder="Nombre y Apellido"
              />
              <input
                type="text"
                name="email"
                className="form-control field"
                placeholder="Correo Electronico"
              />
              <input
                type="number"
                name="telefono"
                className="form-control field"
                placeholder="Teléfono"
              />
              <textarea
                name="mensaje"
                className="form-control  field"
                rows="10"
                placeholder="Mensaje"
              ></textarea>
              <button type="submit" className="btnenviar">
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      </div>
    </SeccionContacto>
  );
};

export default Contacto;
