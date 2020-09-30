import styled from 'styled-components'


export const Header = styled.div`
    background: linear-gradient(to right, #cc0066 4%, #990099 92%);
    color: white;
    padding: 5px 50px;


    display: flex;
    align-items: center;
    justify-content: space-between;

    .leftHeader{
        display: flex;
        align-items: center;



        strong {
            margin-left: 30px;
            font-size: 700 bold;
        }

    }

    .rightHeader{
        display: flex;
        align-items: center;
        justify-content: center;

        img{
            height: 50px;
            width: 50px;
            border-radius: 50%;
            margin-left: 10px;
        }

        h2{
            font-weight: 500;
            font-size: 15px;
            margin: 0;
        }
    }

 
`