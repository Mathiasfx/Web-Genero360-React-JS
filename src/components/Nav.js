import React, { useEffect } from "react";
import { MenuContainer, MenuElement, Menu } from "../Styles/Main";
import Logo from "../images/logoGenero.png";
import { Link } from "react-scroll";

const Nav = () => {
  useEffect(() => {
    let nab = window.document.querySelector(".navbarr");
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        if (nab !== null) {
          nab.classList.add("fixed");
        }
      } else {
        if (nab !== null) {
          nab.classList.remove("fixed");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <MenuContainer className="navbarr">
      <div className="container">
        <div className="row">
          <Menu>
            <img src={Logo} alt="Logo Genero 360" width="180px" />
            <MenuElement>
              <li>
                <Link onClick={this} to="proposito" spy={true} smooth={true}>
                  Propósito
                </Link>
              </li>
              <li>
                <Link
                  onClick={this}
                  to="nuestroobjetivo"
                  spy={true}
                  smooth={true}
                >
                  Nuestro Objetivo
                </Link>
              </li>
              <li>
                <Link onClick={this} to="quehacemos" spy={true} smooth={true}>
                  Qué hacemos
                </Link>
              </li>
              <li>
                <Link onClick={this} to="programa" spy={true} smooth={true}>
                  Programa
                </Link>
              </li>
              <li>
                <Link onClick={this} to="contacto" spy={true} smooth={true}>
                  Contacto
                </Link>
              </li>
            </MenuElement>
          </Menu>
        </div>
      </div>
    </MenuContainer>
  );
};

export default Nav;
