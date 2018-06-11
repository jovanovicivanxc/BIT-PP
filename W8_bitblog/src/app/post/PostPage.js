import React from 'react';
import SinglePostService from '../../services/SinglePostService';
import MorePostsService from '../../services/MorePostsService';
import SinglePostItem from './SinglePostItem';
import MorePostsList from './MorePostsList';
import { Link } from 'react-router-dom';



class PostPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: "",
            morePosts: []
        }
    }

    loadSinglePost(id) {
        SinglePostService.getSinglePost(id)
            .then((post) => {
                this.setState({
                    post: post,
                })
                this.loadMorePosts(post.userId);
            })
    }

    loadMorePosts(id) {
        MorePostsService.getMorePosts(this.props.match.params.id)
            .then((morePosts) => {
                this.setState({
                    morePosts: morePosts,
                })
            })
    }

    componentDidMount() {
        this.loadSinglePost(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        this.loadSinglePost(nextProps.match.params.id);
    }

    render() {
        return (
            <main>
                <br />
                <br />
                <br />
                <br />
                <p className="back">
                    <Link to="/"> &#60; Back </Link>
                </p>

                <SinglePostItem post={this.state.post} />
                <hr />
                <div>
                    <h5> ({this.state.morePosts.length}) more posts from same author </h5>
                    <MorePostsList morePosts={this.state.morePosts} />

                </div>
            </main>
        )
    }
}

export default PostPage;











