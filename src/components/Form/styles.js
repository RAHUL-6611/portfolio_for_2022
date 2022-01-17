import styled from "styled-components"

export const Container = styled.div`
    margin-top:10rem;
    display:grid;
    place-items:center;
    h1{
        text-align:center;
        margin-bottom:2rem;
    }
    form{
        width:100%;
        display:flex;
        flex-direction:column;
        text-align:center;
        align-items:center;
        gap:1rem;

        input,textarea{
            width:40%;
            padding:1rem 2rem;
            border-radius:20px;
            border:none;
            background:none;
            outline:none;
            border: 1px solid #fff;
            color:#fff;
            font-weight:600;
            &::placeholder{
                color:#fff;
                font-weight:600;
            }
            
            @media (max-width: 1125px) {
                width:60%;
            }
            @media (max-width: 600px) {
                width:80%;
            }
        }

        textarea {
            height: 20rem;
            overflow-y: auto;
            resize: none;
            padding:2rem 2rem;
        }

        button{
            padding:1rem 6rem;
            text-transform: uppercase;
        }
    }
`
export const ContainerSuccess = styled.div`
    margin-top:10rem;
    display:grid;
    place-items:center;

    button{
        margin-top:1rem;
        padding: 1rem 3rem;
    }
    
    
`