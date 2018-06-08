import React from 'react';
import AuthorsService from '../../services/AuthorsService';
import AuthorsList from './AuthorsList';

class AuthorsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authors: []
        }
    }

    loadAuthors() {
        AuthorsService.getAuthors()
            .then((authors) => {
                this.setState({
                    authors: authors,
                })
            })
    }

    componentDidMount() {
        this.loadAuthors();
    }


    render() {
        return (
            <main>
                <br />
                <br />
                <br />
                <br />
                <h2> Authors ({this.state.authors.length}) </h2>
                <br />

                <AuthorsList authors={this.state.authors} />

            </main>
        )
    }
}

export default AuthorsPage;
