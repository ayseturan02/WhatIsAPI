import {StyleSheet, Image, View, TextInput, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import styles from './styles';


const Input = props => {
  const {placeholder, icon} = props;
  return (
    <View>
      <TextInput
        style={styles.input_view}
        placeholder={placeholder}
        placeholderTextColor={'gray'}
      />
      <View
        style={{
          alignItems: 'flex-end',
          width: windowWidth * 0.7,
          top: -windowWidth * 0.1,
        }}>
        <Image
          source={icon}
          style={{height: windowWidth * 0.06, width: windowWidth * 0.06}}
        />
      </View>
    </View>
  );
};

export default Input;
