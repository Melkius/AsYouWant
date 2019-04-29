import React from "react";
import { View } from "react-native";
import { SpinnerMenu } from "./SpinnerMenu";
import styles from "../../Styles";

class OptionMenus extends React.Component {
  render() {
    const props = this.props;
    return (
      <View style={styles.optionMenu}>
        <SpinnerMenu
          menuWidth={"28%"}
          selectedValue={props.type}
          onValueChange={props.onTypeChanged}
          spinnerElements={props.typesElements}
        />

        <SpinnerMenu
          menuWidth={"40%"}
          selectedValue={props.subType}
          onValueChange={props.onSubTypeChanged}
          spinnerElements={props.subTypesElements}
        />

        <SpinnerMenu
          menuWidth={"32%"}
          selectedValue={props.rarity}
          onValueChange={props.onRarityChanged}
          spinnerElements={props.rarityElements}
        />
      </View>
    );
  }
}

export { OptionMenus };
