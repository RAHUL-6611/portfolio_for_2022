import styled from "styled-components";

export const Container = styled.section`
    // padding-top: 15%;
    padding: 15% 7rem;
    display: flex;  
    flex-direction: row;
    justify-content: space-between;
    gap: 5rem;
    background: #000;

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

        }
    }

    .hero-image{
        margin-top:-4rem;
        display:flex;
        align-items: flex-start;
        justify-content: center;
    }

`