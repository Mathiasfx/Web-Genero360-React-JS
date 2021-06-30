import styled from "styled-components";
import FondoGenero from "../images/bg-genero-02.png";
import Mundo from "../images/mundo.png";

export const MenuContainer = styled.div`
  background-color: #eeeeee;
  box-shadow: 0px 2px 8px rgba(146, 153, 186, 0.8);
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const MenuElement = styled.ul`
  display: flex;
  text-decoration: none;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  width: 100%;

  & li {
    margin: 1rem;
    font-size: 1.2rem;
    color: #474793;
    cursor: pointer;
  }
`;

export const SectionIntroGenero = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #474793;
  margin-top: 140px;
  padding-bottom: 130px;
  color: #fff;
  height: 300px !important;
  width: 100%;
  background-image: url(${FondoGenero});
  background-position: center 40%;
  background-repeat: no-repeat;

  & img {
    position: relative;
    bottom: 130px;
    max-height: 430px;
  }

  & .titulo {
    margin-top: -210px;
  }
`;

export const SectionNuestroProposito = styled.section`
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: #de3c69;
  min-height: 300px;
  color: #fff;
  text-align: justify;
  text-justify: inter-word;
  & p {
    font-size: 1.2rem;
    padding-right: 1.8rem;
  }
  & .letra {
    margin-bottom: 8rem;
  }
  & .proposito {
    padding: 0 !important;
    justify-content: flex-end;
    align-items: flex-end;
    & img {
      max-height: 350px;
    }
  }
`;

export const SectionNuestroObjetivo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #72c3b3;
  color: #fff;
  min-height: 420px;
  text-align: left;
  background-image: url(${Mundo});
  background-repeat: no-repeat;
  background-size: auto 420px;
  margin-bottom: 2rem;

  & p {
    font-size: 1.2rem;
    max-width: 580px;
  }

  & .tituloimg {
    margin-left: -2rem;
  }
`;

export const SeccionQueHacemos = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 420px;
`;
