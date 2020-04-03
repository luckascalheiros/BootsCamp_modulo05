import styled from 'styled-components';

const Container = styled.div`
    /* Largira maxima */
    max-width: 700px;
    /* cor de fundo */
    background: #fff;
    /* Arredonda mento de borda */
    border-radius: 4px;
    /* sombra: x y tamanho rgbtransparencia(r,g,b,alfa) */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    /* espaçamento interno */
    padding: 30px;
    /* margem 80px em cima e em baixo e auto nas laterais para centralizar automárico */
    margin: 80px auto;

    h1 {
        /* tamanho da font */
        font-size: 22px;
        /* tranforma o pbjeto em um display variavel*/
        display: flex;
        /* define a orientação para os itens do display column ou row para se alinharem entre si */
        flex-direction: row;
        /* alinhamento dos itens, sem isso os itens ajustam para o mesmo comprimeito ou largura*/
        align-items: center;

        /* color: #7159c1; */

        svg {
            /* margem a direita */
            margin-right: 10px;
            size: 30px;
        }
    }
`;

export default Container;
