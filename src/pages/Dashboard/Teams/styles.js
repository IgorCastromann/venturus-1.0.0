import styled from 'styled-components'

export const Content = styled.div`
    background: white;
    max-width: 45vw;
    margin: 40px 0 0 50px;
    border-radius: 10px 10px 10px 10px;
    
    max-height: 85vh;

    @media(max-width:900px){
        margin:30px 0 0 0;
        padding: 0;

        min-width: 500px;

        .descriptionSelect{
            min-width: 375px
        }

        .nameSelect{
            min-width: 70px;
        }
    }
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
export const SearchOrder = styled.div`
    background: white;
    display: flex;
    align-items: center;
    padding: 5px;

    border: none;
    height: 60px;
    padding: 10px 10px 10px 30px;

    border-radius: 5px;
    border-bottom: 0.2px groove rgba(227, 218, 218, .5) ;


    .nameSelect{
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 15vw;
        border: none;
        height: 30px;
        border-right: 0.2px groove rgba(227, 218, 218, .5);
    }

    .descriptionSelect{
        margin-left: 20px;
        height: 30px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        border: none;
        width: 40vw;
    }

    .divSort{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        margin: 0;
        padding: 0;
        
        svg{
            margin: 0;
            padding: 0;
            width: 15px;
            height: 10px;
            cursor: pointer;

        }
    }
`

export const BodyContent = styled.div`
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px 0 30px;

    border-radius: 5px;
    border-bottom: 0.2px groove rgba(227, 218, 218, .5) ;


   .squad{
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-between;
        margin-right: -10px;;
    }

    h2{
        margin-right: 25px;
        font-size: 15px;
        width: 90px;


    }

    h3{
            margin-right: 0;
            font-size: 15px;

    }

    div{
        margin-right: 10px;
        svg{
            margin-right: 5px;
        }
    }

    &:hover{
        background: rgba(186, 82, 177, 0.2);

        color: #990099;
        .actions{
            visibility: visible;
        }
    }

    .tooltiptext{
        visibility: hidden;
    width: 70px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    margin-top: -30px;
    margin-left:-20px;
    z-index: 1;

    }

    .actions{
        margin: 0;
        display: flex;
        visibility: hidden;
    }

    .delete,
    .share,
    .edit,
    .tooltip{
        margin:0 1px 0 0;

        :hover {

            .tooltiptext{
                visibility: visible;
            }
        }
    }

`
