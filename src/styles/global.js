import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --pink: #E31F71;
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;
    scroll-padding-top: 10rem;

    &.light{

        body{
            transition:0.5s;
            background-color: #f5f5f5;
            color: var(--black);
        }

        .logo{
            color: var(--black);
        }
        
        header.header-fixed{
            transition: 0.5s;
            background-color : #f5f5f550;
            a{
                transition:0.5s;
                color: var(--black);       
            }
            .menu{
                background:#000;
    
                &:before,&:after{
                    background:#000;

                }

                &.active{
                    background-color: rgba(555,555,555,0);
                }
            }

        }
    }
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
    color:#fff;
}

html{
    font-size: 62.5%;
}


a{
    text-decoration:none;
}

.logo{
    // color:#fff;
    font-size:2rem;
    color: #fff;
    &::first-letter{
        font-size:4rem;
        color: var(--green);
        // padding-right: 6px;       
    }
    
    span:last-child{
        font-size:4rem;
        // padding-left: 6px;       
        color: var(--green);

    }
}

button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: #fff;
    border-radius:50px;

    &:hover{
        filter; brightness(0.8);
    }
}

button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor:not-allowed;
}

`