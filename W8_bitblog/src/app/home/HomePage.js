import React from 'react';
import userService from '../../services/UserService';
import PostsList from './PostsList';

class HomePage extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            posts: []
        }
    }

    loadPosts() {
        userService.getPosts()
        .then((posts) => {
            this.setState({
                posts: posts,
            })
        })
    }

    componentDidMount () {
        this.loadPosts();
    }

    render () {
        return (
            <main>
                <h1> POSTS </h1>
                <PostsList posts = {this.state.posts}/>
              
            </main>
        )
    }
}

export default HomePage;