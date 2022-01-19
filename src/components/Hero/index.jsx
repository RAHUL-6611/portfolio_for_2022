import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import {Container} from "./style"
import logo from "../../assets/rp4.png"
import { BrowserRouter } from "react-router-dom"
import { NavHashLink } from "react-router-hash-link"





const index = () => {
    
    function bounce(){
        const nm = document.querySelector(".namaste");
        console.log(nm);
        nm.classList.add("animate__animated");
        nm.classList.add("animate__bounce");
        
        setTimeout(() =>{
            nm.classList.remove("animate__animated");
            nm.classList.remove("animate__bounce");

        },1500);
    }
    return (
        <Container id="home">
            <div className="hero-text">
            <ScrollAnimation animateIn="fadeInUp">
            <div 
            className="namaste"
            onClick={()=> bounce()}>
                <h4>Namaste 🙏</h4>
            </div> 
                </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000}>
                <h2 >I'm Rahul Parmar!</h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.4*1000}>
                <h1>Full Stack Developer | BlockChain 💹 Researcher</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.8*1000}>
            <BrowserRouter>
              <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
            </BrowserRouter>
          </ScrollAnimation>
            </div>

            <div className="hero-image" >
            <ScrollAnimation animateIn="fadeInRight" delay={1*1000}>
                <img src={logo} alt="" className="hero-image-logo"/>
                <div className="hero-image-blur"/>
        </ScrollAnimation>
            </div>

        </Container>
    )
}

export default index
