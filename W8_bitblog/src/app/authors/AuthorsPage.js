import React from 'react';

class AuthorsPage extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <main>
                <h1> Authors (6) </h1>
                <ul>
                    <li> Name Surname </li>
                    <li> Name Surname </li>
                    <li> Name Surname </li>
                    <li> Name Surname </li>
                    <li> Name Surname </li>
                </ul>
            </main>
        )
    }
}

export default AuthorsPage;
