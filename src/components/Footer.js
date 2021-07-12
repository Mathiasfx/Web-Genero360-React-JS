import React from "react";
import { SeccionFooter } from "../Styles/Main";
import LogoBlanco from "../images/logoGeneroBlanco.png";
import linkedin from "../images/linkedin-03.png";
import instagram from "../images/instagram-03.png";
import facebook from "../images/facebook-03.png";
import twitter from "../images/twitter-03.png";
import contactoInfo from "../images/contactoinfo-03.png";

const Footer = () => {
  return (
    <SeccionFooter>
      <div className="container">
        <div className="row h-100 text-center">
          <div className="col-md-4 col-sm-12">
            <img src={LogoBlanco} alt="Logo Genero 360 Blanco" width="60%" />
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="d-flex justify-content-center align-items-center h-100">
              <img src={linkedin} alt="linkedin" height="50px" />
              <img src={instagram} alt="Instagram" height="50px" />
              <img src={facebook} alt="Facebook" height="50px" />
              <img src={twitter} alt="Twitter" height="50px" />
            </div>
          </div>
          <div className="col-md-4 col-sm-12 h-100 cont">
            <img src={contactoInfo} alt="info de contacto" height="50px" />
            <ul className="listinfo">
              <li>info@fundaciongenero360.org</li>
              <li>www.fundaciongenero360.org</li>
              <li>Buenos Aires - Argentina</li>
            </ul>
          </div>
        </div>
      </div>
    </SeccionFooter>
  );
};

export default Footer;
