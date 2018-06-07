import React from 'react';

class PostPage extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <main>
                <a >&#60; Back </a>
                <h1> Post title 1 </h1>
                <a> Author Name </a>

                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reiciendis, non voluptatem nulla quaerat soluta commodi, quisquam cumque, numquam quas optio molestias tempora exercitationem possimus iusto laboriosam beatae impedit nesciunt.
                </p>
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
                
           
                
                    







