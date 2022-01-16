import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import {Container} from "./style"
import me from "../../assets/svg/character5.svg"

const index = () => {
    return (
        <Container id="home">
            <div className="hero-text">
            <ScrollAnimation animateIn="fadeInUp">
                <p>Namaste 🙏</p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000}>
                <h2 className="animate__animated animate__rubberBand animate__delay-2s">I'm Rahul Parmar!</h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.4*1000}>
                <h1>Full Stack Developer | BlockChain 💹 Researcher</h1>
            </ScrollAnimation>
            </div>

            <div className="hero-image animate__animated animate__heartBeat" >
                <img src={me} alt="" width={500} height={500}/>
            </div>
        </Container>
    )
}

export default index
