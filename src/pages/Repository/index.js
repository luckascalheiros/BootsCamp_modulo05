import React, { Component } from 'react';
import api from '../../services/api';
import PropTypes from 'prop-types';
// import { Container } from './styles';

export default class Repository extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                repository: PropTypes.string
            }).isRequired
        })
    };

    state = {
        user: [],
        laod: true
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

        const user = {
            repo: repo.data,
            issues: issues.data
        };

        this.setState({
            user: user,
            laod: false
        });

        console.log(this.state.user);
    }

    render() {
        return <h1>Repository</h1>;
    }
}
