import styled from "styled-components";
import FondoGenero from "../images/bg-genero-02.png";
import Mundo from "../images/mundo.png";
import Chicas from "../images/chicas.png";
import Ninas from "../images/bgninas-04.png";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "768px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

export const MenuContainer = styled.div`
  background-color: #eeeeee;
  box-shadow: 0px 2px 8px rgba(146, 153, 186, 0.8);
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  @media ${device.mobileL} {
    & img {
      width: 90px;
    }
  }
`;

export const MenuElement = styled.ul`
  display: flex;
  text-decoration: none;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  width: 100%;

  @media ${device.mobileL} {
    display: none;
  }

  & li {
    margin: 1rem;
    font-size: 1.2rem;
    color: #474793;
    cursor: pointer;
    position: relative;
  }

  & li:after {
    background: none repeat scroll 0 0 transparent;
    bottom: -60px;
    content: "";
    display: block;
    height: 5px;
    left: 50%;
    position: absolute;
    background: #474793;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  & li:hover:after {
    width: 50%;
    left: 23%;
  }

  & a {
    text-decoration: none;
    color: none;
  }
`;

export const SectionConcurso = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: #fff;
  min-height: 300px;
  color: black;
  text-align: center;
  text-justify: inter-word;
  & p {
    font-size: 1.2rem;
    padding-right: 1.8rem;
  }
  & img {
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    max-width: 360px;
  }

  @media ${device.mobileL} {
    align-items: center;
    justify-content: center;
    text-align: color-interpolation-filters;

    & img {
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
    }

    & p {
      font-size: 14px;
    }
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

  @media ${device.mobileL} {
    height: 400px !important;
    align-items: center;
    & .titulo {
      margin-top: -80px !important;
    }
    & img {
      position: relative;
      bottom: 130px;
      max-height: 330px !important;
    }
  }

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
  display: flex;
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
  @media ${device.mobileL} {
    align-items: center;
    justify-content: center;
    text-align: color-interpolation-filters;
    & .letra {
      margin-bottom: 2.5rem;
      align-items: center;
      justify-content: center;
    }
    & .proposito {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & img {
      align-items: center;
      justify-content: center;
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

  @media ${device.mobileL} {
    background-size: auto 220px;
    background-position: 0% 100%;
    height: 550px;
    align-items: flex-start;
    justify-content: center;
    padding-top: 1rem;
    text-align: center;

    & .tituloimg {
      margin-left: 0px;
    }
  }
`;

export const SeccionQueHacemos = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 420px;

  & .separador {
    border-right: solid;
    border-width: 3px;
    border-color: orange;
    min-height: 140px;
    padding: 1rem;
  }

  & .separadorsin {
    min-height: 140px;
    padding: 1rem;
  }

  @media ${device.mobileL} {
    & .separador {
      border: none;
    }
  }
`;

export const SeccionNuestrosProgramas = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 420px;
  background-color: #333472;
  color: #fff;

  & .textoprograma {
    color: #73c3b3;
  }
  & .imglogo {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 180px;
    text-align: center;
  }
  & .tituloPrograma {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 180px;
    text-align: left;
  }

  @media ${device.mobileL} {
    padding-bottom: 3rem;
    & .tituloPrograma {
      text-align: center;
      justify-content: center;
    }
  }
`;

export const SeccionFutbolPar = styled.section`
  display: flex;
  min-height: 420px;
  color: #fff;
  & .bgchicas {
    width: 100%;
    background-image: url(${Chicas});
    background-repeat: no-repeat;
    background-size: cover;
  }
  & .Flecha {
    position: relative;
    top: -30px;
  }

  @media ${device.mobileL} {
    & .bgchicas {
      background-size: 200% 100%;
    }
  }
`;

export const SeccionFutbolDes = styled.section`
  margin-top: 40px;
  display: flex;
  height: 380px;
  color: #fff;
  background-color: #ee7332;
  @media ${device.mobileL} {
    height: 700px;
    margin-top: 0px;
  }
`;

export const SeccionNinasTect = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  background-color: #de3c69;
  min-height: 840px;
  color: #fff;
  & .bgninas {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 420px;
    background-image: url(${Ninas});
    background-repeat: no-repeat;
    background-position: center 40%;
    & img {
      width: 300px;
    }
  }
  & .imgninas {
    position: relative;
    top: -80px;
  }

  @media ${device.mobileL} {
    & .bgninas {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 300px;
    }
    & .imgninas {
      top: 0px;
    }
  }
`;

export const SeccionFrase = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 320px;
  margin-top: 2rem;
  & .imgfrase {
    width: 480px;
    position: absolute;
    z-index: 2;
    margin-bottom: 5rem;
  }

  & .piedefoto {
    background-color: #73c3b3;
    height: 8rem;
  }

  @media ${device.mobileL} {
    & .imgfrase {
      width: 280px !important;
      margin-bottom: -2rem;
    }
  }
`;

export const SeccionFooter = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #474793;
  min-height: 380px;
  color: #fff;
  text-align: right;
  margin-top: 4rem;

  & .listinfo {
    list-style: none;
  }

  @media ${device.mobileL} {
    text-align: center !important;

    & .cont {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      margin: 0 auto;
    }

    & .listinfo {
      text-align: center;
      margin-top: 1rem;
    }

    & ul {
      padding: 0 !important;
    }
  }
`;

export const SeccionContacto = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 420px;

  & h3 {
          color: #474793;
          margin-left: 1rem;
  }


  & .Formulario-contacto {
    padding: 1rem;
    color:#999;
    font-size: 0.8em;

     
       




    & input {
      width: 100%;
      height:3rem;
      box-sizing: border-box;
      background   : rgba(0,0,0,.1);
      border-radius: 5px;
      outline      : none;
      margin-bottom: 1rem;

      & .field{
        padding:10px;
      }
        &.field:focus {
        outline: none;
               border: 1px solid #474793;
        box-shadow: 0px 0px 2px red;
    }

     

  }
   & input[type=submit] {
     margin-top:1rem;
      width:300px !important;
      height:3rem;
      box-sizing: border-box;
      background-color: #474793;
      border-radius: 5px;
      outline      : none;
     
  }
  & textarea{
        width: 100%;
    height: 300px;
      font-size: 1rem;

    box-sizing: border-box;
    background   : rgba(0,0,0,.1);
    border-radius: 5px;
    outline      : none;

    & .field{
        padding:10px;
         font-size: 0.8em;
      }
        &.field:focus {
        outline: none;
               border: 1px solid #474793;
        box-shadow: 0px 0px 2px red;
    }

  }

  & .btnenviar{
margin-top: 1rem;
background-color: #73c3b3;
    border-radius: 10px;
    display:inline-block;
    padding: 20px 15px;
    text-decoration: none;
    text-shadow: 0 1px 0 rgba(255,255,255,0.3);
    box-shadow: 0 1px 0 rgba(0,0,0,.3);
    border:0;
    color: #fff;
    width:200px;
  }
`;
