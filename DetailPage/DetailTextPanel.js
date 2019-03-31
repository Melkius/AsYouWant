import React from "react";
import { CustomLabel } from "./CustomLabel";
import { Divider } from "react-native-elements";
import { View, StyleSheet } from "react-native";

class DetailTextPanel extends React.Component {
  render() {
    const props = this.props;
    return (
      <View>
        <Divider style={styles.dividerTop} />
        <CustomLabel title={"Name :"} text={props.name} />
        <CustomLabel title={"Rarity :"} text={props.rarity} />
        <CustomLabel title={"Type :"} text={props.type} />
        <CustomLabel title={"Set :"} text={props.set} />
        <CustomLabel
          title={"Attribute(s) :"}
          text={props.attributes.reduce((acc, value) => acc + " " + value)}
        />
        <CustomLabel title={"Cost :"} text={props.cost} />
        <CustomLabel
          title={"Collectible :"}
          text={props.collectible.toString()}
        />
        <Divider style={styles.dividerBottom} />
      </View>
    );
  }
}

export { DetailTextPanel };

const styles = StyleSheet.create({
  dividerTop: { backgroundColor: "grey" },
  dividerBottom: { backgroundColor: "grey", marginBottom: 10 }
});
