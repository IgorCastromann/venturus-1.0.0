import styled from 'styled-components'

import backgroundImg from '../../../assets/fieldBackground.png'

export const Content = styled.div`
    background: url(${backgroundImg}) no-repeat center;
    background-size: cover;
    max-height: 45vh;
    min-height: 26vh;
    /* padding: 10px 30px; */
    margin-top: 3vh;

    border-radius: 10px 10px 0 0;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    
    h1{
        margin: 0;

    }
    p{
        margin: 0;
        padding: 0;
        width: 50px;
        border-bottom: 1px solid white;
        font-weight: bold;
    }

    img{
        border-radius: 50%;
    }
    .image{
        display: flex;

    }

    .left{
        padding: 20px;
        margin-right: 80px;
        /* height: 100%; */


        .image{
            margin-top: 10px;
            margin-left: 20px;

        }

    }
    .right{
        /* height: 100%; */
        .image{
            margin-top: 10px;
            margin-left: 20px;
        }

    }
`