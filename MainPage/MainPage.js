import React from "react";
import { View, Picker } from "react-native";
import { CustomSearchBar } from "./CustomSearchBar";
import { ListView } from "./ListView";

class MainPage extends React.Component {
  state = {
    type: this.props.type,
    subType: this.props.subType,
    rarity: this.props.rarity
  };

  render() {
    const props = this.props;
    const subTypesElements = ["SubType"].concat(props.subTypesElements);
    const typesElements = ["Type", "Action", "Creature", "Item", "Support"];
    const rarityElements = ["Rarity", "Common", "Rare", "Epic", "Legendary"];

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <CustomSearchBar
          handleSearchChange={props.handleSearchChange}
          value={props.search}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-evenly"
          }}
        >
          <Picker
            style={{ width: "28%" }}
            selectedValue={props.type}
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) => {
              this.setState(
                {
                  type: itemValue,
                  subType: this.state.subType,
                  rarity: this.state.rarity
                },
                props.setAttributes(
                  itemValue,
                  this.state.subType,
                  this.state.rarity
                )
              );
            }}
          >
            {typesElements.map((itemValue, index) => {
              if (index === 0) {
                return <Picker.Item label={itemValue} value={""} key={index} />;
              } else {
                return (
                  <Picker.Item
                    label={itemValue}
                    value={itemValue}
                    key={index}
                  />
                );
              }
            })}
          </Picker>

          <Picker
            style={{ width: "40%" }}
            selectedValue={props.subType}
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) => {
              this.setState(
                {
                  type: this.state.type,
                  subType: itemValue,
                  rarity: this.state.rarity
                },
                props.setAttributes(
                  this.state.type,
                  itemValue,
                  this.state.rarity
                )
              );
            }}
          >
            {subTypesElements.map((itemValue, index) => {
              if (index === 0) {
                return <Picker.Item label={itemValue} value={""} key={index} />;
              } else {
                return (
                  <Picker.Item
                    label={itemValue}
                    value={itemValue}
                    key={index}
                  />
                );
              }
            })}
          </Picker>

          <Picker
            style={{ width: "32%" }}
            selectedValue={props.rarity}
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) => {
              this.setState(
                {
                  type: this.state.type,
                  subType: this.state.subType,
                  rarity: itemValue
                },
                props.setAttributes(
                  this.state.type,
                  this.state.subType,
                  itemValue
                )
              );
            }}
          >
            {rarityElements.map((itemValue, index) => {
              if (index === 0) {
                return <Picker.Item label={itemValue} value={""} key={index} />;
              } else {
                return (
                  <Picker.Item
                    label={itemValue}
                    value={itemValue}
                    key={index}
                  />
                );
              }
            })}
          </Picker>
        </View>

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
