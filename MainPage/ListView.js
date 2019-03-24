import React from "react";
import { FlatList, Image, TouchableOpacity } from "react-native";

class ListView extends React.Component {
  render() {
    const props = this.props;
    return (
      <FlatList
        numColumns="2"
        showsVerticalScrollIndicator
        data={props.data}
        onEndReached={props.fetchTheApi}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => props.onDetail(item)} key={index}>
              <Image
                style={{
                  flex: 1,
                  margin: 5,
                  minWidth: 180,
                  maxWidth: 250,
                  height: 304,
                  maxHeight: 304
                }}
                source={{ uri: item.imageUrl }}
              />
            </TouchableOpacity>
          );
        }}
      />
    );
  }
}

export { ListView };
