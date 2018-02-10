import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }
  handleMultiply = () => {
    this.setState({ count: this.state.count * 5 });
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Click Count!</div>
        <div className="panel-body text-center">
          <p>Click Count: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button>
          <button className="btn btn-primary" onClick={this.handleDecrement}>
            Decrement
          </button>
          <button className="btn btn-primary" onClick={this.handleMultiply}>
            Multiply by 5!
          </button>
        </div>
      </div>

    );
  }
}

export default Counter;
