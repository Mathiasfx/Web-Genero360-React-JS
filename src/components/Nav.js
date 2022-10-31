import React, { Fragment, useEffect } from "react";
import { MenuContainer, MenuElement, Menu } from "../Styles/Main";
import Logo from "../images/logoGenero.png";
import { Link } from "react-scroll";

import { Link as RouterLink, useLocation } from "react-router-dom";

const Nav = () => {
  const urlocation = useLocation();
  const url = urlocation.pathname;
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
    compararURL(url);
  }, [url]);

  const compararURL = (url) => {
    if (url !== "/concurso360" && url !== "/novedades") {
      return (
        <Fragment>
          <li>
            <Link
              onClick={this}
              to="proposito"
              spy={true}
              smooth={true}
              ignoreCancelEvents={true}
            >
              Propósito
            </Link>
          </li>
          <li>
            <Link onClick={this} to="nuestroobjetivo" spy={true} smooth={true}>
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
          <li className="link60">
            <RouterLink to="/concurso360">Concurso</RouterLink>
          </li>
          <li>
            <Link onClick={this} to="contacto" spy={true} smooth={true}>
              Contacto
            </Link>
          </li>

          <li className="link60">
            <RouterLink to="/novedades">Novedades</RouterLink>
          </li>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <li className="link60">
            <RouterLink to="/">Propósito</RouterLink>
          </li>

          <li className="link60">
            <RouterLink to="/">Nuestro Objetivo</RouterLink>
          </li>

          <li className="link60">
            <RouterLink to="/"> Qué hacemos</RouterLink>
          </li>

          <li className="link60">
            <RouterLink to="/"> Programa</RouterLink>
          </li>

          <li className="link60">
            <RouterLink to="/concurso360">Concurso</RouterLink>
          </li>
          <li className="link60">
            <RouterLink to="/">Contacto</RouterLink>
          </li>
          <li className="link60">
            <RouterLink>Novedades</RouterLink>
          </li>
        </Fragment>
      );
    }
  };

  return (
    <MenuContainer className="navbarr">
      <div className="container">
        <div className="row">
          <Menu>
            <RouterLink to="/">
              <img src={Logo} alt="Logo Genero 360" width="180px" />
            </RouterLink>
            <MenuElement>{compararURL(url)}</MenuElement>
          </Menu>
        </div>
      </div>
    </MenuContainer>
  );
};

export default Nav;
//
