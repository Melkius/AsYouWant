import React from "react";
import { Picker } from "react-native";

class SpinnerMenu extends React.Component {
  render() {
    const props = this.props;

    return (
      <Picker
        style={{ width: props.menuWidth }}
        selectedValue={props.selectedValue}
        mode="dropdown"
        onValueChange={(itemValue, itemIndex) =>
          props.onValueChange(itemValue, itemIndex)
        }
      >
        {props.spinnerElements.map((itemValue, index) => {
          if (index === 0) {
            return <Picker.Item label={itemValue} value={""} key={index} />;
          } else {
            return (
              <Picker.Item label={itemValue} value={itemValue} key={index} />
            );
          }
        })}
      </Picker>
    );
  }
}

export { SpinnerMenu };
