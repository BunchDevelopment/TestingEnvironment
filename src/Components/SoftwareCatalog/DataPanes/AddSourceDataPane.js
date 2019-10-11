import React from "react";
import * as Button from "../../Button/Button";

class AddSourceDataPane extends React.Component {
  render() {
    return (
      <div>
        <h1 className="MakeBradHappy">
          There is no Data Source linked to this product
        </h1>
        <div className="addSourceAbsolute">
          <Button.Success
            styles={{
              fontSize: "1.5em",
              padding: "0 7px",
              borderRadius: "50%",
              position: "relative"
            }}
          >
            <span className="testspan">&#43;</span>
          </Button.Success>
          <p className="addDataSource">Add Data Source</p>
        </div>
      </div>
    );
  }
}

export default AddSourceDataPane;
