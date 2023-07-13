import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    render() {
        return (
            <div className="counter">
                Counter: {this.state.counter}
            </div>
        )
    }
}


export default Counter