import React from "react";
import { CustomLabel } from "./CustomLabel";
import { Divider } from "react-native-elements";
import { View } from "react-native";
import styles from "../Styles";

class DetailTextPanel extends React.Component {
  render() {
    const props = this.props;
    return (
      <View>
        <Divider style={styles.detailDividerTop} />
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
        <Divider style={styles.detailDividerBottom} />
      </View>
    );
  }
}

export { DetailTextPanel };
