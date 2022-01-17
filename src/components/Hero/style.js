import styled from "styled-components";

export const Container = styled.section`
    // padding-top: 15%;
    padding: 15% 7rem;
    display: flex;  
    flex-direction: row;
    justify-content: space-between;
    gap: 5rem;
    background: rgba(0,0,0,0);

    .hero-text{

        p{
            font-size: 1.8rem;
            margin-bottom:2rem;   
        }
        h2{
            font-size: 3rem;
            color: var(--green);
            margin-bottom:2.5rem;   

        }
        h1{
            font-size: 3rem;
            margin-bottom:5rem;

        }

        h4{
          font-size:4rem;
        }
    }

    .hero-image{
        margin-top:-4rem;
        display:flex;
        align-items: flex-start;
        justify-content: center;
    }

    @media(max-width: 960px){
        display: block;
        margin-top: 15%;
        .hero-text{
    
          h1{
              font-size: 4rem;
          }
        }
        
        .hero-image{
          display: none;
        }
      }

    .button{
        // margin-top: 5rem;
        padding: 1.4rem 6rem;
      }
    
    @media(max-width: 600px){
        margin-top: 25%;
      }
    @media(max-width: 480px){
        margin-top: 35%;
      }
      
    @media(max-width: 300px){
        padding: 15% 1rem;
      }


`