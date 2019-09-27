import React from 'react';
class TabsProto extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label
    };
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };
render( {
  const {
    onClickTabItem,
    props: { children },
    state: { activeTab }
  } = this;

  const TabsProto = ({
    label,
    type,
    disabled,
    buttonType,
    buttonSize,
    title,
    styles,
    children,
    testid
  }) => (
    label.map(() => {
      return(
        <Tab
          activeTab={activeTab}
          key={label}
          label={label}
          onClick={onClickTabItem}
        />
      )
    })
  )})
}
export default TabsProto;