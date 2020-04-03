import styled, { keyframes } from 'styled-components';

export const Loading = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const rotate = keyframes`

    from{
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
`;

export const Owner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        color: #7159c1;
        font-size: 16px;
        text-decoration: none;
    }

    img {
        width: 120px;
        border-radius: 100px;
        margin-top: 10px;
    }

    h1 {
        margin-top: 10px;
        font-size: 24px;
    }

    p {
        margin-top: 5px;
        font-size: 14px;
        color: #666;
        /* espaçamento entre lihas */
        line-height: 1.4;
        text-align: center;
        /* tamanho máximo */
        max-width: 400px;
    }

    div {
        margin-top: 20px;
        width: 450px;
        height: 2px;
        background: #7159c1;
        border-radius: 80px;
    }
`;

export const Quadrado = styled.div`
    width: 100px;
    height: 100px;
    background: #fff;
    opacity: 0.7;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
        color: #7159c1;
        animation: ${rotate} 1s infinite linear;
    }
`;

export const IssuesList = styled.ul`
    padding-top: 30px;
    list-style: none;

    li {
        transition: all 1s;
        display: flex;
        align-items: center;
        padding: 15px 10px;
        border: solid 1px #ddd;
        border-radius: 4px;

        & + li {
            margin-top: 10px;
        }

        &:hover {
            background: #f3efff;
        }
    }

    img {
        width: 50px;
        margin-right: 10px;
        border-radius: 100px;
        border: 2px solid #eee;
    }

    div {
        flex: 1;

        strong {
            font-size: 14px;
        }

        a {
            transition: all 1s;
            text-decoration: none;
            max-width: 10px;
            color: #333;

            &:hover {
                color: #7159c1;
            }
        }

        span {
            background: #eee;
            color: #333;
            border-radius: 2px;
            font-size: 12px;
            font-weight: 600;
            height: 20px;
            padding: 3px 4px;
            margin-left: 10px;
        }
    }

    p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
    }
`;
