import React from 'react';
import { Link } from 'react-router-dom';
import NewPostService from '../../services/NewPostService';


class NewPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputTitle: "",
            inputContent: "",
        };
        this.handleTitleInput = this.handleTitleInput.bind(this);
        this.handleContentInput = this.handleContentInput.bind(this);
    }

    submitData() {
        NewPostService.postNewPost(this.state.inputTitle, this.state.inputContent);
    }

    handleTitleInput(event) {
        this.setState({
            inputTitle: event.target.value
        })
    }

    handleContentInput(event) {
        this.setState({
            inputContent: event.target.value
        })
    }

    render() {
        return (
            <main>
                <br /><br /><br /><br />
                <h2> NEW POST </h2>
                <form>
                    <p> Title </p>
                    <input type="text" value={this.state.inputTitle} onChange={this.handleTitleInput} placeholder="Post title" />
                    <br />
                    <br />

                    <p> Content </p>
                    <textarea rows="4" cols="50" value={this.state.inputContent} onChange={this.handleContentInput} />
                    <br />

                    <Link to={`/`}> <input type="button" value="Cancel" /> </Link>
                    <input type="button" value="Save" onClick={this.submitData} />
                </form>
            </main>

        )
    }
}

export default NewPost;
