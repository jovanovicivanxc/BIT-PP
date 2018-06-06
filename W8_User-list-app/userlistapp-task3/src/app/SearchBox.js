import React, { Component } from 'react';
import searchImg from '../search.png'


class SearchBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: ""
        };

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        console.log(event.target.value);

        this.props.searcher(event.target.value);

        this.setState({
            inputText: event.target.value
        })
    }

    render() {
        return (
            <div  >
                <img src={searchImg} className="searchButton" alt='button' />
                <input className="searchBox" type="text" value={this.state.inputText} onChange={this.handleInput} placeholder="search users" />
            </div>
        );
    }
}

export default SearchBox;