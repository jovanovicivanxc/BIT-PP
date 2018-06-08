import React from 'react';
import SingleAuthorService from '../../services/SingleAuthorService';
import SingleAuthorItem from './SingleAuthorItem';
import { Link } from 'react-router-dom';



class SingleAuthorPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            author: "",
        }
    }

    loadSingleAuthor() {
        SingleAuthorService.getSingleAuthor(this.props.match.params.id)
            .then((author) => {
                this.setState({
                    author: author,
                })
            })
    }

    componentDidMount() {
        this.loadSingleAuthor();
    }


    render() {
        return (
            <main>
                <br />
                <br />
                <br />
                <br />
                <p className="back">
                    <Link to="/AuthorsPage"> &#60; Back </Link>
                </p>
                {this.state.author ? <SingleAuthorItem author={this.state.author} /> : this.loadSingleAuthor()}


            </main>
        )
    }
}

export default SingleAuthorPage;











