import styled from "styled-components"

export const Container = styled.section`
        margin-top:20rem;

        header{
                text-align:center;

                h1{
                        font-size:4rem;
                }
                p{
                        color: var(--green);
                        font-weight:600;
                }
        }

        .contacts{
                display:flex;
                justify-content:center;
                align-items:center;
                gap:1rem;
                margin-top:6rem;
                
                & > div{
                        width:50%;
                        max-width:40rem;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        background:var(--green);
                        padding:0.6rem 4rem;
                        border-radius:20px;

                        img{
                                width:40px;
                                height:40px;
                                margin:10px 20px;
                        }

                        a{
                                text-decoration:none;
                                color:#000;
                        }
                }

                @media (max-width:831px){
                        flex-direction:column;

                        & > div{
                                width:80%;
                                padding: 3rem 2rem;
                                flex-direction:column;
                        }
                }
        }

        

`