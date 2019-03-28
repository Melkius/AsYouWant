import React from "react";
import { View, Text, Button, Image } from "react-native";

class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const card = navigation.getParam("card", "No-Object");
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Image
          source={{ uri: card.imageUrl }}
          style={{ minWidth: 250, maxWidth: 400, height: 400, maxHeight: 450 }}
        />
        <Text style={{ padding: 4 }}>Name : {card.name}</Text>
        <Text style={{ padding: 4 }}>Rarity : {card.rarity}</Text>
        <Text style={{ padding: 4 }}>Type : {card.type}</Text>
        <Text style={{ padding: 4 }}>Cost : {card.cost}</Text>

        <Button
          color={"#D2B48C"}
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export { DetailsScreen };
