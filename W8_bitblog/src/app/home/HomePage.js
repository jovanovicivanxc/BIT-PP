import React from 'react';

class HomePage extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <main>
                <h1> POSTS </h1>
                <div> <h2> Title 1 </h2> 
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit... </p>
                </div>

                <div> <h2> Title 2 </h2> 
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit... </p>
                </div>

                 <div> <h2> Title 3 </h2> 
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit... </p>
                </div>

                 <div> <h2> Title 4 </h2> 
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit... </p>
                </div>
            </main>
        )
    }
}

export default HomePage;