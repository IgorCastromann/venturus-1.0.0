import styled from 'styled-components'

import fieldImg from '../../assets/fieldBackground2.png'

export const Content = styled.div`
    background: white;
    width: 90vw;
    height: 85vh;
    margin: 30px 30px 0 30px;
    border-radius: 15px;

`

export const HeaderContent = styled.div`
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;


    padding: 10px 30px;
    border-radius: 15px 15px 0 0;
    border-bottom: 0.2px groove rgba(227, 218, 218, .5) ;

    h1{
        font-size: 25px;
        color: purple;
    }
`

export const BodyContent = styled.section`
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;

    .inputDescription{
        width: 60vw;
        height: 15vh;
    }


    .teamInformation{

        align-items: center;
        justify-content: center;

        gap: 40px;

        .left{
            input{
                width: 60vw;
            }

        }
    }


    .tagsArea{

        display: flex;
        align-items: flex-start;

        padding: 20px 0;
        
        border: 1px solid #999;
        border-radius: 5px;


        height: 7vh;
        width: 70vw;


        ul{
            display: flex;
            align-items: center;
            padding: 0 5px;
            margin: 0;
            
            list-style-type:none;

            li{
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 12.5px;



                background: #cc0066;

                padding: 1px 3px;
                border-radius: 20px;

                margin-left: 0;
                margin-right:10px;
            }
        }
        input{
            border: none;
            margin-left: 5px;



            :focus-within{
                outline: transparent;
            }
        }

        @media(min-width: 600px){
            width: 35vw;
        }

    }

    strong{
        color: #b5b1a8;
    }

    .strongSquad{
        margin-top:30px;
    }

    .configureSquad{
        padding: 30px;
        align-items: center;
        justify-content: center;


        select{
            margin-left: 30px;
        }
    }

    .right{

        .teamWeb{
            width: 97%
        }
    }


    
    @media(min-width: 600px){
        display: flex;
        flex-direction: column;

        .teamInformation{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 0 30px;

            width: 0vw;

            gap: 80px;


            .left{
                margin: 0;     
                input{
                    padding: 5px;
                    width: 30vw;
                    border: 1px solid #999;
                    border-radius: 5px;

                }

                .inputDescription{
                    resize: none;

                    border: 1px solid #999;
                    border-radius: 5px; 

                    margin-bottom: -10px;
                    width: 98%;
                    height: 25.5vh;
                }
            }

            .right{
                width: auto;

                .teamWeb{
                    max-width: 100%;
                    border: 1px solid #999;
                    border-radius: 5px;

                    padding: 5px;
                }

            }
        }



        .configureSquad{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        width: 100%;

        padding: 30px;

        gap: 50px;

        .left{
            width: auto;
            strong{
                color: black;
            }    
        }

            .right{
                width: auto;
                h1{
                    margin-top: 0;
                }
                p{
                    word-break: unset;
                    width: fit-content;
                }
                input{
                    width: 35vw;
                }
            }
        }
    }
    }

    

`

export const RoundCheck = styled.input`
    margin: 0;

    outline: transparent;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    border-color: purple;
    background: white;
    border: 1px solid #999;
    cursor: pointer;
    border-radius: 50%;
    width: 16px;
    height: 16px;

    :checked {
        border: inset white;
        background: #cc0066;
    }




`
export const TeamType = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    
    .roundCheckDiv{
        align-items: center;
        justify-content: center;
        display: flex;
    }

        label{
            color: #999;
            margin-left: 10px;
            margin-right: 20px;
            cursor: pointer;
 

        }

        .selected{
            color: #cc0066;
        }
        .notselected{
            color: #999;
        }
`

export const Field = styled.section`
    background: url(${fieldImg}) no-repeat center;
    background-size: cover;
    
    min-width: 60vw;
    height: 55vh;

    margin-top: 15px;
    border-radius: 5px;

    @media(min-width: 600px){
        min-width: 35vw;
        min-height: 70vh;
        /* max-width: 40vw; */
    }
`

export const Button = styled.button`
    width: 100%;
    height: 30px;
    margin-top: 20px;
    cursor: pointer;
    outline: transparent;
    background: linear-gradient(to right, #cc0066 4%, #990099 92%);
    
    border: white;
`

export const Results = styled.div`
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;

    height: 45px;

    background: linear-gradient(to bottom, #ffffff 0%, #ebebe6 100%);
    padding: 15px;
    margin-top: 20px;
    border-radius: 5px;
    border: 0.2px groove rgba(227, 218, 218, .5) ;



    p{
        color: red;
        font-size: 15px 300;
    }
    h1{
        font-weight: 700 bold;
        font-size: 15px;
        margin: 0;
        line-height: 1px;
    }

    h2{
        font-weight: 700 bold;
        font-size: 15px;
        margin: 0;
        line-height: 1px;

    }
    
    .line1{
        display: flex;
        align-items: center;
        justify-content: space-between;


        p{
            margin-left: 15px;
        }
        
        h2{
            margin-left: 70px;
            margin: 0;
            line-height: 1px;

        }

    }

    .line2{
        display: flex;
        align-items: center;
        align-self: left;
        line-height: 0;
        
        p{
            margin-left: 15px;
        }
    }


    @media(min-width:600px){
        /* min-width: 35vw; */
        max-width: 40vw;
        height: 25px;
        margin-top: 5px;

        p{
            font-size: 10px;
        }
        h1{
            font-size: 10px;
        }
        h2{
            font-weight: 700 bold;
            font-size: 10px;

        }
    }
`

export const F = styled.div`
    display: flex;
    align-items: center;

`
export const S = styled.div`
    display: flex;
    align-items: center;
    
`