import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggled: props.isInitiallyToggled || false
    };
  }

  toggle = () => {
    this.setState(
      state => ({ isToggled: !state.isToggled }),
      () => this.props.onChange && this.props.onChange(this.state.isToggled)
    );
  };

  render() {
    const renderValue = {
      isToggled: this.state.isToggled,
      toggle: this.toggle
    };

    return this.props.children(renderValue);
  }
}

export default Toggle;
