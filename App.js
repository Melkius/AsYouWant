import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { HomeScreen } from "./MainPage/Container";
import { DetailsScreen } from "./DetailPage/DetailScreen";
import { Button } from "react-native";

onReset = param => {
  console.log("reset props : ", param);
  //props.navigate("Home");
};

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Home",
      headerStyle: {
        backgroundColor: "#4169E1"
      },
      headerTintColor: "#FFFAFA",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: props => {
      const { navigation } = props;
      const card = navigation.getParam("card");
      return {
        title: card.name,
        headerStyle: {
          backgroundColor: "#4169E1"
        },
        headerTintColor: "#FFFAFA",
        headerTitleStyle: {
          fontWeight: "bold"
        }
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
