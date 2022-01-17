import React from 'react'
import {Container} from './style'
import resume from "./CV_JoaoTulio.pdf"
import { BrowserRouter as Router} from "react-router-dom"
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState} from 'react'


const index = () => {
    const [isActive, setIsActive] = useState(false);

    function toggleTheme(){
        const html = document.getElementsByTagName('html')[0]
        html.classList.toggle("light");
    }

    function closedMenu(){
        setIsActive(false);
    }
    return (
        <Container className="header-fixed">
            <Router>
                <HashLink smooth to="#home" className="logo">
                    <span>R</span>
                    <span>ah</span>
                    <span>oo</span>
                    <span>L</span>
                </HashLink>

                <input 
                    onChange={toggleTheme}
                    type="checkbox" 
                    name="mode" 
                    id="switch"
                    className="container_toggle"
                />
                <label htmlFor='switch'>Toggle</label>

                <nav className={isActive ? "active" : ""}>
                    <NavHashLink smooth to="#home" onClick={closedMenu}>
                        Home
                    </NavHashLink>
                    <NavHashLink smooth to="#about" onClick={closedMenu}>
                        About me
                    </NavHashLink>
                    <NavHashLink smooth to="#portfolio" onClick={closedMenu}>
                        PortFolio
                    </NavHashLink>
                    <NavHashLink smooth to="#contact" onClick={closedMenu}>
                        Contact Me
                    </NavHashLink>
                    <a href={resume} download className="button">CV</a>
                </nav>

                <div 
                    className={isActive ? "menu active" : "menu"}
                    onClick={()=> { 
                        setIsActive(!isActive);
                    }}
                    // aria-label={isActive ? "Fechar menu" : "Barr menu"}
                    >
                </div>

            </Router>
        </Container>
    )
}

export default index
