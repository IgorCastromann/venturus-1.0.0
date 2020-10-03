import styled from 'styled-components'

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    background: white;
    border-radius: 10px 10px 0 0;
    
    padding: 10px 30px;
    border-bottom: 0.2px groove rgba(227, 218, 218, .5) ;

    h1{
        color: purple;
    }
`

export const BodyContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 0 20px;
    border-radius: 0 0 10px 10px;
    background: white;

    div{
        margin-top: 30px;

       strong{
           /* margin-left: 30px; */
       }    

    }

    ul{
        background: #ebebe6;
        width: 18vw;
        /* margin-left: 30px; */
        list-style-type:none;
        padding: 1px 3px 3px 3px;
        
        border-radius: 5px 5px 5px 5px;



        li{
            text-decoration: none;
            border-radius: 5px;
            height: 30px;
            background: white;
            font-size: 10px;
            color: black;
            margin-top: 3px;
            cursor: pointer;

            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px;

            h1{
                font-weight: 300;
            }
            h2{
                font-weight: 700;
            }

            
            &.selected{
                box-shadow:0px 0px 0px 1px #cc0066 inset;
            }
            &.notSelected{
                box-shadow:0px 0px 0px 0px red inset;

            }

            /* :hover{
                box-shadow:0px 0px 0px 1px red inset;
            } */

        }

        @media(max-width:900px){
            margin: 5px 0 5px 10px;
            min-width: 200px;
        
        }

    }
`