import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

    }
    countMale() {
        let numMale = 0;
        let numFemale = 0;
        for (let i = 0; i < this.props.users.length; i++) {
            if (this.props.users[i].gender == "male") {
                numMale += 1;
            }
        }
        return numMale;
    }


    render() {
        return (
            <span className="counter">Male:{this.countMale()} Female: {this.props.users.length - this.countMale()}</span>
        );
    }
}

export default Counter;