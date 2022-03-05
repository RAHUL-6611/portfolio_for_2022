import React from 'react'
import {Container} from "./styles"
import myprofile from "../../assets/Shaadis.jpg"
import ScrollAnimation from 'react-animate-on-scroll'

// import profileImage from "../../assets/assets/profile-image.jpg"
import cssIcon from "../../assets/assets/css-icon.svg";
import htmlIcon from "../../assets/assets/html-icon.svg";
import jsIcon from "../../assets/assets/js-icon.svg";
import nodeIcon from "../../assets/assets/node-icon.svg";
import reactIcon from "../../assets/assets/react-icon.svg";
import typescriptIcon from "../../assets/assets/typescript-icon.svg";
// import vueIcon from "../../assets/assets/vue-icon.svg";


const index = () => {
    return (
        <Container id="about">
            <div className="left">
                <ScrollAnimation animateIn="fadeInLeft">
                    <h1>About me 🖐</h1>
                </ScrollAnimation>
                
                <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
                    <p className="details">
                      I'm 20 years old Full Stack developer from pune, India.
                      Working on react / react native past 1.2 years. currently learning decentralization / Blockchain.
                                        </p>
        </ScrollAnimation>
        {/* <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}> */}
        <ScrollAnimation animateIn="flipInX"  style={{marginTop: "2rem", marginBottom: "2rem"}}>
          <p className="current">Currently learning polygon network 💠 and Next js</p>
        {/* </ScrollAnimation> */}
        </ScrollAnimation>
        {/* <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>

          <p>Sou uma pessoa dedicada que corre atrás para realizar seus sonhos, trabalhador e orientado a resultados, sempre busco alcançar minha melhor versão.</p>
        </ScrollAnimation> */}

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3 className="animate__animated animate__shakeX">Here are my main skills: </h3>
        </ScrollAnimation>
        <div className="hard-skills">

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

     
          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}> 
            <img src={jsIcon} alt="JavaScript" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}> 
            <img src={htmlIcon} alt="Html" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}> 
            <img src={cssIcon} alt="Css" />
          </ScrollAnimation>
          </div>
          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> 
            <img src={nodeIcon} alt="Node" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
            <img src={typescriptIcon} alt="Typescript" />
          </ScrollAnimation>
          </div>

          </div>

     </div>     
            <div className="right">
             <ScrollAnimation animateIn="fadeInRight" delay={0.6*1000}>
                <img src={myprofile} alt="" className="profilephoto"/>
                 </ScrollAnimation>   
            </div>
        </Container>
    )
}

export default index
