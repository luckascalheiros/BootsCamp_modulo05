import React, { Component } from 'react';
import api from '../../services/api';
import PropTypes from 'prop-types';
import { Loading, Quadrado, Owner, IssuesList } from './styles';
import { FaSpinner } from 'react-icons/fa';
import Container from '../../Components/Container';
import { Link } from 'react-router-dom';

export default class Repository extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                repository: PropTypes.string
            }).isRequired
        })
    };

    state = {
        repo: {},
        issues: [],
        load: true
    };

    async componentDidMount() {
        const { match } = this.props;
        const repoName = decodeURIComponent(match.params.repository);

        const [repo, issues] = await Promise.all([
            api.get(`/repos/${repoName}`),
            api.get(`/repos/${repoName}/issues`, {
                params: {
                    state: 'open',
                    per_page: 5
                }
            })
        ]);

        this.setState({
            repo: repo.data,
            issues: issues.data,
            load: false
        });
    }

    render() {
        const { load, repo, issues } = this.state;

        if (load) {
            return (
                <Loading>
                    <Quadrado>
                        <FaSpinner size={'30px'}></FaSpinner>
                    </Quadrado>
                </Loading>
            );
        }

        return (
            <Container>
                <Owner>
                    <Link to="/">Voltar aos repositórios</Link>
                    <img src={repo.owner.avatar_url} alt={repo.owner.login} />
                    <h1>{repo.name}</h1>
                    <p>{repo.description}</p>
                    <div></div>
                </Owner>
                <IssuesList>
                    {issues.map((issue, index) => (
                        <li key={String(index)}>
                            <img
                                src={issue.user.avatar_url}
                                alt={issue.user.login}
                            />
                            <div>
                                <strong>
                                    <a href={issue.html_url}>{issue.title}</a>

                                    {issue.labels.map((index, issue) => (
                                        <span key={String(index)}>
                                            {issue.name}
                                        </span>
                                    ))}
                                </strong>
                                <p>{issue.user.login}</p>
                            </div>
                        </li>
                    ))}
                </IssuesList>
            </Container>
        );
    }
}
