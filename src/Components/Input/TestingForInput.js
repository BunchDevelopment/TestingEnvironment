import React from "react";
import { Success } from "../Button/Button";

class Input extends React.Component {
  state = {
    text: ""
  };
  render() {
    const { submitForm } = this.props;
    const { text } = this.state;

    return (
      <form
        data-testid="input-form"
        onSubmit={() =>
          submitForm({
            text
          })
        }
      >
        <label htmlFor="text">
          text
          <input
            type="text"
            id="text"
            onChange={e => this.setState({ text: e.target.value })}
          />
        </label>
        <Success>Submit</Success>
      </form>
    );
  }
}

export default Input;
