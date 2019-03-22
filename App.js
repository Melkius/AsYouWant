import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  state = {
    search: "",
    cards: [],
    isLoading: false
  };

  updateSearch = search => {
    this.setState({ search });
  };

  fetchTheApi = concat => {
    const url = `https://api.elderscrollslegends.io/v1/cards`;
    fetch(url)
      .then(response => response.json())
      .then(data =>
        concat
          ? this.setState(state => ({
              cards: state.cards.concat(data.cards)
            }))
          : this.setState(() => ({
              cards: data.cards
            }))
      )
      .then(() => this.setState({ isLoading: false }))
      .catch();
  };

  onDetail = item => {
    this.props.navigation.navigate("Details", { card: item });
  };

  componentDidMount() {
    this.fetchTheApi();
  }

  render() {
    const { search } = this.state;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <FlatList
          numColumns="2"
          showsVerticalScrollIndicator
          data={this.state.cards}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <TouchableOpacity onPress={() => this.onDetail(item)}>
                <Image
                  style={{
                    flex: 1,
                    margin: 5,
                    minWidth: 180,
                    maxWidth: 250,
                    height: 304,
                    maxHeight: 304
                  }}
                  source={{ uri: item.imageUrl }}
                  key={item.index}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const card = navigation.getParam("card", "No-Object");
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{card.name}</Text>
        <Image
          source={{ uri: card.imageUrl }}
          style={{ width: 150, height: 200 }}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
