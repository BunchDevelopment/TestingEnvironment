import React from "react";
import { Primary } from "./Button";

//Created to create a button to test state and incrementing state with  button
class TestingButton extends React.Component {
  state = {
    count: 0
  };

  count = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <>
        {/* <Primary testid="testOne" buttonSize="medium" onClick={this.count}>
          {count}
        </Primary>
        <Primary testid="test2" buttonSize="medium" onClick={this.count}>
          {count}
        </Primary> */}
      </>
    );
  }
}

export default TestingButton;
