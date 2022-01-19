import React from 'react'
import { Container } from "./styles"
import githubIcon from "../../assets/assets/github-icon.svg"
import externalLinkIcon from "../../assets/assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";

const ProjectCard =({title, subtitle,techlist, deploy,gitlink, deploylink})=>(
  <ScrollAnimation animateIn="flipInX">
                <div className="project">
                    <header>
                    <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                 
                    <div className="project-links">
                      <a href={gitlink} target="_blank" rel="noreferrer">
                        <img src={githubIcon} alt="GitHub" />
                      </a>
                      
                      {deploy ? (<a target="_blank" href="https://cryptopunk-nftminter.netlify.app/" rel="noreferrer">
                        <img src={externalLinkIcon} alt="alt" />
                      </a>):""}
                    
                    </div>
                    </header>
                <div className="body">
                <h3>{title}</h3>
                <p>{subtitle}
                </p>
                </div>
              <footer>
                <ul className="tech-list">
                  {
                    techlist.map((list,i)=>(
                      <li key={i}>{list}</li>
                      ))
                    }
                </ul>
            </footer>
                </div>
            </ScrollAnimation>
)
const index = () => {
    return (
        <Container id="portfolio">
            <h2>My Recent Projects</h2>
            <div className="projects">
              <ProjectCard 
                title="Video Calling App" 
                subtitle="Created a video calling app in react native , using the vox-implant sdk and api,
                fast and easy to use user interface similar to google meet" 
                techlist={['React Native','Vox implant sdk','Js',"Material UI"]}
                gitlink={"https://github.com/rahul-6611/videoCallingApp"}
                // deploylink={"https://cryptopunk-nftminter.netlify.app/"}
                // deploy
                />
              <ProjectCard 
                title="Crypto Punk NFT minter" 
                subtitle="Created a marketplace for my community to mint Nfts and displayed it using React as a frontend. opensea api has been used to fetch all the nfts" 
                techlist={['React','Js',"Styled components","opensea api"]}
                gitlink={"https://github.com/RAHUL-6611/CryptoPunk"}
                deploylink={"https://cryptopunk-nftminter.netlify.app/"}
                deploy
                />
              <ProjectCard 
                title="Bike GPS Tracker App" 
                subtitle="Created frontend for a bike Gps tracker system using react native , app is still in development phase, my contribution was in frontend" 
                techlist={['React Native','Js',"Material UI","api"]}
                gitlink={"https://github.com/RAHUL-6611/Avenger-bike-lovers-app"}
                // deploylink={"https://cryptopunk-nftminter.netlify.app/"}
                // deploy
                />
              <ProjectCard 
                title="Travel_duniya" 
                subtitle="Created a full stack application as an online travel advisor which helps you to find restaurants, hotels and attraction on your current location, its fast and user friendly " 
                techlist={['React Js','Js',"Material UI","Google map api"]}
                gitlink={"https://github.com/RAHUL-6611/Travel_duniya"}
                deploylink={"https://duniyaghumo.netlify.app/"}
                deploy
                />
              <ProjectCard 
                title="Desi_dukan" 
                subtitle="One of my initial full stack application as an online ecommerce website ,contains all features including payment and cms system " 
                techlist={['React Js',"Commerce Js","Stripe","Material ui","emotion"]}
                // gitlink={"https://github.com/RAHUL-6611/Travel_duniya"}
                // deploylink={"https://duniyaghumo.netlify.app/"}
                // deploy
                />
              <ProjectCard 
                title="Worlwide_Recipe_finder" 
                subtitle="Build a personal recipe finder website for my mom to search recipe from any country ,recently taken down due to api expiration " 
                techlist={['React Js',"js","api"]}
                // gitlink={"https://github.com/RAHUL-6611/Travel_duniya"}
                // deploylink={"https://duniyaghumo.netlify.app/"}
                // deploy
                />
            {/* <ScrollAnimation animateIn="flipInX">
                <div className="project">
                    <header>
                    <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    <div className="project-links">
                      <a href="https://github.com/joaotuliojt/github-search" target="_blank" rel="noreferrer">
                        <img src={githubIcon} alt="GitHub" />
                      </a>
                    </div>
                    </header>
            <div className="body">
              <h3>Github Searcher</h3>
              <p>Uma versão mais agradável para ver seu perfil do GitHub, inclui visualização de dados , repositórios, compartilhamento entre outros.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Styled Components</li>
              </ul>
            </footer>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="flipInX">
                <div className="project">
                    <header>
                    <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    <div className="project-links">
                      <a href="https://github.com/joaotuliojt/github-search" target="_blank" rel="noreferrer">
                        <img src={githubIcon} alt="GitHub" />
                      </a>
                    </div>
                    </header>
            <div className="body">
              <h3>Github Searcher</h3>
              <p>Uma versão mais agradável para ver seu perfil do GitHub, inclui visualização de dados , repositórios, compartilhamento entre outros.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Styled Components</li>
              </ul>
            </footer>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="flipInX">
                <div className="project">
                    <header>
                    <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    <div className="project-links">
                      <a href="https://github.com/joaotuliojt/github-search" target="_blank" rel="noreferrer">
                        <img src={githubIcon} alt="GitHub" />
                      </a>
                    </div>
                    </header>
            <div className="body">
              <h3>Github Searcher</h3>
              <p>Uma versão mais agradável para ver seu perfil do GitHub, inclui visualização de dados , repositórios, compartilhamento entre outros.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Styled Components</li>
              </ul>
            </footer>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="flipInX">
                <div className="project">
                    <header>
                    <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    <div className="project-links">
                      <a href="https://github.com/joaotuliojt/github-search" target="_blank" rel="noreferrer">
                        <img src={githubIcon} alt="GitHub" />
                      </a>
                    </div>
                    </header>
            <div className="body">
              <h3>Github Searcher</h3>
              <p>Uma versão mais agradável para ver seu perfil do GitHub, inclui visualização de dados , repositórios, compartilhamento entre outros.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Styled Components</li>
              </ul>
            </footer>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="flipInX">
                <div className="project">
                    <header>
                    <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    <div className="project-links">
                      <a href="https://github.com/joaotuliojt/github-search" target="_blank" rel="noreferrer">
                        <img src={githubIcon} alt="GitHub" />
                      </a>
                    </div>
                    </header>
            <div className="body">
              <h3>Github Searcher</h3>
              <p>Uma versão mais agradável para ver seu perfil do GitHub, inclui visualização de dados , repositórios, compartilhamento entre outros.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Styled Components</li>
              </ul>
            </footer>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="flipInX">
                <div className="project">
                    <header>
                    <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    <div className="project-links">
                      <a href="https://github.com/joaotuliojt/github-search" target="_blank" rel="noreferrer">
                        <img src={githubIcon} alt="GitHub" />
                      </a>
                    </div>
                    </header>
                                <div className="body">
              <h3>Github Searcher</h3>
              <p>Uma versão mais agradável para ver seu perfil do GitHub, inclui visualização de dados , repositórios, compartilhamento entre outros.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Styled Components</li>
              </ul>
            </footer>
                </div>
            </ScrollAnimation> */}
            </div>
        </Container>
    )
}

export default index