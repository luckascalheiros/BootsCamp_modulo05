import React from 'react';
import { Title } from './style';

function Main() {
    return (
        <Title error={false}>
            Main
            <input type="text" />
            <br />
            <input type="text" />
            <br />
            <button>Ativar</button>
        </Title>
    );
}

export default Main;
