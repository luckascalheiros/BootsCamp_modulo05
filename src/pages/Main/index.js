import React from 'react';
import { Container, Form, SubmitButton } from './style';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';

function Main() {
    return (
        <Container>
            <h1>
                <FaGithubAlt />
                Repositórios
            </h1>

            <Form onSubmit={() => {}}>
                <input type="text" placeholder="Adicionar repositório" />
                <SubmitButton desable>
                    <FaPlus color="#FFF" size={14} />
                </SubmitButton>
            </Form>
        </Container>
    );
}

export default Main;
