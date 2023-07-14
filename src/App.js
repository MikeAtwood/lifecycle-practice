import React, { Component } from 'react';
import Counter from './components/Counter';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mount: true,
      ignoreProp: 0
    }

    this.mountCounter = () => this.setState({mount: true})
    this.unmountCounter = () => this.setState({mount: false})

    this.ignoreProp = () => this.setState({ignoreProp: Math.random()})
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount Counter</button>
        <button onClick={this.ignoreProp}>Ignore Prop</button>
        {this.state.mount ? 
        <Counter ignoreProp={this.state.ignoreProp}
        /> 
        : null}
      </div>
    );
  }
}


export default App;
