import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import styles from "../Styles";

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
