import React from "react";

class Toggle extends React.Component {
  state = {
    on: false
  };
  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    return (
      <div>
        {this.state.on && this.props.children}
        <button onClick={this.toggle}>Show/Hide</button>
      </div>
    );
  }
}

export default Toggle;
