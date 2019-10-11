import React from "react";
import Portal from "../../Components/utils/Portal/Portal";
import "./Modal.css";
import Icon from "../../Components/utils/Icon";

class Modal extends React.Component {
  render() {
    const { children, toggle, on } = this.props;

    return (
      <Portal>
        {on && (
          <div className="ModalWrapper">
            <div className="ModalCard">
              <button className="CloseButton" onClick={toggle}>
                <Icon name="close" />
              </button>
              {children}
            </div>
            <div className="ModalBackdrop" onClick={toggle} />
          </div>
        )}
      </Portal>
    );
  }
}
export default Modal;
