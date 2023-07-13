import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }

        this.increment = () => this.setState({ counter: this.state.counter + 1 })
        this.decrement = () => this.setState({ counter: this.state.counter - 1 })
    }
    render() {
        return (
            <div className="count">
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>   
                <div className="counter">
                    Counter: {this.state.counter}
                </div>
            </div>

        )
    }
}


export default Counter