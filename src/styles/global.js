//style global
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;/* Largira fixa */

    }

html, body, #root {
    min-height: 100%; /*Faz o layout ocupar toda a pagina */
}

body {
    background: #7159c1;
    -webkit-font-smoothing: antialiased !important; /* Feixa as fontes com definição */

}

body, input, button {
    color:#222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
}

button{
    /*cursor: pointer;*/
}

`;
