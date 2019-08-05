import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

const Warning = React.lazy(() => import('./Warning')); // we may never see this warning message, so why load it until we need it?

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
        <h1 className={this.state.count >= 5 ? 'warning' : null}>
          Count: {this.state.count}
        </h1>
        <button onClick={e => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
        <button onClick={e => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
        {this.state.count >= 5 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    );
  }
}

export default hot(module)(App);
