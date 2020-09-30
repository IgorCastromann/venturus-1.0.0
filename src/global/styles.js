import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        background: #ebebe6;



    }
    :root{
        display: flex;
        flex-direction: column;
        
    }

    .body{
        display: flex;
        flex-direction: row;
        /* background: blue; */

        .bodyRight{
            margin-top: 40px;
            margin-left: auto;
            width: 45vw;
            margin-right: 30px;
            border-radius: 15px 15px 0 0;
            /* background: white; */
        }
    }


`
export default GlobalStyles