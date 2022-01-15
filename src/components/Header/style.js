import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    padding:2rem 10rem;
    justify-content: space-between;
    align-items: center;
    background-color: #21212150;
    backdrop-filter: blur(6px);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1000;

    input[type="checkbox"]{
        width: 0;
        height: 0;
        visibility: hidden;
        outline: none;
    }

    label{
        text-indent: -9999px;
        cursor:pointer;
        width: 55px;
        height: 30px;
        border-radius: 100px;
        -webkit-border-radius : 100px;
        background: var(--green);
        display: block;
        justify-content: center;
        align-items: center;
        position: relative;
        right:10px;
        margin-left:auto;
    }

    @media only screen and (max-width: 800px) {
        label {
        position: relative;
       }
    }

    label:after {
     content: '';
     background: #FFF;
     width: 20px;
     height: 20px;
     -webkit-border-radius: 50%;
     -moz-border-radius: 50%;
     border-radius: 50%;
     position: absolute;
     top: 5px;
     left: 4px;
    //  transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
    -webkit-transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    input:checked + label:after {
        left: calc(100% - 24px);
    }

    input:checked + label{
        background : var(--pink);
    }
    
    nav{
        display: flex;
        gap:1rem;
        align-items: center;
        a{
            color: #fff;
            padding: 0.6rem;
            font-family: 'Red Hat Display', sans-serif;
            font-weight: 500;
            text-transform: uppercase;
            transition: filter 0.25s;
            
            &:hover{
                filter : brightness(0.6);
            }
            &.button{
                padding: 0.6rem 4rem;
            }
        }
    }

    .menu{
        display:none;
        width:2rem;
        height:0.2rem;
        background: #fff;
        position: relative;
        cursor:pointer;

        &:before{
            top:0.5rem;
        }
        &:after{
            bottom:0.5rem;
        }
    }
    
    .menu:before,.menu:after{
        content:'';
        position:absolute;
        width:100%;
        height:0.2rem;
        background : #fff;
        cursor: pointer;
        transition : .6s;
    }
    
    .menu.active{
        background : none;
    }
    
    .menu.active:before{
        top:0;
        transform : rotate(45deg);
    }
    .menu.active:after{
        bottom:0;
        transform : rotate(135deg);

    }

    @media (max-width: 960px){
        padding: 1rem 3rem;
        align-items: center;

        .button{
            margin-top:1rem;
            background: var(--pink);
        }
        nav{
            visibility: hidden;
            display:none;
            flex-direction: column;
        }

        .menu{
            display:block;
            z-index:1111111111;
        }

        nav{
            width: 100vw;
            height: 100vh;
            background: var(--green);
            display: flex;
            flex-direction: column;
            justify-content:center;
            gap:1rem;
            color: #fff;
            position:absolute;
            top: 0;
            left: 0;
            z-index: 100;
            opacity:0;
            visibility: hidden;
            transition : opacity 0.65s;
            transform-origin: top;


            &.active{
                opacity:1; 
                visibility: visible;
            }
    }
    }    




`