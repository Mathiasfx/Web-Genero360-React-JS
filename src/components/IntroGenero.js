import React from 'react';
import {SectionIntroGenero} from "../Styles/Main"
import PersonasImg from "../images/person-02.png";


const IntroGenero = () => {
    return ( 
        <SectionIntroGenero>
            <div className="container">
        <div className="row justify-content-center align-items-center">
        <div className="col-md-6 col-sm-12 persona">
            <img  src={PersonasImg} alt="personas" />
          </div>
          <div className="col-md-6 col-sm-12 titulo">
            <h4>
              Desarrollando y fortaleciendo el liderazgo de niñas y adolescentes
            </h4>
          </div>

        </div>
        </div>

        </SectionIntroGenero>
     );
}
 
export default IntroGenero;