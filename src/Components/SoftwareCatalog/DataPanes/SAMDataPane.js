import React from 'react';
import * as Button from "../../Button/Button"

class SAMDataPane extends React.Component {
  render() {
    return (
      <>
        <div >
          <p><strong>Publisher:</strong> {this.props.data.vender}</p>
        </div>
        <div >
          <p><strong>Name:</strong> {this.props.data.name}</p>
        </div>
        <div >
          <p><strong>Version:</strong> {this.props.data.version}</p>
        </div>
        <div >
          <p><strong>Data 1:</strong> {this.props.data.data1}</p>
        </div>
        <div >
          <p><strong>Data 2:</strong> {this.props.data.data2}</p>
        </div>
        <div >
          <p><strong>Data 3:</strong> {this.props.data.data3}</p>
        </div>
        <Button.Primary buttonSize="medium" styles={{position: 'absolute', bottom: '5vh', right: '5vw'}}>More Details</Button.Primary>
      </>
    );
  }
}

export default SAMDataPane;