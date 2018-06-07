import React from 'react';

class SingleAuthorPage extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <main>
                <a> &#60; Back </a>
                <div> <img/> <h1>Name Surname</h1> 
                <p> username: </p>
                <p> email: </p>
                <p> phone: </p>
                </div>

                <div> <img/> <h1>Address</h1> 
                <p> street: </p>
                <p> zip: </p>
                <p> zipcode: </p>
                </div>

                <div> <img/> <h1>Company</h1> 
                <p> name: </p>
                <p> slogan: </p>
                </div>
            </main>
        )
    }
}

export default SingleAuthorPage;
