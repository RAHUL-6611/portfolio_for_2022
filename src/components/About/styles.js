import styled from "styled-components";

export const Container = styled.section`
    background: rgba(0,0,0,0);
    display: flex;
    justify-content: space-between;
    gap:15rem;
    padding: 10% 10%;

    .left{
        z-index:10;
        font-family:'Red Hat Display', sans-serif;
        line-height:35px;
        h1{
            font-size:4rem;
            margin-bottom:6rem;
        }
        
        .details{
            font-size:2rem;
            font-weight:800;
            
        }

        .hard-skills{
            display:flex;
            flex-wrap:wrap;

            .hability{
                padding:1rem;
                img{
                    width:50px;
                    
                }
            }
        }

        .current{
            position: relative;
            width:fit-content;
            font-size:2rem;
            font-weight:800;
            &:before{
                z-index:-1;
                position: absolute;
                content:"";
                top:19px;
                left:-10px;
                width:105%;
                height:15px;
                background : #8FBC8F;


            }
            // padding: 10px 20px;
            // border-radius: 30px;
        }
    }
    .right{
        width: 100vw;
        display:flex;

        .profilephoto{
            max-width:500px;
            max-height:600px;
            width:400px;
            height:550px;
            border-radius:3% 97% 4% 96% / 89% 3% 97% 11% ; 
            background: linear-gradient(0deg, #000, #262626);
            transform: scale(0.8);
            transition: transform 3.8s ease;
            transition: box-shadow .8s ease;
            -webkit-box-shadow:-1px -2px 35px 15px #00ffbf ;
            -moz-box-shadow:-1px -2px 35px 15px #00ffbf ;
            box-shadow:-1px -2px 35px 15px #00ffbf ;
            
            
            &:hover
            {     transform: scale(1);
                box-shadow:-1px -2px 35px 1115px #00ffbf ;
            }


            @media (max-width:700px){
                width:300px;
                height:450px;
            }
        }
    }
    
    

@media (max-width:1000px){
    padding: 25% 5%;


}    
@media (max-width: 800px){
    padding: 35% 5%;
    flex-direction:column;
    gap:8rem;

    .right{
        justify-content:center;
        align-items:center;

        img{
            transform: translateX(-15px);

        }
    }
    }

    }


`