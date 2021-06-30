import React from 'react';
import { MenuContainer, MenuElement, Menu } from '../Styles/Main';
import Logo from "../images/logoGenero.png"


const Nav = () => {
    return ( 
        <MenuContainer>      
          <div className="container">    
                <div className="row">  
                    <Menu>                            
                    <img src={Logo} alt="Logo Genero 360" width="180px" />
                        <MenuElement>
                            <li>Propósito</li>
                            <li>Qué hacemos</li>
                            <li>Programa</li>
                            <li>Contacto</li>       
                        </MenuElement>                
                    </Menu>
                </div>
            </div>
        </MenuContainer>
    );
}
 
export default Nav;