import React from 'react';
import SinglePostService from '../../services/SinglePostService';
import SinglePostItem from './SinglePostItem';


class PostPage extends React.Component {
    constructor (props) {
        super (props);
    
    this.state = {
        post : "",
     }
    }

    loadSinglePost() {
        SinglePostService.getSinglePost(this.props.match.params.id)
         .then((post) => {
            this.setState({
              post: post,
        })
    })
    }

    componentDidMount () {
        this.loadSinglePost();
    }


    render () {
        return (
            <main>
                <a > Back </a>
            
                <SinglePostItem post={this.state.post}/>
                <hr/>
                <div>
                    <h3> 3 more posts from same author </h3>
                <a> Title 10 - velit, vulitate </a>
                <a> Title 11 - velit, vulitate </a>
                <a> Title 12 - velit, vulitate </a>
                </div>
            </main>
        )
    }
}

export default PostPage;
                
           
                
                    







