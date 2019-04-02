import React from "react";
import { FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import styles from "../Styles";

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
