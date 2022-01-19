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
          href="https://www.linkedin.com/in/rahul-parmar-7b52a71a0/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/rahul-6611"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/_rahulparmar_23002/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a
          href="https://discord.gg/9VW9wHBH6z"
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
