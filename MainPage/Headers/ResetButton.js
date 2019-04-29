import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import styles from "../../Styles";

class ResetButton extends React.Component {
  render() {
    return (
      <View style={styles.buttonViewStyle}>
        <Button
          title="Reset Query And Filters"
          onPress={() => this.props.onResetQuery()}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitle}
          raised={true}
          type="outline"
        />
      </View>
    );
  }
}

export { ResetButton };
