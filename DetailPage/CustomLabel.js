import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

class CustomLabel extends React.Component {
  render() {
    return (
      <View style={styles.labelContainer}>
        <Text h1 h1Style={styles.h1}>
          {this.props.title}
        </Text>
        <Text style={styles.description}>{this.props.text}</Text>
      </View>
    );
  }
}

export { CustomLabel };

const styles = StyleSheet.create({
  labelContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  h1: {
    fontSize: 16,
    textShadowColor: "#807053",
    textShadowOffset: { width: 0.8, height: 0.8 },
    padding: 4
  },
  description: { padding: 4 }
});
