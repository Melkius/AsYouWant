import React from "react";
import axios from "axios";
import { MainPage } from "./MainPage";
import { ActivityIndicator, View } from "react-native";
import styles from "../Styles";

const url = `https://api.elderscrollslegends.io/v1/`;

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      isLoading: false,
      pageNumber: 1,
      search: "",
      totalCount: 100,
      rarity: "",
      type: "",
      subType: "",
      subTypesElements: [],
      typesElements: [],
      raritiesElements: [],
      clearIt: false
    };
    this.setAttributes = this.setAttributes.bind(this);
  }

  handleSearchChange = text => {
    this.setState({ search: text, pageNumber: 1 }, () => {
      if (text === "" && this.state.cards.length <= this.state.totalCount) {
        this.fetchTheApi();
      } else {
        this.fetchCardsWithSearch(
          text,
          this.state.type,
          this.state.subType,
          this.state.rarity
        );
      }
    });
  };

  setAttributes(type, subType, rarity) {
    this.setState(
      {
        type: type,
        subType: subType,
        rarity: rarity
      },
      () => {
        this.fetchCardsWithSearch(
          this.state.search,
          this.state.type,
          this.state.subType,
          this.state.rarity
        );
      }
    );
  }

  fetchElements = () => {
    if (this.state.subTypesElements.length == 0) {
      fetch(`${url}subtypes`)
        .then(response => response.json())
        .then(data =>
          this.setState(
            {
              subTypesElements: data.subtypes,
              isLoading: true
            },
            () => {
              this.fetchTheApi();
            }
          )
        )
        .catch(e => {
          console.log("ERROR fetch elements : ", e);
        });
    }
  };

  fetchTheApi = concat => {
    if (
      this.state.search == "" &&
      this.state.subType == "" &&
      this.state.type == "" &&
      this.state.rarity == "" &&
      this.state.cards.length <= this.state.totalCount
    ) {
      fetch(`${url}cards?page=${this.state.pageNumber}`)
        .then(response => response.json())
        .then(data =>
          concat
            ? this.setState(state => ({
                cards: state.cards.concat(data.cards),
                pageNumber: this.state.pageNumber + 1,
                totalCount: data._totalCount,
                isLoading: false
              }))
            : this.setState(() => ({
                cards: data.cards,
                pageNumber: this.state.pageNumber + 1,
                totalCount: data._totalCount,
                isLoading: false
              }))
        )
        .catch(e => {
          console.log("ERROR fetch API : ", e);
        });
    }
  };

  fetchCardsWithSearch(text, type, rarity, subType) {
    const attributedUrl = `${url}cards/?name=${text}&type=${
      type ? type : ""
    }&rarity=${subType ? subType : ""}&subtypes=${rarity ? rarity : ""}`;
    axios
      .get(attributedUrl)
      .then(res => {
        var updateList = res.data.cards;
        this.setState({
          cards: []
        });
        this.setState({
          cards: updateList
        });
      })
      .catch(e => {
        console.log("ERROR fetchCardsWithSearch : ", e);
      });
  }

  resetClear = () => {
    this.setState({
      clearIt: false,
      isLoading: false
    });
  };

  onResetQuery = () => {
    this.setState(
      {
        search: "",
        clearIt: true,
        isLoading: false
      },
      () => this.setAttributes("", "", "")
    );
  };

  onDetail = item => {
    this.props.navigation.navigate("Details", { card: item });
  };

  componentDidMount() {
    this.fetchElements();
  }

  render() {
    const { search } = this.state;

    // loader
    if (this.state.isLoading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="grey" />
        </View>
      );
    }

    return (
      <MainPage
        search={search}
        data={this.state.cards}
        fetchTheApi={this.fetchTheApi}
        onDetail={this.onDetail}
        handleSearchChange={this.handleSearchChange}
        setAttributes={this.setAttributes}
        type={this.state.type}
        subType={this.state.subType}
        rarity={this.state.rarity}
        subTypesElements={this.state.subTypesElements}
        onResetQuery={this.onResetQuery}
        clearIt={this.state.clearIt}
        resetClear={this.resetClear}
      />
    );
  }
}

export { HomeScreen };
