import React from 'react';
import SingleAuthorService from '../../services/SingleAuthorService';
import SingleAuthorItem from './SingleAuthorItem';


class SingleAuthorPage extends React.Component {
    constructor (props) {
        super (props);
    
    this.state = {
        author : "",
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

    componentDidMount () {
        this.loadSingleAuthor();
    }


    render () {
        return (
            <main>
                <a > Back </a>
            
                <SingleAuthorItem author={this.state.author}/>
              
               
            </main>
        )
    }
}

export default SingleAuthorPage;
                
           
                
                    







