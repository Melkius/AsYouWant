import { StyleSheet } from "react-native";

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
  },
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  labelContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  h1: {
    fontSize: 16,
    textShadowColor: "#807053",
    textShadowOffset: { width: 0.8, height: 0.8 },
    padding: 4
  },
  description: { padding: 4 },
  detailDividerTop: { backgroundColor: "grey" },
  detailDividerBottom: { backgroundColor: "grey", marginBottom: 10 },
  image: {
    flex: 1,
    margin: 5,
    minWidth: 180,
    maxWidth: 250,
    height: 304,
    maxHeight: 304
  },
  mainPage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  mainPageDividerTop: {
    backgroundColor: "grey",
    height: 2,
    width: "100%",
    marginTop: 5
  },
  MainPageDividerBottom: { backgroundColor: "grey", height: 2, width: "100%" },
  buttonTitle: {
    color: "black",
    fontStyle: "italic",
    textAlign: "center"
  },
  buttonViewStyle: { marginTop: 5 },
  optionMenu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly"
  },
  buttonStyle: {
    width: 300
  }
});

export default styles;
