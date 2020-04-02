import React, { Component } from 'react';
import { Container, Form, SubmitButton } from './style';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import api from '../../services/api';

class Main extends Component {
    state = {
        newRepo: '',
        repositories: [],
        loading: false
    };

    inputChange = event => {
        this.setState({
            newRepo: event.target.value
        });
    };

    setRepo = async event => {
        event.preventDefault();

        const { newRepo, repositories } = this.state;

        if (newRepo.length === 0) {
            return false;
        }

        this.setState({ loading: true });

        const response = await api.get(`/repos/${newRepo}`);

        const data = {
            name: response.data.full_name
        };

        this.setState({
            repositories: [...repositories, data],
            newRepo: '',
            loading: false
        });

        console.log(this.state.repo);
    };

    render() {
        const { newRepo, loading } = this.state;

        return (
            <Container>
                <h1>
                    <FaGithubAlt />
                    Repositórios
                </h1>

                <Form onSubmit={this.setRepo}>
                    <input
                        type="text"
                        placeholder="Adicionar repositório"
                        onChange={this.inputChange}
                        value={newRepo}
                    />
                    <SubmitButton load={loading}>
                        {loading ? (
                            <FaSpinner color="#FFF" size={14} />
                        ) : (
                            <FaPlus color="#FFF" size={14} />
                        )}
                    </SubmitButton>
                </Form>
            </Container>
        );
    }
}
export default Main;
