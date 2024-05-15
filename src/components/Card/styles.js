import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  view_card: {
    backgroundColor: '#F6F6F5',
    height: windowWidth * 0.35,
    width: windowWidth * 0.9,
    borderRadius: windowWidth * 0.05,
  },
  photo_size: {
    height: windowWidth * 0.28,
    width: windowWidth * 0.28,
    borderRadius: windowWidth * 0.05,
  },
  text_position: {
    height: windowHeight * 0.2,
    padding: windowWidth * 0.04,
  },
  text_style: {
    fontSize: windowWidth * 0.03,
    color: '#090130',
    fontWeight: '500',
  },
  read_position: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: windowWidth * 0.12,
    alignItems: 'flex-end',
  },
  read_style: {fontSize: windowWidth * 0.03, color: 'gray'},
});
