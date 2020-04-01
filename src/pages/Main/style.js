import styled from 'styled-components';

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
export const SubmitButton = styled.button.attrs({
    type: 'submit'
})`
    background: #7159c1;
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 4px;

    display: flex;
    /* justificar conteudo */
    justify-content: center;
    align-items: center;
`;
