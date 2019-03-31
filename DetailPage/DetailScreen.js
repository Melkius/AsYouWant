import React from "react";
import { View, Button, Image, ScrollView, StyleSheet } from "react-native";
import { DetailTextPanel } from "./DetailTextPanel";

class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const card = navigation.getParam("card", "No-Object");
    return (
      <ScrollView alwaysBounceVertical={true} horizontal={false}>
        <View style={styles.scrollView}>
          <Image source={{ uri: card.imageUrl }} style={styles.cardImage} />
          <DetailTextPanel
            name={card.name}
            rarity={card.rarity}
            type={card.type}
            attributes={card.attributes}
            set={card.set.name}
            cost={card.cost}
            collectible={card.collectible.toString()}
          />
          <Button
            color={"#D2B48C"}
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </ScrollView>
    );
  }
}

export { DetailsScreen };

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    marginTop: 15
  },
  cardImage: {
    minWidth: 250,
    maxWidth: 400,
    height: 400,
    maxHeight: 450
  }
});
