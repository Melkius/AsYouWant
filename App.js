import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { HomeScreen } from "./MainPage/Container";
import { DetailsScreen } from "./DetailPage/DetailScreen";

const RootStack = createStackNavigator({
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
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
