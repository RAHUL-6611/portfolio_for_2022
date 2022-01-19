import styled from "styled-components"

export const Container = styled.footer`
    // background-color: #2b2b2b;
    background: rgba(255,255,255,0);
    padding: 3rem 10rem;
    margin-top: 15rem;
    display:flex;
    justify-content:space-between;
    align-items:center;

    & p{
        display:flex;
        align-items:center;
            img{
                width:2.6rem;
                // height:25px;
                margin:0 5px;
                animation: spinning 5s infinite linear;
                
                @keyframes spinning {
                    0%{
                        transform: rotate(0);
                    }
                    100%{
                        transform: rotate(360deg);
                    }
                }
            }
            
            span{
                margin:0 5px;
            }

    }

    .social-media{
        a{
            img{
                width:30px;
                height:30px;
                margin:5px;

            }
        }
    }

    @media only screen and (max-width:900px){
        padding: 3rem 5rem; 
    }

    @media only screen and (max-width:720px){
        flex-direction:column;
        gap:1rem;

        p{
            flex-direction:column;

            img{
                width:80px;
            }
        }

    }

}



`