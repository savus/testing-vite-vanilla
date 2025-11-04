import { Component } from "react";

export class CountSection extends Component {
  state = {
    count: 0,
  };

  render() {
    const { count } = this.state;

    const increment = () => {
      this.setState({ count: count + 1 });
    };

    const decrement = () => {
      this.setState({ count: count - 1 });
    };

    return (
      <>
        <div>The count is : {count}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </>
    );
  }
}
