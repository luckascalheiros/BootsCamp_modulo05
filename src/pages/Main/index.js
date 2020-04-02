import React, { Component } from 'react';
import { Container, Form, SubmitButton, List } from './style';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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

    //carrega dados assim que a pagina abre
    componentDidMount() {
        const repositores = localStorage.getItem('repositores');
        if (repositores) {
            this.setState({
                repositories: JSON.parse(repositores)
            });
        }
    }

    //salva dados do local storage - testa a diferença do estaodo atual para o estado anterior
    componentDidUpdate(_, prevState) {
        const { repositories } = this.state;
        if (prevState.repositores !== repositories) {
            localStorage.setItem('repositores', JSON.stringify(repositories));
        }
    }

    setRepo = async event => {
        event.preventDefault();

        const { newRepo, repositories } = this.state;

        if (newRepo.length === 0) {
            return false;
        }

        this.setState({ loading: true });

        const response = await api.get(`/repos/${newRepo}`);

        const { full_name, url } = response.data;

        const data = {
            name: full_name,
            url: url
        };

        this.setState({
            repositories: [...repositories, data],
            newRepo: '',
            loading: false
        });

        console.log(this.state.repo);
    };

    render() {
        const { newRepo, loading, repositories } = this.state;

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

                <List>
                    {repositories.map((item, index) => (
                        <li key={index}>
                            <span>{item.name}</span>
                            <Link
                                to={`/repository/${encodeURIComponent(
                                    item.name
                                )}`}
                            >
                                Detalhes
                            </Link>
                        </li>
                    ))}
                </List>
            </Container>
        );
    }
}
export default Main;
