import React from "react";
import { FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "react-native-elements";

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
              <Image style={styles.image} source={{ uri: item.imageUrl }} />
            </TouchableOpacity>
          );
        }}
      />
    );
  }
}

export { ListView };

const styles = StyleSheet.create({
  image: {
    flex: 1,
    margin: 5,
    minWidth: 180,
    maxWidth: 250,
    height: 304,
    maxHeight: 304
  }
});
