import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }

  render() {
    return (
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold mb-4">Class Counter</h2>
        <p className="text-lg mb-2">Count: {this.state.count}</p>
        <button onClick={this.decrement} className="px-3 py-1 bg-red-500 text-white rounded mr-2">-</button>
        <button onClick={this.increment} className="px-3 py-1 bg-green-500 text-white rounded">+</button>
      </div>
    );
  }
}

export default CounterClass;
