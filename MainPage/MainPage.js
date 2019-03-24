import React from "react";
import { View } from "react-native";
import { CustomSearchBar } from "./CustomSearchBar";
import { ListView } from "./ListView";

class MainPage extends React.Component {
  render() {
    const props = this.props;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <CustomSearchBar
          handleSearchChange={props.handleSearchChange}
          value={props.search}
        />
        <ListView
          data={props.data}
          fetchTheApi={props.fetchTheApi}
          onDetail={props.onDetail}
        />
      </View>
    );
  }
}

export { MainPage };
