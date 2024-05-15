import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
class SelectableText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  handlePress = () => {
    this.setState(prevState => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const {selected} = this.state;
    const textStyle = selected
      ? {
          color: 'white',
          fontSize: 16,
          backgroundColor: '#090130',
          borderRadius: 20,
          padding: 18,
        }
      : {};

    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Text style={textStyle}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render(props) {
    return (
      <View style={{flexDirection: 'row', flex: 1,justifyContent:"space-around"}}>
        <View>
          <SelectableText text="Covid-19" />
        </View>
        <View>
          <SelectableText text="Crypto" />
        </View>
        <View>
          <SelectableText text="Tech" />
        </View>
        <View>
          <SelectableText text="Sport" />
        </View>
        <View>
          <SelectableText text="Covid-19" />
        </View>
        <View>
          <SelectableText text="Sport" />
        </View>
      </View>
    );
  }
}
