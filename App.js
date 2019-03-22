import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import { Input } from "react-native-elements";
import { createStackNavigator, createAppContainer } from "react-navigation";
import axios from "axios";

const url = `https://api.elderscrollslegends.io/v1/cards`;

class HomeScreen extends React.Component {
  state = {
    search: "",
    cards: [],
    isLoading: false
  };

  handleSearchChange(text) {
    this.setState({ search: text });
    if (text === "") {
      this.fetchTheApi();
    } else {
      this.fetchCardsWithSearch(text);
    }
  }

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

  fetchCardsWithSearch(text) {
    axios.get(url).then(res => {
      var updateList = res.data.cards;
      updateList = updateList.filter(item => {
        return item.name.toLowerCase().search(text.toLowerCase()) !== -1;
      });
      this.setState({
        cards: []
      });
      this.setState({
        cards: updateList
      });
    });
  }

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
        <Input
          placeholder="Search your card here..."
          leftIcon={{ type: "font-awesome", name: "search" }}
          onChangeText={text => this.handleSearchChange(text)}
          value={search}
        />
        <FlatList
          numColumns="2"
          showsVerticalScrollIndicator
          data={this.state.cards}
          keyExtractor={(item, i) => i.toString()}
          renderItem={({ item, index }) => {
            //console.log(item);
            return (
              <TouchableOpacity onPress={() => this.onDetail(item)} key={index}>
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
          style={{ minWidth: 250, maxWidth: 400, height: 400, maxHeight: 450 }}
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
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home"
      }
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: props => {
        const { navigation } = props;
        const card = navigation.getParam("card");
        return {
          title: card.name
        };
      }
    }
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
