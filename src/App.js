import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <h1 className={this.state.count >= 6 ? 'warning' : null}>
          Count: {this.state.count}
        </h1>
        <button onClick={e => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
        <button onClick={e => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
      </div>
    );
  }
}

export default hot(module)(App);
