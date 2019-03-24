import React from "react";
import { Input } from "react-native-elements";

class CustomSearchBar extends React.Component {
  render() {
    const props = this.props;
    return (
      <Input
        placeholder=" Search your card here..."
        leftIcon={{ type: "font-awesome", name: "search" }}
        onChangeText={text => props.handleSearchChange(text)}
        value={props.search}
      />
    );
  }
}

export { CustomSearchBar };
