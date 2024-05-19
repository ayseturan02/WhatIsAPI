import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {at, a, da, foto, s} from '../../assets/Images';
import styles from './styles';

const HeaderPhoto = () => {
  const [count, setCount] = useState(1);

  const DATA = [
    {
      id: '1',
      title: 'Pizza',
      price: '30.40',
      image: at,
    },
    {
      id: '2',
      title: 'Hamburger',
      price: '30.40',
      image: a,
    },
    {
      id: '3',
      title: 'Döner',
      price: '30.40',
      image: s,
    },
    {
      id: '4',
      title: 'İskender',
      price: '30.40',
      image: da,
    },
    {
      id: '5',
      title: 'Lahmacun',
      price: '30.40',
      image: foto,
    },
  ];

  const handleNext = () => {
    setCount(prevCount => (prevCount + 1) % DATA.length);
  };

  const handlePrevious = () => {
    setCount(prevCount => (prevCount - 1 + DATA.length) % DATA.length);
  };

  const previousIndex = (count - 1 + DATA.length) % DATA.length;
  const nextIndex = (count + 1) % DATA.length;

  return (
    <View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={handlePrevious}>
            <View
              style={styles.right_view}>
              <Image
                source={DATA[previousIndex].image}
                style={styles.right_photo}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNext}>
            <View
              style={styles.left_view}>
              <Image
                source={DATA[nextIndex].image}
                style={styles.left_photo}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{position: 'absolute'}}>
          <TouchableOpacity>
            <View
              style={styles.center_view}>
              <Image
                source={DATA[count].image}
                style={styles.center_photo}
              />
              <View
                style={styles.text_position}>
                <Text style={{color: 'white', fontSize: windowWidth * 0.035}}>
                  dmgndmgn
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeaderPhoto;
