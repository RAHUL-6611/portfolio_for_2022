import styled from "styled-components";

export const Container = styled.section`
    // padding: 0 7rem;
    // padding-top:10%;
    // padding-bottom:15%;
    padding: 10% 5rem 15% 7rem;
    display: flex;  
    flex-direction: row;
    justify-content: space-around;
    gap: 1rem;
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

        @media (min-width: 768px){
          padding-left:4rem; 
          padding-top:8rem;
        }
    }

    .hero-image{
        // margin-top:-6rem;
        display:flex;
        align-items: flex-start;
        justify-content: center;

        .hero-image-logo{
          width:650px;
          height:650px;

        }

        @media (max-width: 568px){
          .hero-image-logo{
            width:450px;
            height:450px;
            }
        }

    .hero-image-blur{
      &::after{
        content:"";
        position:absolute;
        width:80%;
        bottom:0px;
        left:50px;
        height:60px;
        background: var(--green);
  }
    }
  }
    }


    @media(max-width: 960px){
        // display: block;
        flex-direction: column;
        margin-top: 15%;
        .hero-text{
    
          h1{
              font-size: 4rem;
          }
        }
      }

    .button{
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