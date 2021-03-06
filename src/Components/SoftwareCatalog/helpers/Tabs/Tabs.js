import React from "react";
import Tab from "./Tab";
import "./Tabs.css";

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label
    };
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab }
    } = this;
    return (
      <div className="tabs">
        <ol className='tab-list'>
          {children.map(child => {
            const { label } = child.props;
            console.log(child.props)

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
                hasData={child.props.data}
                
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map(child => {
            if (child.props.label !== activeTab) return undefined;
            return child;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
