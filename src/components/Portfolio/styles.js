import styled from "styled-components"

export const Container = styled.section`
    margin-top: 15rem;
    h2{
        font-size:4rem;
        text-align:center;
        margin-bottom:10rem; 

        background: linear-gradient(
            45deg,
            #fb0094,
            #0000ff,
            #00ff00,
            #ffff00,
            #ff0000,
            #fb0094,
            #0000ff,
            #00ff00,
            #ffff00,
            #ff0000
        );
        background-size: 200% auto;
        
        color: #000;
        background-clip: text;
        text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        animation: shine 1s linear infinite;
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
      }
    }

    .projects{

        display:grid;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows:auto;
        gap:2rem;
        padding:1rem;
        overflow:hidden;
        padding: 2rem 5rem;
        
        @media (max-width:914px){
            grid-template-columns: repeat(2,1fr);

        }

        @media (max-width:914px){
            grid-template-columns: repeat(1,1fr);

        }
        .project{
            padding: 2rem;
            display:flex;
            flex-direction: column;
            background-color: #2b2b2b;
            border-radius:15px;
            transition-origin:center;
            transition: background .3s;

            &:hover{
                background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
            }

            header{
                display:flex;
                justify-content:space-between;
                color: var(--blue);
                margin-bottom: 3rem;
                
                .project-links{
                    width:50px;
                    height:50px;
                }
            }

            .body{
                margin-bottom:2rem;
                h3{
                    margin-bottom: 2rem;
                }
                
                p{
                    font-weight:500;
                    letter-spacing:0.12rem;
                }
            }

            footer{

                .tech-list{
                    display:flex;
                    opacity: 0.6;
                    gap:2rem;
                    flex-wrap:wrap;
                }
                
            }
        }
    }

`