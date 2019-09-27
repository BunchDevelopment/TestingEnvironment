import React from "react";
import "./hoverModal.css";

class HoverModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  render() {
    return (
      <div
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        {this.props.displayedContent}
        {this.state.isHovering && (
          <div className="hoverModal">{this.props.modalContent}</div>
        )}
      </div>
    );
  }
}

export default HoverModal;
