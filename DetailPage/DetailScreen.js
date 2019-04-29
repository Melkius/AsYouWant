import React from "react";
import { View, Button, Image, ScrollView } from "react-native";
import { DetailTextPanel } from "./DetailTextPanel";
import styles from "../Styles";

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
        </View>
      </ScrollView>
    );
  }
}

export { DetailsScreen };
