import { Container } from './styles'

import reactIcon from '../../assets/assets/react-icon.svg'
import linkedinIcon from '../../assets/assets/linkedin.png'
import githubIcon from '../../assets/assets/github.png'
import instagramIcon from '../../assets/assets/instagram.png'
import discordIcon from '../../assets/assets/discord.png'

import React from 'react'

const index = () => {
    return (
        <Container id="footer">
             <a href="/" className="logo">
        <span>R</span>
        <span>ahooooo</span>
        <span>L</span>
      </a>

      <div>
        <p>
          This site was made in react js <img src={reactIcon} alt="React" /> with 
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/jtsoares/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/joaotuliojt"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/tulio_joaob/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a
          href="https://discord.com/users/426120432991862784"
          target="_blank"
          rel="noreferrer"
        >
          <img src={discordIcon} alt="Discord" />
        </a>
      </div>
        </Container>
    )
}

export default index
