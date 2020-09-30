import styled from 'styled-components'

export const Content = styled.div`
    background: white;
    max-width: 45vw;
    margin: 40px 0 0 50px;
    border-radius: 10px 10px 0 0;
    

    max-height: 87vh;
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
    padding: 10px 30px;

    border-radius: 5px;
    border-bottom: 0.2px groove rgba(227, 218, 218, .5) ;


    .nameSelect{
        width: 10vw;
        border: none;
        height: 30px;
        border-right: 0.2px groove rgba(227, 218, 218, .5);

      
    }

    .descriptionSelect{
        margin-left: 20px;
        height: 30px;


        border: none;
        width: 40vw;
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
    }

    .tooltiptext{
        /* visibility: hidden; */
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


    .delete,
    .share,
    .edit{
        &:hover {
            color: blue;

        }
    }
    /* .tooltiptext{
                visibility: hidden;

            } */
`
