import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
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

        color: #7159c1;

        svg {
            /* margem a direita */
            margin-right: 10px;
            size: 30px;
        }
    }
`;
export const Form = styled.form`
    /* margem em cima */
    margin-top: 20px;
    display: flex;
    flex-direction: row;

    input {
        /* Fax prencer todo o container onde o input está */
        flex: 1;
        border: 1px solid #ccc;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
    }
`;

//animação
const rotate = keyframes`
 /* estado inicial do obedo da animação */
 from {
    transform: rotate(0deg);

/* estado final */
 }
 to {
    transform: rotate(360deg);

 }
 `;

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.load
}))`
    background: #7159c1;
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 4px;

    display: flex;
    /* justificar conteudo */
    justify-content: center;
    align-items: center;

    &[disabled] {
        opacity: 0.6;
    }

    /* if de apenas uma ação se vdd css ecxecuta um codigo css */
    ${props =>
        props.load &&
        css`
            svg {
                animation: ${rotate} 2s linear infinite;
            }
        `}
`;

export const List = styled.ul`
    padding: 10px 30px;
    list-style: none;
    margin-top: 30px;
    border: 1px solid #eee;
    border-radius: 10px;

    li {
        padding: 20px 0;

        display: flex;
        flex-direction: row;

        /* Justifica total os objetos */
        justify-content: space-between;
        align-items: center;

        & + li {
            border-top: 1px solid #eee;
        }
    }

    a {
        color: #7159c1;
        /* retira marcação soblinhada do link */
        text-decoration: none;
    }
`;
