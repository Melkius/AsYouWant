import React from "react";
import { Input } from "react-native-elements";

class CustomSearchBar extends React.Component {
  render() {
    const props = this.props;
    if (props.clearIt === true) {
      this.textInput.clear();
      props.resetClear();
    }
    return (
      <Input
        ref={input => {
          this.textInput = input;
        }}
        placeholder=" Search your card here..."
        leftIcon={{ type: "font-awesome", name: "search" }}
        onChangeText={text => props.handleSearchChange(text)}
        value={props.search}
        placeholderTextColor={"#B0C4DE"}
        returnKeyType={"search"}
        selectionColor={"#C0C0C0"}
        selectTextOnFocus={true}
      />
    );
  }
}

export { CustomSearchBar };
