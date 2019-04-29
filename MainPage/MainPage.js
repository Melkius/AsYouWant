import React from "react";
import { View } from "react-native";
import { CustomSearchBar } from "./Headers/CustomSearchBar";
import { ListView } from "./ListView";
import { OptionMenus } from "./Headers/OptionMenus";
import { Divider } from "react-native-elements";
import styles from "../Styles";
import { ResetButton } from "./Headers/ResetButton";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type,
      subType: this.props.subType,
      rarity: this.props.rarity
    };
    this.onTypeChanged = this.onTypeChanged.bind(this);
    this.onSubTypeChanged = this.onSubTypeChanged.bind(this);
    this.onRarityChanged = this.onRarityChanged.bind(this);
  }

  onTypeChanged = (itemValue, itemIndex) => {
    this.setState(
      {
        type: itemValue,
        subType: this.state.subType,
        rarity: this.state.rarity
      },
      this.props.setAttributes(itemValue, this.state.subType, this.state.rarity)
    );
  };

  onSubTypeChanged = (itemValue, itemIndex) => {
    this.setState(
      {
        type: this.state.type,
        subType: itemValue,
        rarity: this.state.rarity
      },
      this.props.setAttributes(this.state.type, itemValue, this.state.rarity)
    );
  };

  onRarityChanged = (itemValue, itemIndex) => {
    this.setState(
      {
        type: this.state.type,
        subType: this.state.subType,
        rarity: itemValue
      },
      this.props.setAttributes(this.state.type, this.state.subType, itemValue)
    );
  };

  render() {
    const props = this.props;
    const subTypesElements = ["SubType"].concat(props.subTypesElements);
    const typesElements = ["Type", "Action", "Creature", "Item", "Support"];
    const rarityElements = ["Rarity", "Common", "Rare", "Epic", "Legendary"];

    return (
      <View style={styles.mainPage}>
        <CustomSearchBar
          handleSearchChange={props.handleSearchChange}
          value={props.search}
          clearIt={props.clearIt}
          resetClear={props.resetClear}
        />
        <ResetButton onResetQuery={this.props.onResetQuery} />
        <Divider style={styles.mainPageDividerTop} />
        <OptionMenus
          type={props.type}
          subType={props.subType}
          rarity={props.rarity}
          typesElements={typesElements}
          subTypesElements={subTypesElements}
          rarityElements={rarityElements}
          onTypeChanged={this.onTypeChanged}
          onSubTypeChanged={this.onSubTypeChanged}
          onRarityChanged={this.onRarityChanged}
        />
        <Divider style={styles.MainPageDividerBottom} />
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
