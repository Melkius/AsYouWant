import React from "react";
import axios from "axios";
import { MainPage } from "./MainPage";

const url = `https://api.elderscrollslegends.io/v1/cards`;

class HomeScreen extends React.Component {
  state = {
    cards: [],
    isLoading: false,
    pageNumber: 1,
    search: "",
    totalCount: 100
  };

  handleSearchChange = text => {
    this.setState({ search: text, pageNumber: 1 }, () => {
      if (text === "" && this.state.cards.length <= this.state.totalCount) {
        this.fetchTheApi();
      } else {
        this.fetchCardsWithSearch(text);
      }
    });
  };

  fetchTheApi = concat => {
    if (
      this.state.search == "" &&
      this.state.cards.length <= this.state.totalCount
    ) {
      fetch(`${url}?page=${this.state.pageNumber}`)
        .then(response => response.json())
        .then(data =>
          concat
            ? this.setState(state => ({
                cards: state.cards.concat(data.cards),
                pageNumber: this.state.pageNumber + 1,
                totalCount: data._totalCount
              }))
            : this.setState(() => ({
                cards: data.cards,
                pageNumber: this.state.pageNumber + 1,
                totalCount: data._totalCount
              }))
        )
        .then(() =>
          this.setState({
            isLoading: false
          })
        )
        .catch();
    }
  };

  fetchCardsWithSearch(text) {
    axios.get(`${url}?name=${text}`).then(res => {
      var updateList = res.data.cards;
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
      <MainPage
        search={search}
        data={this.state.cards}
        fetchTheApi={this.fetchTheApi}
        onDetail={this.onDetail}
        handleSearchChange={this.handleSearchChange}
      />
    );
  }
}

export { HomeScreen };
